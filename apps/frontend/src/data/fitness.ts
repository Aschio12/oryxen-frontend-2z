import type {
  ClassItem,
  Exercise,
  NutritionPlan,
  SportProgram,
  Trainer,
} from "@/types";

export const trainers: Trainer[] = [
  {
    id: "t-001",
    name: "Alex Morgan",
    role: "Strength & Conditioning Coach",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=90",
    bio: "Former Olympic lifting coach with 16 years of experience. Specializes in explosive power, absolute strength, and barbell mechanics. Certified through US Weightlifting."
  },
  {
    id: "t-002",
    name: "Maya Chen",
    role: "Mobility & Movement Specialist",
    imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=90",
    bio: "Master of kinesthetics and biomechanics with 12 years of practice. Focuses on longevity, tissue resilience, and fluid movement patterns. Trained under international mobility experts."
  },
  {
    id: "t-003",
    name: "Noah Carter",
    role: "Combat & Conditioning Coach",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=90",
    bio: "Ex-professional MMA fighter with 18 years in combat sports. Specializes in anaerobic conditioning, striking mechanics, and mental performance under pressure."
  },
  {
    id: "t-004",
    name: "Sarah Williams",
    role: "Nutrition & Performance Coach",
    imageUrl: "https://images.unsplash.com/photo-1569163139394-de4798aa62b2?auto=format&fit=crop&w=600&q=90",
    bio: "Sports nutritionist with a degree in Exercise Science. Expert in macro programming, recovery protocols, and metabolic optimization for elite athletes."
  },
  {
    id: "t-005",
    name: "James Rodriguez",
    role: "Endurance & Aerobic Coach",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=90",
    bio: "Former distance runner and triathlon coach. Specializes in aerobic capacity development, mitochondrial adaptation, and sustained performance training."
  },
  {
    id: "t-006",
    name: "Jessica Park",
    role: "Olympic Weightlifting Coach",
    imageUrl: "https://images.unsplash.com/photo-1554080221-cbf9d3fb3b5e?auto=format&fit=crop&w=600&q=90",
    bio: "Certified Level 2 Weightlifting Coach with 14 years of coaching experience. Has trained national and international level competitors."
  },
  {
    id: "t-007",
    name: "Marcus Thompson",
    role: "Functional Fitness & Gymnastics Coach",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=90",
    bio: "Expert in calisthenics and functional movement patterns. Specializes in upper body pushing power, muscle-up progressions, and bodyweight mastery. 20 years of teaching experience."
  },
  {
    id: "t-008",
    name: "Elena Petrov",
    role: "Recovery & Rehabilitation Specialist",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=90",
    bio: "Sports medicine background with focus on injury prevention and post-injury rehabilitation. Expert in myofascial release, cupping, and advanced recovery protocols."
  },
  {
    id: "t-009",
    name: "David Kim",
    role: "Mental Performance Coach",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=90",
    bio: "Sports psychologist specializing in peak performance, visualization, mental resilience, and competition psychology. Works with elite athletes globally."
  },
];

