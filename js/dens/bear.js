
/* ============================================================
   PACK 456 ADVENTURES
   BEAR DEN - COMPLETE CONSOLIDATED DATA
   Version 1.0

   6 Required Adventures
   17 Regular Electives
   3 Special Electives
   26 Total Adventures

   Includes:
   - Adventure directory
   - Supplies
   - Teaching checklists
   - Completion notes
   - Safety reminders
   - Previous validation corrections

   IMPORTANT:
   These are Pack 456 teaching guides and paraphrased
   advancement checklists, not official Scouting America
   publications.

   Verify current official requirements before awarding.
   Special range activities require approved programs
   and qualified range personnel.

   No Scout names or personal data are stored.
   ============================================================ */

"use strict";

(function () {

  const bear = window.Pack456;

  if (!bear || !bear.directory || !bear.guides) {
    console.error(
      "[PACK456] Bear data could not load. Check js/data.js."
    );
    return;
  }

  // ==========================================================
  // BEAR ADVENTURE DIRECTORY
  // ==========================================================

  bear.directory["Bear"] = [

    // REQUIRED
    ["Bobcat Bear", "required"],
    ["Bear Strong", "required"],
    ["Standing Tall", "required"],
    ["Bear Habitat", "required"],
    ["Fellowship", "required"],
    ["Paws for Action", "required"],

    // REGULAR ELECTIVES
    ["A Bear Goes Fishing", "elective"],
    ["Balancing Bears", "elective"],
    ["Baloo the Builder", "elective"],
    ["Bears Afloat", "elective"],
    ["Bears on Bikes", "elective"],
    ["Champions for Nature Bear", "elective"],
    ["Chef Tech", "elective"],
    ["Critter Care", "elective"],
    ["Forensics", "elective"],
    ["Let's Camp Bear", "elective"],
    ["Marble Madness", "elective"],
    ["Race Time Bear", "elective"],
    ["Roaring Laughter", "elective"],
    ["Salmon Run", "elective"],
    ["Summertime Fun Bear", "elective"],
    ["Super Science", "elective"],
    ["Whittling", "elective"],

    // SPECIAL ELECTIVES
    ["Archery Bear", "special"],
    ["Slingshot Bear", "special"],
    ["BB Guns Bear", "special"]

  ];


  // ==========================================================
  // REQUIRED ADVENTURE 1 - BOBCAT BEAR
  // ==========================================================

  bear.guides["Bear|Bobcat Bear"] = {
    supplies:
      "Scout Oath and Law, paper, markers, " +
      "Cub Scout sign reference, and official " +
      "family protection resources.",

    tasks: [
      [
        "1. Get to know the den",
        "Play an introduction game and learn the names " +
        "of other Scouts and leaders."
      ],
      [
        "2. Practice the Scout Oath and Law",
        "Recite the Scout Oath and Scout Law together. " +
        "Discuss their meanings."
      ],
      [
        "3. Discuss the Scout Oath",
        "Give examples of duty to God and country, " +
        "duty to others, and duty to self."
      ],
      [
        "4. Create a den code of conduct",
        "Have Scouts suggest and agree on expectations " +
        "for respectful behavior and participation."
      ],
      [
        "5. Learn about the denner",
        "Explain how a Scout serving as denner helps " +
        "the den and practices leadership."
      ],
      [
        "6. Practice Cub Scout signs",
        "Demonstrate the Cub Scout sign, salute, " +
        "and handshake."
      ],
      [
        "7. Discuss doing your best",
        "Share an example of trying hard and " +
        "doing your best."
      ],
      [
        "8. Complete family protection activities",
        "With a parent or legal guardian, privately " +
        "complete the official family protection activities. " +
        "Do not collect personal responses on this website."
      ]
    ]
  };


  // ==========================================================
  // REQUIRED ADVENTURE 2 - BEAR STRONG
  // ==========================================================

  bear.guides["Bear|Bear Strong"] = {
    supplies:
      "Examples of foods from five food groups, water, " +
      "timer, exercise area, and private family access " +
      "to the Annual Health and Medical Record.",

    tasks: [
      [
        "1. Sample foods from three food groups",
        "Have the Scout sample foods from at least " +
        "three of these groups: protein, vegetables, " +
        "fruits, dairy, and grains. Discuss the groups. " +
        "Check allergies and dietary restrictions."
      ],
      [
        "2. Complete 30 minutes of group activity",
        "With the den or at least one other person, " +
        "participate in 30 minutes of physical activity " +
        "that includes stretching and movement."
      ],
      [
        "3. Complete 15 minutes of personal exercises",
        "Practice personal exercises for 15 minutes. " +
        "Include cardiovascular exercise, muscular " +
        "strength, and flexibility."
      ],
      [
        "4. Complete 10 minutes of relaxation",
        "Choose a relaxing activity and participate " +
        "for 10 minutes. Discuss how rest helps the body."
      ],
      [
        "5. Review health information with family",
        "With a parent or legal guardian, privately " +
        "review the Scouting America Annual Health and " +
        "Medical Record and discuss participation in " +
        "den and pack activities. Do not collect or " +
        "upload medical information."
      ]
    ]
  };


  // ==========================================================
  // REQUIRED ADVENTURE 3 - STANDING TALL
  // ==========================================================

  bear.guides["Bear|Standing Tall"] = {
    supplies:
      "Official Bear Protect Yourself Rules video, " +
      "Personal Space Bubble worksheet, family device " +
      "policy materials, and examples of safety equipment.",

    tasks: [
      [
        "1. Watch the official Bear safety video",
        "With permission from a parent or legal guardian, " +
        "watch the official Bear Protect Yourself Rules video."
      ],
      [
        "2. Complete the Personal Space Bubble worksheet",
        "Complete the official worksheet provided in " +
        "the Bear Protect Yourself Rules resources. " +
        "Respect the Scout's privacy."
      ],
      [
        "3. Create a family digital-device policy",
        "With a parent or legal guardian, establish " +
        "expectations for device use, online privacy, " +
        "communication, and asking for help."
      ],
      [
        "4. Identify and demonstrate personal safety gear",
        "Identify appropriate safety gear for the head, " +
        "eyes, mouth, hands, and feet. Explain how each " +
        "protects the wearer and demonstrate correct use."
      ]
    ]
  };


  // ==========================================================
  // REQUIRED ADVENTURE 4 - BEAR HABITAT
  // ==========================================================

  bear.guides["Bear|Bear Habitat"] = {
    supplies:
      "Cub Scout Six Essentials, trail map, walking shoes, " +
      "camera or sketchbook, and trash bag.",

    tasks: [
      [
        "1. Prepare for a one-mile walk",
        "Gather the Cub Scout Six Essentials and choose " +
        "suitable clothing and footwear."
      ],
      [
        "2. Know Before You Go",
        "Locate the walking route on a map. " +
        "Identify the starting point and planned route."
      ],
      [
        "3. Choose the Right Path",
        "Learn about the trail and its surroundings " +
        "before beginning the walk."
      ],
      [
        "4. Trash Your Trash",
        "Plan how to carry out your trash and " +
        "safely handle litter."
      ],
      [
        "5. Leave What You Find",
        "Photograph or sketch five natural things " +
        "without removing them."
      ],
      [
        "6. Be Careful with Fire",
        "Check the local fire danger rating " +
        "and discuss safe fire behavior."
      ],
      [
        "7. Respect Wildlife",
        "Identify six signs of animals or insects " +
        "without disturbing them."
      ],
      [
        "8. Be Kind to Other Visitors",
        "Discuss sharing the trail and respecting " +
        "other visitors."
      ],
      [
        "9. Complete the one-mile walk",
        "Walk the planned route while practicing " +
        "Leave No Trace."
      ]
    ]
  };


  // ==========================================================
  // REQUIRED ADVENTURE 5 - FELLOWSHIP
  // ==========================================================

  bear.guides["Bear|Fellowship"] = {
    supplies:
      "Family-selected faith or reverence resources, " +
      "craft materials, and family discussion materials.",

    tasks: [
      [
        "1. Explore three family faith celebrations",
        "With a parent or legal guardian, discuss " +
        "family faith traditions. Identify three " +
        "holidays or celebrations. Make a craft, " +
        "artwork, or food item associated with " +
        "a favorite tradition."
      ],
      [
        "2. Attend a family reverence gathering",
        "With family, attend a religious service OR " +
        "another gathering demonstrating how the " +
        "family expresses reverence."
      ],
      [
        "3. Carry out an act of kindness",
        "Choose a thoughtful action and complete it. " +
        "Examples include helping a neighbor or " +
        "writing an encouraging message."
      ],
      [
        "4. Compare two faith traditions",
        "With a parent or legal guardian, identify " +
        "a religion or faith different from the " +
        "family's own. Determine two things the " +
        "traditions have in common."
      ]
    ],

    completionNote:
      "Official alternative: This adventure may also " +
      "be earned by completing a Religious Emblem " +
      "chosen by the Scout's family. Respect family " +
      "participation and religious privacy."
  };


  // ==========================================================
  // REQUIRED ADVENTURE 6 - PAWS FOR ACTION
  // ==========================================================

  bear.guides["Bear|Paws for Action"] = {
    supplies:
      "American flag, approved practice equipment, " +
      "national-symbol pictures, craft supplies, " +
      "nonprofit information, and service materials.",

    tasks: [
      [
        "1. Learn and demonstrate American flag practices",
        "Learn about the flag's history and etiquette. " +
        "Demonstrate raising and lowering the flag, " +
        "proper folding, and proper display."
      ],
      [
        "2. Identify three national symbols",
        "Identify three symbols representing the " +
        "United States. Choose one and create " +
        "a model, artwork, or craft depicting it."
      ],
      [
        "3. Investigate a nonprofit organization",
        "Learn the nonprofit's mission, how it funds " +
        "its activities, and how volunteers contribute."
      ],
      [
        "4. Participate in a service project",
        "Complete an appropriate community service " +
        "project with adult supervision and follow " +
        "applicable Scouting safety rules."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 1 - A BEAR GOES FISHING
  // ==========================================================

  bear.guides["Bear|A Bear Goes Fishing"] = {
    supplies:
      "Fishing rod, line, hooks, practice weights, bait, " +
      "local fishing regulations, water, and sun protection.",

    tasks: [
      [
        "1. Learn about three local fish species",
        "Identify three fish found in your area. " +
        "Describe something that makes each one different."
      ],
      [
        "2. Learn local fishing regulations",
        "With an adult, review current local fishing " +
        "rules, including licenses and catch limits."
      ],
      [
        "3. List three regulations and explain why",
        "List three fishing regulations and explain " +
        "one reason for each."
      ],
      [
        "4. Learn safe fishing equipment use",
        "Demonstrate safe rod handling, casting space, " +
        "hook safety, and equipment inspection."
      ],
      [
        "5. Learn to attach a hook, lure, or fly",
        "Practice an appropriate fishing knot " +
        "and learn how to secure tackle."
      ],
      [
        "6. Go fishing for at least 30 minutes",
        "Participate in a supervised fishing outing " +
        "for at least 30 minutes while following " +
        "local regulations."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 2 - BALANCING BEARS
  // ==========================================================

  bear.guides["Bear|Balancing Bears"] = {
    supplies:
      "Trail mix ingredients, measuring cups, bowls, " +
      "animal photographs, leaves, flowers, and paper.",

    tasks: [
      [
        "1. Make trail mix using math",
        "Use measurements and calculations to make " +
        "trail mix. Check food allergies first."
      ],
      [
        "2. Investigate an animal's pattern",
        "Choose an animal with a visible pattern " +
        "and investigate how that pattern helps it."
      ],
      [
        "3. Find bilateral symmetry in nature",
        "Examine leaves, butterflies, and other " +
        "natural examples of mirror-image symmetry."
      ],
      [
        "4. Find radial symmetry in nature",
        "Examine flowers and other natural examples " +
        "with features arranged around a center."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 3 - BALOO THE BUILDER
  // ==========================================================

  bear.guides["Bear|Baloo the Builder"] = {
    supplies:
      "Approved hand tools, safety glasses, wood, " +
      "ruler, pencil, clamps, and project plans.",

    tasks: [
      [
        "1. Learn basic tools and tool safety",
        "Identify common hand tools, explain their uses, " +
        "and review safe handling."
      ],
      [
        "2. Practice using four tools",
        "Practice using four appropriate tools " +
        "at supervised workstations."
      ],
      [
        "3. Choose a building project",
        "Select an achievable project such as " +
        "a small wooden caddy or game board."
      ],
      [
        "4. Identify tools and materials",
        "Make a checklist of the tools and " +
        "materials needed for the project."
      ],
      [
        "5. Build the project",
        "Follow the project plan and construct " +
        "the item with appropriate adult supervision."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 4 - BEARS AFLOAT
  // ==========================================================

  bear.guides["Bear|Bears Afloat"] = {
    supplies:
      "Approved boating location, qualified supervisors, " +
      "properly fitted approved life jackets, buddy tags, " +
      "canoe, kayak, or paddleboard, and paddles.",

    tasks: [
      [
        "1. Pass the Scouting America swimmer test",
        "Arrange the official swimmer test with " +
        "qualified personnel before attempting " +
        "requirements 6 and 7."
      ],
      [
        "2. Choose a paddle craft",
        "Learn about canoes, kayaks, and stand-up " +
        "paddleboards. Select one for the adventure."
      ],
      [
        "3. Discuss qualified adult supervision",
        "Discuss the responsibilities of qualified " +
        "adults supervising boating activities."
      ],
      [
        "4. Explain paddle craft safety rules",
        "Review life jackets, the buddy system, " +
        "weather awareness, and safe boating behavior."
      ],
      [
        "5. Demonstrate correct life jacket use",
        "Identify a suitable approved life jacket " +
        "and demonstrate wearing it correctly."
      ],
      [
        "6. Explore paddle craft response",
        "Under qualified supervision, explore how " +
        "paddle movement affects the craft."
      ],
      [
        "7. Paddle for at least 30 minutes",
        "Participate in at least 30 minutes of " +
        "approved supervised paddling."
      ]
    ],

    completionNote:
      "SAFETY PREREQUISITE: The official swimmer test " +
      "must be passed before attempting requirements " +
      "6 and 7. All on-water activities must follow " +
      "Scouting America Safety Afloat requirements."
  };


  // ==========================================================
  // ELECTIVE 5 - BEARS ON BIKES
  // ==========================================================

  bear.guides["Bear|Bears on Bikes"] = {
    supplies:
      "Bicycle or permitted adaptive cycle, fitted helmet, " +
      "appropriate clothing, tire pump, and safe riding area.",

    tasks: [
      [
        "1. Demonstrate proper helmet fit",
        "Show correct helmet positioning and " +
        "strap adjustment."
      ],
      [
        "2. Choose appropriate riding clothing",
        "Identify visible, comfortable clothing " +
        "and suitable footwear."
      ],
      [
        "3. Demonstrate hand signals",
        "Practice proper signals for turning " +
        "and stopping."
      ],
      [
        "4. Demonstrate saddle-height adjustment",
        "With adult guidance, demonstrate how " +
        "the bicycle seat is adjusted."
      ],
      [
        "5. Demonstrate brake operation",
        "Practice operating the brakes in " +
        "a clear, safe area."
      ],
      [
        "6. Learn tire inflation",
        "Learn to use a tire pump and explain " +
        "why riding with low tire pressure is unsafe."
      ],
      [
        "7. Complete a 30-minute bike ride",
        "Complete a supervised 30-minute ride " +
        "using the buddy system."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 6 - CHAMPIONS FOR NATURE BEAR
  // ==========================================================

  bear.guides["Bear|Champions for Nature Bear"] = {
    supplies:
      "Natural resource pictures, wastewater information, " +
      "soil samples, magnifiers, air-quality information, " +
      "and approved conservation project supplies.",

    tasks: [
      [
        "1. Discover natural resources",
        "Identify natural resources such as water, " +
        "soil, air, plants, and minerals. " +
        "Discuss how people use them."
      ],
      [
        "2. Investigate community wastewater",
        "Research where used water goes in your community, " +
        "including wastewater treatment or septic systems."
      ],
      [
        "3. Investigate soil",
        "Compare soil samples for texture, color, " +
        "water retention, and organic material."
      ],
      [
        "4. Investigate air pollution",
        "Explore sources of air pollution and " +
        "identify ways to reduce it."
      ],
      [
        "5. Participate in a conservation project",
        "Participate in an approved conservation " +
        "activity such as a cleanup or planting project."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 7 - CHEF TECH
  // ==========================================================

  bear.guides["Bear|Chef Tech"] = {
    supplies:
      "Suitable kitchen appliance, owner's manual, " +
      "adult-approved recipe website or cooking app, " +
      "ingredients, measuring tools, and adult supervision.",

    tasks: [
      [
        "1. Select a technology-based kitchen appliance",
        "Choose an appliance such as a microwave, " +
        "blender, or electric mixer."
      ],
      [
        "2. Review and follow appliance safety instructions",
        "With an adult, review the safety instructions " +
        "in the owner's manual and follow them."
      ],
      [
        "3. Find a recipe using an app or online search",
        "With adult supervision, find a suitable recipe " +
        "using the chosen appliance."
      ],
      [
        "4. Prepare the recipe",
        "Follow the recipe and prepare the food " +
        "using the appliance with adult supervision."
      ],
      [
        "5. Suggest a technological improvement",
        "Describe or draw an improvement " +
        "to the appliance."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 8 - CRITTER CARE
  // ==========================================================

  bear.guides["Bear|Critter Care"] = {
    supplies:
      "Animal photographs, pet care information, " +
      "paper, pencils, and comparison charts.",

    tasks: [
      [
        "1. Identify a suitable family pet",
        "Consider an animal that could be a good " +
        "family pet. Discuss space, cost, and care."
      ],
      [
        "2. Compare two permitted pets",
        "Compare two animals allowed as pets locally. " +
        "Discuss their needs and suitability."
      ],
      [
        "3. Investigate proper pet care",
        "Research feeding, water, shelter, exercise, " +
        "veterinary care, and daily responsibilities."
      ],
      [
        "4. Discover three ways pets help people",
        "Research companionship, service animals, " +
        "and other ways animals help people."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 9 - FORENSICS
  // ==========================================================

  bear.guides["Bear|Forensics"] = {
    supplies:
      "Washable ink pad, magnifying glass, modeling clay, " +
      "household substance samples, cups, coffee filters, " +
      "washable markers, and adult supervision.",

    tasks: [
      [
        "1. Explore how forensics helps solve crimes",
        "Use a fictional mystery to explore how " +
        "investigators examine evidence."
      ],
      [
        "2. Analyze fingerprints",
        "Make fingerprints with washable ink " +
        "and examine their patterns."
      ],
      [
        "3. Make a shoe imprint",
        "Press a clean shoe into suitable material " +
        "and examine the imprint."
      ],
      [
        "4. Analyze four household substances",
        "Compare four safe household substances " +
        "using observation and supervised testing. " +
        "Do not taste samples."
      ],
      [
        "5. Investigate chromatography",
        "Use a washable marker and coffee filter " +
        "to explore separating colors."
      ],
      [
        "6. Learn how officers collect evidence",
        "Learn about documenting and preserving evidence " +
        "through a professional or educational demonstration."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 10 - LET'S CAMP BEAR
  // ==========================================================

  bear.guides["Bear|Let's Camp Bear"] = {
    supplies:
      "Backpack, Cub Scout Six Essentials, sleeping gear, " +
      "weather-appropriate clothing, tent, and approved campout.",

    tasks: [
      [
        "1. Review the outdoor buddy system",
        "Explain staying with a buddy, checking in " +
        "with adults, and what to do if separated."
      ],
      [
        "2. Pack the Cub Scout Six Essentials",
        "Pack a first-aid kit, water bottle, flashlight, " +
        "trail food, sun protection, and whistle."
      ],
      [
        "3. Show additional personal camping items",
        "Identify sleeping gear, clothing, footwear, " +
        "hygiene supplies, and other needed items."
      ],
      [
        "4. Help pitch a tent and explain the location",
        "Help set up a tent at a suitable approved " +
        "campsite and explain the location choice."
      ],
      [
        "5. Attend an approved overnight camp",
        "Attend an approved Cub Scout overnight " +
        "camping event and follow applicable policies."
      ]
    ],

    completionNote:
      "An overnight camping event is required. " +
      "Pitching a tent at home does not replace " +
      "the required campout. Follow current " +
      "Scouting America camping policies."
  };


  // ==========================================================
  // ELECTIVE 11 - MARBLE MADNESS
  // ==========================================================

  bear.guides["Bear|Marble Madness"] = {
    supplies:
      "Marbles, marble bag materials, paper, cardboard, " +
      "tape, recycled tubes, and maze materials.",

    tasks: [
      [
        "1. Make a marble bag",
        "Create and decorate a bag for carrying marbles."
      ],
      [
        "2. Learn five marble terms",
        "Learn five terms used in marble games " +
        "and explain their meanings."
      ],
      [
        "3. Play three different marble games",
        "Learn and play three different marble games " +
        "while practicing sportsmanship."
      ],
      [
        "4. Build a two-lane marble racetrack",
        "Construct a racetrack with at least two lanes " +
        "and test marbles on it."
      ],
      [
        "5. Build a marble maze",
        "Design and build a marble maze, then test it."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 12 - RACE TIME BEAR
  // ==========================================================

  bear.guides["Bear|Race Time Bear"] = {
    supplies:
      "Pinewood Derby car or Raingutter Regatta boat kit, " +
      "approved tools, safety glasses, and event rules.",

    tasks: [
      [
        "1. Build a race vehicle with an adult",
        "Build and decorate a Pinewood Derby car " +
        "or Raingutter Regatta boat."
      ],
      [
        "2. Learn the race rules",
        "Review the rules and specifications " +
        "for the chosen race."
      ],
      [
        "3. Identify ways to increase speed",
        "Explore how design, friction, alignment, " +
        "or other factors affect performance."
      ],
      [
        "4. Discuss sportsmanship",
        "Discuss fair play, encouragement, " +
        "and appropriate reactions to race results."
      ],
      [
        "5. Participate in the race",
        "Enter and participate in the chosen " +
        "Pinewood Derby or Raingutter Regatta event."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 13 - ROARING LAUGHTER
  // ==========================================================

  bear.guides["Bear|Roaring Laughter"] = {
    supplies:
      "Age-appropriate joke cards, tongue twisters, " +
      "charades prompts, paper, and pencils.",

    tasks: [
      [
        "1. Discuss what makes you laugh",
        "Share appropriate examples of humor " +
        "and discuss why they are funny."
      ],
      [
        "2. Practice tongue twisters",
        "Practice reading several tongue twisters."
      ],
      [
        "3. Play charades",
        "Participate in a family or den charades game."
      ],
      [
        "4. Hold a funniest joke contest",
        "Participate in a friendly, age-appropriate " +
        "joke-telling contest."
      ],
      [
        "5. Practice run-ons",
        "Practice short humorous skits or exchanges " +
        "with another person."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 14 - SALMON RUN
  // ==========================================================

  bear.guides["Bear|Salmon Run"] = {
    supplies:
      "Approved swimming location, qualified supervision, " +
      "buddy tags, swimwear, and rescue demonstration equipment.",

    tasks: [
      [
        "1. Identify qualified swimming supervision",
        "Discuss trained adult supervision, rescue " +
        "readiness, and Safe Swim Defense."
      ],
      [
        "2. Learn the three swimming ability groups",
        "Learn nonswimmer, beginner, and swimmer " +
        "classifications and their swimming areas."
      ],
      [
        "3. Swim for 30 minutes using the buddy system",
        "Participate in a supervised 30-minute " +
        "swimming activity using the buddy system."
      ],
      [
        "4. Demonstrate buddy checks and ability groups",
        "Practice buddy checks and identify " +
        "appropriate swimming areas."
      ],
      [
        "5. Attempt the beginner swim test",
        "Attempt the official beginner swim test " +
        "under qualified supervision."
      ],
      [
        "6. Demonstrate reach and throw rescues",
        "Demonstrate safe reaching and throwing " +
        "techniques without entering the water."
      ]
    ],

    completionNote:
      "OFFICIAL ALTERNATIVES: Earn Salmon Run by " +
      "completing all six listed requirements OR " +
      "passing the Scouting America swimmer test OR " +
      "taking swimming lessons. Confirm the chosen " +
      "route with your den leader."
  };


  // ==========================================================
  // ELECTIVE 15 - SUMMERTIME FUN BEAR
  // ==========================================================

  bear.guides["Bear|Summertime Fun Bear"] = {
    supplies:
      "Calendar of Cub Scout activities, event information, " +
      "and family transportation plans.",

    tasks: [
      [
        "1. Participate in three Cub Scout summer activities",
        "Participate in three qualifying Cub Scout " +
        "activities during May through August. " +
        "These may include den, pack, or council events."
      ]
    ],

    completionNote:
      "This is ONE official requirement: participate " +
      "in three Cub Scout activities during May through " +
      "August, during the summer after completing " +
      "second grade."
  };


  // ==========================================================
  // ELECTIVE 16 - SUPER SCIENCE
  // ==========================================================

  bear.guides["Bear|Super Science"] = {
    supplies:
      "Balloons, paper pieces, water containers, " +
      "safe household experiment materials, food coloring, " +
      "coffee filters, and adult supervision.",

    tasks: [
      [
        "1. Conduct a static electricity investigation",
        "Explore static electricity using a balloon " +
        "and small paper pieces."
      ],
      [
        "2. Conduct a sink-or-float investigation",
        "Predict and test whether safe objects " +
        "sink or float in water."
      ],
      [
        "3. Conduct a color-morphing investigation",
        "Explore how colors move or mix using " +
        "an approved experiment."
      ],
      [
        "4. Conduct a color-layering investigation",
        "Use safe materials to explore " +
        "liquid layering and color."
      ]
    ]
  };


  // ==========================================================
  // ELECTIVE 17 - WHITTLING
  // ==========================================================

  bear.guides["Bear|Whittling"] = {
    supplies:
      "Official Cub Scout Knife Safety Rules, " +
      "approved pocketknife, suitable carving materials, " +
      "first-aid kit, and adult supervision.",

    tasks: [
      [
        "1. Learn and promise to follow knife safety rules",
        "Review the official Cub Scout Knife Safety " +
        "Rules and promise to follow them."
      ],
      [
        "2. Demonstrate the knife safety circle",
        "Demonstrate checking the surrounding area " +
        "before opening or using a knife."
      ],
      [
        "3. Demonstrate safe pocketknife care and use",
        "With adult supervision, demonstrate " +
        "proper knife handling, care, and storage."
      ],
      [
        "4. Make two carvings",
        "Under appropriate supervision, complete " +
        "two age-appropriate carving projects."
      ]
    ],

    completionNote:
      "Knife safety must be completed before a Bear " +
      "uses a knife during Cub Scout activities. " +
      "Follow current Scouting America knife policies."
  };


  // ==========================================================
  // SPECIAL ELECTIVE 1 - ARCHERY BEAR
  // ==========================================================

  bear.guides["Bear|Archery Bear"] = {
    supplies:
      "Approved district/council archery range, " +
      "qualified rangemaster, and event-approved equipment.",

    tasks: [
      [
        "1. Identify and wear safety equipment",
        "Qualified range staff teach and verify " +
        "appropriate protective equipment."
      ],
      [
        "2. Demonstrate range safety rules",
        "Qualified range staff teach and assess " +
        "the applicable rules and whistle commands."
      ],
      [
        "3. Demonstrate range commands",
        "Respond appropriately to official " +
        "range commands under supervision."
      ],
      [
        "4. Identify equipment parts",
        "Identify the main parts of the archery " +
        "equipment used in the program."
      ],
      [
        "5. Demonstrate stance and shooting technique",
        "Demonstrate appropriate stance and technique " +
        "under qualified supervision."
      ],
      [
        "6. Complete the Bear archery shooting requirement",
        "At an approved range, shoot at least 15 arrows " +
        "in three sets of five while attempting to improve."
      ],
      [
        "7. Demonstrate safe arrow retrieval",
        "Follow official commands and procedures " +
        "for retrieving arrows."
      ],
      [
        "8. Discuss equipment storage",
        "Discuss safe put-away and storage procedures. " +
        "Qualified staff must confirm whether this " +
        "additional step applies."
      ]
    ],

    completionNote:
      "RANGE STAFF VERIFICATION REQUIRED: These are " +
      "reference checklist items. The qualified " +
      "rangemaster must verify current official " +
      "requirements at an approved event."
  };


  // ==========================================================
  // SPECIAL ELECTIVE 2 - SLINGSHOT BEAR
  // ==========================================================

  bear.guides["Bear|Slingshot Bear"] = {
    supplies:
      "Approved district/council slingshot range, " +
      "qualified rangemaster, and approved equipment.",

    tasks: [
      [
        "1. Identify and wear safety equipment",
        "Qualified range staff verify protective equipment."
      ],
      [
        "2. Explain slingshot safety rules",
        "Learn and explain official slingshot safety rules."
      ],
      [
        "3. Demonstrate range commands",
        "Demonstrate understanding of official " +
        "range commands."
      ],
      [
        "4. Identify slingshot parts",
        "Identify the main components of the equipment."
      ],
      [
        "5. Identify permitted and prohibited ammunition",
        "Learn which ammunition is approved " +
        "for the supervised program."
      ],
      [
        "6. Identify permitted and prohibited targets",
        "Learn which targets are permitted " +
        "under the official program."
      ],
      [
        "7. Complete the Bear slingshot shooting requirement",
        "At an approved range, shoot at least 15 shots " +
        "in three sets of five while attempting to improve."
      ],
      [
        "8. Demonstrate equipment storage",
        "Follow the rangemaster's instructions " +
        "for putting away equipment."
      ]
    ],

    completionNote:
      "RANGE STAFF VERIFICATION REQUIRED: Slingshot " +
      "activities must occur through approved " +
      "district or council programs. The qualified " +
      "rangemaster verifies advancement completion."
  };


  // ==========================================================
  // SPECIAL ELECTIVE 3 - BB GUNS BEAR
  // ==========================================================

  bear.guides["Bear|BB Guns Bear"] = {
    supplies:
      "Approved district/council BB gun range, " +
      "qualified rangemaster, and approved equipment.",

    tasks: [
      [
        "1. Identify and wear safety equipment",
        "Qualified range staff verify appropriate " +
        "protective equipment."
      ],
      [
        "2. Recite the four safety reminders",
        "Learn and recite the four official " +
        "BB gun safety reminders."
      ],
      [
        "3. Demonstrate range commands",
        "Demonstrate understanding of official " +
        "range commands."
      ],
      [
        "4. Demonstrate the safety mechanism",
        "Under qualified supervision, demonstrate " +
        "understanding of the equipment's safety mechanism."
      ],
      [
        "5. Demonstrate loading, firing, and securing",
        "Qualified range staff supervise and assess " +
        "required equipment handling."
      ],
      [
        "6. Demonstrate a shooting position",
        "Demonstrate one approved shooting position " +
        "under qualified supervision."
      ],
      [
        "7. Complete the Bear BB gun shooting requirement",
        "At an approved range, shoot at least 15 BBs " +
        "in three sets of five, score the targets, " +
        "and attempt to improve."
      ],
      [
        "8. Demonstrate equipment storage",
        "Follow qualified range staff instructions " +
        "for proper equipment storage."
      ]
    ],

    completionNote:
      "RANGE STAFF VERIFICATION REQUIRED: BB gun " +
      "activities must occur through approved " +
      "district or council programs with qualified " +
      "range personnel."
  };


  // ==========================================================
  // DATA VALIDATION
  // ==========================================================

  function validateBearData() {

    const adventures = bear.directory["Bear"];

    let missing = 0;
    let invalid = 0;

    adventures.forEach(([name]) => {

      const guide = bear.guides["Bear|" + name];

      if (!guide) {
        console.error(
          "[PACK456] Missing Bear guide:",
          name
        );
        missing++;
        return;
      }

      if (
        !Array.isArray(guide.tasks) ||
        guide.tasks.length === 0
      ) {
        console.error(
          "[PACK456] Invalid Bear tasks:",
          name
        );
        invalid++;
      }

    });

    console.log(
      "[PACK456] Bear adventures:",
      adventures.length
    );

    console.log(
      "[PACK456] Bear missing guides:",
      missing
    );

    console.log(
      "[PACK456] Bear invalid guides:",
      invalid
    );

    if (
      adventures.length === 26 &&
      missing === 0 &&
      invalid === 0
    ) {
      console.log(
        "[PACK456] BEAR DATA VALIDATION: PASS"
      );
    } else {
      console.error(
        "[PACK456] BEAR DATA VALIDATION: FAIL"
      );
    }

  }

  validateBearData();

})();
