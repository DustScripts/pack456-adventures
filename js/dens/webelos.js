
/*
===========================================================
PACK 456 ADVENTURES
WEBELOS DEN - VERSION 1.0
COMPLETE REPLACEMENT - NOVEMBER 2026

26 adventures:
  6 required
  17 regular electives
  3 special range electives

23 standard adventure teaching guides
3 range adventure planning guides

Compatible with Pack 456 app.js Version 1.3.

Based on the current Scouting America Cub Scout
adventure program (2024 and later).

IMPORTANT:
Official Scouting America requirements and safety
policies always take precedence.

Checkboxes are temporary teaching aids and are
not official advancement records.

No personal data is saved by this file.
===========================================================
*/

"use strict";

(function () {
  const site = window.Pack456;
  const DEN = "Webelos";

  if (!site || !site.directory || !site.guides) {
    console.error("[PACK456] Webelos: data.js not loaded.");
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
    ["Bobcat Webelos", "required", "bobcat-webelos"],
    ["Stronger, Faster, Higher", "required", "stronger-faster-higher"],
    ["My Safety", "required", "my-safety"],
    ["My Family", "required", "my-family"],
    ["My Community", "required", "my-community"],
    ["Webelos Walkabout", "required", "webelos-walkabout"],

    ["Aquanaut", "elective", "aquanaut"],
    ["Art Explosion", "elective", "art-explosion"],
    ["Aware and Care", "elective", "aware-and-care"],
    ["Build It", "elective", "build-it"],
    ["Catch the Big One", "elective", "catch-the-big-one"],
    ["Champions for Nature Webelos", "elective", "champions-for-nature-webelos"],
    ["Chef's Knife", "elective", "chefs-knife"],
    ["Earth Rocks", "elective", "earth-rocks"],
    ["Let's Camp Webelos", "elective", "lets-camp-webelos"],
    ["Math on the Trail", "elective", "math-on-the-trail"],
    ["Modular Design", "elective", "modular-design"],
    ["Paddle Onward", "elective", "paddle-onward"],
    ["Pedal Away", "elective", "pedal-away"],
    ["Race Time Webelos", "elective", "race-time-webelos"],
    ["Summertime Fun Webelos", "elective", "summertime-fun-webelos"],
    ["Tech on the Trail", "elective", "tech-on-the-trail"],
    ["Yo-yo", "elective", "yo-yo"],

    ["Archery Webelos", "special", "archery-webelos"],
    ["Slingshot Webelos", "special", "slingshot-webelos"],
    ["BB Guns Webelos", "special", "bb-guns-webelos"]
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
  // GUIDE BUILDER
  // ========================================================

  function addGuide(
    name,
    supplies,
    requirements,
    safety = "",
    planning = false
  ) {
    site.guides[DEN + "|" + name] = {
      supplies,

      tasks: requirements.map((item, index) => [
        (planning ? "Planning " : "Requirement ") +
          (index + 1) + ": " + item[0],
        item[1]
      ]),

      completionNote: planning
        ? "PLANNING ONLY - NOT ADVANCEMENT CREDIT. " +
          safety
        : safety,

      verifiedRequirements: !planning,

      taskType: planning
        ? "planning"
        : "requirements"
    };
  }

  function guide(name, supplies, requirements, safety) {
    addGuide(name, supplies, requirements, safety, false);
  }

  function rangeGuide(name, supplies, requirements, safety) {
    addGuide(name, supplies, requirements, safety, true);
  }

  // ========================================================
  // REQUIRED 1 - BOBCAT WEBELOS
  // ========================================================

  guide(
    "Bobcat Webelos",
    "Scout Oath and Law poster, den Code of Conduct " +
    "materials, denner job cards, Cub Scout traditions " +
    "reference, official parent protection booklet.",
    [
      [
        "Get to know den members",
        "TEACH: Friendship and teamwork. ACTIVITY: " +
        "Play a name game or conduct short interviews " +
        "and introduce fellow den members."
      ],
      [
        "Recite the Scout Oath and Law",
        "ACTIVITY: Recite both with the den and den " +
        "leader. Describe the three points of the " +
        "Scout Oath: duty to God and country, " +
        "duty to others, and duty to self."
      ],
      [
        "Learn about the Scout Law",
        "ACTIVITY: Discuss the Scout Law points. " +
        "Use example situations to explain how " +
        "Scouts practice them."
      ],
      [
        "Create a den Code of Conduct",
        "ACTIVITY: Work together to develop rules " +
        "for respect, safety, teamwork, and " +
        "participation. Create a den poster."
      ],
      [
        "Learn about the denner position",
        "TEACH: Youth leadership. ACTIVITY: " +
        "Explain the denner's duties and how " +
        "the position helps the den."
      ],
      [
        "Demonstrate Cub Scout traditions",
        "ACTIVITY: Demonstrate the Cub Scout sign, " +
        "salute, and handshake. Explain when " +
        "each is used."
      ],
      [
        "Complete family protection activities",
        "AT HOME: With a parent or legal guardian, " +
        "complete the activities in How to Protect " +
        "Your Children from Child Abuse: " +
        "A Parent's Guide."
      ]
    ],
    "SAFETY: Family protection activities are private. " +
    "Never collect personal disclosures or answers. " +
    "Bobcat should be the first required adventure."
  );

  // ========================================================
  // REQUIRED 2 - STRONGER, FASTER, HIGHER
  // ========================================================

  guide(
    "Stronger, Faster, Higher",
    "Healthy meal ingredients, cooking equipment, " +
    "fitness supplies, water, stretching area, " +
    "relaxation materials, family health record.",
    [
      [
        "Plan, cook, and eat a balanced meal",
        "With den or family, plan a balanced meal. " +
        "Help prepare and cook it safely, then " +
        "eat the meal together."
      ],
      [
        "Complete 30 minutes of group activity",
        "Be active with the den or at least " +
        "one other person for 30 minutes. " +
        "Include both stretching and movement."
      ],
      [
        "Complete 15 minutes of personal exercise",
        "Choose exercises that raise the heart rate, " +
        "work muscles, and improve flexibility. " +
        "Complete 15 minutes."
      ],
      [
        "Practice 10 minutes of relaxation",
        "Try appropriate quiet breathing, " +
        "stretching, or another relaxing " +
        "activity for 10 minutes."
      ],
      [
        "Review the Annual Health and Medical Record",
        "With a parent or legal guardian, review " +
        "the Scouting America Annual Health and " +
        "Medical Record and discuss ability to " +
        "participate in den and pack activities."
      ]
    ],
    "SAFETY: Check allergies, food safety, " +
    "cooking supervision, and exercise limitations. " +
    "Health records remain private and must not " +
    "be entered into this website."
  );

  // ========================================================
  // REQUIRED 3 - MY SAFETY
  // ========================================================

  guide(
    "My Safety",
    "Official Webelos Protect Yourself Rules video, " +
    "parent notification, household hazard pictures, " +
    "home safety checklist, Be Prepared for Natural " +
    "Events worksheet.",
    [
      [
        "Watch the Webelos Protect Yourself Rules video",
        "With parent or legal guardian permission, " +
        "watch the official Webelos-rank video. " +
        "Parents should be informed of the content " +
        "before a den presentation."
      ],
      [
        "Identify hazardous household items",
        "With an adult, identify potentially " +
        "hazardous items at home. Confirm proper " +
        "storage and locate package instructions " +
        "for accidental exposure. Do not handle " +
        "hazardous substances."
      ],
      [
        "Identify ways to keep spaces safe",
        "Review home or meeting-place safety " +
        "practices, such as clear exits, safe " +
        "storage, and emergency preparedness."
      ],
      [
        "Prepare for two natural events",
        "Complete the official Be Prepared for " +
        "Natural Events worksheet for at least " +
        "two events likely to occur locally."
      ]
    ],
    "SAFETY: Follow Youth Protection reporting " +
    "requirements. Adults handle hazardous items. " +
    "Do not collect private family answers. " +
    "Use the official natural-events worksheet."
  );

  // ========================================================
  // REQUIRED 4 - MY FAMILY
  // ========================================================

  guide(
    "My Family",
    "Family-selected tradition materials, craft " +
    "supplies, kindness project materials, " +
    "reverence discussion resources.",
    [
      [
        "Explore three family faith celebrations",
        "With a parent or legal guardian, identify " +
        "three family faith holidays or celebrations. " +
        "Make a craft, artwork, or food item " +
        "associated with a family tradition."
      ],
      [
        "Carry out an act of kindness",
        "Choose a helpful action for another " +
        "person and complete it."
      ],
      [
        "Explore another faith respectfully",
        "With a parent or legal guardian, identify " +
        "a religion or faith different from your " +
        "family's and two things it shares " +
        "with your family's beliefs."
      ],
      [
        "Discuss reverence",
        "With a parent or legal guardian, discuss " +
        "what being reverent means and explain " +
        "how you practice reverence in daily life."
      ]
    ],
    "ALTERNATIVE COMPLETION: This adventure may " +
    "also be earned through a qualifying religious " +
    "emblem of the family's choosing. Respect " +
    "family beliefs and privacy. The standard " +
    "four requirements are one completion route."
  );

  // ========================================================
  // REQUIRED 5 - MY COMMUNITY
  // ========================================================

  guide(
    "My Community",
    "Voting examples, ballots, government branch " +
    "chart, law timeline supplies, service-project " +
    "planning materials.",
    [
      [
        "Learn majority and plurality voting",
        "Compare winning by more than half the " +
        "votes with winning the most votes. " +
        "Conduct a mock den election."
      ],
      [
        "Interview someone elected to a position",
        "Speak with an elected person, such as " +
        "a student council officer or local " +
        "official. Learn what voting method " +
        "was used and why."
      ],
      [
        "Create a federal law timeline",
        "Choose a federal law. Create a timeline " +
        "of its history showing involvement of " +
        "the legislative, executive, and " +
        "judicial branches."
      ],
      [
        "Participate in a service project",
        "Help complete an approved community " +
        "service project with the den or pack."
      ]
    ],
    "SAFETY: Follow service-project planning and " +
    "age-appropriate tool guidance. Present " +
    "government topics factually and respectfully."
  );

  // ========================================================
  // REQUIRED 6 - WEBELOS WALKABOUT
  // ========================================================

  guide(
    "Webelos Walkabout",
    "Cub Scout Six Essentials, route map, weather " +
    "forecast, first-aid demonstration supplies, " +
    "water, walking shoes, SAFE Checklist.",
    [
      [
        "Prepare for a two-mile outdoor walk",
        "Gather the Six Essentials and choose " +
        "weather-appropriate clothing and shoes."
      ],
      [
        "Plan a two-mile route",
        "Use a paper or digital map to plan " +
        "a suitable two-mile walking route."
      ],
      [
        "Check the weather",
        "Review the forecast for the planned " +
        "walking time and adjust plans if needed."
      ],
      [
        "Review the four SAFE Checklist points",
        "Discuss Supervision, Assessment, Fitness " +
        "and Skill, and Equipment and Environment. " +
        "Explain how each applies to the walk."
      ],
      [
        "Demonstrate five first-aid responses",
        "Demonstrate first aid for a blister, " +
        "sprained ankle, sunburn, dehydration, " +
        "and heat-related illness."
      ],
      [
        "Complete the two-mile walk",
        "Walk the planned route with den, pack, " +
        "or family while practicing the Outdoor " +
        "Code and Leave No Trace Principles for Kids."
      ],
      [
        "Review the walk afterward",
        "Discuss what went well and what " +
        "you would change next time."
      ]
    ],
    "SAFETY: Use the buddy system, active adult " +
    "supervision, appropriate hydration, and " +
    "weather precautions. First-aid practice " +
    "should be simulated, not performed on " +
    "actual injuries."
  );

  // ========================================================
  // ELECTIVE 1 - AQUANAUT
  // ========================================================

  guide(
    "Aquanaut",
    "Approved swimming facility, qualified " +
    "supervisors, rescue demonstration equipment, " +
    "buddy tags, suitable swimwear.",
    [
      [
        "Explain swimming safety precautions",
        "Describe the precautions required " +
        "before entering the water."
      ],
      [
        "Demonstrate reach and throw rescue",
        "Explain the order of rescue. Practice " +
        "reach and throw techniques from land " +
        "under qualified supervision."
      ],
      [
        "Learn about hypothermia",
        "Explain how to prevent hypothermia " +
        "and what to do when it is suspected."
      ],
      [
        "Attempt to tread water",
        "Attempt treading water under " +
        "qualified aquatic supervision."
      ],
      [
        "Attempt the Scouting America swimmer test",
        "Attempt the official swimmer test " +
        "with qualified personnel."
      ],
      [
        "Complete at least 30 minutes of free swim",
        "Swim for 30 minutes or more within " +
        "the appropriate ability area, using " +
        "the buddy system. Supervisors conduct " +
        "at least three buddy checks per half hour."
      ]
    ],
    "ALTERNATIVE COMPLETION: The official adventure " +
    "also permits passing the Scouting America " +
    "swimmer test OR qualifying swimming lessons " +
    "instead of the six-requirement route. " +
    "SAFETY: Follow Safe Swim Defense, qualified " +
    "supervision, and ability classifications."
  );

  // ========================================================
  // ELECTIVE 2 - ART EXPLOSION
  // ========================================================

  guide(
    "Art Explosion",
    "Drawing pencils, paper, digital image and " +
    "approved editing device, paint, brushes, " +
    "mixed-media craft supplies.",
    [
      [
        "Create pencil artwork",
        "Explore pencil drawing techniques " +
        "and create an original drawing."
      ],
      [
        "Experiment with digital image filters",
        "Use an approved digital image and " +
        "explore different filters or in-camera " +
        "editing techniques."
      ],
      [
        "Create painted artwork",
        "Make an original piece of art " +
        "using paint."
      ],
      [
        "Combine two art media",
        "Create artwork using at least " +
        "two different media."
      ]
    ],
    "SAFETY: Use non-toxic art materials, " +
    "protect work surfaces, and follow digital " +
    "safety and photo-permission guidance."
  );

  // ========================================================
  // ELECTIVE 3 - AWARE AND CARE
  // ========================================================

  guide(
    "Aware and Care",
    "Accessibility examples, safe activity " +
    "supplies, accessibility checklist, " +
    "invited guest or accessibility professional.",
    [
      [
        "Explore challenges related to vision",
        "Participate in a supervised activity " +
        "that explores challenges faced by " +
        "people with visual impairments."
      ],
      [
        "Explore challenges related to hearing",
        "Participate in an activity exploring " +
        "communication challenges related " +
        "to hearing impairments."
      ],
      [
        "Explore barriers to access",
        "Inspect a building or outdoor area " +
        "and identify obstacles to accessibility."
      ],
      [
        "Learn from a person with disability experience",
        "Meet someone with a disability or someone " +
        "who works with people with disabilities. " +
        "Discuss barriers and solutions."
      ]
    ],
    "SAFETY AND RESPECT: Do not present simulations " +
    "as equivalent to living with a disability. " +
    "Use respectful language, safe activities, " +
    "and accessible participation options."
  );

  // ========================================================
  // ELECTIVE 4 - BUILD IT
  // ========================================================

  guide(
    "Build It",
    "Approved hand tools, eye protection, level, " +
    "square, plumb reference, wood, measuring tape, " +
    "project plan and materials.",
    [
      [
        "Learn tools and tool safety",
        "Identify basic tools, their uses, " +
        "and how to work safely with them."
      ],
      [
        "Demonstrate plumb, level, and square",
        "Use appropriate tools to check " +
        "whether something is plumb, level, " +
        "and square."
      ],
      [
        "Plan a carpentry project",
        "With leader or parent guidance, select " +
        "a project involving plumb, level, " +
        "or square. List needed tools and materials."
      ],
      [
        "Build the carpentry project",
        "Construct the selected project " +
        "under appropriate supervision."
      ]
    ],
    "SAFETY: Follow current SAFE Project Tool Use " +
    "and age-appropriate tool restrictions. " +
    "Provide eye protection and qualified " +
    "adult supervision. Adults handle " +
    "restricted power tools."
  );

  // ========================================================
  // ELECTIVE 5 - CATCH THE BIG ONE
  // ========================================================

  guide(
    "Catch the Big One",
    "Fishing plan, SAFE Checklist, fishing rod, " +
    "line, tackle, knot practice cord, water, " +
    "weather forecast, local regulations.",
    [
      [
        "Plan a fishing trip",
        "Select where to fish and the type " +
        "of fish you hope to catch. Use that " +
        "choice for the remaining requirements."
      ],
      [
        "Apply the SAFE Checklist",
        "Plan supervision, assessment, fitness " +
        "and skill, and equipment and environment " +
        "for the fishing experience."
      ],
      [
        "Describe the fish habitat",
        "Describe the environment where " +
        "your selected fish may be found."
      ],
      [
        "List fishing equipment",
        "Prepare a list of equipment and " +
        "materials needed for the outing."
      ],
      [
        "Select and tie a fishing knot",
        "Determine an appropriate knot " +
        "for attaching the hook to the line " +
        "and demonstrate tying it."
      ],
      [
        "Select rod and tackle",
        "Choose suitable equipment and " +
        "have an adult review the gear."
      ],
      [
        "Fish for at least one hour",
        "Spend at least one hour fishing, " +
        "following local rules and regulations."
      ]
    ],
    "SAFETY: Use the buddy system, safe casting " +
    "distance, hook precautions, and appropriate " +
    "water supervision. Never fish in thunderstorms " +
    "or where people are swimming."
  );

  // ========================================================
  // ELECTIVE 6 - CHAMPIONS FOR NATURE WEBELOS
  // ========================================================

  guide(
    "Champions for Nature Webelos",
    "Habitat pictures, endangered species " +
    "references, research materials, project " +
    "supplies, service-project checklist.",
    [
      [
        "Identify four habitat components",
        "Learn about food, water, shelter, " +
        "and space as the four components " +
        "of a habitat."
      ],
      [
        "Choose a threatened or endangered animal",
        "Select an animal to research for " +
        "the next three requirements."
      ],
      [
        "Explain its conservation classification",
        "Identify characteristics that make " +
        "the selected species threatened " +
        "or endangered."
      ],
      [
        "Explore causes of its decline",
        "Research factors that caused " +
        "the species to become threatened " +
        "or endangered."
      ],
      [
        "Research protection efforts",
        "Learn what people or organizations " +
        "are doing to protect the species."
      ],
      [
        "Participate in a conservation service project",
        "Complete an approved conservation " +
        "service project with appropriate supervision."
      ]
    ],
    "SAFETY: Follow service-project planning and " +
    "tool restrictions. Avoid unsafe wildlife " +
    "contact and hazardous cleanup areas."
  );

  // ========================================================
  // ELECTIVE 7 - CHEF'S KNIFE
  // ========================================================

  guide(
    "Chef's Knife",
    "Approved kitchen knives, cutting boards, " +
    "practice foods, first-aid supplies, " +
    "Cub Scout Knife Safety Rules.",
    [
      [
        "Learn and promise knife safety rules",
        "Read and explain the Cub Scout Knife " +
        "Safety Rules. Promise to follow them."
      ],
      [
        "Demonstrate the knife safety circle",
        "Show how to establish a safe " +
        "working area before handling a knife."
      ],
      [
        "Demonstrate safe kitchen knife care",
        "Show proper handling, care, " +
        "cleaning, and storage of a kitchen knife."
      ],
      [
        "Demonstrate slicing, dicing, and mincing",
        "Choose an appropriate cooking knife " +
        "and demonstrate each cutting technique " +
        "under direct adult supervision."
      ]
    ],
    "CRITICAL SAFETY: This adventure is required " +
    "before a Webelos Scout may use a knife during " +
    "a Cub Scout activity, even if the Scout " +
    "previously earned Bear Whittling. Follow " +
    "Stop, Away, Sharp, Store; use a safety circle, " +
    "appropriate tools, and direct adult supervision."
  );

  // ========================================================
  // ELECTIVE 8 - EARTH ROCKS
  // ========================================================

  guide(
    "Earth Rocks",
    "Rock samples, protective eyewear, safe " +
    "rock-breaking equipment, mineral test kit, " +
    "Mohs hardness scale, crystal-growing supplies.",
    [
      [
        "Examine three rock types",
        "Examine sedimentary, igneous, " +
        "and metamorphic rocks."
      ],
      [
        "Safely break and examine a rock",
        "Find a suitable rock, safely break " +
        "it apart under adult supervision, " +
        "and examine the pieces."
      ],
      [
        "Test mineral hardness",
        "Make a mineral test kit and use " +
        "the Mohs scale. Discuss how hardness " +
        "affects the use of materials."
      ],
      [
        "Grow a crystal",
        "Conduct an approved crystal-growing " +
        "experiment and observe the result."
      ]
    ],
    "SAFETY: Adults review and test experiments " +
    "beforehand. Wear eye protection and protective " +
    "clothing. Keep food and drinks away from " +
    "experiments. Adults supervise rock breaking."
  );

  // ========================================================
  // ELECTIVE 9 - LET'S CAMP WEBELOS
  // ========================================================

  guide(
    "Let's Camp Webelos",
    "Tent, rope, Six Essentials, weather information, " +
    "Outdoor Code, Leave No Trace references, " +
    "approved campfire materials, water.",
    [
      [
        "Plan and attend a campout",
        "With den, pack, or family, plan " +
        "and participate in a campout."
      ],
      [
        "Choose a suitable tent site",
        "Upon arrival, determine where " +
        "to set up the tent."
      ],
      [
        "Set up a tent independently",
        "Set up the tent without help " +
        "from an adult."
      ],
      [
        "Plan for a weather hazard",
        "Identify a local weather hazard " +
        "and what action to take during camp."
      ],
      [
        "Tie and explain a bowline",
        "Demonstrate the bowline and " +
        "explain when and why it is used."
      ],
      [
        "Apply campfire safety rules",
        "Explain fire safety and locate " +
        "a suitable campfire area."
      ],
      [
        "Build a teepee fire lay",
        "Use tinder, kindling, and fuel wood. " +
        "Only if permitted and conditions allow, " +
        "light and extinguish the fire under " +
        "adult supervision."
      ],
      [
        "Recite outdoor ethics from memory",
        "Recite the Outdoor Code and " +
        "Leave No Trace Principles for Kids."
      ],
      [
        "Reflect on outdoor ethics",
        "After camping, explain how you " +
        "followed the Outdoor Code and " +
        "Leave No Trace Principles."
      ]
    ],
    "SAFETY: Follow current camping rules, " +
    "BALOO requirements when applicable, " +
    "Youth Protection, weather precautions, " +
    "and fire restrictions. Adults control " +
    "fire lighting when permitted."
  );

  // ========================================================
  // ELECTIVE 10 - MATH ON THE TRAIL
  // ========================================================

  guide(
    "Math on the Trail",
    "Measured walking route, timer, calculator, " +
    "pencil, paper, walking gear.",
    [
      [
        "Measure walking pace",
        "Walk one-quarter mile and time it. " +
        "Predict how long two miles will take."
      ],
      [
        "Walk two miles and record time",
        "Complete a two-mile walk and " +
        "record the actual time."
      ],
      [
        "Project a 20-mile hiking schedule",
        "Estimate the time needed to hike " +
        "20 miles over two days. List factors " +
        "affecting the estimate."
      ]
    ],
    "SAFETY: The 20-mile hike is a calculation, " +
    "not a required physical hike. Follow " +
    "walking safety and hydration procedures."
  );

  // ========================================================
  // ELECTIVE 11 - MODULAR DESIGN
  // ========================================================

  guide(
    "Modular Design",
    "Modular building blocks, paper, pencils, " +
    "instruction cards, adult-approved video.",
    [
      [
        "Learn modular design",
        "Explain modular construction " +
        "and identify three things built " +
        "using modular design."
      ],
      [
        "Build a model without instructions",
        "Use modular pieces to create " +
        "an original model."
      ],
      [
        "Write or draw building instructions",
        "Create step-by-step instructions " +
        "for recreating the model."
      ],
      [
        "Have someone follow the instructions",
        "Ask another person to build the " +
        "model using the instructions."
      ],
      [
        "Build a different model",
        "Use the same modular pieces " +
        "to create something different."
      ],
      [
        "Watch a modular construction video",
        "With parent or legal guardian permission, " +
        "watch a video showing how something " +
        "is built with modular design."
      ]
    ],
    "SAFETY: Follow age-appropriate construction " +
    "and digital safety guidance."
  );

  // ========================================================
  // ELECTIVE 12 - PADDLE ONWARD
  // ========================================================

  guide(
    "Paddle Onward",
    "Approved watercraft, paddles, properly fitted " +
    "U.S. Coast Guard-approved life jackets, " +
    "qualified aquatic supervisors, buddy tags.",
    [
      [
        "Pass the swimmer test",
        "Pass the Scouting America swimmer test " +
        "before attempting requirements 5 through 9."
      ],
      [
        "Select a paddle craft",
        "Choose a canoe, kayak, or " +
        "stand-up paddleboard."
      ],
      [
        "Review Safety Afloat",
        "Learn and review the applicable " +
        "Safety Afloat rules."
      ],
      [
        "Demonstrate proper life-jacket use",
        "Choose and properly wear a life " +
        "jacket of the correct size."
      ],
      [
        "Swim 25 feet wearing a life jacket",
        "Jump feet first into water over your " +
        "head while wearing a life jacket, " +
        "then swim 25 feet."
      ],
      [
        "Enter and exit the craft safely",
        "Demonstrate safe entry and exit " +
        "for the selected craft."
      ],
      [
        "Discuss capsize response",
        "Explain what to do if the canoe " +
        "or kayak tips, or if you fall " +
        "from a paddleboard."
      ],
      [
        "Select and use a paddle",
        "Choose an appropriately sized paddle " +
        "and explore how the craft responds."
      ],
      [
        "Complete 30 minutes of paddling",
        "Participate in at least 30 minutes " +
        "of approved paddlecraft activity."
      ]
    ],
    "CRITICAL SAFETY: The swimmer test is a " +
    "prerequisite for requirements 5-9. " +
    "Follow Safety Afloat, trained adult " +
    "supervision, applicable first aid/CPR " +
    "requirements, adult-to-youth ratios, " +
    "approved calm-water conditions, " +
    "and properly fitted life jackets. " +
    "No unauthorized float trips or expeditions."
  );

  // ========================================================
  // ELECTIVE 13 - PEDAL AWAY
  // ========================================================

  guide(
    "Pedal Away",
    "Bicycle, fitted helmet, bicycle lock, " +
    "chain lubricant, map, Six Essentials, " +
    "bike maintenance supplies.",
    [
      [
        "Choose gear for a long bicycle ride",
        "Identify clothing, protective equipment, " +
        "water, tools, and other supplies."
      ],
      [
        "Explore multi-gear bicycles",
        "Explain how bicycle gears work " +
        "and why they help riders."
      ],
      [
        "Practice lubricating a chain",
        "Learn and practice appropriate " +
        "chain maintenance with an adult."
      ],
      [
        "Demonstrate a bicycle lock",
        "Select a lock and show how it " +
        "secures the bicycle and is carried."
      ],
      [
        "Plan a five-mile bicycle route",
        "Use a map with den, pack, or family " +
        "to plan a route of at least five miles."
      ],
      [
        "Complete a five-mile bicycle ride",
        "With den, pack, or family, ride at " +
        "least five miles using the buddy system."
      ]
    ],
    "SAFETY: Wear a fitted helmet, complete " +
    "an ABC Quick Check, choose a safe route, " +
    "and follow Bicycle Safety guidelines. " +
    "Adaptive bikes and appropriate learning " +
    "alternatives are allowed; electric and " +
    "hybrid bicycles are not permitted."
  );

  // ========================================================
  // ELECTIVE 14 - RACE TIME WEBELOS
  // ========================================================

  guide(
    "Race Time Webelos",
    "Pinewood Derby or Raingutter Regatta kit, " +
    "approved tools, race rules, friction examples, " +
    "safety glasses.",
    [
      [
        "Build a race vehicle",
        "With an adult, build a Pinewood Derby " +
        "car or Raingutter Regatta boat."
      ],
      [
        "Learn the race rules",
        "Review the rules for the chosen race."
      ],
      [
        "Explore friction",
        "Investigate how friction affects " +
        "the chosen vehicle."
      ],
      [
        "Discuss sportsmanship",
        "Before racing, discuss with the den " +
        "how to show good sportsmanship."
      ],
      [
        "Participate in the race",
        "Race in a Pinewood Derby " +
        "or Raingutter Regatta."
      ]
    ],
    "SAFETY: Follow age-appropriate tool use " +
    "and event rules. Adults handle " +
    "restricted equipment."
  );

  // ========================================================
  // ELECTIVE 15 - SUMMERTIME FUN WEBELOS
  // ========================================================

  guide(
    "Summertime Fun Webelos",
    "Summer activity calendar, den/pack/council " +
    "event schedule, participation plan.",
    [
      [
        "Participate in three summer Cub Scout activities",
        "Between May and August, participate " +
        "in a total of three Cub Scout " +
        "activities with den, pack, or council."
      ]
    ],
    "TIMING: For Webelos, this is intended for " +
    "the summer after completing third grade. " +
    "One requirement includes three activities."
  );

  // ========================================================
  // ELECTIVE 16 - TECH ON THE TRAIL
  // ========================================================

  guide(
    "Tech on the Trail",
    "GPS-enabled device, approved online map, " +
    "weather app, Six Essentials, walking gear.",
    [
      [
        "Discuss outdoor safety technology",
        "Explain how technology can improve " +
        "safety during outdoor activities."
      ],
      [
        "Explore GPS",
        "Learn about Global Positioning " +
        "Satellite technology and its use."
      ],
      [
        "Plan a two-mile trek digitally",
        "With an adult, choose an online " +
        "mapping tool and plan a two-mile trek."
      ],
      [
        "Complete the two-mile trek",
        "Take the planned two-mile trek " +
        "using appropriate outdoor precautions."
      ]
    ],
    "SAFETY: Follow digital privacy and " +
    "outdoor safety guidance. Do not rely " +
    "solely on a phone for emergency planning."
  );

  // ========================================================
  // ELECTIVE 17 - YO-YO
  // ========================================================

  guide(
    "Yo-yo",
    "Yo-yos, replacement strings, measuring " +
    "tape, clear practice area, experiment sheet.",
    [
      [
        "Learn yo-yo safety rules",
        "Learn and consistently follow " +
        "safe yo-yo handling practices."
      ],
      [
        "Determine correct string length",
        "Learn how to measure an appropriate " +
        "yo-yo string length."
      ],
      [
        "Explain string length and location",
        "Discuss why proper string length " +
        "and sufficient space are important."
      ],
      [
        "String the yo-yo and make a slip knot",
        "Demonstrate correct string attachment " +
        "and formation of a slip knot."
      ],
      [
        "Conduct a pendulum experiment",
        "Use the yo-yo as a pendulum and " +
        "explain how longer string affects it."
      ],
      [
        "Wind the yo-yo",
        "Demonstrate proper winding."
      ],
      [
        "Attempt three tricks",
        "Attempt gravity pull, sleeper, " +
        "and breakaway."
      ]
    ],
    "SAFETY: Provide sufficient clearance " +
    "between Scouts and avoid striking " +
    "people or fragile objects."
  );

  // ========================================================
  // THREE SPECIAL RANGE ELECTIVES
  // PLANNING ONLY
  // ========================================================

  const rangeSafety =
    "Only approved events with qualified range " +
    "personnel may conduct these activities. " +
    "The official range lesson plan and " +
    "event staff determine completion.";

  [
    ["Archery Webelos", "archery"],
    ["Slingshot Webelos", "slingshot"],
    ["BB Guns Webelos", "BB gun"]
  ].forEach(([name, activity]) => {
    rangeGuide(
      name,
      "Approved range event, qualified instructors, " +
      "approved equipment and safety gear.",
      [
        [
          "Arrange an approved " + activity + " event",
          "Contact the district or council " +
          "to locate an authorized session."
        ],
        [
          "Review the official lesson plan",
          "Qualified range personnel teach " +
          "safety commands, handling, and " +
          "approved shooting activities."
        ],
        [
          "Confirm completion",
          "Have authorized event staff " +
          "verify the official requirements."
        ]
      ],
      rangeSafety
    );
  });

  // ========================================================
  // CONSOLIDATED AUTOMATED VALIDATION
  // ========================================================

  const expectedCounts = {
    "Bobcat Webelos": 7,
    "Stronger, Faster, Higher": 5,
    "My Safety": 4,
    "My Family": 4,
    "My Community": 4,
    "Webelos Walkabout": 7,

    "Aquanaut": 6,
    "Art Explosion": 4,
    "Aware and Care": 4,
    "Build It": 4,
    "Catch the Big One": 7,
    "Champions for Nature Webelos": 6,
    "Chef's Knife": 4,
    "Earth Rocks": 4,
    "Let's Camp Webelos": 9,
    "Math on the Trail": 3,
    "Modular Design": 6,
    "Paddle Onward": 9,
    "Pedal Away": 6,
    "Race Time Webelos": 5,
    "Summertime Fun Webelos": 1,
    "Tech on the Trail": 4,
    "Yo-yo": 7,

    "Archery Webelos": 3,
    "Slingshot Webelos": 3,
    "BB Guns Webelos": 3
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

  if (entries.length !== 26) {
    errors.push("Expected 26 adventures.");
  }

  if (
    categories.required !== 6 ||
    categories.elective !== 17 ||
    categories.special !== 3
  ) {
    errors.push("Incorrect adventure category counts.");
  }

  if (
    new Set(entries.map(e => e[0])).size !==
    entries.length
  ) {
    errors.push("Duplicate adventure names.");
  }

  entries.forEach(([name, type]) => {
    const g = site.guides[DEN + "|" + name];

    if (!g) {
      errors.push("Missing guide: " + name);
      return;
    }

    if (!g.supplies || !g.completionNote) {
      errors.push("Missing details: " + name);
    }

    if (!Array.isArray(g.tasks)) {
      errors.push("Invalid tasks: " + name);
      return;
    }

    if (g.tasks.length !== expectedCounts[name]) {
      errors.push(
        "Incorrect requirement count: " + name
      );
    }

    g.tasks.forEach((task, i) => {
      if (
        !Array.isArray(task) ||
        task.length !== 2 ||
        typeof task[0] !== "string" ||
        typeof task[1] !== "string" ||
        !task[0].trim() ||
        !task[1].trim()
      ) {
        errors.push(
          "Invalid task: " + name + " #" + (i + 1)
        );
      }
    });

    const shouldVerify = type !== "special";

    if (g.verifiedRequirements !== shouldVerify) {
      errors.push(
        "Incorrect verification flag: " + name
      );
    }

    if (
      g.taskType !== (
        type === "special"
          ? "planning"
          : "requirements"
      )
    ) {
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

  if (standardCount !== 23) {
    errors.push("Expected 23 standard guides.");
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

  const alternatives = [
    "My Family",
    "Aquanaut"
  ].every(name =>
    site.guides[DEN + "|" + name]
      ?.completionNote.includes(
        "ALTERNATIVE COMPLETION"
      )
  );

  if (!alternatives) {
    errors.push("Missing alternative completion notes.");
  }

  const safetyChecks = {
    knife:
      site.guides["Webelos|Chef's Knife"]
        ?.completionNote.includes("CRITICAL SAFETY"),

    paddle:
      site.guides["Webelos|Paddle Onward"]
        ?.completionNote.includes("swimmer test"),

    swim:
      site.guides["Webelos|Aquanaut"]
        ?.completionNote.includes("Safe Swim Defense"),

    youthProtection:
      site.guides["Webelos|My Safety"]
        ?.completionNote.includes("Youth Protection"),

    camp:
      site.guides["Webelos|Let's Camp Webelos"]
        ?.completionNote.includes("BALOO")
  };

  Object.entries(safetyChecks).forEach(
    ([name, passed]) => {
      if (!passed) {
        errors.push("Missing safety note: " + name);
      }
    }
  );

  const passed = errors.length === 0;

  console.log("[PACK456] Webelos Version: 1.0");
  console.log("[PACK456] Webelos adventures:", entries.length);
  console.log("[PACK456] Webelos categories:", categories);
  console.log("[PACK456] Webelos standard guides:", standardCount);
  console.log("[PACK456] Webelos range planning guides:", planningCount);
  console.log(
    "[PACK456] Webelos all required guides:",
    allRequired ? "PASS" : "FAIL"
  );
  console.log(
    "[PACK456] Webelos alternative completion notes:",
    alternatives ? "PASS" : "FAIL"
  );
  console.log(
    "[PACK456] Webelos safety checks:",
    Object.values(safetyChecks).every(Boolean)
      ? "PASS"
      : "FAIL"
  );
  console.log(
    "[PACK456] WEBELOS DATA VALIDATION:",
    passed ? "PASS" : "FAIL"
  );

  if (!passed) {
    console.error(
      "[PACK456] Webelos validation errors:",
      errors
    );
  } else {
    console.log(
      "[PACK456] Webelos Version 1.0:",
      "READY FOR FINAL HUMAN REVIEW"
    );
  }
})();