export const sportPrograms: SportProgram[] = [
  {
    id: "strength-prime",
    name: "Strength Prime",
    description: "A calculated descent into heavy barbell mechanics. Built to maximize neuromuscular efficiency and absolute strength. Proven methodology for competitive strength athletes.",
    category: "Gym",
    level: "Intermediate",
    goal: "Muscle gain",
    duration: "8 weeks",
    intensity: 84,
    equipment: ["Barbell", "Dumbbells", "Cable station", "Plate loaded machines"],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",
    focus: ["Progressive overload", "Hypertrophy", "Core bracing", "Barbell mastery"],
    phases: ["Foundation", "Build", "Peak", "Recovery"],
    weeklyPlan: [
      { day: "Day 1", title: "Push mechanics", type: "Strength" },
      { day: "Day 2", title: "Lower power", type: "Strength" },
      { day: "Day 3", title: "Active recovery", type: "Mobility" },
      { day: "Day 4", title: "Pull volume", type: "Hypertrophy" },
      { day: "Day 5", title: "Conditioning engine", type: "HIIT" },
    ],
  },
  {
    id: "elite-engine",
    name: "Elite Engine",
    description: "Push the boundaries of your aerobic and anaerobic thresholds. This is about building an unbreakable engine for elite performance and conditioning.",
    category: "HIIT",
    level: "Elite",
    goal: "Performance",
    duration: "10 weeks",
    intensity: 96,
    equipment: ["Assault bike", "Sled", "Kettlebells", "Rowing machine", "Medicine balls"],
    imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=90",
    focus: ["Power output", "Lactate tolerance", "Explosive repeatability", "Cardiovascular dominance"],
    phases: ["Build", "Peak"],
    weeklyPlan: [
      { day: "Day 1", title: "Sprint intervals", type: "Anaerobic" },
      { day: "Day 2", title: "Sled power", type: "Power" },
      { day: "Day 3", title: "Mixed modal test", type: "Endurance" },
    ],
  },
  {
    id: "mobility-restore",
    name: "Mobility Restore",
    description: "Reclaim your range of motion and joint health. Designed to undo the damage of modern living, sitting, and intense training.",
    category: "Recovery",
    level: "Beginner",
    goal: "Mobility",
    duration: "4 weeks",
    intensity: 42,
    equipment: ["Mat", "Foam roller", "Resistance band", "Lacrosse ball", "Mobility tools"],
    imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=90",
    focus: ["Joint control", "Breathing", "Tissue quality", "Pain-free movement"],
    phases: ["Foundation"],
    weeklyPlan: [
      { day: "Day 1", title: "Hip mobility", type: "Recovery" },
      { day: "Day 2", title: "Thoracic flow", type: "Recovery" },
      { day: "Day 3", title: "Shoulder resilience", type: "Mobility" },
    ],
  },
  {
    id: "combat-athlete",
    name: "Combat Athlete",
    description: "Specialized training for combat sports. Develops striking power, footwork mechanics, conditioning, and mental resilience under fatigue.",
    category: "Combat",
    level: "Elite",
    goal: "Performance",
    duration: "12 weeks",
    intensity: 92,
    equipment: ["Heavy bag", "Speed bag", "Hand pads", "Sparring gloves", "Conditioning tools"],
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=1200&q=90",
    focus: ["Striking mechanics", "Footwork", "Anaerobic conditioning", "Mental toughness"],
    phases: ["Foundation", "Build", "Peak"],
    weeklyPlan: [
      { day: "Day 1", title: "Technical striking", type: "Technique" },
      { day: "Day 2", title: "Conditioning rounds", type: "HIIT" },
      { day: "Day 3", title: "Footwork drills", type: "Agility" },
      { day: "Day 4", title: "Strength & power", type: "Strength" },
      { day: "Day 5", title: "Sparring session", type: "Combat" },
    ],
  },
  {
    id: "shred-summit",
    name: "Shred Summit",
    description: "Maximum fat loss protocol while preserving muscle tissue. Combines strategic cardio, strength work, and metabolic conditioning.",
    category: "Gym",
    level: "Intermediate",
    goal: "Fat loss",
    duration: "6 weeks",
    intensity: 78,
    equipment: ["Dumbbells", "Cardio equipment", "Battle ropes", "Med balls"],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",
    focus: ["Fat oxidation", "Metabolic elevation", "Muscle preservation", "Cardiovascular health"],
    phases: ["Foundation", "Peak"],
    weeklyPlan: [
      { day: "Day 1", title: "Strength circuits", type: "Strength" },
      { day: "Day 2", title: "Steady state cardio", type: "Cardio" },
      { day: "Day 3", title: "Metabolic work", type: "HIIT" },
      { day: "Day 4", title: "Active recovery", type: "Recovery" },
      { day: "Day 5", title: "Hybrid finisher", type: "Conditioning" },
    ],
  },
  {
    id: "endurance-beast",
    name: "Endurance Beast",
    description: "Build aerobic capacity and endurance for tactical athletes. Focus on sustained effort, oxygen utilization, and mental fortitude.",
    category: "Aerobics",
    level: "Elite",
    goal: "Endurance",
    duration: "16 weeks",
    intensity: 68,
    equipment: ["Rowing machine", "Running trails", "Assault bike", "Sandbags"],
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=1200&q=90",
    focus: ["Aerobic capacity", "Mitochondrial density", "Oxygen efficiency", "Mental endurance"],
    phases: ["Foundation", "Build", "Peak", "Recovery"],
    weeklyPlan: [
      { day: "Day 1", title: "Long steady runs", type: "Endurance" },
      { day: "Day 2", title: "Tempo intervals", type: "Aerobic" },
      { day: "Day 3", title: "Maintenance strength", type: "Strength" },
      { day: "Day 4", title: "Easy active recovery", type: "Recovery" },
    ],
  },
  {
    id: "calisthenics-mastery",
    name: "Calisthenics Mastery",
    description: "Master bodyweight mechanics and gymnastics strength. Build functional movement patterns with zero equipment. From basics to advanced skills.",
    category: "Calisthenics",
    level: "Beginner",
    goal: "Strength",
    duration: "12 weeks",
    intensity: 72,
    equipment: ["Pull-up bar", "Dip station", "Parallettes"],
    imageUrl: "https://images.unsplash.com/photo-1577221084712-56ceb4ee3dbb?auto=format&fit=crop&w=1200&q=90",
    focus: ["Bodyweight control", "Core strength", "Gymnastics skills", "Functional movement"],
    phases: ["Foundation", "Build", "Peak"],
    weeklyPlan: [
      { day: "Day 1", title: "Push skill work", type: "Strength" },
      { day: "Day 2", title: "Pull development", type: "Strength" },
      { day: "Day 3", title: "Core & balance", type: "Core" },
      { day: "Day 4", title: "Active recovery walk", type: "Recovery" },
      { day: "Day 5", title: "Full body integration", type: "Mixed" },
    ],
  },
  {
    id: "olympic-lifting-accelerator",
    name: "Olympic Lifting Accelerator",
    description: "Advanced barbell technique development focusing on the snatch and clean & jerk. For competitive weightlifters and athletes seeking explosive power.",
    category: "Gym",
    level: "Elite",
    goal: "Performance",
    duration: "14 weeks",
    intensity: 94,
    equipment: ["Olympic barbell", "Weight plates", "Bumper plates", "Blocks"],
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=90",
    focus: ["Olympic technique", "Explosive power", "Vertical displacement", "Competitive readiness"],
    phases: ["Foundation", "Build", "Peak", "Competition"],
    weeklyPlan: [
      { day: "Day 1", title: "Snatch complex", type: "Technique" },
      { day: "Day 2", title: "Clean & jerk work", type: "Technique" },
      { day: "Day 3", title: "Accessory strength", type: "Strength" },
      { day: "Day 4", title: "Technical refinement", type: "Technique" },
    ],
  },
  {
    id: "yoga-flow-strength",
    name: "Yoga Flow Strength",
    description: "Blend traditional yoga with functional strength training. Develop flexibility, balance, and body awareness while building lean muscle.",
    category: "Recovery",
    level: "All",
    goal: "Flexibility",
    duration: "8 weeks",
    intensity: 55,
    equipment: ["Yoga mat", "Blocks", "Strap", "Bolster"],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=90",
    focus: ["Flexibility", "Body awareness", "Breath work", "Mind-body connection"],
    phases: ["Foundation", "Integration"],
    weeklyPlan: [
      { day: "Day 1", title: "Morning vinyasa", type: "Mobility" },
      { day: "Day 2", title: "Hip opening sequence", type: "Flexibility" },
      { day: "Day 3", title: "Strength asanas", type: "Strength" },
      { day: "Day 4", title: "Restorative practice", type: "Recovery" },
      { day: "Day 5", title: "Full flow integration", type: "Mixed" },
    ],
  },
  {
    id: "combat-conditioning",
    name: "Combat Conditioning Elite",
    description: "Advanced conditioning designed for combat athletes. High-intensity work capacity training, striking power, and tactical cardio.",
    category: "HIIT",
    level: "Elite",
    goal: "Performance",
    duration: "12 weeks",
    intensity: 92,
    equipment: ["Heavy Bag", "Speed Bag", "Medicine Ball", "Boxing Gloves"],
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&w=1200&q=90",
    focus: ["Anaerobic capacity", "Striking power", "Tactical cardio", "Mental toughness"],
    phases: ["Foundation", "Build", "Peak"],
    weeklyPlan: [
      { day: "Day 1", title: "Heavy bag circuits", type: "HIIT" },
      { day: "Day 2", title: "Speed and footwork", type: "Technique" },
      { day: "Day 3", title: "Power development", type: "Strength" },
      { day: "Day 4", title: "Active recovery", type: "Recovery" },
      { day: "Day 5", title: "Sparring simulation", type: "Mixed" },
    ],
  },
  {
    id: "vegan-athlete-protocol",
    name: "Vegan Athlete Protocol",
    description: "Plant-based performance optimization. Complete nutrition science for vegan athletes achieving elite results without animal products.",
    category: "Nutrition",
    level: "All",
    goal: "Performance",
    duration: "12 weeks",
    intensity: 65,
    equipment: ["None"],
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=90",
    focus: ["Plant-based nutrition", "Amino acid optimization", "Recovery meals", "Performance fueling"],
    phases: ["Foundation", "Optimization"],
    weeklyPlan: [
      { day: "Day 1", title: "Protein strategies", type: "Nutrition" },
      { day: "Day 2", title: "Pre-workout fueling", type: "Nutrition" },
      { day: "Day 3", title: "Recovery protocols", type: "Nutrition" },
      { day: "Day 4", title: "Micronutrient focus", type: "Nutrition" },
      { day: "Day 5", title: "Meal prep mastery", type: "Mixed" },
    ],
  },
  {
    id: "explosive-athleticism",
    name: "Explosive Athleticism",
    description: "Develop elite-level power, speed, and reactivity. For athletes seeking superior athletic performance and explosive capabilities.",
    category: "HIIT",
    level: "Elite",
    goal: "Performance",
    duration: "16 weeks",
    intensity: 88,
    equipment: ["Jump Box", "Medicine Ball", "Plyometric Blocks"],
    imageUrl: "https://images.unsplash.com/photo-1552707881-20efab892c0b?auto=format&fit=crop&w=1200&q=90",
    focus: ["Explosive power", "Rate of force development", "Speed", "Reactivity"],
    phases: ["Foundation", "Build", "Peak", "Deload"],
    weeklyPlan: [
      { day: "Day 1", title: "Plyometric foundation", type: "Power" },
      { day: "Day 2", title: "Olympic lifting", type: "Power" },
      { day: "Day 3", title: "Sprint mechanics", type: "Speed" },
      { day: "Day 4", title: "Reactive training", type: "Power" },
    ],
  },
];

