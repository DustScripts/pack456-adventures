
/*
===========================================================
PACK 456 ADVENTURES
ARROW OF LIGHT DEN - VERSION 1.0
COMPLETE REPLACEMENT - NOVEMBER 2026

22 adventures:
  6 required
  13 regular electives
  3 special range electives

19 standard requirement-aligned teaching guides
3 special range planning guides

Compatible with Pack 456 app.js Version 1.3.

Current 2024+ Scouting America program.
Arrow of Light is for fifth-grade Cub Scouts.

Official requirements and current safety policies
always take precedence over teaching suggestions.

Checkboxes are temporary teaching aids, not
official advancement records.

No personal information is saved by this file.
===========================================================
*/

"use strict";

(function () {
  const site = window.Pack456;
  const DEN = "Arrow of Light";

  if (!site || !site.directory || !site.guides) {
    console.error(
      "[PACK456] Arrow of Light: data.js not loaded."
    );
    return;
  }

  const ROOT =
    "https://www.scouting.org/cub-scout-adventures/";

  const RANGE =
    "https://www.scouting.org/outdoor-programs/" +
    "range-activities/cub-scout-shooting-sports/";

  // ========================================================
  // ADVENTURE DIRECTORY
  // ========================================================

  const entries = [
    ["Bobcat Arrow of Light", "required", "bobcat-aol"],
    ["Personal Fitness", "required", "personal-fitness"],
    ["First Aid", "required", "first-aid"],
    ["Duty to God", "required", "duty-to-god"],
    ["Citizenship", "required", "citizenship"],
    ["Outdoor Adventurer", "required", "outdoor-adventurer"],

    ["Champions for Nature AOL", "elective", "champions-for-nature-aol"],
    ["Cycling", "elective", "cycling"],
    ["Engineer", "elective", "engineer"],
    ["Estimations", "elective", "estimations"],
    ["Fishing", "elective", "fishing"],
    ["High Tech Outdoors", "elective", "high-tech-outdoors"],
    ["Into the Wild", "elective", "into-the-wild"],
    ["Into the Woods", "elective", "into-the-woods"],
    ["Knife Safety", "elective", "knife-safety"],
    ["Paddle Craft", "elective", "paddle-craft"],
    ["Race Time AOL", "elective", "race-time-aol"],
    ["Summertime Fun AOL", "elective", "summertime-fun-aol"],
    ["Swimming", "elective", "swimming"],

    ["Archery Arrow of Light", "special", "archery-arrow-of-light"],
    ["Slingshot Arrow of Light", "special", "slingshot-arrow-of-light"],
    ["BB Guns Arrow of Light", "special", "bb-guns-arrow-of-light"]
  ];

  site.directory[DEN] = entries.map(
    ([name, type]) => [name, type]
  );

  site.officialLinks = site.officialLinks || {};
  site.officialLinks[DEN] = {};

  entries.forEach(([name, type, slug]) => {
    site.officialLinks[DEN][name] =
      type === "special"
        ? RANGE
        : ROOT + slug + "/";
  });

  // ========================================================
  // GUIDE BUILDERS
  // ========================================================

  function addGuide(
    name,
    supplies,
    tasks,
    note = "",
    planning = false
  ) {
    site.guides[DEN + "|" + name] = {
      supplies,

      tasks: tasks.map(([title, instruction], index) => [
        (planning ? "Planning " : "Requirement ") +
          (index + 1) + ": " + title,
        instruction
      ]),

      completionNote: planning
        ? "PLANNING ONLY - NOT AN OFFICIAL " +
          "ADVANCEMENT CHECKLIST. " + note
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

  function rangeGuide(name, supplies, tasks, note = "") {
    addGuide(name, supplies, tasks, note, true);
  }

  // ========================================================
  // REQUIRED 1 - BOBCAT ARROW OF LIGHT
  // ========================================================

  guide(
    "Bobcat Arrow of Light",
    "Scout Oath and Law, patrol election supplies, " +
    "patrol flag materials, Code of Conduct poster, " +
    "Scouting America sign and salute reference, " +
    "troop visit arrangements, parent guide.",
    [
      [
        "Form a patrol and elect a patrol leader",
        "TEACH: The patrol method. ACTIVITY: " +
        "Choose a patrol name, hold a simple " +
        "patrol leader election, and discuss " +
        "how patrols work together."
      ],
      [
        "Get to know patrol members",
        "TEACH: Teamwork and friendship. " +
        "ACTIVITY: Play a question game, " +
        "conduct introductions, or make " +
        "a patrol flag together."
      ],
      [
        "Recite the Scout Oath and Scout Law",
        "ACTIVITY: Recite the Scout Oath and " +
        "all 12 points of the Scout Law " +
        "together as a patrol."
      ],
      [
        "Create a patrol Code of Conduct",
        "ACTIVITY: Agree on rules for respect, " +
        "safety, cooperation, and leadership. " +
        "Display the finished Code of Conduct."
      ],
      [
        "Demonstrate Scouting America traditions",
        "ACTIVITY: Demonstrate the Scouts BSA " +
        "sign, salute, and handshake. Explain " +
        "when each is used. These are the " +
        "Scouts BSA versions."
      ],
      [
        "Learn the Scout slogan and motto",
        "TEACH: Do a Good Turn Daily and " +
        "Be Prepared. ACTIVITY: Discuss " +
        "examples of using both."
      ],
      [
        "Visit a Scouting America troop",
        "ACTIVITY: With the patrol or a parent " +
        "or legal guardian, visit a Scouts BSA " +
        "troop meeting or approved activity. " +
        "Observe the patrol method and ask " +
        "about troop activities."
      ],
      [
        "Complete family protection activities",
        "AT HOME: With a parent or legal guardian, " +
        "complete the official How to Protect " +
        "Your Children from Child Abuse: " +
        "A Parent's Guide activities."
      ]
    ],
    "Bobcat should be the first required adventure. " +
    "Schedule the troop visit early in the year. " +
    "Family protection activities remain private. " +
    "Follow Youth Protection policies during " +
    "troop visits and all activities."
  );

  // ========================================================
  // REQUIRED 2 - PERSONAL FITNESS
  // ========================================================

  guide(
    "Personal Fitness",
    "Camp cooking equipment, balanced meal " +
    "ingredients, food-group reference, " +
    "14-day activity tracker, fitness supplies, " +
    "Scouting America Annual Health and Medical Record.",
    [
      [
        "Plan and prepare a balanced camping meal",
        "TEACH: Nutrition and camp cooking. " +
        "ACTIVITY: Plan a balanced meal and " +
        "prepare it using equipment appropriate " +
        "for a campout. Discuss safe food handling."
      ],
      [
        "Track physical activity for 14 days",
        "TEACH: Physical fitness. ACTIVITY: " +
        "Track the number of times you are " +
        "active for at least 30 minutes over " +
        "14 days. Share what you enjoyed " +
        "and how you are keeping physically strong."
      ],
      [
        "Complete 30 minutes of group activity",
        "ACTIVITY: With your patrol, a younger " +
        "den, or another person, complete " +
        "30 minutes of activity that includes " +
        "both stretching and moving."
      ],
      [
        "Review your medical record with family",
        "AT HOME: Review the Annual Health " +
        "and Medical Record with a parent " +
        "or legal guardian. Discuss readiness " +
        "for patrol and pack activities."
      ]
    ],
    "SAFETY: Review allergies, dietary restrictions, " +
    "hydration, and exercise limitations. " +
    "Complete Knife Safety before using a knife " +
    "during Cub Scout activities. Do not " +
    "enter medical information on this website."
  );

  // ========================================================
  // REQUIRED 3 - FIRST AID
  // ========================================================

  guide(
    "First Aid",
    "Official Arrow of Light Protect Yourself Rules " +
    "video, parent notice, first-aid demonstration " +
    "supplies, bandages, gloves, CPR training manikin " +
    "if available, first-aid kit materials.",
    [
      [
        "Watch the official personal-safety video",
        "With parent or legal guardian permission, " +
        "watch the Protect Yourself Rules video " +
        "for Arrow of Light. Families should " +
        "receive advance notice of the content."
      ],
      [
        "Explain how to respond to someone needing help",
        "TEACH: Scene safety and getting help. " +
        "ACTIVITY: Explain how to recognize " +
        "danger, alert a trusted adult, " +
        "contact emergency services, and " +
        "avoid putting yourself at risk."
      ],
      [
        "Demonstrate responses to hurry cases",
        "ACTIVITY: With a trained instructor, " +
        "practice appropriate responses for " +
        "serious bleeding, heart attack or " +
        "sudden cardiac arrest, stopped breathing, " +
        "stroke, and poisoning."
      ],
      [
        "Demonstrate helping a choking victim",
        "ACTIVITY: Learn age-appropriate choking " +
        "response from a qualified instructor. " +
        "Practice using a training aid or " +
        "approved simulation, never forceful " +
        "maneuvers on another Scout."
      ],
      [
        "Demonstrate treatment for shock",
        "ACTIVITY: Explain recognizing possible " +
        "shock, calling for emergency help, " +
        "and providing safe assistance while " +
        "waiting for professionals."
      ],
      [
        "Demonstrate common first-aid treatments",
        "ACTIVITY: Demonstrate first aid for " +
        "cuts and scratches, burns and scalds, " +
        "insect and animal bites and stings, " +
        "and nosebleeds."
      ],
      [
        "Make and explain a personal first-aid kit",
        "ACTIVITY: Assemble a portable first-aid " +
        "kit. Explain the purpose and proper " +
        "use of each item."
      ]
    ],
    "CRITICAL SAFETY: Use qualified first-aid " +
    "instructors and simulations. Never practice " +
    "abdominal thrusts or chest compressions " +
    "on another child. For real emergencies, " +
    "call emergency services and follow dispatcher " +
    "instructions. Follow Youth Protection rules " +
    "and do not solicit private disclosures."
  );

  // ========================================================
  // REQUIRED 4 - DUTY TO GOD
  // ========================================================

  guide(
    "Duty to God",
    "Family-selected faith tradition materials, " +
    "Scout Law reference, service organization " +
    "contact information, discussion materials.",
    [
      [
        "Connect family faith traditions to the Scout Law",
        "With a parent or legal guardian, discuss " +
        "family faith traditions or one of the " +
        "family's choosing. Identify a value " +
        "connected to the Scout Law and discuss " +
        "how family members demonstrate it."
      ],
      [
        "Learn about a faith-based service organization",
        "Meet a representative of a local faith-based " +
        "organization that assists people in crisis " +
        "regardless of their faith. Identify " +
        "who the organization helps and how."
      ],
      [
        "Discuss your Duty to God",
        "With a parent, legal guardian, or adult " +
        "leader, discuss what Duty to God means " +
        "to you and how you practice it " +
        "in everyday life."
      ]
    ],
    "Respect each family's beliefs and privacy. " +
    "This adventure can be completed at home. " +
    "If offered as a patrol activity, notify " +
    "families in advance and allow them to " +
    "choose home completion. Do not collect " +
    "private religious information."
  );

  // ========================================================
  // REQUIRED 5 - CITIZENSHIP
  // ========================================================

  guide(
    "Citizenship",
    "Service project planning checklist, SAFE " +
    "Checklist, project supplies, appropriate " +
    "protective equipment, time tracking sheet.",
    [
      [
        "Identify and safely plan a service project",
        "TEACH: Citizenship and service. " +
        "ACTIVITY: Identify a project the patrol " +
        "or pack can accomplish. Apply the four " +
        "SAFE Checklist points and create " +
        "a safe project plan."
      ],
      [
        "Complete two hours of service",
        "ACTIVITY: Participate in one service " +
        "project for at least two hours, " +
        "or multiple projects totaling " +
        "at least two hours."
      ]
    ],
    "SAFETY: Follow the Service Project Planning " +
    "Checklist and SAFE Project Tool Use guidance. " +
    "Use qualified adult supervision and " +
    "age-appropriate tasks. The Citizenship " +
    "service project must be separate from " +
    "the Champions for Nature conservation project."
  );

  // ========================================================
  // REQUIRED 6 - OUTDOOR ADVENTURER
  // ========================================================

  guide(
    "Outdoor Adventurer",
    "Scout Basic Essentials, backpack, tent, " +
    "sleeping bag, campsite map, SAFE Checklist, " +
    "food storage supplies, sanitation equipment, " +
    "Outdoor Code, Leave No Trace reference.",
    [
      [
        "Learn the Scout Basic Essentials",
        "TEACH: Outdoor preparedness. " +
        "ACTIVITY: Identify the Scout Basic " +
        "Essentials and explain their uses. " +
        "Discuss knife restrictions before " +
        "handling a pocketknife."
      ],
      [
        "Plan personal overnight camping gear",
        "ACTIVITY: Decide what to bring, " +
        "including tent, sleeping equipment, " +
        "clothing, and essentials. Determine " +
        "how to carry the gear."
      ],
      [
        "Apply the SAFE Checklist",
        "ACTIVITY: Review Supervision, Assessment, " +
        "Fitness and Skill, and Equipment and " +
        "Environment. Apply all four to " +
        "the planned campout."
      ],
      [
        "Locate the campsite on a map",
        "ACTIVITY: Use a paper or digital map " +
        "to find the planned campsite " +
        "and identify the access route."
      ],
      [
        "Participate in an overnight campout",
        "ACTIVITY: Camp with the Arrow of Light " +
        "patrol or an approved Scouting America " +
        "troop activity while following " +
        "Cub Scout camping rules."
      ],
      [
        "Help organize and set up the campsite",
        "ACTIVITY: Determine appropriate locations " +
        "for the kitchen, eating area, tents, " +
        "and firepit. Help set up patrol gear " +
        "before setting up your own tent."
      ],
      [
        "Demonstrate campsite food safety",
        "ACTIVITY: Explain safe food storage, " +
        "food preparation, handwashing, and " +
        "kitchen sanitation. Demonstrate " +
        "these practices during the campout."
      ],
      [
        "Evaluate the campout",
        "ACTIVITY: After camping, discuss what " +
        "went well and what to improve. " +
        "Explain how you followed the " +
        "Outdoor Code and Leave No Trace " +
        "Principles for Kids."
      ]
    ],
    "CRITICAL SAFETY: A BALOO-trained adult leader " +
    "is required for an Arrow of Light patrol " +
    "or pack campout under current policies. " +
    "Follow Youth Protection, hazardous weather, " +
    "campfire, food allergy, and campsite rules. " +
    "When camping with a troop, Arrow of Light " +
    "Scouts still follow Cub Scout camping rules. " +
    "Knife Safety must be completed before " +
    "using a knife in Cub Scout activities."
  );

  // ========================================================
  // ELECTIVE 1 - CHAMPIONS FOR NATURE AOL
  // ========================================================

  guide(
    "Champions for Nature AOL",
    "Local food pictures, agricultural references, " +
    "grocery store or farmers market information, " +
    "food waste examples, service project supplies.",
    [
      [
        "Identify foods produced in your state",
        "ACTIVITY: Research foods grown or " +
        "processed in Virginia or the " +
        "Scout's home state."
      ],
      [
        "Explore the benefits of local food",
        "ACTIVITY: Discuss freshness, " +
        "transportation, local economies, " +
        "and other benefits of purchasing " +
        "locally produced food."
      ],
      [
        "Explore food deserts",
        "ACTIVITY: Learn what a food desert " +
        "is and investigate barriers to " +
        "accessing nutritious food."
      ],
      [
        "Explore food oases",
        "ACTIVITY: Learn what a food oasis " +
        "is and identify ways communities " +
        "can improve access to nutritious food."
      ],
      [
        "Learn how to reduce food waste",
        "ACTIVITY: Plan appropriate portions, " +
        "discuss food storage, and identify " +
        "ways to use leftovers safely."
      ],
      [
        "Participate in a conservation service project",
        "ACTIVITY: Complete an approved " +
        "conservation service project " +
        "with appropriate supervision."
      ]
    ],
    "SAFETY: Follow food allergy and safe " +
    "food handling practices. Use the Service " +
    "Project Planning Checklist. This conservation " +
    "project must be separate from the " +
    "Citizenship service project."
  );

  // ========================================================
  // ELECTIVE 2 - CYCLING
  // ========================================================

  guide(
    "Cycling",
    "Bicycle, fitted helmet, Scout Basic Essentials, " +
    "bike repair tools, chain lubricant, " +
    "bicycle lock, map, water.",
    [
      [
        "Choose gear for a long bicycle ride",
        "ACTIVITY: Identify appropriate riding " +
        "gear, supplies, and a safe way " +
        "to carry them."
      ],
      [
        "Explain multi-gear bicycles",
        "ACTIVITY: Explore how gears work " +
        "and why they help with different " +
        "terrain and riding conditions."
      ],
      [
        "Demonstrate chain lubrication",
        "ACTIVITY: With adult supervision, " +
        "demonstrate proper bicycle " +
        "chain maintenance."
      ],
      [
        "Demonstrate bicycle locks",
        "ACTIVITY: Compare different locks " +
        "and show how to secure a bicycle."
      ],
      [
        "Repair a flat tire",
        "ACTIVITY: Demonstrate repairing " +
        "a flat tire with appropriate " +
        "adult supervision."
      ],
      [
        "Plan a ten-mile route",
        "ACTIVITY: With patrol, pack, or family, " +
        "use a map to plan a bicycle route " +
        "of at least ten miles."
      ],
      [
        "Complete a ten-mile bicycle ride",
        "ACTIVITY: Ride at least ten miles " +
        "with patrol, pack, or family, " +
        "using the buddy system."
      ]
    ],
    "SAFETY: Wear a correctly fitted helmet. " +
    "Perform an ABC Quick Check before riding. " +
    "Follow current Bicycle Safety guidelines. " +
    "Electric and hybrid bicycles are not " +
    "allowed in Scouting activities. " +
    "Review route, traffic, weather, hydration, " +
    "and Activity Consent requirements."
  );

  // ========================================================
  // ELECTIVE 3 - ENGINEER
  // ========================================================

  guide(
    "Engineer",
    "Engineering pictures, blueprints, graph paper, " +
    "pencils, ruler, building materials, " +
    "safe construction tools.",
    [
      [
        "Explore three engineering fields",
        "TEACH: Civil, electrical, and mechanical " +
        "engineering. ACTIVITY: Identify each " +
        "field's focus, related sciences, " +
        "and common products."
      ],
      [
        "Choose an engineering field",
        "ACTIVITY: Select one of the three " +
        "fields for the remaining requirements."
      ],
      [
        "Examine engineering plans",
        "ACTIVITY: Review blueprints or " +
        "specifications used by the " +
        "selected engineering field."
      ],
      [
        "Choose a construction project",
        "ACTIVITY: Identify a project to build " +
        "related to the selected field."
      ],
      [
        "Build using the engineering process",
        "ACTIVITY: Plan, design, build, test, " +
        "and improve the project using " +
        "safe materials."
      ]
    ],
    "SAFETY: Use age-appropriate tools and " +
    "qualified adult supervision. " +
    "Do not work with live electrical circuits."
  );

  // ========================================================
  // ELECTIVE 4 - ESTIMATIONS
  // ========================================================

  guide(
    "Estimations",
    "Measuring cups, food examples, clock, " +
    "sundial supplies, measuring tape, " +
    "map, ruler, calculator.",
    [
      [
        "Estimate food measurements",
        "ACTIVITY: Estimate quantities or " +
        "serving sizes, then compare " +
        "with actual measurements."
      ],
      [
        "Estimate the time of day",
        "ACTIVITY: Use the position of the " +
        "sun or a homemade sundial to " +
        "estimate the time."
      ],
      [
        "Estimate the height of a distant object",
        "ACTIVITY: Use a stick method or " +
        "simple measuring instrument " +
        "to estimate a tall object's height."
      ],
      [
        "Estimate distance between two points",
        "ACTIVITY: Estimate distance using " +
        "a map, scale, or other " +
        "appropriate measurement method."
      ]
    ],
    "SAFETY: Stay clear of traffic and " +
    "hazardous terrain. Never look directly " +
    "at the sun when estimating time."
  );

  // ========================================================
  // ELECTIVE 5 - FISHING
  // ========================================================

  guide(
    "Fishing",
    "Fishing rod, tackle, knot cord, fishing " +
    "location map, weather forecast, SAFE " +
    "Checklist, local fishing regulations.",
    [
      [
        "Plan a fishing outing",
        "ACTIVITY: Choose a location and " +
        "target fish species. Use the " +
        "choice for remaining requirements."
      ],
      [
        "Apply the SAFE Checklist",
        "ACTIVITY: Plan appropriate supervision, " +
        "assessment, fitness and skill, " +
        "and equipment and environment."
      ],
      [
        "Describe the fish habitat",
        "ACTIVITY: Research the environment " +
        "where the selected fish lives."
      ],
      [
        "List fishing supplies",
        "ACTIVITY: Prepare an equipment " +
        "and materials checklist."
      ],
      [
        "Choose and tie a fishing knot",
        "ACTIVITY: Select a suitable knot " +
        "for attaching a hook and " +
        "demonstrate tying it."
      ],
      [
        "Choose rod and tackle independently",
        "ACTIVITY: Select appropriate fishing " +
        "equipment, then have an adult " +
        "review the selection."
      ],
      [
        "Fish for at least one hour",
        "ACTIVITY: Spend at least one hour " +
        "fishing while following local " +
        "rules and regulations."
      ]
    ],
    "SAFETY: Obtain required permissions and " +
    "licenses. Use the buddy system, adult " +
    "supervision, safe casting distances, " +
    "and weather precautions. Do not fish " +
    "during thunderstorms or near swimmers."
  );

  // ========================================================
  // ELECTIVE 6 - HIGH TECH OUTDOORS
  // ========================================================

  guide(
    "High Tech Outdoors",
    "Adult-approved smartphone or tablet, " +
    "weather app, knot-tying app, rope, " +
    "camping gear examples, design paper.",
    [
      [
        "Use technology to check outdoor weather",
        "With an adult, use a weather app " +
        "or website to check the forecast " +
        "and discuss necessary preparations."
      ],
      [
        "Learn a knot using an app",
        "With an adult, find a knot-tying app, " +
        "choose one knot, and tie it " +
        "using the instructions."
      ],
      [
        "Discuss improvements in camping gear",
        "ACTIVITY: Compare older and newer " +
        "camping equipment. Discuss " +
        "how technology improved it."
      ],
      [
        "Design an improvement to camping gear",
        "ACTIVITY: Draw, model, or describe " +
        "a technological improvement " +
        "to camping gear."
      ]
    ],
    "SAFETY: Follow Digital Safety and Online " +
    "Scouting Activities guidelines. " +
    "Adult supervision is required for " +
    "online resources. Avoid posting " +
    "personal information."
  );

  // ========================================================
  // ELECTIVE 7 - INTO THE WILD
  // ========================================================

  guide(
    "Into the Wild",
    "Wildlife observation journal, pencils, " +
    "binoculars, animal reference guide, " +
    "ecosystem model materials.",
    [
      [
        "Observe a wild animal",
        "ACTIVITY: Visit a place with a " +
        "variety of wild animals. Select " +
        "one animal and observe its behavior."
      ],
      [
        "Build an ecosystem model",
        "ACTIVITY: Create a diorama or " +
        "other model showing the chosen " +
        "animal's ecosystem."
      ],
      [
        "Investigate animal relationships",
        "ACTIVITY: Explore how the selected " +
        "animal coexists with other " +
        "animals in the wild."
      ],
      [
        "Describe human interaction",
        "ACTIVITY: Explain how people " +
        "interact with the animal's ecosystem."
      ],
      [
        "Explore wildlife management",
        "ACTIVITY: Learn how conservation " +
        "and wildlife management benefit " +
        "the chosen animal."
      ]
    ],
    "SAFETY: Observe wildlife from a safe " +
    "distance. Do not feed, touch, or " +
    "disturb wild animals or nests. " +
    "Follow Leave No Trace principles."
  );

  // ========================================================
  // ELECTIVE 8 - INTO THE WOODS
  // ========================================================

  guide(
    "Into the Woods",
    "Tree identification guide, field notebook, " +
    "pencils, camera, leaf samples, local " +
    "forestry resources.",
    [
      [
        "Conduct a tree inventory",
        "ACTIVITY: Visit an area with " +
        "trees and plants. Record trees " +
        "observed and select one tree " +
        "for further study."
      ],
      [
        "Classify the selected tree",
        "ACTIVITY: Determine whether " +
        "the tree is deciduous or evergreen."
      ],
      [
        "Research the tree's origin",
        "ACTIVITY: Determine whether " +
        "the tree is native or introduced " +
        "to the area."
      ],
      [
        "Investigate wildfire adaptation",
        "ACTIVITY: Research how the selected " +
        "tree responds to or survives wildfire."
      ],
      [
        "Explore wildlife use of the tree",
        "ACTIVITY: Identify how animals " +
        "use the tree for food, shelter, " +
        "nesting, or other needs."
      ]
    ],
    "SAFETY: Do not climb trees or disturb " +
    "wildlife. Avoid poisonous plants and " +
    "hazardous terrain. Adults supervise " +
    "any demonstrations involving fire."
  );

  // ========================================================
  // ELECTIVE 9 - KNIFE SAFETY
  // ========================================================

  guide(
    "Knife Safety",
    "Cub Scout Knife Safety Rules, approved " +
    "pocketknife, kitchen knife, cutting board, " +
    "practice food, safe carving materials, " +
    "first-aid kit.",
    [
      [
        "Learn knife safety rules",
        "TEACH: Stop, Away, Sharp, Store. " +
        "ACTIVITY: Explain and demonstrate " +
        "the Cub Scout Knife Safety Rules."
      ],
      [
        "Demonstrate the knife safety circle",
        "ACTIVITY: Establish a safe working " +
        "space with no one within arm's reach."
      ],
      [
        "Demonstrate safe knife care and use",
        "ACTIVITY: Demonstrate safe handling, " +
        "cleaning, care, and storage " +
        "under direct adult supervision."
      ],
      [
        "Make a useful object on a campout",
        "ACTIVITY: During a campout, " +
        "demonstrate proper pocketknife use " +
        "to create a useful object."
      ],
      [
        "Demonstrate kitchen knife techniques",
        "ACTIVITY: Choose an appropriate " +
        "cooking knife and demonstrate " +
        "slicing, chopping, and mincing."
      ]
    ],
    "CRITICAL SAFETY: Arrow of Light Scouts must " +
    "complete this adventure before using a " +
    "knife during Cub Scout activities, even " +
    "if they earned Bear Whittling or Webelos " +
    "Chef's Knife. Confirm the meeting site " +
    "allows knives. Use direct adult supervision, " +
    "a safety circle, and age-appropriate " +
    "equipment. This is not the Scouts BSA " +
    "Totin' Chip certification."
  );

  // ========================================================
  // ELECTIVE 10 - PADDLE CRAFT
  // ========================================================

  guide(
    "Paddle Craft",
    "Approved canoe, kayak, or stand-up paddleboard; " +
    "paddle; fitted U.S. Coast Guard-approved " +
    "life jacket; buddy tags; qualified " +
    "aquatic supervisors.",
    [
      [
        "Pass the swimmer test",
        "PREREQUISITE: Pass the Scouting America " +
        "swimmer test before attempting " +
        "requirements 5 through 9."
      ],
      [
        "Choose a paddlecraft",
        "ACTIVITY: Select a canoe, kayak, " +
        "or stand-up paddleboard for " +
        "the remaining requirements."
      ],
      [
        "Review Safety Afloat",
        "ACTIVITY: Review the applicable " +
        "Safety Afloat requirements."
      ],
      [
        "Demonstrate life-jacket selection and fit",
        "ACTIVITY: Choose and properly wear " +
        "a correctly sized approved life jacket."
      ],
      [
        "Swim 25 feet wearing a life jacket",
        "ACTIVITY: Under qualified supervision, " +
        "jump feet first into water over " +
        "your head while wearing a life jacket, " +
        "then swim 25 feet."
      ],
      [
        "Demonstrate safe craft entry and exit",
        "ACTIVITY: Demonstrate safe entry " +
        "and exit for the chosen craft."
      ],
      [
        "Discuss capsize response",
        "ACTIVITY: Explain what to do " +
        "if the craft tips or the " +
        "Scout falls into the water."
      ],
      [
        "Learn two paddle strokes",
        "ACTIVITY: Learn and practice " +
        "the power stroke and sweep stroke."
      ],
      [
        "Complete 30 minutes of paddling",
        "ACTIVITY: Participate in at least " +
        "30 minutes of approved " +
        "paddlecraft activity."
      ]
    ],
    "CRITICAL SAFETY: The swimmer test is " +
    "required before requirements 5-9. " +
    "Follow Safety Afloat, qualified adult " +
    "supervision, applicable CPR and first-aid " +
    "training, the required supervision ratio, " +
    "approved calm-water conditions, " +
    "and properly fitted life jackets. " +
    "No unauthorized float trips or expeditions."
  );

  // ========================================================
  // ELECTIVE 11 - RACE TIME AOL
  // ========================================================

  guide(
    "Race Time AOL",
    "Pinewood Derby or Raingutter Regatta kit, " +
    "race rules, approved tools, safety glasses, " +
    "sportsmanship discussion materials.",
    [
      [
        "Build a race vehicle",
        "ACTIVITY: With adult supervision, " +
        "build a Pinewood Derby car or " +
        "Raingutter Regatta boat."
      ],
      [
        "Learn the race rules",
        "ACTIVITY: Review the rules " +
        "for the selected race."
      ],
      [
        "Mentor a younger den",
        "ACTIVITY: Help younger Scouts " +
        "prepare for the race by sharing " +
        "building advice, explaining " +
        "rules, or teaching sportsmanship."
      ],
      [
        "Discuss sportsmanship",
        "ACTIVITY: Before racing, discuss " +
        "with the patrol how to demonstrate " +
        "good sportsmanship."
      ],
      [
        "Participate in the race",
        "ACTIVITY: Participate in an " +
        "approved Pinewood Derby or " +
        "Raingutter Regatta event."
      ]
    ],
    "SAFETY: Follow event rules and age-appropriate " +
    "tool restrictions. Adults supervise " +
    "cutting and other restricted operations. " +
    "Provide safe working areas."
  );

  // ========================================================
  // ELECTIVE 12 - SUMMERTIME FUN AOL
  // ========================================================

  guide(
    "Summertime Fun AOL",
    "Summer Cub Scout activity calendar, " +
    "patrol, pack, and council event information.",
    [
      [
        "Participate in three summer Cub Scout activities",
        "ACTIVITY: Between May and August, " +
        "participate in a total of three " +
        "qualifying Cub Scout activities " +
        "with the patrol, pack, or council."
      ]
    ],
    "One requirement consists of three activities. " +
    "This adventure is intended for the summer " +
    "after completing fourth grade. " +
    "Follow safety policies for each activity."
  );

  // ========================================================
  // ELECTIVE 13 - SWIMMING
  // ========================================================

  guide(
    "Swimming",
    "Approved swimming facility, qualified " +
    "aquatic supervisors, rescue demonstration " +
    "equipment, buddy tags, suitable swimwear.",
    [
      [
        "Review Safe Swim Defense",
        "ACTIVITY: Learn the Safe Swim Defense " +
        "principles and the rules of " +
        "the approved swimming area."
      ],
      [
        "Explain and demonstrate rescue methods",
        "ACTIVITY: Explain the order of rescue " +
        "and demonstrate reach and throw " +
        "rescue techniques from land."
      ],
      [
        "Attempt the swimmer test",
        "ACTIVITY: Attempt the Scouting America " +
        "swimmer test under qualified supervision."
      ],
      [
        "Complete 30 minutes of free swim",
        "ACTIVITY: Participate in at least " +
        "30 minutes of free swimming within " +
        "your ability group. Practice the " +
        "buddy system and participate " +
        "in at least three buddy checks " +
        "per half hour."
      ]
    ],
    "SAFETY: Follow Safe Swim Defense, qualified " +
    "adult supervision, buddy procedures, " +
    "and ability classifications. Practice " +
    "reach and throw rescues from land; " +
    "do not conduct unsafe in-water rescues."
  );

  // ========================================================
  // THREE SPECIAL RANGE ELECTIVES
  // PLANNING ONLY
  // ========================================================

  const rangeSafety =
    "Range and target activities must be conducted " +
    "at approved events with qualified personnel " +
    "and authorized equipment. Official range " +
    "lesson plans determine the actual requirements. " +
    "These planning steps do not establish " +
    "advancement completion.";

  [
    ["Archery Arrow of Light", "archery"],
    ["Slingshot Arrow of Light", "slingshot"],
    ["BB Guns Arrow of Light", "BB gun"]
  ].forEach(([name, activity]) => {
    rangeGuide(
      name,
      "Approved district or council range event, " +
      "qualified instructors, authorized equipment " +
      "and protective gear.",
      [
        [
          "Arrange an approved " + activity + " session",
          "Contact the district or council " +
          "to identify an authorized event."
        ],
        [
          "Review the official range lesson plan",
          "Qualified range personnel teach " +
          "the appropriate safety commands, " +
          "handling procedures, and " +
          "required shooting activities."
        ],
        [
          "Confirm completion with event staff",
          "Use the approved event's official " +
          "advancement verification procedures."
        ]
      ],
      rangeSafety
    );
  });

  // ========================================================
  // CONSOLIDATED VALIDATION
  // ========================================================

  const expectedCounts = {
    "Bobcat Arrow of Light": 8,
    "Personal Fitness": 4,
    "First Aid": 7,
    "Duty to God": 3,
    "Citizenship": 2,
    "Outdoor Adventurer": 8,

    "Champions for Nature AOL": 6,
    "Cycling": 7,
    "Engineer": 5,
    "Estimations": 4,
    "Fishing": 7,
    "High Tech Outdoors": 4,
    "Into the Wild": 5,
    "Into the Woods": 5,
    "Knife Safety": 5,
    "Paddle Craft": 9,
    "Race Time AOL": 5,
    "Summertime Fun AOL": 1,
    "Swimming": 4,

    "Archery Arrow of Light": 3,
    "Slingshot Arrow of Light": 3,
    "BB Guns Arrow of Light": 3
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
    errors.push("Expected 22 adventures.");
  }

  if (
    categories.required !== 6 ||
    categories.elective !== 13 ||
    categories.special !== 3
  ) {
    errors.push("Incorrect category counts.");
  }

  if (
    new Set(entries.map(e => e[0])).size !==
    entries.length
  ) {
    errors.push("Duplicate adventure names.");
  }

  entries.forEach(([name, type]) => {
    const key = DEN + "|" + name;
    const g = site.guides[key];

    if (!g) {
      errors.push("Missing guide: " + name);
      return;
    }

    if (
      typeof g.supplies !== "string" ||
      !g.supplies.trim()
    ) {
      errors.push("Missing supplies: " + name);
    }

    if (
      typeof g.completionNote !== "string" ||
      !g.completionNote.trim()
    ) {
      errors.push("Missing safety notes: " + name);
    }

    if (!Array.isArray(g.tasks)) {
      errors.push("Invalid tasks: " + name);
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
          "Invalid task: " + name +
          " #" + (index + 1)
        );
      }
    });

    const shouldVerify = type !== "special";

    if (g.verifiedRequirements !== shouldVerify) {
      errors.push(
        "Incorrect verification status: " + name
      );
    }

    const expectedTaskType =
      type === "special"
        ? "planning"
        : "requirements";

    if (g.taskType !== expectedTaskType) {
      errors.push("Incorrect task type: " + name);
    }

    if (!site.officialLinks[DEN][name]) {
      errors.push("Missing official link: " + name);
    }
  });

  const standardCount = entries.filter(
    ([name, type]) =>
      type !== "special" &&
      site.guides[DEN + "|" + name]
        ?.verifiedRequirements === true
  ).length;

  const planningCount = entries.filter(
    ([name]) =>
      site.guides[DEN + "|" + name]
        ?.verifiedRequirements === false
  ).length;

  if (standardCount !== 19) {
    errors.push("Expected 19 standard guides.");
  }

  if (planningCount !== 3) {
    errors.push("Expected 3 range planning guides.");
  }

  const allRequired = entries
    .filter(e => e[1] === "required")
    .every(([name]) =>
      site.guides[DEN + "|" + name]
        ?.verifiedRequirements === true
    );

  if (!allRequired) {
    errors.push("Required adventures incomplete.");
  }

  const safetyChecks = {
    firstAid:
      site.guides[DEN + "|First Aid"]
        ?.completionNote.includes("CRITICAL SAFETY"),

    knife:
      site.guides[DEN + "|Knife Safety"]
        ?.completionNote.includes("CRITICAL SAFETY"),

    paddle:
      site.guides[DEN + "|Paddle Craft"]
        ?.completionNote.includes("swimmer test"),

    camp:
      site.guides[DEN + "|Outdoor Adventurer"]
        ?.completionNote.includes("BALOO"),

    service:
      site.guides[DEN + "|Citizenship"]
        ?.tasks[1]?.[1].includes("two hours"),

    troopVisit:
      site.guides[DEN + "|Bobcat Arrow of Light"]
        ?.tasks[6]?.[1].includes("troop"),

    swim:
      site.guides[DEN + "|Swimming"]
        ?.completionNote.includes("Safe Swim Defense"),

    youthProtection:
      site.guides[DEN + "|First Aid"]
        ?.completionNote.includes("Youth Protection")
  };

  Object.entries(safetyChecks).forEach(
    ([name, passed]) => {
      if (!passed) {
        errors.push(
          "Missing required safety/detail note: " + name
        );
      }
    }
  );

  const passed = errors.length === 0;

  console.log(
    "[PACK456] Arrow of Light Version: 1.0"
  );

  console.log(
    "[PACK456] Arrow of Light adventures:",
    entries.length
  );

  console.log(
    "[PACK456] Arrow of Light categories:",
    categories
  );

  console.log(
    "[PACK456] Arrow of Light standard guides:",
    standardCount
  );

  console.log(
    "[PACK456] Arrow of Light range planning guides:",
    planningCount
  );

  console.log(
    "[PACK456] Arrow of Light all required guides:",
    allRequired ? "PASS" : "FAIL"
  );

  console.log(
    "[PACK456] Arrow of Light safety checks:",
    Object.values(safetyChecks).every(Boolean)
      ? "PASS"
      : "FAIL"
  );

  console.log(
    "[PACK456] ARROW OF LIGHT DATA VALIDATION:",
    passed ? "PASS" : "FAIL"
  );

  if (!passed) {
    console.error(
      "[PACK456] Arrow of Light validation errors:",
      errors
    );
  } else {
    console.log(
      "[PACK456] Arrow of Light Version 1.0:",
      "READY FOR FINAL HUMAN REVIEW"
    );
  }
})();
