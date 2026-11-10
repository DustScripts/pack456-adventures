
/*
==========================================================
PACK 456 ADVENTURES - TIGER DEN
VERSION 2.0 - COMPLETE DEN BUILD
November 2026

26 adventures:
  6 required
  17 regular electives
  3 special range electives

23 standard adventures:
  Requirement-by-requirement teaching checklists

3 range adventures:
  Planning-only; official range staff verify completion

Based on the updated 2024+ Cub Scout program.
Official Scouting America requirements take precedence.

This file does not store names, addresses, medical records,
completion history, or other personal information.
==========================================================
*/

"use strict";

(function () {
  const site = window.Pack456;

  if (!site || !site.directory || !site.guides) {
    console.error("[PACK456] Tiger: load data.js first.");
    return;
  }

  const DEN = "Tiger";

  const ROOT =
    "https://www.scouting.org/cub-scout-adventures/";

  const RANGE =
    "https://www.scouting.org/outdoor-programs/" +
    "range-activities/cub-scout-shooting-sports/";

  // -------------------------------------------------------
  // DIRECTORY
  // -------------------------------------------------------

  const entries = [
    ["Bobcat Tiger", "required", "bobcat-tiger"],
    ["Tiger Bites", "required", "tiger-bites"],
    ["Tiger's Roar", "required", "tigers-roar"],
    ["Tiger Circles", "required", "tiger-circles"],
    ["Team Tiger", "required", "team-tiger"],
    ["Tigers in the Wild", "required", "tigers-in-the-wild"],

    ["Champions for Nature Tiger", "elective", "champions-for-nature-tiger"],
    ["Curiosity, Intrigue, and Magical Mysteries", "elective", "curiosity-intrigue-and-magical-mysteries"],
    ["Designed by Tiger", "elective", "designed-by-tiger"],
    ["Fish On", "elective", "fish-on"],
    ["Floats and Boats", "elective", "floats-and-boats"],
    ["Good Knights", "elective", "good-knights"],
    ["Let's Camp Tiger", "elective", "lets-camp-tiger"],
    ["Race Time Tiger", "elective", "race-time-tiger"],
    ["Rolling Tigers", "elective", "rolling-tigers"],
    ["Safe and Smart", "elective", "safe-and-smart"],
    ["Sky is the Limit", "elective", "sky-is-the-limit"],
    ["Stories in Shapes", "elective", "stories-in-shapes"],
    ["Summertime Fun Tiger", "elective", "summertime-fun-tiger"],
    ["Tech All Around", "elective", "tech-all-around"],
    ["Tiger Tag", "elective", "tiger-tag"],
    ["Tiger-iffic!", "elective", "tiger-iffic"],
    ["Tigers in the Water", "elective", "tigers-in-the-water"],

    ["Archery Tiger", "special", "archery-tiger"],
    ["Slingshot Tiger", "special", "slingshot-tiger"],
    ["BB Guns Tiger", "special", "bb-guns-tiger"]
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

  // -------------------------------------------------------
  // GUIDE BUILDER
  // -------------------------------------------------------

  function add(name, supplies, tasks, note = "", planning = false) {
    site.guides[DEN + "|" + name] = {
      supplies,

      tasks: tasks.map(([title, instructions], index) => [
        (planning ? "Planning " : "Requirement ") +
          (index + 1) + ": " + title,
        instructions
      ]),

      completionNote: planning
        ? "PLANNING ONLY. These are not official " +
          "advancement requirements. " + note
        : note,

      verifiedRequirements: !planning,
      taskType: planning ? "planning" : "requirements"
    };
  }

  function guide(name, supplies, tasks, note = "") {
    add(name, supplies, tasks, note, false);
  }

  function rangeGuide(name, supplies, tasks, note = "") {
    add(name, supplies, tasks, note, true);
  }

  // =======================================================
  // SIX REQUIRED ADVENTURES
  // =======================================================

  guide(
    "Bobcat Tiger",
    "Scout Oath and Law, den game supplies, Cub Scout " +
    "sign reference, family child-protection booklet.",
    [
      [
        "Get to know the den",
        "Play a name game or create a den flag. " +
        "Include the Tiger adult partners."
      ],
      [
        "Recite the Scout Oath",
        "Recite the Scout Oath with the den, " +
        "including the Tiger adult partner."
      ],
      [
        "Understand a Scout Law value",
        "Have the adult partner or leader read the " +
        "Scout Law. Demonstrate understanding of " +
        "trustworthy, helpful, or friendly."
      ],
      [
        "Demonstrate Cub Scout traditions",
        "Show the Cub Scout sign, salute, and " +
        "handshake, including when each is used."
      ],
      [
        "Share a Do Your Best example",
        "Tell the Tiger adult partner about a time " +
        "the Scout did their best."
      ],
      [
        "Complete the family protection activities",
        "At home, complete the official parent guide " +
        "activities with a parent or legal guardian."
      ]
    ],
    "Family protection activities remain private. " +
    "Do not request personal disclosures."
  );

  guide(
    "Tiger Bites",
    "Food-group pictures, soap, water, exercise " +
    "equipment, sleep-routine materials.",
    [
      [
        "Identify five food groups",
        "Identify fruits, vegetables, grains, " +
        "protein, and dairy. Sort sample food pictures."
      ],
      [
        "Practice handwashing",
        "Demonstrate proper handwashing and discuss " +
        "when hands should be washed."
      ],
      [
        "Be physically active for 30 minutes",
        "Complete 30 minutes of suitable physical " +
        "activity with appropriate supervision."
      ],
      [
        "Practice healthy sleep preparation",
        "Discuss and practice methods that help " +
        "prepare for a good night's sleep."
      ]
    ],
    "Check food allergies and physical limitations."
  );

  guide(
    "Tiger's Roar",
    "Official Tiger Protect Yourself Rules video, " +
    "parent notice, pretend phone, safety cards.",
    [
      [
        "Watch the official Tiger safety video",
        "With parent or legal guardian permission, " +
        "watch the Tiger Protect Yourself Rules video. " +
        "The official activity provides for watching " +
        "with a parent or legal guardian."
      ],
      [
        "Demonstrate Shout, Run, Tell",
        "With the Tiger adult partner, practice " +
        "Shout, Run, Tell as explained in the video."
      ],
      [
        "Demonstrate contacting emergency services",
        "Practice how to access emergency services " +
        "with the adult partner. Use a pretend phone."
      ],
      [
        "Demonstrate what to do if separated",
        "Practice appropriate actions when lost " +
        "or separated from the adult partner."
      ]
    ],
    "Follow Youth Protection requirements. " +
    "Do not make practice emergency calls or " +
    "ask children to disclose personal experiences."
  );

  guide(
    "Tiger Circles",
    "Family-selected faith or reverence materials, " +
    "paper, crayons, kindness supplies.",
    [
      [
        "Explore three family faith celebrations",
        "With a parent or legal guardian, identify " +
        "three celebrations or holidays from the " +
        "family's faith traditions and draw a favorite."
      ],
      [
        "Attend a gathering expressing reverence",
        "With family, attend a religious service " +
        "or another family-selected gathering " +
        "expressing reverence."
      ],
      [
        "Complete an act of kindness",
        "Choose and carry out an act of kindness."
      ]
    ],
    "ALTERNATIVE: A qualifying religious emblem " +
    "may complete this adventure instead of the " +
    "three standard requirements. Respect " +
    "family beliefs and privacy."
  );

  guide(
    "Team Tiger",
    "Game supplies, teamwork activity materials, " +
    "service-project supplies.",
    [
      [
        "Play a game with rules",
        "Play a game with den or family and " +
        "discuss why its rules are important."
      ],
      [
        "Complete a helpful team job",
        "With the Tiger adult partner, choose " +
        "a job that helps the team and do it " +
        "at least once."
      ],
      [
        "Play a game involving two teams",
        "Play with the den or two other family " +
        "members. Discuss good teamwork."
      ],
      [
        "Participate in a service project",
        "Take part in an age-appropriate service " +
        "project with appropriate supervision."
      ]
    ],
    "Use the official service-project checklist " +
    "and age-appropriate tool restrictions."
  );

  guide(
    "Tigers in the Wild",
    "Cub Scout Six Essentials, Outdoor Code, " +
    "water, walking shoes, paper, crayons.",
    [
      [
        "Identify the Six Essentials",
        "Identify each essential and show " +
        "how it is used."
      ],
      [
        "Learn the Outdoor Code",
        "Learn the Outdoor Code with the den " +
        "leader or Tiger adult partner."
      ],
      [
        "Take a 20-minute outdoor walk",
        "Bring the Six Essentials. Explore outdoors " +
        "for at least 20 minutes and identify " +
        "natural and manmade objects."
      ],
      [
        "Identify local animals",
        "Identify common animals, distinguish " +
        "wild from domesticated, and draw " +
        "a favorite animal."
      ],
      [
        "Describe a helpful tree",
        "Find a tree near home and explain " +
        "how it is helpful."
      ]
    ],
    "Review weather, outdoor hazards, and " +
    "Tiger adult-partner supervision."
  );

  // =======================================================
  // SEVENTEEN REGULAR ELECTIVES
  // =======================================================

  guide(
    "Champions for Nature Tiger",
    "Resource pictures, recycling examples, " +
    "local waste information, project supplies.",
    [
      [
        "Compare natural resources",
        "Explore renewable and nonrenewable " +
        "resources using familiar examples."
      ],
      [
        "Learn Reduce, Reuse, Recycle",
        "Give examples of all three practices."
      ],
      [
        "Discover what happens to garbage",
        "Learn how household garbage is collected " +
        "and disposed of locally."
      ],
      [
        "Participate in a conservation project",
        "Join a supervised conservation activity."
      ]
    ],
    "Avoid hazardous waste, sharp objects, " +
    "and unsafe cleanup locations."
  );

  guide(
    "Curiosity, Intrigue, and Magical Mysteries",
    "Simple magic props, paper, pencils, " +
    "secret-code cards.",
    [
      [
        "Learn, practice, and perform a magic trick",
        "Choose a simple trick, practice it, and " +
        "perform it for the den or family."
      ],
      [
        "Explain how the trick works",
        "Demonstrate the secret or method behind " +
        "the trick to the den, family, or adult partner."
      ],
      [
        "Write your name in a secret code",
        "Create or learn a code and use it " +
        "to write your name."
      ],
      [
        "Send a coded message",
        "Write a message in the code and challenge " +
        "the den, family, or adult partner to decode it."
      ]
    ],
    "Use safe, age-appropriate magic props. " +
    "No fire, sharp blades, or dangerous illusions."
  );

  guide(
    "Designed by Tiger",
    "Paper, pencils, cardboard, building blocks, " +
    "tape, safe craft materials.",
    [
      [
        "Draw a proposed project",
        "Think of something to build and draw " +
        "what it should look like."
      ],
      [
        "Build from the drawing",
        "Use the original drawing as a guide " +
        "to construct the project."
      ],
      [
        "Discuss an improvement",
        "With the adult partner, identify " +
        "something that could be improved."
      ],
      [
        "Make the improvement",
        "Modify the project based on the discussion."
      ],
      [
        "Draw the final design",
        "Create a new drawing showing " +
        "the finished project."
      ]
    ],
    "Use age-appropriate tools and adult supervision."
  );

  guide(
    "Fish On",
    "Fishing rod, approved tackle, fish pictures, " +
    "paper, crayons, local fishing regulations.",
    [
      [
        "Identify where you will fish",
        "Identify the fishing location and whether " +
        "it is freshwater or saltwater."
      ],
      [
        "Learn fishing safety rules",
        "Discuss safe casting, hooks, weather, " +
        "water hazards, and adult supervision."
      ],
      [
        "Draw a local fish",
        "Identify and draw a fish species " +
        "found at the selected location."
      ],
      [
        "Go fishing",
        "Go fishing with the Tiger adult partner."
      ]
    ],
    "Follow local fishing rules and water safety."
  );

  guide(
    "Floats and Boats",
    "Pictures of boats, ten test objects, water tub, " +
    "model boat materials, properly fitted life jacket.",
    [
      [
        "Identify five types of boats",
        "Identify five different boats and " +
        "discuss their uses."
      ],
      [
        "Identify floating and sinking objects",
        "Find five things that float and five " +
        "that do not float. Test examples safely."
      ],
      [
        "Build and float a model boat",
        "Create a model boat from recycled or " +
        "other materials and test it on water."
      ],
      [
        "Demonstrate life-jacket use",
        "Put on and fasten a properly fitted " +
        "life jacket and learn when it is " +
        "safe to enter a boat."
      ]
    ],
    "Use shallow containers for experiments. " +
    "Follow boating and water safety requirements."
  );

  guide(
    "Good Knights",
    "Scout Law poster, cardboard, markers, " +
    "recycled materials, tape, craft supplies.",
    [
      [
        "Discuss courteous knightly behavior",
        "Discuss courteous behavior with the den " +
        "or adult partner. Tell another Tiger " +
        "which Scout Law points reflect " +
        "knightly behavior."
      ],
      [
        "Create a shield",
        "Design a personal shield or den shield " +
        "using safe craft materials."
      ],
      [
        "Build a small castle",
        "Use recycled and other materials " +
        "to design and build a castle."
      ],
      [
        "Do a Good Turn",
        "Perform a helpful deed for someone else."
      ]
    ],
    "Use safe craft materials and appropriate " +
    "adult supervision."
  );

  guide(
    "Let's Camp Tiger",
    "Cub Scout Six Essentials, weather forecast, " +
    "appropriate clothing, tent, camping gear.",
    [
      [
        "Learn the outdoor buddy system",
        "Explain and practice the buddy system " +
        "for outdoor activities."
      ],
      [
        "Discuss weather and clothing",
        "Before the campout, review the forecast " +
        "and choose suitable clothing."
      ],
      [
        "Pack the Six Essentials",
        "Prepare and pack all six essentials " +
        "for the campout."
      ],
      [
        "Learn a camping skill",
        "Practice an age-appropriate camping " +
        "skill such as tent setup or a basic knot."
      ],
      [
        "Attend an approved overnight camp",
        "Attend a council or district Cub Scout " +
        "overnight camp or a pack campout."
      ]
    ],
    "Pack overnight camping requires applicable " +
    "BALOO-trained adult leadership and current " +
    "Scouting America camping procedures. " +
    "Follow weather and campfire safety rules."
  );

  guide(
    "Race Time Tiger",
    "Pinewood Derby or Raingutter Regatta kit, " +
    "race rules, approved tools, safety glasses.",
    [
      [
        "Assemble and decorate a race vehicle",
        "With the Tiger adult partner, build " +
        "a Pinewood Derby car or Raingutter " +
        "Regatta boat."
      ],
      [
        "Learn the race rules",
        "Review the rules for the selected race."
      ],
      [
        "Discuss good sportsmanship",
        "Before racing, explain how to show " +
        "good sportsmanship."
      ],
      [
        "Participate in the race",
        "With the adult partner, participate " +
        "in the selected race."
      ]
    ],
    "Adults supervise all tool use. Follow " +
    "event rules and approved equipment guidance."
  );

  guide(
    "Rolling Tigers",
    "Bicycle or age-appropriate alternative, " +
    "fitted helmet, safety gear, riding area.",
    [
      [
        "Learn the ABCs of bike gear",
        "Learn about air, brakes, and chain " +
        "and how they affect bicycle safety."
      ],
      [
        "Learn about bicycle safety gear",
        "Identify and demonstrate suitable " +
        "protective equipment, including a helmet."
      ],
      [
        "Learn bicycle safety rules",
        "Discuss riding rules with the den " +
        "or Tiger adult partner."
      ],
      [
        "Demonstrate hand signals",
        "Show the proper signals for " +
        "turning and stopping."
      ],
      [
        "Ride or begin learning to ride",
        "With family or Tiger adult partner, " +
        "ride a bike or begin learning."
      ]
    ],
    "Training wheels, tricycles, balance bikes, " +
    "and adaptive bikes are permitted. Electric " +
    "and hybrid bicycles are not permitted in " +
    "Scouting activities. Perform a bicycle " +
    "safety check before riding."
  );

  guide(
    "Safe and Smart",
    "Fire safety pictures, escape-plan template, " +
    "smoke alarm information, emergency responder.",
    [
      [
        "Memorize the home address",
        "Recite the address privately to the " +
        "Tiger adult partner or den leader."
      ],
      [
        "Memorize an emergency contact number",
        "Recite the number privately to the " +
        "adult partner or den leader."
      ],
      [
        "Demonstrate Stop, Drop, and Roll",
        "Practice in a safe open area."
      ],
      [
        "Create and practice a fire escape plan",
        "Include an outdoor meeting place and " +
        "practice the escape route."
      ],
      [
        "Check smoke alarm locations",
        "With the adult partner, locate smoke " +
        "alarms and confirm they work."
      ],
      [
        "Discuss matches and lighters",
        "Explain why matches and lighters " +
        "are only for adults."
      ],
      [
        "Meet an emergency responder",
        "Visit an emergency responder station " +
        "or invite a responder to the den."
      ]
    ],
    "Never enter private addresses or telephone " +
    "numbers on this website. Adults handle " +
    "smoke alarm testing. Do not use real flames."
  );

  guide(
    "Sky is the Limit",
    "Star chart, constellation pictures, " +
    "binoculars or telescope, craft supplies.",
    [
      [
        "Observe the night sky",
        "With den or adult partner, observe " +
        "the sky and discuss visible or " +
        "potentially visible objects."
      ],
      [
        "Focus on distant objects",
        "Use a telescope, binoculars, or camera " +
        "to view distant objects and demonstrate " +
        "how to focus the device."
      ],
      [
        "Identify two constellations",
        "Observe or research two constellations. " +
        "Learn their names, how to recognize " +
        "them, and create a picture of one."
      ],
      [
        "Make a constellation model",
        "Create a homemade model of a constellation."
      ]
    ],
    "Plan for darkness, weather, and adult " +
    "supervision. Never look at the sun through " +
    "binoculars or a telescope."
  );

  guide(
    "Stories in Shapes",
    "Art examples, paper, crayons, shape cutouts, " +
    "Braille and sign-language references.",
    [
      [
        "Explore art in the community",
        "Visit public art, a museum, a library, " +
        "or explore an appropriate virtual art tour."
      ],
      [
        "Look closely at artwork",
        "With the den or adult partner, discuss " +
        "what you like about an artwork and " +
        "share your thoughts."
      ],
      [
        "Create art using shapes",
        "Make a picture or craft using " +
        "geometric shapes."
      ],
      [
        "Learn your name in Braille and sign language",
        "Learn how to represent or spell your " +
        "name using Braille and sign language."
      ]
    ],
    "Use accessible, respectful instruction " +
    "and safe craft materials."
  );

  guide(
    "Summertime Fun Tiger",
    "May-August Cub Scout event calendar, " +
    "activity planning materials.",
    [
      [
        "Participate in three summer activities",
        "Between May and August, participate " +
        "in a total of three qualifying Cub " +
        "Scout activities with the den, " +
        "pack, or council."
      ]
    ],
    "One requirement, three qualifying activities. " +
    "This is intended for the summer after kindergarten."
  );

  guide(
    "Tech All Around",
    "Technology pictures, adult-approved devices, " +
    "paper, family digital safety materials.",
    [
      [
        "Discover technology nearby",
        "Identify technology around home, " +
        "the meeting place, or neighborhood."
      ],
      [
        "Explore how digital technology helps",
        "Discuss ways digital technology " +
        "makes everyday tasks easier."
      ],
      [
        "Demonstrate safe technology use",
        "Identify a digital device used at home " +
        "and show the adult partner how " +
        "to use it safely."
      ],
      [
        "Create a family digital-device policy",
        "With a parent or legal guardian, " +
        "agree on rules for using digital devices."
      ]
    ],
    "Review Digital Safety and Online Scouting " +
    "Activities. Protect children's private information."
  );

  guide(
    "Tiger Tag",
    "Cones, safe play area, relay supplies, " +
    "sporting event information.",
    [
      [
        "Play an active game",
        "Play an active game with the den. " +
        "Explain to the adult partner or den " +
        "why you like the game."
      ],
      [
        "Play a relay game",
        "Play a relay with the den and " +
        "explain why you like it."
      ],
      [
        "Discuss sportsmanship",
        "Discuss being a good sport with " +
        "the adult partner or other Tigers."
      ],
      [
        "Attend a sporting event",
        "Attend a sporting event. The official " +
        "activity options include watching " +
        "a sporting event on television."
      ]
    ],
    "Provide safe play space, water, and supervision."
  );

  guide(
    "Tiger-iffic!",
    "Solo games, board games, paper, pencils, " +
    "team game equipment.",
    [
      [
        "Play two different solo games",
        "Play at least two games independently. " +
        "One may be a video game."
      ],
      [
        "Play an indoor game with others",
        "Play a board game or another indoor " +
        "game with den or family members."
      ],
      [
        "Invent or change a game",
        "With den or family, invent a game " +
        "or change an existing game's rules. " +
        "Play the resulting game."
      ],
      [
        "Play a team game",
        "Participate in a team game " +
        "with den or family."
      ]
    ],
    "Review age-appropriate digital safety " +
    "for any video games. Encourage fair play."
  );

  guide(
    "Tigers in the Water",
    "Approved swimming area, qualified supervisors, " +
    "buddy tags, rescue equipment, swimwear.",
    [
      [
        "Learn swimming safety rules",
        "Learn the swimming-area rules and " +
        "applicable Safe Swim Defense guidance."
      ],
      [
        "Demonstrate proper water entry",
        "Show how to enter the designated " +
        "swimming area safely."
      ],
      [
        "Be active in water for 20 minutes",
        "With the Tiger adult partner as buddy, " +
        "participate for 20 minutes in water " +
        "appropriate to the Scout's ability."
      ],
      [
        "Blow bubbles in water",
        "Place the face in water and blow bubbles."
      ],
      [
        "Demonstrate a flutter kick",
        "Show a flutter kick under " +
        "qualified supervision."
      ],
      [
        "Demonstrate proper water exit",
        "Show how to leave the swimming area safely."
      ]
    ],
    "ALTERNATIVE: An eligible swimming lesson " +
    "program may fulfill this adventure under " +
    "the current official guidance. All water " +
    "activities require Safe Swim Defense, " +
    "appropriate ability grouping, buddy " +
    "procedures, and qualified supervision. " +
    "Do not attempt water activities without " +
    "approved safety arrangements."
  );

  // =======================================================
  // SPECIAL RANGE ELECTIVES - PLANNING ONLY
  // =======================================================

  const rangeNote =
    "Special range electives must be completed " +
    "at approved events with qualified personnel. " +
    "The official range lesson plan determines " +
    "the actual advancement requirements.";

  [
    ["Archery Tiger", "archery"],
    ["Slingshot Tiger", "slingshot"],
    ["BB Guns Tiger", "BB gun"]
  ].forEach(([name, activity]) => {
    rangeGuide(
      name,
      "Approved district or council event, " +
      "qualified range staff, approved equipment.",
      [
        [
          "Arrange an approved " + activity + " session",
          "Contact the district or council " +
          "to locate an approved event."
        ],
        [
          "Review the official range lesson plan",
          "Qualified range personnel explain " +
          "and supervise the requirements."
        ],
        [
          "Confirm completion",
          "Use the approved event's official " +
          "completion procedures."
        ]
      ],
      rangeNote
    );
  });

  // =======================================================
  // FINAL DEN VALIDATION
  // =======================================================

  const expected = {
    "Bobcat Tiger": 6,
    "Tiger Bites": 4,
    "Tiger's Roar": 4,
    "Tiger Circles": 3,
    "Team Tiger": 4,
    "Tigers in the Wild": 5,

    "Champions for Nature Tiger": 4,
    "Curiosity, Intrigue, and Magical Mysteries": 4,
    "Designed by Tiger": 5,
    "Fish On": 4,
    "Floats and Boats": 4,
    "Good Knights": 4,
    "Let's Camp Tiger": 5,
    "Race Time Tiger": 4,
    "Rolling Tigers": 5,
    "Safe and Smart": 7,
    "Sky is the Limit": 4,
    "Stories in Shapes": 4,
    "Summertime Fun Tiger": 1,
    "Tech All Around": 4,
    "Tiger Tag": 4,
    "Tiger-iffic!": 4,
    "Tigers in the Water": 6,

    "Archery Tiger": 3,
    "Slingshot Tiger": 3,
    "BB Guns Tiger": 3
  };

  const counts = {
    required: entries.filter(
      e => e[1] === "required"
    ).length,

    elective: entries.filter(
      e => e[1] === "elective"
    ).length,

    special: entries.filter(
      e => e[1] === "special"
    ).length
  };

  const errors = [];

  if (entries.length !== 26) {
    errors.push("Incorrect total adventure count");
  }

  if (
    counts.required !== 6 ||
    counts.elective !== 17 ||
    counts.special !== 3
  ) {
    errors.push("Incorrect category counts");
  }

  entries.forEach(([name, type]) => {
    const g = site.guides[DEN + "|" + name];

    if (!g) {
      errors.push("Missing guide: " + name);
      return;
    }

    if (!g.supplies) {
      errors.push("Missing supplies: " + name);
    }

    if (!Array.isArray(g.tasks)) {
      errors.push("Invalid tasks: " + name);
      return;
    }

    if (g.tasks.length !== expected[name]) {
      errors.push(
        "Requirement count mismatch: " + name
      );
    }

    if (
      g.tasks.some(
        task =>
          !Array.isArray(task) ||
          task.length !== 2 ||
          !task[0] ||
          !task[1]
      )
    ) {
      errors.push("Invalid task details: " + name);
    }

    if (
      type === "special" &&
      g.verifiedRequirements !== false
    ) {
      errors.push(
        "Range adventure incorrectly verified: " + name
      );
    }

    if (
      type !== "special" &&
      g.verifiedRequirements !== true
    ) {
      errors.push(
        "Standard adventure incorrectly marked: " + name
      );
    }

    if (!site.officialLinks[DEN][name]) {
      errors.push("Missing official link: " + name);
    }
  });

  const standard = entries.filter(
    e => e[1] !== "special"
  );

  const aligned = standard.filter(
    ([name]) =>
      site.guides[DEN + "|" + name]
        ?.verifiedRequirements === true
  ).length;

  const planning = entries.filter(
    ([name]) =>
      site.guides[DEN + "|" + name]
        ?.verifiedRequirements === false
  ).length;

  const alternativeChecks = [
    "Tiger Circles",
    "Tigers in the Water"
  ].every(name =>
    site.guides[DEN + "|" + name]
      ?.completionNote.includes("ALTERNATIVE")
  );

  if (!alternativeChecks) {
    errors.push("Missing alternative completion notes");
  }

  if (aligned !== 23) {
    errors.push("Expected 23 standard guides");
  }

  if (planning !== 3) {
    errors.push("Expected 3 planning-only range guides");
  }

  const passed = errors.length === 0;

  console.log(
    "[PACK456] Tiger Version: 2.0"
  );

  console.log(
    "[PACK456] Tiger adventures:", entries.length
  );

  console.log(
    "[PACK456] Tiger categories:", counts
  );

  console.log(
    "[PACK456] Tiger standard guides:", aligned
  );

  console.log(
    "[PACK456] Tiger range planning guides:", planning
  );

  console.log(
    "[PACK456] Tiger requirement counts:",
    errors.some(e => e.includes("count"))
      ? "FAIL"
      : "PASS"
  );

  console.log(
    "[PACK456] Tiger alternatives:",
    alternativeChecks ? "PASS" : "FAIL"
  );

  console.log(
    "[PACK456] TIGER DATA VALIDATION:",
    passed ? "PASS" : "FAIL"
  );

  console.log(
    "[PACK456] Tiger content:",
    "READY FOR FINAL REVIEW"
  );

  if (!passed) {
    console.error(
      "[PACK456] Tiger validation errors:",
      errors
    );
  }
})();