export const exercises: Exercise[] = [
  {
    id: "goblet-squat",
    name: "Goblet Squat",
    sport: "Gym",
    level: "Beginner",
    targetMuscles: ["Quads", "Glutes", "Core"],
    prescription: {
      sets: 4,
      reps: "10-12",
      restTime: "90 sec"
    },
    caloriesBurned: 45,
    intensity: 60,
    equipment: ["Dumbbell", "Kettlebell"],
    imageUrl: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=90",
    demoUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-goblet-squat-front.mp4",
    instructions: [
      "Hold the weight at chest height with elbows pointed down.",
      "Keep core engaged and torso upright.",
      "Initiate descent by sending hips back and down simultaneously.",
      "Descend until hips are slightly below knee level.",
      "Drive through the mid-foot and heels to stand powerfully.",
      "Maintain upright posture throughout the movement."
    ],
    tips: ["Push knees out over toes", "Keep chest tall throughout", "Squeeze glutes at the top"],
    commonMistakes: ["Rounding the lower back", "Knees caving inward", "Rising onto toes"],
    variations: ["Bodyweight Squat", "Sumo Squat", "Front Squat"]
  },
  {
    id: "sled-push",
    name: "Heavy Sled Push",
    sport: "HIIT",
    level: "Elite",
    targetMuscles: ["Quads", "Calves", "Lungs"],
    prescription: {
      sets: 8,
      reps: "20 meters",
      restTime: "60 sec"
    },
    caloriesBurned: 120,
    intensity: 95,
    equipment: ["Sled", "Weights"],
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=90",
    demoUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-sled-push-side.mp4",
    instructions: [
      "Load the sled to 1.5x bodyweight for maximum intensity.",
      "Grip the handles firmly at shoulder height.",
      "Adopt a low, aggressive forward lean at 45 degrees.",
      "Drive explosively through the legs in a marching motion.",
      "Maintain constant momentum - do not allow the sled to decelerate.",
      "Complete the prescribed distance at maximum velocity."
    ],
    tips: ["Stay low with a 45-degree body angle", "Drive through the balls of your feet", "Breathe rhythmically"],
    commonMistakes: ["Standing too upright", "Short choppy steps", "Holding breath"],
    variations: ["Sled Drag", "Prowler Push", "Light Speed Push"]
  },
  {
    id: "barbell-bench",
    name: "Barbell Bench Press",
    sport: "Gym",
    level: "Intermediate",
    targetMuscles: ["Chest", "Shoulders", "Arms"],
    prescription: {
      sets: 5,
      reps: "4-6",
      restTime: "3 min"
    },
    caloriesBurned: 65,
    intensity: 88,
    equipment: ["Barbell", "Bench"],
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=90",
    demoUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-bench-press-front.mp4",
    instructions: [
      "Load barbell with heavy weight - this is a strength movement.",
      "Lie flat on bench with feet firmly planted on the floor.",
      "Grip the bar slightly wider than shoulder-width.",
      "Lower the bar to mid-chest in a controlled 3-second descent.",
      "Pause briefly at the bottom to eliminate momentum.",
      "Drive the bar up explosively, maintaining wrist stability."
    ],
    tips: ["Retract shoulder blades for stability", "Create an arch in your upper back", "Squeeze the bar hard"],
    commonMistakes: ["Flaring elbows too wide", "Bouncing bar off chest", "Uneven grip width"],
    variations: ["Incline Bench Press", "Dumbbell Bench Press", "Close-Grip Bench Press"]
  },
  {
    id: "deadlift",
    name: "Conventional Deadlift",
    sport: "Gym",
    level: "Elite",
    targetMuscles: ["Back", "Glutes", "Quads"],
    prescription: {
      sets: 3,
      reps: "2-3",
      restTime: "5 min"
    },
    caloriesBurned: 85,
    intensity: 96,
    equipment: ["Barbell", "Plates"],
    imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=90",
    demoUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-deadlift-front.mp4",
    instructions: [
      "Position the bar over mid-foot, approximately one inch into your shoes.",
      "Grab the bar with a shoulder-width grip, arms straight.",
      "Drop your hips slightly while keeping your shins vertical.",
      "Ensure your lats are engaged and chest is up.",
      "Drive through your heels and pull the bar in a straight vertical path.",
      "Stand at lockout with knees, hips, and shoulders aligned."
    ],
    tips: ["Keep bar close to your body", "Brace core before each rep", "Lock out hips at the top"],
    commonMistakes: ["Rounding lower back", "Jerking the bar off the floor", "Hips rising too fast"],
    variations: ["Sumo Deadlift", "Romanian Deadlift", "Trap Bar Deadlift"]
  },
  {
    id: "rowing",
    name: "Assault Bike Sprints",
    sport: "HIIT",
    level: "Intermediate",
    targetMuscles: ["Lungs", "Legs", "Core"],
    prescription: {
      sets: 10,
      reps: "30 sec",
      restTime: "30 sec"
    },
    caloriesBurned: 95,
    intensity: 92,
    equipment: ["Assault Bike"],
    imageUrl: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=90",
    demoUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Cardio-air-bike-side.mp4",
    instructions: [
      "Adjust the bike seat to hip height when standing.",
      "Set a heavy fan resistance level for maximum difficulty.",
      "Begin each sprint with max effort for 30 seconds.",
      "Maintain cadence above 90 RPM throughout.",
      "Use the full recovery period to catch your breath.",
      "Repeat for 10 total rounds without reducing intensity."
    ],
    tips: ["Use both arms and legs for maximum output", "Pace your breathing", "Go all-out from the start"],
    commonMistakes: ["Pacing too conservatively", "Only using legs", "Inconsistent effort"],
    variations: ["Rowing Sprints", "Bike Erg Intervals", "Ski Erg Sprints"]
  },
  {
    id: "pull-ups",
    name: "Weighted Pull-ups",
    sport: "Gym",
    level: "Elite",
    targetMuscles: ["Back", "Arms", "Shoulders"],
    prescription: {
      sets: 5,
      reps: "6-8",
      restTime: "2 min"
    },
    caloriesBurned: 52,
    intensity: 90,
    equipment: ["Pull-up Bar", "Weight Belt"],
    imageUrl: "https://images.unsplash.com/photo-1598971639058-a213d72a5252?auto=format&fit=crop&w=800&q=90",
    demoUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4",
    instructions: [
      "Attach weight to a dip belt and secure it around your waist.",
      "Grip the bar slightly wider than shoulder-width.",
      "Pull your body up until your chin clears the bar.",
      "Lower yourself in a controlled 2-second eccentric.",
      "Do not use kipping or momentum.",
      "Complete each rep with strict form and full range of motion."
    ],
    tips: ["Initiate with lat engagement", "Depress shoulders before pulling", "Full dead hang at bottom"],
    commonMistakes: ["Using momentum or kipping", "Not going full range", "Excessive body swing"],
    variations: ["Chin-ups", "Neutral Grip Pull-ups", "Bodyweight Pull-ups"]
  },
  {
    id: "kettlebell-swing",
    name: "Kettlebell Swing",
    sport: "HIIT",
    level: "Intermediate",
    targetMuscles: ["Glutes", "Core", "Lungs"],
    prescription: {
      sets: 8,
      reps: "20",
      restTime: "45 sec"
    },
    caloriesBurned: 78,
    intensity: 75,
    equipment: ["Kettlebell"],
    imageUrl: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=800&q=90",
    demoUrl: "https://media.musclewiki.com/media/uploads/videos/branded/male-Kettlebells-kettlebell-swing-front.mp4",
    instructions: [
      "Stand with feet shoulder-width apart, kettlebell on ground in front.",
      "Hinge at hips and grab the handle with both hands.",
      "Explosively extend hips and drive the kettlebell to shoulder height.",
      "Let gravity bring the bell down between your legs.",
      "Catch in the bottom position with soft knees.",
      "Immediately explosively extend to repeat."
    ],
    tips: ["Power comes from the hips, not arms", "Keep arms relaxed", "Snap hips forward explosively"],
    commonMistakes: ["Squatting instead of hinging", "Using arms to lift", "Rounding the back"],
    variations: ["Single-Arm Swing", "American Swing", "Kettlebell Clean"]
  },
  {
    id: "rope-jump",
    name: "Double-Unders",
    sport: "Calisthenics",
    level: "Intermediate",
    targetMuscles: ["Calves", "Lungs", "Shoulders"],
    prescription: {
      sets: 10,
      reps: "30",
      restTime: "90 sec"
    },
    caloriesBurned: 68,
    intensity: 80,
    equipment: ["Jump Rope"],
    imageUrl: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Grip the rope handles at about waist height.",
      "Start with a comfortable single-unders rhythm.",
      "Explosively jump higher than usual, rotating wrists quickly.",
      "Allow the rope to pass twice under your feet per jump.",
      "Land softly on the balls of your feet.",
      "Maintain rhythm and control throughout the set."
    ],
    tips: ["Use wrists, not arms", "Jump only high enough for the rope", "Stay on the balls of your feet"],
    commonMistakes: ["Jumping too high", "Using shoulders to spin rope", "Piking at the hips"],
    variations: ["Single Unders", "Triple Unders", "Crossover Jump Rope"]
  },
  {
    id: "plank",
    name: "Weighted Plank",
    sport: "Gym",
    level: "Beginner",
    targetMuscles: ["Core", "Shoulders", "Glutes"],
    prescription: {
      sets: 4,
      reps: "60 sec",
      restTime: "90 sec"
    },
    caloriesBurned: 18,
    intensity: 50,
    equipment: ["Mat", "Weight Plate"],
    imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Get into push-up position with forearms on the ground.",
      "Place a weight plate on your lower back.",
      "Ensure your body forms a straight line from head to heels.",
      "Engage your core by drawing your navel toward your spine.",
      "Do not let your hips sag or pike upward.",
      "Hold this position without any movement for the prescribed time."
    ],
    tips: ["Breathe steadily throughout", "Squeeze glutes for stability", "Look at the floor to keep neck neutral"],
    commonMistakes: ["Hips sagging", "Holding breath", "Looking up and straining neck"],
    variations: ["Side Plank", "Plank to Push-up", "RKC Plank"]
  },
  {
    id: "snatch",
    name: "Power Snatch",
    sport: "Gym",
    level: "Elite",
    targetMuscles: ["Full Body", "Explosive power"],
    prescription: {
      sets: 6,
      reps: "2-3",
      restTime: "3 min"
    },
    caloriesBurned: 72,
    intensity: 98,
    equipment: ["Barbell", "Olympic plates"],
    imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Address the bar with feet shoulder-width apart.",
      "Maintain a neutral spine with shoulders over the bar.",
      "Execute a powerful triple extension: ankles, knees, hips.",
      "Pull yourself under the bar with elbows high.",
      "Catch in a deep quarter squat position.",
      "Drive through the legs to achieve full lockout overhead."
    ],
    tips: ["Keep bar close during pull", "Fast elbows in the turnover", "Receive in a strong position"],
    commonMistakes: ["Early arm pull", "Not fully extending hips", "Catching with soft elbows"],
    variations: ["Hang Snatch", "Muscle Snatch", "Snatch Balance"]
  },
  {
    id: "muscle-up",
    name: "Muscle-up",
    sport: "Calisthenics",
    level: "Elite",
    targetMuscles: ["Chest", "Back", "Shoulders", "Arms"],
    prescription: {
      sets: 5,
      reps: "5-8",
      restTime: "2 min"
    },
    caloriesBurned: 58,
    intensity: 92,
    equipment: ["Pull-up bar"],
    imageUrl: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Jump and grip the bar with a false grip or normal grip.",
      "Pull up explosively, driving your elbows backward.",
      "At chest level, press through and rotate wrists.",
      "Transition to a dip position with arms locked out.",
      "Lower into a controlled dip movement.",
      "Press back up to lockout to complete the rep."
    ],
    tips: ["Master strict pull-ups first", "Use a slight kip if needed", "Practice the transition separately"],
    commonMistakes: ["Insufficient pull height", "Chicken-winging elbows", "No control on the descent"],
    variations: ["Bar Muscle-up", "Ring Muscle-up", "Strict Muscle-up"]
  },
  {
    id: "prowler-sprint",
    name: "Prowler Sprint Push",
    sport: "HIIT",
    level: "Elite",
    targetMuscles: ["Quads", "Glutes", "Lungs"],
    prescription: {
      sets: 6,
      reps: "40 meters",
      restTime: "90 sec"
    },
    caloriesBurned: 115,
    intensity: 93,
    equipment: ["Prowler sled"],
    imageUrl: "https://images.unsplash.com/photo-1599744331461-2c622a6ddf27?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Load the prowler sled with heavy weight.",
      "Position hands on the handles at chest height.",
      "Lean forward at approximately 45 degrees.",
      "Drive explosively through the legs in a sprinting motion.",
      "Maintain maximum velocity throughout the entire distance.",
      "Walk back slowly to recover between sets."
    ],
    tips: ["Keep body angle low", "Drive knees forward aggressively", "Arms locked out"],
    commonMistakes: ["Body too upright", "Looking up instead of down", "Slowing down mid-push"],
    variations: ["Low Handle Push", "High Handle Push", "Backward Drag"]
  },
  {
    id: "pistol-squat",
    name: "Pistol Squat",
    sport: "Calisthenics",
    level: "Elite",
    targetMuscles: ["Quads", "Glutes", "Core", "Balance"],
    prescription: {
      sets: 5,
      reps: "5 each leg",
      restTime: "2 min"
    },
    caloriesBurned: 42,
    intensity: 88,
    equipment: ["None"],
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Stand on one leg with the other leg extended forward.",
      "Maintain an upright torso with arms extended for counterbalance.",
      "Lower slowly by bending the supporting leg knee.",
      "Descend until your hip is below knee level.",
      "Keep tension in the extended leg and core.",
      "Drive back to standing position with power and control."
    ],
    tips: ["Use a counterbalance weight initially", "Focus on ankle mobility", "Control the descent"],
    commonMistakes: ["Losing balance at the bottom", "Knee collapsing inward", "Rounding back"],
    variations: ["Assisted Pistol Squat", "Shrimp Squat", "Bulgarian Split Squat"]
  },
  {
    id: "battle-ropes",
    name: "Battle Rope Waves",
    sport: "HIIT",
    level: "Intermediate",
    targetMuscles: ["Shoulders", "Cores", "Lungs"],
    prescription: {
      sets: 8,
      reps: "30 sec",
      restTime: "30 sec"
    },
    caloriesBurned: 88,
    intensity: 85,
    equipment: ["Battle ropes"],
    imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Stand with feet shoulder-width apart holding both rope ends.",
      "Maintain a slight forward lean with engaged core.",
      "Initiate waves by explosively moving arms up and down.",
      "Alternate creating simultaneous waves in both ropes.",
      "Maintain maximum intensity without breaking rhythm.",
      "Rest briefly between sets to recover breathing."
    ],
    tips: ["Keep core tight", "Use full arm range", "Maintain consistent wave height"],
    commonMistakes: ["Standing too upright", "Small arm movements", "Breaking rhythm"],
    variations: ["Alternating Waves", "Slam Waves", "Circle Waves"]
  },
  {
    id: "kettlebell-swing",
    name: "Kettlebell Swing",
    sport: "Gym",
    level: "Intermediate",
    targetMuscles: ["Glutes", "Hamstrings", "Back", "Core"],
    prescription: {
      sets: 5,
      reps: "20-30",
      restTime: "90 sec"
    },
    caloriesBurned: 95,
    intensity: 80,
    equipment: ["Kettlebell"],
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Stand with feet hip-width apart, kettlebell in front.",
      "Hinge at hips and grab kettlebell with both hands.",
      "Drive through heels explosively, using hip extension.",
      "Swing kettlebell to eye level using momentum.",
      "Control descent back to starting position.",
      "Maintain neutral spine throughout movement."
    ]
  },
  {
    id: "front-lever",
    name: "Front Lever Hold",
    sport: "Calisthenics",
    level: "Elite",
    targetMuscles: ["Back", "Core", "Shoulders", "Arms"],
    prescription: {
      sets: 6,
      reps: "15-30 sec",
      restTime: "2 min"
    },
    caloriesBurned: 75,
    intensity: 95,
    equipment: ["Pull-up bar"],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Hang from bar with straight arms, shoulders over bar.",
      "Lean forward while keeping body straight and rigid.",
      "Depress shoulders and engage latissimus dorsi.",
      "Hold body parallel to ground in horizontal line.",
      "Maintain tension through core, back, and shoulders.",
      "Progress gradually from inclined to horizontal positions."
    ],
    tips: ["Start with tuck progressions", "Keep posterior pelvic tilt", "Depress and retract scapulae"],
    commonMistakes: ["Bending at the hips", "Relaxing core", "Not depressing shoulders"],
    variations: ["Tuck Front Lever", "One-Leg Front Lever", "Front Lever Rows"]
  },
  {
    id: "tire-flip",
    name: "Tire Flip",
    sport: "HIIT",
    level: "Elite",
    targetMuscles: ["Quads", "Back", "Chest", "Traps"],
    prescription: {
      sets: 5,
      reps: "8-10",
      restTime: "2 min"
    },
    caloriesBurned: 120,
    intensity: 90,
    equipment: ["Tractor Tire"],
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Position feet under tire edge, hands at sides.",
      "Lower hips, engage core, prepare for explosive drive.",
      "Drive through legs while lifting front edge upward.",
      "Roll tire with hands over, following with body.",
      "Complete full rotation, reset for next rep.",
      "Breathe deeply and maintain form throughout."
    ],
    tips: ["Use legs not back", "Get low under the tire", "Explosive hip drive"],
    commonMistakes: ["Lifting with back", "Not getting low enough", "Poor hand placement"],
    variations: ["Tire Flip and Jump", "Partner Tire Flip", "Light Tire Conditioning"]
  },
  {
    id: "deficit-deadlift",
    name: "Deficit Deadlift",
    sport: "Gym",
    level: "Elite",
    targetMuscles: ["Hamstrings", "Glutes", "Back", "Quads"],
    prescription: {
      sets: 4,
      reps: "3-5",
      restTime: "3 min"
    },
    caloriesBurned: 110,
    intensity: 94,
    equipment: ["Barbell", "Plates", "Platform"],
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Stand on 2-4 inch platform with barbell on ground.",
      "Feet hip-width apart, grip just outside legs.",
      "Lower hips, engage core, keep chest up.",
      "Drive through heels, extend hips and knees.",
      "Lock out at top with full hip extension.",
      "Lower controlled to platform, maintain neutral spine."
    ]
  },
  {
    id: "handstand-hold",
    name: "Handstand Hold",
    sport: "Calisthenics",
    level: "Advanced",
    targetMuscles: ["Shoulders", "Core", "Chest", "Arms"],
    prescription: {
      sets: 5,
      reps: "20-60 sec",
      restTime: "2 min"
    },
    caloriesBurned: 65,
    intensity: 85,
    equipment: ["Wall"],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=90",
    instructions: [
      "Place hands at shoulder-width 6-12 inches from wall.",
      "Kick up into handstand position against wall.",
      "Press through shoulders, engaging core fully.",
      "Maintain straight line from hands to toes.",
      "Focus on shoulder stability and balance.",
      "Progress gradually away from wall for free standing."
    ]
  }
];

