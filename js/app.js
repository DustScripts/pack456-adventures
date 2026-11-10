
/* ============================================================
   PACK 456 ADVENTURES - APP VERSION 1.5

   Complete replacement for app.js.
   Compatible with existing data.js and all six den files.

   - Six dens
   - Search and category filters
   - Temporary checkmarks
   - Expand / collapse
   - Supplies and teaching hints
   - Completion and safety notes
   - Individual official adventure links for all six dens
   - Bear legacy link compatibility
   - Range activity safeguards
   - Printing

   No personal information is saved.
   ============================================================ */

"use strict";

(function () {

  const site = window.Pack456;

  if (!site || !site.directory || !site.guides) {
    console.error("[PACK456] Shared data not loaded.");
    return;
  }

  const $ = id => document.getElementById(id);

  const BASE =
    "https://www.scouting.org/cub-scout-adventures/";

  const RANGE =
    "https://www.scouting.org/outdoor-programs/" +
    "range-activities/cub-scout-shooting-sports/";

  // Preserve the approved Bear adventure URL mappings.
  const BEAR_SLUGS = {
    "Bobcat Bear": "bobcat-bear",
    "Bear Strong": "bear-strong",
    "Standing Tall": "standing-tall",
    "Bear Habitat": "bear-habitat",
    "Fellowship": "fellowship",
    "Paws for Action": "paws-for-action",
    "A Bear Goes Fishing": "a-bear-goes-fishing",
    "Balancing Bears": "balancing-bears",
    "Baloo the Builder": "baloo-the-builder",
    "Bears Afloat": "bears-afloat",
    "Bears on Bikes": "bears-on-bikes",
    "Champions for Nature Bear": "champions-for-nature-bear",
    "Chef Tech": "chef-tech",
    "Critter Care": "critter-care",
    "Forensics": "forensics",
    "Let's Camp Bear": "lets-camp-bear",
    "Marble Madness": "marble-madness",
    "Race Time Bear": "race-time-bear",
    "Roaring Laughter": "roaring-laughter",
    "Salmon Run": "salmon-run",
    "Summertime Fun Bear": "summertime-fun-bear",
    "Super Science": "super-science",
    "Whittling": "whittling",
    "Archery Bear": null,
    "Slingshot Bear": null,
    "BB Guns Bear": null
  };

  const bearLinks = Object.fromEntries(
    Object.entries(BEAR_SLUGS).map(([name, slug]) => [
      name,
      slug ? BASE + slug + "/" : RANGE
    ])
  );

  // Register Bear's existing links in the shared registry.
  // This does not modify bear.js or any other den file.
  site.officialLinks = site.officialLinks || {};
  site.officialLinks.Bear = {
    ...bearLinks,
    ...(site.officialLinks.Bear || {})
  };

  let currentDen = "Bear";
  let currentFilter = "all";

  // Checkmarks exist only until the page refreshes.
  const marks = Object.create(null);

  function element(tag, text, className) {
    const node = document.createElement(tag);

    if (text !== undefined && text !== null) {
      node.textContent = text;
    }

    if (className) {
      node.className = className;
    }

    return node;
  }

  function rankURL(den) {
    const slug = den === "Arrow of Light"
      ? "arrow-of-light"
      : den.toLowerCase();

    return "https://www.scouting.org/programs/" +
      "cub-scouts/adventures/" + slug + "/";
  }

  function officialURL(den, name, type) {
    const registered =
      site.officialLinks?.[den]?.[name];

    if (registered) {
      return registered;
    }

    if (type === "special") {
      return RANGE;
    }

    return rankURL(den);
  }

  function addOfficialLinks(card, den, name, type) {
    const paragraph = element("p");

    const registered =
      site.officialLinks?.[den]?.[name];

    const isRange = type === "special";

    const label = isRange
      ? "View official Scouting America range resources"
      : registered
        ? "View official " + name + " requirements"
        : "View official " + den + " adventure directory";

    const link = element("a", label);

    link.href = officialURL(den, name, type);
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    paragraph.appendChild(link);
    card.appendChild(paragraph);
  }

  function renderDens() {
    const container = $("dens");
    container.replaceChildren();

    site.denNames.forEach(den => {
      const button = element("button", den);

      button.type = "button";
      button.classList.toggle(
        "active",
        den === currentDen
      );

      button.setAttribute(
        "aria-pressed",
        String(den === currentDen)
      );

      button.addEventListener("click", () => {
        currentDen = den;
        renderDens();
        render();
      });

      container.appendChild(button);
    });
  }

  function addTask(card, den, name, task, index, planning) {
    const key = den + "|" + name + "|" + index;

    const section = element("div", null, "task");
    const label = element("label");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = !!marks[key];
    checkbox.setAttribute("aria-label", task[0]);

    checkbox.addEventListener("change", () => {
      marks[key] = checkbox.checked;
    });

    label.appendChild(checkbox);
    label.appendChild(element("span", task[0]));
    section.appendChild(label);

    if (task[1]) {
      section.appendChild(
        element(
          "div",
          (planning
            ? "Teaching idea: "
            : "Teaching hint: ") + task[1],
          "hint"
        )
      );
    }

    card.appendChild(section);
  }

  function addNote(card, message) {
    if (!message) return;

    const note = element("div", message, "note");
    note.setAttribute("role", "note");
    card.appendChild(note);
  }

  function addSafetyNotice(card, den, name, type) {
    if (type === "special") {
      addNote(
        card,
        "SAFETY: Range-and-target activities require " +
        "approved district or council programs and " +
        "qualified range personnel. Checkmarks on this " +
        "website do not certify advancement."
      );
    }

    if (den !== "Bear") return;

    if (name === "Bears Afloat") {
      addNote(
        card,
        "SAFETY: The official swimmer test must be " +
        "passed before attempting requirements 6 and 7. " +
        "Follow current Safety Afloat rules, including " +
        "qualified supervision and approved life jackets."
      );
    }

    if (name === "Whittling") {
      addNote(
        card,
        "SAFETY: Follow current Cub Scout knife rules, " +
        "adult supervision requirements, and restrictions " +
        "at the activity location."
      );
    }

    if (name === "Salmon Run") {
      addNote(
        card,
        "SAFETY: Swimming must follow Scouting America's " +
        "Safe Swim Defense requirements."
      );
    }
  }

  function render() {
    const output = $("results");
    output.replaceChildren();

    $("heading").textContent =
      currentDen + " Den Adventures";

    $("intro").textContent =
      "Browse adventures, prepare supplies, and learn " +
      "what to teach. Complete all six required adventures " +
      "and at least two electives for rank advancement.";

    const query = $("search").value
      .trim()
      .toLowerCase();

    const adventures = site.directory[currentDen] || [];

    const visible = adventures.filter(([name, type]) => {
      const matchesFilter =
        currentFilter === "all" ||
        currentFilter === type;

      const matchesSearch =
        (name + " " + type)
          .toLowerCase()
          .includes(query);

      return matchesFilter && matchesSearch;
    });

    $("count").textContent =
      visible.length + " adventures displayed";

    if (!visible.length) {
      output.appendChild(
        element(
          "div",
          "No matching adventures found.",
          "panel empty"
        )
      );
      return;
    }

    visible.forEach(([name, type]) => {
      const card = element(
        "details",
        null,
        "adventure"
      );

      const typeLabel =
        type === "required" ? "Required" :
        type === "special" ? "Special Elective" :
        "Elective";

      card.appendChild(
        element("summary", name + " (" + typeLabel + ")")
      );

      const tagText =
        type === "special" ? "Special Elective" :
        type === "required" ? "Required" :
        "Elective";

      card.appendChild(
        element(
          "span",
          tagText,
          "tag" +
            (type === "special" ? " special" : "")
        )
      );

      const guide =
        site.guides[currentDen + "|" + name];

      if (guide) {
        if (guide.supplies) {
          card.appendChild(
            element(
              "p",
              "Supplies: " + guide.supplies
            )
          );
        }

        // Preserve legacy Wolf provisional handling.
        const provisional =
          currentDen === "Wolf" &&
          guide.verifiedRequirements !== true;

        // All range adventures are treated as
        // staff-verification or planning references.
        const planning =
          provisional ||
          type === "special" ||
          guide.taskType === "planning";

        let description;

        if (type === "special") {
          description =
            "Pack 456 range activity reference or " +
            "planning checklist. Qualified range " +
            "personnel must verify current official " +
            "requirements and advancement completion. " +
            "Website checkmarks do not award credit.";
        } else if (planning) {
          description =
            "Pack 456 provisional teaching plan. " +
            "These are NOT verified official requirements. " +
            "Use the linked official adventure page " +
            "to determine advancement completion.";
        } else {
          description =
            "Pack 456 teaching checklist. " +
            "Verify official requirements before awarding.";
        }

        card.appendChild(
          element("p", description, "small")
        );

        if (Array.isArray(guide.tasks)) {
          guide.tasks.forEach((task, index) => {
            addTask(
              card,
              currentDen,
              name,
              task,
              index,
              planning
            );
          });
        }

        if (guide.completionNote) {
          addNote(card, guide.completionNote);
        }

      } else {
        const idea = site.starterIdeas?.[name];

        if (idea) {
          card.appendChild(
            element("p", "Supplies: " + idea[0])
          );

          addNote(
            card,
            "Getting started: " + idea[1]
          );
        }

        card.appendChild(
          element(
            "p",
            "Detailed teaching instructions have not " +
            "yet been verified or added. Consult the " +
            "official adventure page.",
            "small"
          )
        );
      }

      addSafetyNotice(
        card,
        currentDen,
        name,
        type
      );

      addOfficialLinks(
        card,
        currentDen,
        name,
        type
      );

      output.appendChild(card);
    });
  }

  function setFilter(value) {
    currentFilter = value;

    document.querySelectorAll("[data-filter]")
      .forEach(button => {
        const active =
          button.dataset.filter === value;

        button.classList.toggle("active", active);

        button.setAttribute(
          "aria-pressed",
          String(active)
        );
      });

    render();
  }

  document.querySelectorAll("[data-filter]")
    .forEach(button => {
      button.addEventListener("click", () => {
        setFilter(button.dataset.filter);
      });
    });

  $("search").addEventListener("input", render);

  $("expand").addEventListener("click", () => {
    document.querySelectorAll(".adventure")
      .forEach(card => {
        card.open = true;
      });
  });

  $("collapse").addEventListener("click", () => {
    document.querySelectorAll(".adventure")
      .forEach(card => {
        card.open = false;
      });
  });

  $("clear").addEventListener("click", () => {
    if (!window.confirm(
      "Clear all temporary checkmarks?"
    )) return;

    Object.keys(marks).forEach(key => {
      delete marks[key];
    });

    document.querySelectorAll(
      ".task input[type='checkbox']"
    ).forEach(input => {
      input.checked = false;
    });
  });

  $("print").addEventListener("click", () => {
    window.print();
  });

  function validateLinks(den) {
    const entries = site.directory[den] || [];

    const missing = entries.filter(
      ([name]) =>
        !site.officialLinks?.[den]?.[name]
    );

    console.log(
      "[PACK456]",
      den,
      "link entries:",
      entries.length - missing.length
    );

    console.log(
      "[PACK456]",
      den,
      "missing link mappings:",
      missing.length
    );

    console.log(
      "[PACK456]",
      den,
      "LINK MAPPING:",
      missing.length === 0 ? "PASS" : "REVIEW"
    );
  }

  function initialize() {
    console.log(
      "[PACK456] App Version 1.5 starting..."
    );

    site.denNames.forEach(den => {
      const entries = site.directory[den];

      console.log(
        "[PACK456]",
        den,
        Array.isArray(entries)
          ? entries.length
          : 0,
        "adventures loaded"
      );

      validateLinks(den);
    });

    renderDens();
    render();

    console.log(
      "[PACK456] App Version 1.5 ready."
    );
  }

  initialize();

})();
