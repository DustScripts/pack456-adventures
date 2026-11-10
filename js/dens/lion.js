
/*
===========================================================
PACK 456 ADVENTURES
LION DEN - VERSION 1.0
COMPLETE DEN REPLACEMENT

22 Adventures:
  6 Required
  14 Regular Electives
  2 Special Range Electives

20 requirement-aligned teaching guides
2 range planning guides

Compatible with Pack 456 app.js Version 1.3.
Does not modify Bear, Wolf, Tiger, or other dens.

Source:
https://www.scouting.org/programs/cub-scouts/adventures/lion/

IMPORTANT:
Official requirements and current safety policies take
precedence. Checkboxes are temporary teaching aids,
not official advancement records.

Lion adult partners participate in all adventures.
===========================================================
*/

"use strict";

(function () {
  const site = window.Pack456;
  const DEN = "Lion";

  if (!site || !site.directory || !site.guides) {
    console.error("[PACK456] Lion: data.js not loaded.");
    return;
  }

  const ROOT =
    "https://www.scouting.org/cub-scout-adventures/";

  const RANGE =
    "https://www.scouting.org/outdoor-programs/" +
    "range-activities/cub-scout-shooting-sports/";

  // =======================================================
  // DIRECTORY
  // =======================================================

  const entries = [
    ["Bobcat Lion", "required", "bobcat-lion"],
    ["Fun on the Run", "required", "fun-on-the-run"],
    ["Lion's Roar", "required", "lions-roar"],
    ["Lion's Pride", "required", "lions-pride"],
    ["King of the Jungle", "required", "king-of-the-jungle"],
    ["Mountain Lion", "required", "mountain-lion"],

    ["Build It Up, Knock It Down", "elective", "build-it-up-knock-it-down"],
    ["Champions for Nature Lion", "elective", "champions-for-nature-lion"],
    ["Count On Me", "elective", "count-on-me"],
    ["Everyday Tech", "elective", "everyday-tech"],
    ["Gizmos and Gadgets", "elective", "gizmos-and-gadgets"],
    ["Go Fish", "elective", "go-fish"],
    ["I'll Do It Myself", "elective", "ill-do-it-myself"],
    ["Let's Camp Lion", "elective", "lets-camp-lion"],
    ["On a Roll", "elective", "on-a-roll"],
    ["On Your Mark", "elective", "on-your-mark"],
    ["Pick My Path", "elective", "pick-my-path"],
    ["Race Time Lion", "elective", "race-time-lion"],
    ["Ready, Set, Grow", "elective", "ready-set-grow"],
    ["Time to Swim", "elective", "time-to-swim"],

    ["Archery Lion", "special", "archery-lion"],
    ["Slingshot Lion", "special", "slingshot-lion"]
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

  // =======================================================
  // GUIDE HELPERS
  // =======================================================

  function addGuide(
    name,
    supplies,
    tasks,
    note = "",
    planning = false
  ) {
    site.guides[DEN + "|" + name] = {
      supplies,

      tasks: tasks.map(([title, instructions], index) => [
        (planning ? "Planning " : "Requirement ") +
          (index + 1) + ": " + title,
        instructions
      ]),

      completionNote: planning
        ? "PLANNING ONLY - NOT ADVANCEMENT CREDIT. " +
          note
        : note,

      verifiedRequirements: !planning,

      taskType: planning
        ? "planning"
        : "requirements"
    };
  }

  function guide(name, supplies, tasks, note = "") {
    addGuide(name, supplies, tasks, note, false);
  }

  function planningGuide(name, supplies, tasks, note = "") {
    addGuide(name, supplies, tasks, note, true);
  }

  // =======================================================
  // REQUIRED 1 - BOBCAT LION
  // =======================================================

  guide(
    "Bobcat Lion",
    "Scout Law poster, name-game supplies, paper, " +
    "crayons, official family protection booklet.",
    [
      [
        "Get to know your den",
        "TEACH: Friendship and belonging. " +
        "ACTIVITY: Play a name game, make hand " +
        "puppets, or create a den flag together."
      ],
      [
        "Learn what friendly means",
        "TEACH: Scout Law. Have the Lion adult " +
        "partner or den leader read the Scout Law. " +
        "ACTIVITY: Show friendliness by sharing, " +
        "giving a compliment, or helping another Scout."
      ],
      [
        "Share a Do Your Best example",
        "TEACH: The Cub Scout motto. " +
        "ACTIVITY: Tell the Lion adult partner " +
        "about a time you did your best, " +
        "at home or during a den meeting."
      ],
      [
        "Complete family protection activities",
        "AT HOME: With a parent or legal guardian, " +
        "complete the activities in the official " +
        "How to Protect Your Children from Child " +
        "Abuse: A Parent's Guide booklet."
      ]
    ],
    "Bobcat should be the first required adventure. " +
    "Family protection activities are completed " +
    "privately at home. Never collect personal " +
    "disclosures or private answers."
  );

  // =======================================================
  // REQUIRED 2 - FUN ON THE RUN
  // =======================================================

  guide(
    "Fun on the Run",
    "Food-group pictures, soap, water, towels, " +
    "active-game supplies, bedtime routine cards.",
    [
      [
        "Identify five food groups",
        "TEACH: Fruits, vegetables, grains, protein, " +
        "and dairy. ACTIVITY: Sort food pictures " +
        "into their five groups."
      ],
      [
        "Practice handwashing",
        "TEACH: Clean hands prevent illness. " +
        "ACTIVITY: Wash hands with soap and water. " +
        "Discuss washing before eating, after " +
        "using the bathroom, and after messy play."
      ],
      [
        "Be active for 20 minutes",
        "TEACH: Physical fitness. ACTIVITY: " +
        "Dance, play freeze tag, or complete " +
        "another suitable activity for 20 minutes."
      ],
      [
        "Practice methods that help you rest",
        "TEACH: Rest and relaxation. ACTIVITY: " +
        "Practice quiet breathing, calming music, " +
        "or a healthy bedtime routine."
      ]
    ],
    "SAFETY: Review food allergies and dietary " +
    "restrictions before food activities. " +
    "Provide water and age-appropriate exercise."
  );

  // =======================================================
  // REQUIRED 3 - LION'S ROAR
  // =======================================================

  guide(
    "Lion's Roar",
    "Official Lion Protect Yourself Rules video, " +
    "parent notification, pretend telephone, " +
    "crosswalk markers, traffic safety pictures.",
    [
      [
        "Watch the Lion personal-safety video",
        "With parent or legal guardian permission, " +
        "watch the official Lion Protect Yourself " +
        "Rules video. The official activity " +
        "provides for watching with a parent " +
        "or legal guardian."
      ],
      [
        "Demonstrate Shout, Run, Tell",
        "TEACH: Responding to unsafe situations. " +
        "ACTIVITY: With the Lion adult partner, " +
        "practice Shout, Run, Tell as shown " +
        "in the official video."
      ],
      [
        "Demonstrate accessing emergency services",
        "TEACH: Getting emergency help. " +
        "ACTIVITY: Use a pretend telephone to " +
        "demonstrate contacting emergency services. " +
        "Explain when emergency services are needed."
      ],
      [
        "Demonstrate street and parking-lot safety",
        "TEACH: Traffic awareness. ACTIVITY: " +
        "Use a pretend crosswalk to practice " +
        "stopping, looking, listening, and " +
        "crossing with the Lion adult partner. " +
        "Discuss moving vehicles in parking lots."
      ]
    ],
    "SAFETY: Notify parents or legal guardians " +
    "before presenting personal-safety materials. " +
    "Follow current Youth Protection policies. " +
    "Never make real emergency calls for practice " +
    "or ask children to disclose private experiences. " +
    "Practice road safety in a simulated area."
  );

  // =======================================================
  // REQUIRED 4 - LION'S PRIDE
  // =======================================================

  guide(
    "Lion's Pride",
    "Family-selected faith or reverence materials, " +
    "paper, crayons, greeting-card supplies.",
    [
      [
        "Explore a family faith tradition",
        "With a parent or legal guardian, discuss " +
        "family faith traditions. Draw a picture " +
        "of a favorite family faith holiday " +
        "or celebration."
      ],
      [
        "Attend a gathering expressing reverence",
        "With family, attend a religious service " +
        "or another gathering that demonstrates " +
        "how the family expresses reverence."
      ],
      [
        "Make and give a cheerful card",
        "Create a cheerful card or drawing " +
        "for someone you love and give it to them."
      ]
    ],
    "ALTERNATIVE COMPLETION: A qualifying religious " +
    "emblem chosen by the family may complete " +
    "this adventure instead of the standard " +
    "three requirements. Respect all family " +
    "beliefs and do not collect religious information."
  );

  // =======================================================
  // REQUIRED 5 - KING OF THE JUNGLE
  // =======================================================

  guide(
    "King of the Jungle",
    "Paper, crayons, family job chart, " +
    "interview questions, service-project supplies.",
    [
      [
        "Draw the people you live with",
        "TEACH: Families and households. " +
        "ACTIVITY: Draw a picture of the people " +
        "you live with. Respect different " +
        "family structures."
      ],
      [
        "Complete a helpful family job",
        "With the Lion adult partner, choose " +
        "a job that helps the family. " +
        "Complete that job at least once."
      ],
      [
        "Discuss citizenship with an older adult",
        "Talk with a grandparent or another " +
        "older adult about what citizenship " +
        "means to them."
      ],
      [
        "Participate in a service project",
        "Take part in an age-appropriate service " +
        "project, such as an approved collection " +
        "drive or other pack service activity."
      ]
    ],
    "SAFETY: Follow the Service Project Planning " +
    "Checklist and SAFE Project Tool Use guidance. " +
    "Lions should not handle hazardous materials " +
    "or perform age-inappropriate tasks. " +
    "Use a separate service project when required " +
    "for another adventure."
  );

  // =======================================================
  // REQUIRED 6 - MOUNTAIN LION
  // =======================================================

  guide(
    "Mountain Lion",
    "Cub Scout Six Essentials, water, walking shoes, " +
    "whistle, nature pictures, animal sorting cards.",
    [
      [
        "Identify the Cub Scout Six Essentials",
        "Identify each essential and demonstrate " +
        "how it is used. Include water, snack, " +
        "first-aid kit, flashlight, sun protection, " +
        "and whistle."
      ],
      [
        "Take a 20-minute outdoor exploration walk",
        "With den, pack, or family, explore " +
        "outdoors for at least 20 minutes " +
        "while carrying the Six Essentials. " +
        "Identify natural and manmade things " +
        "with the Lion adult partner."
      ],
      [
        "Discover S.A.W.",
        "TEACH: Stay, Answer, Whistle. " +
        "ACTIVITY: Practice what to do if " +
        "separated outdoors, including " +
        "staying in place and using a whistle."
      ],
      [
        "Identify wild and domesticated animals",
        "Identify animals common to the local area. " +
        "Sort pictures into wild and " +
        "domesticated animal groups."
      ]
    ],
    "SAFETY: Check weather, trail conditions, " +
    "health considerations, and supervision. " +
    "Use the buddy system. Never separate " +
    "children intentionally during S.A.W. practice."
  );

  // =======================================================
  // ELECTIVE 1 - BUILD IT UP, KNOCK IT DOWN
  // =======================================================

  guide(
    "Build It Up, Knock It Down",
    "Building blocks, cardboard boxes, paper cups, " +
    "dominoes, blankets, safe construction supplies.",
    [
      [
        "Build a structure with your adult partner",
        "Use blocks, boxes, or other safe materials " +
        "to build a structure with the Lion " +
        "adult partner."
      ],
      [
        "Build a structure with den or family",
        "Work together to build a cup pyramid, " +
        "cardboard city, or pillow fort."
      ],
      [
        "Build something designed to be knocked down",
        "Create a domino course or soft block tower " +
        "and safely knock it down."
      ]
    ],
    "Use lightweight materials and a clear " +
    "work area. Review food allergies if " +
    "using edible building materials."
  );

  // =======================================================
  // ELECTIVE 2 - CHAMPIONS FOR NATURE LION
  // =======================================================

  guide(
    "Champions for Nature Lion",
    "Natural and manmade item pictures, clean " +
    "recyclables, sorting containers, project supplies.",
    [
      [
        "Compare natural and manmade items",
        "Explore the difference between " +
        "natural resources and manmade items. " +
        "Sort pictures or safe examples."
      ],
      [
        "Identify different types of waste",
        "Compare organic, paper, plastic, " +
        "metal, and glass waste using " +
        "clean examples or pictures."
      ],
      [
        "Discover recycling",
        "Learn what recycling means. " +
        "Explore what can be recycled locally."
      ],
      [
        "Participate in a conservation service project",
        "Join an approved conservation activity, " +
        "such as planting suitable native plants " +
        "or another supervised project."
      ]
    ],
    "SAFETY: Follow service-project tool restrictions. " +
    "Adults handle sharp objects and unsafe waste. " +
    "Use safe planting practices and avoid " +
    "hazardous cleanup areas."
  );

  // =======================================================
  // ELECTIVE 3 - COUNT ON ME
  // =======================================================

  guide(
    "Count On Me",
    "Paper squares, circles, triangles, glue, " +
    "counting game, sorting objects.",
    [
      [
        "Make a lion from geometric shapes",
        "Create a picture of a lion using only " +
        "squares, triangles, and circles."
      ],
      [
        "Play a counting or number game",
        "With the Lion adult partner or den, " +
        "play a game based on numbers or counting."
      ],
      [
        "Sort, count, and build",
        "Sort objects by shape, then color, " +
        "then one additional category. Count " +
        "each group. Build something using " +
        "items from one category."
      ]
    ],
    "Use large age-appropriate objects. " +
    "Avoid choking hazards and supervise craft work."
  );

  // =======================================================
  // ELECTIVE 4 - EVERYDAY TECH
  // =======================================================

  guide(
    "Everyday Tech",
    "Technology pictures, safe household objects, " +
    "adult-approved digital device, safety cards.",
    [
      [
        "Discover technology around you",
        "Find technology around home, the meeting " +
        "place, or neighborhood. Discuss its uses."
      ],
      [
        "Explore how digital technology helps",
        "Identify ways digital technology makes " +
        "tasks easier, such as communication, " +
        "navigation, or finding information."
      ],
      [
        "Demonstrate safe digital technology use",
        "Identify a digital device used at home. " +
        "Show the Lion adult partner how to use " +
        "it safely and appropriately."
      ]
    ],
    "SAFETY: Follow Digital Safety and Online " +
    "Scouting Activities guidance. Never share " +
    "passwords, addresses, or private information."
  );

  // =======================================================
  // ELECTIVE 5 - GIZMOS AND GADGETS
  // =======================================================

  guide(
    "Gizmos and Gadgets",
    "Toy cars, balls, paper, cardboard, tape, " +
    "safe household materials.",
    [
      [
        "Explore motion",
        "Roll different-sized balls or toy cars. " +
        "Compare how objects move."
      ],
      [
        "Explore force",
        "Experiment with pushing and pulling. " +
        "Try paper airplanes or other simple " +
        "force demonstrations."
      ],
      [
        "Create a useful object",
        "Use household materials to make " +
        "a useful object, such as a simple " +
        "planter or bird feeder."
      ]
    ],
    "Adults supervise scissors and other tools. " +
    "Avoid small loose parts and projectiles."
  );

  // =======================================================
  // ELECTIVE 6 - GO FISH
  // =======================================================

  guide(
    "Go Fish",
    "Fishing equipment, fish pictures, paper, " +
    "crayons, weather information, local regulations.",
    [
      [
        "Learn fishing safety",
        "With the Lion adult partner, learn " +
        "safe casting distance, hook safety, " +
        "weather precautions, and water safety."
      ],
      [
        "Draw a fish from the fishing location",
        "Draw a type of fish believed to live " +
        "in the water where the Scout plans to fish."
      ],
      [
        "Go fishing",
        "Go fishing with the Lion adult partner " +
        "at a suitable location."
      ]
    ],
    "SAFETY: Follow local fishing regulations. " +
    "Never fish during thunderstorms or near " +
    "swimmers. Adults supervise hooks and casting."
  );

  // =======================================================
  // ELECTIVE 7 - I'LL DO IT MYSELF
  // =======================================================

  guide(
    "I'll Do It Myself",
    "Reusable bag, fabric markers, personal " +
    "care checklist, paper, crayons, shoes.",
    [
      [
        "Make and use a Lion bag",
        "Decorate or create a bag for personal " +
        "Scouting gear. Use the bag to carry " +
        "the Scout's supplies."
      ],
      [
        "Create a personal care checklist",
        "Make a morning or evening personal " +
        "care checklist with the adult partner."
      ],
      [
        "Manage your shoes independently",
        "Put on shoes without help. Then take " +
        "them off and put them away."
      ]
    ],
    "Encourage independence while allowing " +
    "appropriate accessibility accommodations."
  );

  // =======================================================
  // ELECTIVE 8 - LET'S CAMP LION
  // =======================================================

  guide(
    "Let's Camp Lion",
    "Cub Scout Six Essentials, weather forecast, " +
    "appropriate clothing, camping equipment.",
    [
      [
        "Learn the outdoor buddy system",
        "Explain and practice staying with " +
        "a buddy during outdoor activities."
      ],
      [
        "Discuss expected camping weather",
        "Before the campout, review the " +
        "weather forecast and choose " +
        "appropriate clothing."
      ],
      [
        "Pack the Six Essentials",
        "Prepare and pack the Cub Scout " +
        "Six Essentials for the campout."
      ],
      [
        "Attend an approved overnight campout",
        "Attend a council or district Cub Scout " +
        "overnight camp or an overnight " +
        "campout with the pack."
      ]
    ],
    "SAFETY: Follow current camping rules, " +
    "including BALOO requirements for pack " +
    "overnighters, weather training, adult-partner " +
    "participation, and Youth Protection policies."
  );

  // =======================================================
  // ELECTIVE 9 - ON A ROLL
  // =======================================================

  guide(
    "On a Roll",
    "Bicycle, balance bike, tricycle, or adaptive " +
    "bike; properly fitted helmet; safety equipment.",
    [
      [
        "Learn bicycle safety gear",
        "With den or Lion adult partner, " +
        "identify appropriate safety equipment, " +
        "especially a correctly fitted helmet."
      ],
      [
        "Learn bicycle safety rules",
        "Discuss safe riding areas, watching " +
        "for traffic, stopping, and " +
        "following adult instructions."
      ],
      [
        "Ride safely",
        "With family or Lion adult partner, " +
        "ride a suitable bicycle or approved " +
        "alternative while wearing safety " +
        "gear and following riding rules."
      ]
    ],
    "SAFETY: Balance bikes, tricycles, training " +
    "wheels, and adaptive bikes are acceptable. " +
    "Electric and hybrid bicycles are not allowed " +
    "in Scouting activities. Complete a bicycle " +
    "safety check before riding."
  );

  // =======================================================
  // ELECTIVE 10 - ON YOUR MARK
  // =======================================================

  guide(
    "On Your Mark",
    "Game equipment, cones, obstacle-course " +
    "supplies, cardboard box derby materials.",
    [
      [
        "Play a game with your den",
        "Choose and play an age-appropriate " +
        "game together."
      ],
      [
        "Participate in an obstacle-course relay",
        "Create a safe obstacle course using " +
        "cones or other soft equipment. " +
        "Participate in a relay."
      ],
      [
        "Build and race a box derby vehicle",
        "Build a wearable cardboard box derby " +
        "vehicle with the adult partner. " +
        "Participate in a supervised race."
      ]
    ],
    "Use lightweight boxes, no sharp edges, " +
    "and a clear running area. " +
    "Adjust activities for accessibility."
  );

  // =======================================================
  // ELECTIVE 11 - PICK MY PATH
  // =======================================================

  guide(
    "Pick My Path",
    "Choice cards, Scout Law poster, simple " +
    "board or group game, kindness supplies.",
    [
      [
        "Explain that choices have consequences",
        "Discuss simple situations and what " +
        "might happen after different choices."
      ],
      [
        "Perform a Good Turn",
        "Choose and complete a helpful deed " +
        "for another person."
      ],
      [
        "Learn and play a game",
        "Learn the basic rules of a game, " +
        "then play while following those rules."
      ]
    ],
    "Use positive, age-appropriate examples. " +
    "Avoid embarrassing or singling out children."
  );

  // =======================================================
  // ELECTIVE 12 - RACE TIME LION
  // =======================================================

  guide(
    "Race Time Lion",
    "Pinewood Derby car or Raingutter Regatta " +
    "boat kit, decorations, race rules, safety gear.",
    [
      [
        "Build and decorate a race vehicle",
        "With the Lion adult partner, assemble " +
        "and decorate either a Pinewood Derby " +
        "car or Raingutter Regatta boat."
      ],
      [
        "Learn the race rules",
        "Review the rules for the chosen race."
      ],
      [
        "Discuss good sportsmanship",
        "Before the race, discuss how to " +
        "show good sportsmanship with " +
        "the Lion adult partner."
      ],
      [
        "Participate in the race",
        "With the Lion adult partner, " +
        "participate in the chosen event."
      ]
    ],
    "Adults handle age-restricted tools. " +
    "Follow official race rules and " +
    "appropriate equipment safety."
  );

  // =======================================================
  // ELECTIVE 13 - READY, SET, GROW
  // =======================================================

  guide(
    "Ready, Set, Grow",
    "Food origin pictures, seeds, soil, pots, " +
    "water, gardening supplies, guest gardener.",
    [
      [
        "Discover where food comes from",
        "Discuss farms, gardens, and where " +
        "common foods are grown or produced."
      ],
      [
        "Plant a small garden",
        "Plant seeds or suitable plants " +
        "outside or in a container."
      ],
      [
        "Learn gardening from another person",
        "Visit with a gardener or other " +
        "knowledgeable person who demonstrates " +
        "gardening methods and basic skills."
      ]
    ],
    "SAFETY: Use child-safe gardening equipment. " +
    "Adults supervise soil handling. Wash hands " +
    "after gardening and avoid unsafe chemicals."
  );

  // =======================================================
  // ELECTIVE 14 - TIME TO SWIM
  // =======================================================

  guide(
    "Time to Swim",
    "Approved swimming facility, qualified " +
    "supervisors, buddy tags, appropriate swimwear.",
    [
      [
        "Learn swimming safety rules",
        "Learn the swimming-area rules and " +
        "Safe Swim Defense procedures."
      ],
      [
        "Demonstrate proper water entry",
        "Show how to enter the approved " +
        "swimming area safely."
      ],
      [
        "Be active in water for 20 minutes",
        "With the Lion adult partner as buddy, " +
        "participate in water activity for " +
        "20 minutes at a suitable depth."
      ],
      [
        "Blow bubbles in water",
        "Place the face in the water and " +
        "blow bubbles under qualified supervision."
      ],
      [
        "Demonstrate proper water exit",
        "Show how to safely leave the " +
        "designated swimming area."
      ]
    ],
    "ALTERNATIVE COMPLETION: Current official " +
    "guidance permits qualifying swimming lessons " +
    "as an alternative route. Confirm any other " +
    "eligible alternative on the official page. " +
    "SAFETY: Follow Safe Swim Defense with " +
    "qualified supervision, ability-appropriate " +
    "water depth, buddy procedures, and " +
    "Lion adult-partner participation."
  );

  // =======================================================
  // SPECIAL RANGE ELECTIVES
  // PLANNING ONLY
  // =======================================================

  planningGuide(
    "Archery Lion",
    "Approved council or district range event, " +
    "qualified instructors, approved equipment.",
    [
      [
        "Arrange an approved archery session",
        "Contact the district or council " +
        "for an approved Lion archery event."
      ],
      [
        "Review official safety and lesson plan",
        "Qualified range personnel teach " +
        "the safety rules, commands, equipment " +
        "handling, and shooting activities."
      ],
      [
        "Confirm advancement with range staff",
        "Have authorized event personnel " +
        "confirm completion under the official " +
        "range adventure requirements."
      ]
    ],
    "Archery must be supervised by qualified " +
    "personnel at an approved event. " +
    "This planning checklist is not " +
    "the official advancement checklist."
  );

  planningGuide(
    "Slingshot Lion",
    "Approved council or district range event, " +
    "qualified instructors, approved equipment.",
    [
      [
        "Arrange an approved slingshot session",
        "Contact the district or council " +
        "for an approved Lion slingshot event."
      ],
      [
        "Review official safety and lesson plan",
        "Qualified range personnel teach " +
        "the safety rules, commands, equipment " +
        "handling, and approved activities."
      ],
      [
        "Confirm advancement with range staff",
        "Have authorized event personnel " +
        "confirm completion under the official " +
        "range adventure requirements."
      ]
    ],
    "Slingshot activities must be supervised " +
    "by qualified personnel at an approved event. " +
    "This planning checklist is not " +
    "the official advancement checklist."
  );

  // =======================================================
  // COMPLETE DEN VALIDATION
  // =======================================================

  const expectedCounts = {
    "Bobcat Lion": 4,
    "Fun on the Run": 4,
    "Lion's Roar": 4,
    "Lion's Pride": 3,
    "King of the Jungle": 4,
    "Mountain Lion": 4,

    "Build It Up, Knock It Down": 3,
    "Champions for Nature Lion": 4,
    "Count On Me": 3,
    "Everyday Tech": 3,
    "Gizmos and Gadgets": 3,
    "Go Fish": 3,
    "I'll Do It Myself": 3,
    "Let's Camp Lion": 4,
    "On a Roll": 3,
    "On Your Mark": 3,
    "Pick My Path": 3,
    "Race Time Lion": 4,
    "Ready, Set, Grow": 3,
    "Time to Swim": 5,

    "Archery Lion": 3,
    "Slingshot Lion": 3
  };

  const errors = [];

  const categories = {
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

  if (entries.length !== 22) {
    errors.push("Adventure total must be 22.");
  }

  if (
    categories.required !== 6 ||
    categories.elective !== 14 ||
    categories.special !== 2
  ) {
    errors.push("Category counts are incorrect.");
  }

  const uniqueNames = new Set(
    entries.map(e => e[0])
  );

  if (uniqueNames.size !== entries.length) {
    errors.push("Duplicate adventure names.");
  }

  entries.forEach(([name, type]) => {
    const key = DEN + "|" + name;
    const g = site.guides[key];

    if (!g) {
      errors.push("Missing guide: " + name);
      return;
    }

    if (!g.supplies || !g.completionNote) {
      errors.push("Missing guide details: " + name);
    }

    if (!Array.isArray(g.tasks)) {
      errors.push("Invalid task list: " + name);
      return;
    }

    if (g.tasks.length !== expectedCounts[name]) {
      errors.push("Incorrect task count: " + name);
    }

    g.tasks.forEach((task, index) => {
      if (
        !Array.isArray(task) ||
        task.length !== 2 ||
        typeof task[0] !== "string" ||
        typeof task[1] !== "string" ||
        !task[0].trim() ||
        !task[1].trim()
      ) {
        errors.push(
          "Invalid task: " + name + " #" + (index + 1)
        );
      }
    });

    const shouldBeVerified = type !== "special";

    if (
      g.verifiedRequirements !== shouldBeVerified
    ) {
      errors.push(
        "Incorrect verification status: " + name
      );
    }

    if (
      g.taskType !== (
        type === "special" ? "planning" : "requirements"
      )
    ) {
      errors.push("Incorrect task type: " + name);
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

  if (aligned !== 20) {
    errors.push("Expected 20 standard guides.");
  }

  if (planning !== 2) {
    errors.push("Expected 2 range planning guides.");
  }

  const alternatives = [
    "Lion's Pride",
    "Time to Swim"
  ].every(name =>
    site.guides[DEN + "|" + name]
      ?.completionNote.includes(
        "ALTERNATIVE COMPLETION"
      )
  );

  if (!alternatives) {
    errors.push("Missing alternative completion notes.");
  }

  const allRequired = entries
    .filter(e => e[1] === "required")
    .every(([name]) =>
      site.guides[DEN + "|" + name]
        ?.verifiedRequirements === true
    );

  if (!allRequired) {
    errors.push("Required guides are incomplete.");
  }

  const passed = errors.length === 0;

  console.log("[PACK456] Lion Version: 1.0");
  console.log("[PACK456] Lion adventures:", entries.length);
  console.log("[PACK456] Lion categories:", categories);
  console.log("[PACK456] Lion standard guides:", aligned);
  console.log("[PACK456] Lion range planning guides:", planning);
  console.log(
    "[PACK456] Lion all required guides:",
    allRequired ? "PASS" : "FAIL"
  );
  console.log(
    "[PACK456] Lion alternative completion notes:",
    alternatives ? "PASS" : "FAIL"
  );
  console.log(
    "[PACK456] Lion structural validation:",
    passed ? "PASS" : "FAIL"
  );
  console.log(
    "[PACK456] LION DATA VALIDATION:",
    passed ? "PASS" : "FAIL"
  );

  if (!passed) {
    console.error(
      "[PACK456] Lion validation errors:",
      errors
    );
  } else {
    console.log(
      "[PACK456] Lion Version 1.0:",
      "READY FOR FINAL HUMAN REVIEW"
    );
  }
})();