export const nutritionPlans: NutritionPlan[] = [
  {
    id: "lean-engine",
    name: "Lean Engine",
    description: "A calculated deficit designed to strip body fat while preserving lean tissue and athletic performance. Optimized for training intensity during a cut.",
    goal: "Fat loss",
    dailyCalories: 1850,
    macros: {
      protein: 160,
      carbs: 150,
      fats: 65
    },
    meals: [
      { name: "Protein Oats & Berries", calories: 350, protein: 30, carbs: 45, fats: 8, time: "Breakfast" },
      { name: "Grilled Chicken Breast & Sweet Potato", calories: 420, protein: 45, carbs: 55, fats: 5, time: "Lunch" },
      { name: "Salmon & Asparagus with Brown Rice", calories: 520, protein: 42, carbs: 52, fats: 18, time: "Dinner" },
      { name: "Greek Yogurt & Almonds", calories: 280, protein: 25, carbs: 18, fats: 12, time: "Evening Snack" },
      { name: "Pre-bed: Casein Shake", calories: 200, protein: 30, carbs: 8, fats: 2, time: "Before Bed" },
    ],
    guidelines: [
      "Prioritize protein in every meal to preserve muscle mass.",
      "Drink at least 3-4 liters of water daily for satiety.",
      "Time carbohydrates around your training window for fuel.",
      "Incorporate high-fiber foods to maintain fullness.",
      "Take a multivitamin due to the reduced caloric intake."
    ]
  },
  {
    id: "hypertrophy-fuel",
    name: "Hypertrophy Fuel",
    description: "A calibrated surplus to drive muscular adaptation, recovery, and absolute strength. Engineered for maximum anabolic state.",
    goal: "Muscle gain",
    dailyCalories: 2850,
    macros: {
      protein: 190,
      carbs: 340,
      fats: 80
    },
    meals: [
      { name: "Egg & Oat Stack with Honey", calories: 620, protein: 40, carbs: 70, fats: 20, time: "Breakfast" },
      { name: "Beef Sirloin & Potato with Oil", calories: 850, protein: 55, carbs: 95, fats: 28, time: "Lunch" },
      { name: "Turkey Rice Bowl with Avocado", calories: 780, protein: 50, carbs: 85, fats: 25, time: "Dinner" },
      { name: "Whey & Banana with PB", calories: 480, protein: 35, carbs: 50, fats: 15, time: "Post-Workout" },
      { name: "Casein with Granola", calories: 320, protein: 30, carbs: 35, fats: 8, time: "Evening Snack" },
    ],
    guidelines: [
      "Maintain a consistent 300-500 caloric surplus daily.",
      "Never miss the post-workout anabolism window - consume within 2 hours.",
      "Sleep 8-9 hours nightly to maximize growth hormone production.",
      "Ensure adequate sodium intake to maintain fluid balance.",
      "Track macros religiously - hit protein target every single day."
    ]
  },
  {
    id: "performance-fuel",
    name: "Performance Fuel",
    description: "Optimized for athletes prioritizing training output and competition performance. Balances performance, recovery, and body composition.",
    goal: "Performance",
    dailyCalories: 2450,
    macros: {
      protein: 175,
      carbs: 280,
      fats: 72
    },
    meals: [
      { name: "Oatmeal with Protein & Blueberries", calories: 480, protein: 35, carbs: 60, fats: 12, time: "Breakfast" },
      { name: "Chicken with Rice & Vegetables", calories: 650, protein: 50, carbs: 70, fats: 16, time: "Lunch" },
      { name: "Fish with Sweet Potato & Greens", calories: 620, protein: 45, carbs: 65, fats: 20, time: "Dinner" },
      { name: "Pre-Workout: Rice Cakes & Honey", calories: 250, protein: 5, carbs: 60, fats: 2, time: "Pre-Workout" },
      { name: "Post-Workout: Whey & Dextrose", calories: 350, protein: 40, carbs: 45, fats: 3, time: "Post-Workout" },
    ],
    guidelines: [
      "Front-load carbohydrates early in the day for training fuel.",
      "Consume simple carbs around training for maximum performance.",
      "Prioritize nutrient density in all meals.",
      "Hydration is critical - drink electrolytes with water.",
      "Monitor energy levels and adjust macros based on performance feedback."
    ]
  },
  {
    id: "endurance-engine",
    name: "Endurance Engine",
    description: "Designed for endurance athletes requiring sustained energy and optimal oxygen utilization. Higher carb emphasis for aerobic adaptation.",
    goal: "Endurance",
    dailyCalories: 2600,
    macros: {
      protein: 155,
      carbs: 380,
      fats: 60
    },
    meals: [
      { name: "Rice Porridge with Banana & Honey", calories: 520, protein: 10, carbs: 110, fats: 4, time: "Breakfast" },
      { name: "Pasta with Lean Meat & Tomato Sauce", calories: 720, protein: 45, carbs: 100, fats: 18, time: "Lunch" },
      { name: "Salmon with Rice & Broccoli", calories: 640, protein: 48, carbs: 75, fats: 20, time: "Dinner" },
      { name: "Trail Mix & Energy Bars", calories: 380, protein: 15, carbs: 55, fats: 12, time: "Snacks" },
      { name: "Low-fat Greek Yogurt with Granola", calories: 340, protein: 30, carbs: 45, fats: 4, time: "Evening" },
    ],
    guidelines: [
      "Emphasize complex carbohydrates for sustained energy release.",
      "Time carbs before long endurance sessions for optimal performance.",
      "Stay hydrated with electrolyte drinks during long efforts.",
      "Consume antioxidant-rich foods to aid recovery.",
      "Maintain consistent caloric intake across all days."
    ]
  },
  {
    id: "lean-bulk",
    name: "Lean Bulk",
    description: "Minimalist surplus aimed at maximizing muscle gain while limiting fat accumulation. Perfect for body-composition conscious athletes.",
    goal: "Muscle gain",
    dailyCalories: 2200,
    macros: {
      protein: 180,
      carbs: 240,
      fats: 65
    },
    meals: [
      { name: "Egg White Omelette & Toast", calories: 420, protein: 38, carbs: 45, fats: 10, time: "Breakfast" },
      { name: "Grilled Chicken with Quinoa & Greens", calories: 580, protein: 50, carbs: 60, fats: 14, time: "Lunch" },
      { name: "Lean Beef with Lentils & Vegetables", calories: 620, protein: 48, carbs: 70, fats: 16, time: "Dinner" },
      { name: "Whey Protein with Rice Cakes", calories: 350, protein: 35, carbs: 40, fats: 4, time: "Post-Workout" },
      { name: "Casein with Berries", calories: 230, protein: 30, carbs: 25, fats: 2, time: "Evening" },
    ],
    guidelines: [
      "Maintain a modest 200 caloric surplus for optimal gains.",
      "Prioritize hitting protein targets - this is critical.",
      "Time carbs strategically around training sessions.",
      "Monitor body composition weekly and adjust if fat gain exceeds 0.5-1 lb per week.",
      "Ensure consistent sleep and recovery between sessions."
    ]
  }
];

