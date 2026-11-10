
/*
============================================================
PACK 456 ADVENTURES - WOLF DEN
VERSION 2.3 - COMPLETE FILE
November 2026

6 required adventures
17 regular electives
3 special range electives
26 total

Germs Alive! correction:
Five current requirements, not the older six-choice list.

All advancement wording is paraphrased.
Official Scouting America requirements take precedence.

No Scout information or completion records are stored.
============================================================
*/

"use strict";

(function () {
  const site = window.Pack456;
  const DEN = "Wolf";

  if (!site || !site.directory || !site.guides) {
    console.error("[PACK456] Wolf: data.js missing.");
    return;
  }

  const ROOT =
    "https://www.scouting.org/cub-scout-adventures/";

  const RANGE =
    "https://www.scouting.org/outdoor-programs/" +
    "range-activities/cub-scout-shooting-sports/";

  const entries = [
    ["Bobcat Wolf", "required", "bobcat-wolf"],
    ["Running With the Pack", "required", "running-with-the-pack"],
    ["Safety in Numbers", "required", "safety-in-numbers"],
    ["Paws on the Path", "required", "paws-on-the-path"],
    ["Footsteps", "required", "footsteps"],
    ["Council Fire", "required", "council-fire"],

    ["A Wolf Goes Fishing", "elective", "a-wolf-goes-fishing"],
    ["Adventures in Coins", "elective", "adventures-in-coins"],
    ["Air of the Wolf", "elective", "air-of-the-wolf"],
    ["Champions for Nature Wolf", "elective", "champions-for-nature-wolf"],
    ["Code of the Wolf", "elective", "code-of-the-wolf"],
    ["Computing Wolves", "elective", "computing-wolves"],
    ["Cubs Who Care", "elective", "cubs-who-care"],
    ["Digging in the Past", "elective", "digging-in-the-past"],
    ["Finding Your Way", "elective", "finding-your-way"],
    ["Germs Alive!", "elective", "germs-alive"],
    ["Let's Camp Wolf", "elective", "lets-camp-wolf"],
    ["Paws for Water", "elective", "paws-for-water"],
    ["Paws of Skill", "elective", "paws-of-skill"],
    ["Pedal with the Pack", "elective", "pedal-with-the-pack"],
    ["Race Time Wolf", "elective", "race-time-wolf"],
    ["Spirit of the Water", "elective", "spirit-of-the-water"],
    ["Summertime Fun Wolf", "elective", "summertime-fun-wolf"],

    ["Archery Wolf", "special", "archery-wolf"],
    ["Slingshot Wolf", "special", "slingshot-wolf"],
    ["BB Guns Wolf", "special", "bb-guns-wolf"]
  ];

  site.directory[DEN] = entries.map(
    ([name, type]) => [name, type]
  );

  site.officialLinks = site.officialLinks || {};
  site.officialLinks[DEN] = {};

  entries.forEach(([name, type, slug]) => {
    site.officialLinks[DEN][name] =
      type === "special" ? RANGE : ROOT + slug + "/";
  });

  function addGuide(
    name,
    supplies,
    tasks,
    note = "",
    planning = false
  ) {
    site.guides[DEN + "|" + name] = {
      supplies,

      tasks: tasks.map((task, index) => [
        (planning ? "Planning " : "Requirement ") +
          (index + 1) + ": " + task[0],
        task[1]
      ]),

      completionNote: planning
        ? "PLANNING ONLY - NOT ADVANCEMENT CREDIT. " + note
        : note,

      verifiedRequirements: !planning,
      taskType: planning ? "planning" : "requirements"
    };
  }

  function guide(name, supplies, tasks, note = "") {
    addGuide(name, supplies, tasks, note);
  }

  function planningGuide(name, supplies, tasks, note = "") {
    addGuide(name, supplies, tasks, note, true);
  }

  // ========================================================
  // REQUIRED ADVENTURES
  // ========================================================

  guide(
    "Bobcat Wolf",
    "Scout Oath and Law poster, markers, posterboard, " +
    "Cub Scout sign reference, family protection booklet.",
    [
      [
        "Get to know members of your den",
        "TEACH: Friendship and belonging. " +
        "ACTIVITY: Play a name game and introduce den members."
      ],
      [
        "Recite the Scout Oath and Scout Law",
        "TEACH: Scout promises and values. " +
        "ACTIVITY: Recite both with the den and leader."
      ],
      [
        "Learn about the Scout Law",
        "TEACH: The twelve points. " +
        "ACTIVITY: Match everyday examples to Scout Law points."
      ],
      [
        "Create a den code of conduct",
        "TEACH: Shared expectations. " +
        "ACTIVITY: Agree on den rules together."
      ],
      [
        "Demonstrate sign, salute, and handshake",
        "TEACH: How each is used. " +
        "ACTIVITY: Demonstrate all three."
      ],
      [
        "Share a time you did your best",
        "TEACH: The Cub Scout motto. " +
        "ACTIVITY: Share an example with den or family."
      ],
      [
        "Complete family child-protection activities",
        "At home, a parent or legal guardian completes " +
        "the activities in the official protection booklet."
      ]
    ],
    "Family protection activities are private. " +
    "Do not collect responses through this website."
  );

  guide(
    "Running With the Pack",
    "Three naturally different-colored foods, toothbrush, " +
    "timer, water, exercise area.",
    [
      [
        "Sample three naturally different-colored foods",
        "Sample three foods of different natural colors " +
        "from the permitted food groups."
      ],
      [
        "Demonstrate proper toothbrushing",
        "Show proper brushing using a toothbrush and model."
      ],
      [
        "Complete 30 minutes of group physical activity",
        "Be active with the den or another person " +
        "for 30 minutes, including stretching and movement."
      ],
      [
        "Complete 10 minutes of personal exercise",
        "Choose suitable exercises and time the activity."
      ],
      [
        "Complete 10 minutes of relaxation",
        "Try quiet reading, breathing, or another " +
        "relaxing activity."
      ],
      [
        "Review the health record with family",
        "Privately review the Annual Health and Medical " +
        "Record with a parent or guardian and discuss " +
        "participation in den and pack activities."
      ]
    ],
    "Check allergies and physical limitations. " +
    "Do not collect medical information on this website."
  );

  guide(
    "Safety in Numbers",
    "Official Wolf Protect Yourself Rules video, " +
    "parent notification, buddy-system cards, " +
    "playground rules.",
    [
      [
        "Watch the official Wolf safety video",
        "With parent or guardian permission, watch the " +
        "Wolf Protect Yourself Rules video. The official " +
        "activity directs the Scout to watch WITH " +
        "a parent or legal guardian."
      ],
      [
        "Discuss safe touch",
        "Discuss boundaries, saying no, getting away, " +
        "and telling a trusted adult. Do not ask Scouts " +
        "to disclose private experiences."
      ],
      [
        "Demonstrate the buddy system",
        "Practice choosing a buddy, staying together, " +
        "and checking in with adults."
      ],
      [
        "Demonstrate playground safety",
        "Review common rules and proper equipment use."
      ]
    ],
    "Notify families before this adventure. Follow " +
    "Youth Protection and reporting requirements."
  );

  guide(
    "Paws on the Path",
    "Cub Scout Six Essentials, water, trail map, " +
    "walking shoes, weather-appropriate clothing.",
    [
      [
        "Identify the Six Essentials and their uses",
        "Show each item and explain its purpose."
      ],
      [
        "Learn the outdoor buddy system",
        "Practice buddy checks and choose a buddy."
      ],
      [
        "Choose appropriate outdoor clothing",
        "Discuss weather, footwear, and suitable clothing."
      ],
      [
        "Learn the Outdoor Code and Leave No Trace",
        "Review the Outdoor Code and Leave No Trace " +
        "Principles for Kids."
      ],
      [
        "Take a 30-minute nature walk",
        "Walk outdoors for at least 30 minutes. " +
        "Describe four animals that could be seen."
      ]
    ],
    "Review weather, trail hazards, and adult supervision."
  );

  guide(
    "Footsteps",
    "Family-selected reverence materials, paper, markers, " +
    "The Boy Who Cried Wolf.",
    [
      [
        "Explore three family faith celebrations",
        "With family, identify three celebrations or " +
        "holidays and make art about a favorite."
      ],
      [
        "Attend a family reverence gathering",
        "Attend a religious service or another " +
        "family-selected gathering expressing reverence."
      ],
      [
        "Carry out an act of kindness",
        "Choose and complete a helpful action."
      ],
      [
        "Explore truthfulness",
        "Read or listen to The Boy Who Cried Wolf " +
        "and discuss why honesty matters."
      ]
    ],
    "Respect family beliefs and privacy. Check the " +
    "official page for any applicable alternatives."
  );

  guide(
    "Council Fire",
    "American flag, flag-folding reference, building " +
    "blocks, cardboard, markers, service supplies.",
    [
      [
        "Care for and fold the American flag",
        "Learn proper handling and participate in " +
        "a den or pack flag ceremony."
      ],
      [
        "Identify three good-neighbor Scout Law points",
        "Explain how three points help neighbors."
      ],
      [
        "Build a model of your home",
        "Use blocks, cardboard, or other materials."
      ],
      [
        "Build a community building model",
        "Use the same materials to model a community building."
      ],
      [
        "Create a model neighborhood",
        "Combine the previous models into a neighborhood."
      ],
      [
        "Participate in a service project",
        "Complete an approved project and explain " +
        "how it helps the neighborhood."
      ]
    ]
  );

  // ========================================================
  // REGULAR ELECTIVES
  // ========================================================

  guide(
    "A Wolf Goes Fishing",
    "Fishing rod, approved tackle, bait examples, " +
    "local regulations, sun protection.",
    [
      [
        "Identify water type and fish species",
        "Identify freshwater or saltwater and fish " +
        "living at the fishing location."
      ],
      [
        "Learn about fishing bait",
        "Compare bait types and their uses."
      ],
      [
        "Demonstrate casting",
        "Practice casting in a safe open area."
      ],
      [
        "Learn fishing safety rules",
        "Discuss hooks, weather, spacing, buddies, " +
        "and adult supervision."
      ],
      [
        "Go fishing",
        "Attend a supervised fishing outing."
      ]
    ],
    "Follow local fishing regulations and water safety."
  );

  guide(
    "Adventures in Coins",
    "Assorted coins, magnifier, paper, crayons.",
    [
      [
        "Identify parts of a coin",
        "Examine the front, back, edge, date, and markings."
      ],
      [
        "Identify mint mark and year",
        "Find the mint mark, mint facility, and year."
      ],
      [
        "Play a coin game",
        "Try coin bingo, sorting, or identification."
      ],
      [
        "Create and label a coin rubbing",
        "Record images, year, and mint location."
      ]
    ]
  );

  guide(
    "Air of the Wolf",
    "Paper, airplane instructions, measuring tape, " +
    "stopwatch, recording sheets, flying-object materials.",
    [
      [
        "Build and test a paper airplane",
        "Fly one design five times and record " +
        "distance and flight time."
      ],
      [
        "Build and test a different paper airplane",
        "Fly a second design five times and record " +
        "the same measurements."
      ],
      [
        "Compare the designs",
        "Discuss distance and flight-time results."
      ],
      [
        "Build another type of flying object",
        "Create a flying object that is not a paper airplane."
      ]
    ],
    "Use a safe flying area away from roads and power lines."
  );

  guide(
    "Champions for Nature Wolf",
    "Resource examples, recycling information, " +
    "conservation project supplies.",
    [
      [
        "Compare renewable and nonrenewable resources",
        "Sort examples and discuss replenishment."
      ],
      [
        "Learn Reduce, Reuse, Recycle",
        "Give practical examples of all three."
      ],
      [
        "Investigate community recycling",
        "Find out what happens to local recyclables."
      ],
      [
        "Participate in a conservation project",
        "Complete a supervised conservation activity."
      ]
    ]
  );

  guide(
    "Code of the Wolf",
    "Paper, pencils, code cards, shapes, colored items.",
    [
      [
        "Create and exchange a secret code",
        "Send a coded message and receive a coded reply."
      ],
      [
        "Build and play a code or pattern game",
        "Create a game and play it."
      ],
      [
        "Record uses of a selected shape",
        "Find and record where one shape appears."
      ],
      [
        "Determine the most common item color",
        "Count different colors in a package."
      ]
    ]
  );

  guide(
    "Computing Wolves",
    "Computer or tablet, component pictures, " +
    "recycling information, creative application.",
    [
      [
        "Discover basic computer components",
        "Identify major parts and their purposes."
      ],
      [
        "Learn proper computer disposal",
        "Investigate electronics recycling."
      ],
      [
        "Create and share a digital story",
        "Use an age-appropriate application."
      ],
      [
        "Establish family device-use rules",
        "Agree on safe rules with a parent or guardian."
      ]
    ],
    "Protect private information. Do not dismantle " +
    "powered equipment or batteries."
  );

  guide(
    "Cubs Who Care",
    "Accessibility examples, pictures, paper, markers.",
    [
      [
        "Explore physical disabilities",
        "Discuss accessibility and inclusion."
      ],
      [
        "Explore visual impairments",
        "Learn about visual accessibility."
      ],
      [
        "Explore hearing loss",
        "Discuss communication accommodations."
      ],
      [
        "Explore mobility barriers",
        "Identify obstacles and possible improvements."
      ]
    ],
    "Avoid stereotypes and insensitive simulations."
  );

  guide(
    "Digging in the Past",
    "Dinosaur pictures, clay, sand, brushes, fossil models.",
    [
      [
        "Play a dinosaur knowledge game",
        "Use matching, trivia, or identification."
      ],
      [
        "Invent and describe a dinosaur",
        "Share its name, diet, size, and habitat."
      ],
      [
        "Complete a simulated dinosaur dig",
        "Practice a supervised paleontology activity."
      ],
      [
        "Build a fossil layer",
        "Create a model showing sediment and fossils."
      ]
    ]
  );

  guide(
    "Finding Your Way",
    "Map, compass, paper, pencils, safe navigation area.",
    [
      [
        "Locate where you live on a map",
        "Identify the home area or town."
      ],
      [
        "Draw a map and key",
        "Create a map helping a friend locate " +
        "home or school, with a legend."
      ],
      [
        "Find cardinal directions on a map",
        "Identify north, east, south, west, " +
        "and the compass rose."
      ],
      [
        "Find directions with a compass",
        "Demonstrate all four cardinal directions."
      ],
      [
        "Practice map and compass together",
        "Follow a supervised navigation exercise."
      ]
    ],
    "Do not publish home addresses or private routes."
  );

  // ========================================================
  // GERMS ALIVE! - CORRECTED VERSION 2.3
  //
  // Current five-requirement adventure.
  // No six-option alternative in the updated guide.
  // ========================================================

  guide(
    "Germs Alive!",
    "Soap, water, paper towels, washable germ " +
    "demonstration materials, protective clothing, " +
    "eye protection, adult-prepared experiment supplies, " +
    "and the official Germs Alive! activity instructions.",
    [
      [
        "Wash hands while singing Happy Birthday twice",
        "TEACH: Effective handwashing. " +
        "ACTIVITY: Wash hands with soap and water " +
        "while singing Happy Birthday two times. " +
        "Demonstrate cleaning palms, backs of hands, " +
        "between fingers, and around fingernails."
      ],
      [
        "Play Germ Magnet and wash hands afterward",
        "TEACH: How contamination transfers by touch. " +
        "ACTIVITY: Play the official Germ Magnet activity " +
        "with den or family, using approved washable " +
        "demonstration materials. Wash hands afterward."
      ],
      [
        "Conduct the sneeze demonstration",
        "TEACH: How droplets spread. " +
        "ACTIVITY: Use the official demonstration " +
        "instructions and safe materials to show " +
        "why covering coughs and sneezes matters."
      ],
      [
        "Conduct the mucus demonstration",
        "TEACH: How mucus helps protect the body. " +
        "ACTIVITY: Use the official demonstration " +
        "instructions to explore the role of mucus. " +
        "Do not use actual bodily fluids."
      ],
      [
        "Grow a mold culture and show what formed",
        "TEACH: Microorganisms and hygiene. " +
        "ACTIVITY: With an adult, follow the official " +
        "mold-culture activity instructions. Observe " +
        "the culture without opening its container. " +
        "Show what formed at a den or pack meeting " +
        "using a sealed container or photographs " +
        "as permitted by the official activity."
      ]
    ],
    "SAFETY: Leaders must review and test experiment " +
    "instructions before the meeting and arrange " +
    "adequate adult supervision. Use protective " +
    "clothing and eye protection as appropriate. " +
    "Keep food and drinks away from experiments. " +
    "For mold cultures, do not open, touch, smell, " +
    "or release the culture. Adults should manage " +
    "containment and disposal according to current " +
    "official instructions. Do not use unknown " +
    "environmental samples or improvise culturing " +
    "methods. The five listed activities are the " +
    "requirements in the updated Wolf leader guide."
  );

  guide(
    "Let's Camp Wolf",
    "Cub Scout Six Essentials, tent, sleeping gear, " +
    "personal camping supplies.",
    [
      [
        "Learn the outdoor buddy system",
        "Discuss and practice buddy procedures."
      ],
      [
        "Know the Six Essentials",
        "Identify each item and its purpose."
      ],
      [
        "List additional personal camping supplies",
        "Prepare a list beyond the Six Essentials."
      ],
      [
        "Learn a camping skill",
        "Practice an appropriate camping skill."
      ],
      [
        "Attend an approved overnight camp",
        "Participate in a council or district Cub Scout " +
        "overnight camp or a pack campout."
      ]
    ],
    "Follow current camping and BALOO policies."
  );

  guide(
    "Paws for Water",
    "Approved swimming area, qualified supervision, " +
    "buddy tags, swimwear, rescue resources.",
    [
      [
        "Learn swimming safety rules",
        "Review Safe Swim Defense and area rules."
      ],
      [
        "Demonstrate proper water entry",
        "Show safe entry at the designated area."
      ],
      [
        "Swim for 30 minutes with a buddy",
        "Remain within the assigned ability group."
      ],
      [
        "Attempt a recognized swimming stroke",
        "Try front crawl, restful backstroke, " +
        "or breaststroke."
      ],
      [
        "Jump feet first into suitable water",
        "Under qualified supervision, jump into " +
        "water at least chest deep."
      ],
      [
        "Demonstrate proper water exit",
        "Show how to leave the swimming area safely."
      ]
    ],
    "ALTERNATIVES: Complete an accredited swimming " +
    "instruction program OR pass the Scouting America " +
    "swimmer test OR complete all six requirements. " +
    "Requirements 1-3 precede requirements 4 and 5. " +
    "Follow Safe Swim Defense, including trained " +
    "supervision and appropriate rescue coverage."
  );

  guide(
    "Paws of Skill",
    "Team sports equipment, rules, safe playing area.",
    [
      [
        "Discuss sportsmanship and Scout values",
        "Connect good sportsmanship to Scout values."
      ],
      [
        "Learn and play a team sport",
        "Learn the rules and play for 30 minutes."
      ],
      [
        "Observe a team sporting event",
        "Identify teamwork and share observations."
      ]
    ]
  );

  guide(
    "Pedal with the Pack",
    "Bicycle, properly fitted helmet, safe riding area.",
    [
      [
        "Demonstrate proper helmet use",
        "Show fit and independently put it on and take it off."
      ],
      [
        "Choose suitable riding clothing",
        "Identify safe clothing and footwear."
      ],
      [
        "Explore bicycle types",
        "Discuss different bikes and their uses."
      ],
      [
        "Start and stop without assistance",
        "Demonstrate controlled starts and stops."
      ],
      [
        "Demonstrate hand signals",
        "Show turning and stopping signals."
      ],
      [
        "Take a buddy-system bicycle ride",
        "Ride with den, pack, or family using buddies."
      ]
    ],
    "Follow current bicycle safety guidance."
  );

  guide(
    "Race Time Wolf",
    "Pinewood Derby or Raingutter Regatta kit, " +
    "approved tools, safety glasses, race rules.",
    [
      [
        "Build a race vehicle with an adult",
        "Build a derby car or regatta boat."
      ],
      [
        "Learn the race rules",
        "Review rules for the selected event."
      ],
      [
        "Identify speed improvements",
        "Discuss improvements permitted by the rules."
      ],
      [
        "Discuss sportsmanship",
        "Explain fair and respectful racing."
      ],
      [
        "Participate in the race",
        "Take part in the selected event."
      ]
    ]
  );

  guide(
    "Spirit of the Water",
    "Local water-source information, treatment diagrams, " +
    "paper, markers.",
    [
      [
        "Discover where household water comes from",
        "Investigate local drinking-water sources."
      ],
      [
        "Discuss water pollution",
        "Explore how pollution affects living things."
      ],
      [
        "Share ways to conserve household water",
        "Identify practical water-saving methods."
      ],
      [
        "Discover how community water is treated",
        "Learn how drinking water is cleaned."
      ]
    ],
    "This is separate from Paws for Water swimming."
  );

  guide(
    "Summertime Fun Wolf",
    "Summer Cub Scout calendar, activity dates, " +
    "family participation plans.",
    [
      [
        "Participate in three summer Cub Scout activities",
        "Between May and August, participate in " +
        "three qualifying Cub Scout activities."
      ]
    ],
    "This is one requirement involving three activities. " +
    "Check the official page for eligibility."
  );

  // ========================================================
  // SPECIAL ELECTIVES - PLANNING ONLY
  // ========================================================

  const rangeNote =
    "Qualified range personnel at an approved district " +
    "or council event must verify completion. Website " +
    "checkmarks do not certify advancement.";

  planningGuide(
    "Archery Wolf",
    "Approved archery event, qualified range staff, " +
    "approved equipment.",
    [
      [
        "Arrange an approved event",
        "Contact district or council personnel."
      ],
      [
        "Review the official lesson plan",
        "Qualified range staff teach and assess it."
      ],
      [
        "Confirm completion",
        "Use approved event completion records."
      ]
    ],
    rangeNote
  );

  planningGuide(
    "Slingshot Wolf",
    "Approved slingshot event, qualified range staff, " +
    "approved equipment.",
    [
      [
        "Arrange an approved event",
        "Contact district or council personnel."
      ],
      [
        "Review the official lesson plan",
        "Qualified range staff teach and assess it."
      ],
      [
        "Confirm completion",
        "Use approved event completion records."
      ]
    ],
    rangeNote
  );

  planningGuide(
    "BB Guns Wolf",
    "Approved BB gun event, qualified range staff, " +
    "approved equipment.",
    [
      [
        "Arrange an approved event",
        "Contact district or council personnel."
      ],
      [
        "Review the official lesson plan",
        "Qualified range staff teach and assess it."
      ],
      [
        "Confirm completion",
        "Use approved event completion records."
      ]
    ],
    rangeNote
  );

  // ========================================================
  // AUTOMATED STRUCTURAL VALIDATION
  // ========================================================

  const counts = {
    required: entries.filter(x => x[1] === "required").length,
    elective: entries.filter(x => x[1] === "elective").length,
    special: entries.filter(x => x[1] === "special").length
  };

  const missing = entries.filter(
    ([name]) => !site.guides[DEN + "|" + name]
  );

  const invalid = entries.filter(([name]) => {
    const g = site.guides[DEN + "|" + name];

    return !g ||
      !g.supplies ||
      !Array.isArray(g.tasks) ||
      g.tasks.length === 0;
  });

  const aligned = entries.filter(([name]) =>
    site.guides[DEN + "|" + name]
      ?.verifiedRequirements === true
  ).length;

  const planning = entries.length - aligned;

  const germs = site.guides[DEN + "|Germs Alive!"];
  const safety = site.guides[DEN + "|Safety in Numbers"];

  const germsCorrect =
    germs?.verifiedRequirements === true &&
    germs?.tasks.length === 5 &&
    germs?.completionNote.includes("mold cultures");

  const parentCorrect =
    safety?.tasks[0]?.[1]?.includes(
      "WITH a parent or legal guardian"
    ) === true;

  const passed =
    entries.length === 26 &&
    counts.required === 6 &&
    counts.elective === 17 &&
    counts.special === 3 &&
    missing.length === 0 &&
    invalid.length === 0 &&
    aligned === 23 &&
    planning === 3 &&
    germsCorrect &&
    parentCorrect;

  console.log("[PACK456] Wolf adventures:", entries.length);
  console.log("[PACK456] Wolf categories:", counts);
  console.log("[PACK456] Wolf missing guides:", missing.length);
  console.log("[PACK456] Wolf invalid guides:", invalid.length);
  console.log("[PACK456] Wolf requirement-aligned:", aligned);
  console.log("[PACK456] Wolf planning-only:", planning);
  console.log(
    "[PACK456] Germs Alive five requirements:",
    germsCorrect ? "PASS" : "FAIL"
  );
  console.log(
    "[PACK456] Safety in Numbers parent instruction:",
    parentCorrect ? "PASS" : "FAIL"
  );
  console.log(
    "[PACK456] WOLF DATA VALIDATION:",
    passed ? "PASS" : "FAIL"
  );
  console.log(
    "[PACK456] Wolf Version 2.3:",
    "READY FOR FINAL HUMAN REVIEW"
  );

  if (!passed) {
    console.error("[PACK456] Wolf validation details:", {
      counts,
      missing,
      invalid,
      aligned,
      planning,
      germsCorrect,
      parentCorrect
    });
  }
})();