export const classes: ClassItem[] = [
  {
    id: "class-1",
    className: "Strength Prime - Morning",
    startTime: "2026-06-29T06:00:00Z",
    endTime: "2026-06-29T07:00:00Z",
    category: "Gym",
    level: "Intermediate",
    capacity: 18,
    currentEnrollment: 13,
    waitlistCount: 0,
    trainerId: "t-001"
  },
  {
    id: "class-2",
    className: "Elite Engine - Sprint Intervals",
    startTime: "2026-06-29T17:30:00Z",
    endTime: "2026-06-29T18:25:00Z",
    category: "HIIT",
    level: "Elite",
    capacity: 14,
    currentEnrollment: 14,
    waitlistCount: 3,
    trainerId: "t-001"
  },
  {
    id: "class-3",
    className: "Mobility Flow - Evening",
    startTime: "2026-06-29T18:00:00Z",
    endTime: "2026-06-29T19:00:00Z",
    category: "Recovery",
    level: "Beginner",
    capacity: 20,
    currentEnrollment: 8,
    waitlistCount: 0,
    trainerId: "t-002"
  },
  {
    id: "class-4",
    className: "Combat Conditioning - Afternoon",
    startTime: "2026-06-29T15:00:00Z",
    endTime: "2026-06-29T16:00:00Z",
    category: "Combat",
    level: "Elite",
    capacity: 12,
    currentEnrollment: 12,
    waitlistCount: 2,
    trainerId: "t-003"
  },
  {
    id: "class-5",
    className: "Endurance Beast - Long Effort",
    startTime: "2026-06-30T07:00:00Z",
    endTime: "2026-06-30T08:30:00Z",
    category: "Aerobics",
    level: "Intermediate",
    capacity: 25,
    currentEnrollment: 18,
    waitlistCount: 0,
    trainerId: "t-005"
  },
  {
    id: "class-6",
    className: "Olympic Lifting - Technical",
    startTime: "2026-06-30T09:00:00Z",
    endTime: "2026-06-30T10:30:00Z",
    category: "Gym",
    level: "Elite",
    capacity: 10,
    currentEnrollment: 10,
    waitlistCount: 1,
    trainerId: "t-006"
  },
  {
    id: "class-7",
    className: "Shred Summit - Fat Loss Focus",
    startTime: "2026-06-30T17:00:00Z",
    endTime: "2026-06-30T18:00:00Z",
    category: "HIIT",
    level: "Intermediate",
    capacity: 20,
    currentEnrollment: 15,
    waitlistCount: 0,
    trainerId: "t-001"
  },
  {
    id: "class-8",
    className: "Nutrition Strategy Session",
    startTime: "2026-07-01T18:00:00Z",
    endTime: "2026-07-01T19:00:00Z",
    category: "Education",
    level: "All",
    capacity: 30,
    currentEnrollment: 22,
    waitlistCount: 0,
    trainerId: "t-004"
  }
];
