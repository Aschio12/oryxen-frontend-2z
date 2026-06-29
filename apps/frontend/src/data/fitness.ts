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
    role: "Strength & Conditioning",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80",
    bio: "Former Olympic lifting coach specializing in explosive power and absolute strength development."
  },
  {
    id: "t-002",
    name: "Maya Chen",
    role: "Mobility & Flow",
    imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=400&q=80",
    bio: "Master of kinesthetics and biomechanics. Focuses on longevity, tissue health, and fluid movement."
  },
  {
    id: "t-003",
    name: "Noah Carter",
    role: "Combat & Endurance",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
    bio: "Ex-professional fighter. Specializes in anaerobic threshold training and striking mechanics."
  },
];

export const sportPrograms: SportProgram[] = [
  {
    id: "strength-prime",
    name: "Strength Prime",
    description: "A calculated descent into heavy barbell mechanics. Built to maximize neuromuscular efficiency and absolute strength.",
    category: "Gym",
    level: "Intermediate",
    goal: "Muscle gain",
    duration: "8 weeks",
    intensity: 84,
    equipment: ["Barbell", "Dumbbells", "Cable station"],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    focus: ["Progressive overload", "Hypertrophy", "Core bracing"],
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
    description: "Push the boundaries of your aerobic and anaerobic thresholds. This is about building an unbreakable engine.",
    category: "HIIT",
    level: "Elite",
    goal: "Performance",
    duration: "10 weeks",
    intensity: 96,
    equipment: ["Assault bike", "Sled", "Kettlebells"],
    imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80",
    focus: ["Power output", "Lactate tolerance", "Explosive repeatability"],
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
    description: "Reclaim your range of motion. Designed to undo the damage of modern living and intense training.",
    category: "Recovery",
    level: "Beginner",
    goal: "Mobility",
    duration: "4 weeks",
    intensity: 42,
    equipment: ["Mat", "Foam roller", "Resistance band"],
    imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=900&q=80",
    focus: ["Joint control", "Breathing", "Tissue quality"],
    phases: ["Foundation"],
    weeklyPlan: [
      { day: "Day 1", title: "Hip mobility", type: "Recovery" },
      { day: "Day 2", title: "Thoracic flow", type: "Recovery" },
    ],
  }
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
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=400&q=80",
    instructions: [
      "Hold the weight at chest height.",
      "Keep elbows tucked and torso upright.",
      "Descend until hips are below the knees.",
      "Drive through the mid-foot to stand."
    ]
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
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
    instructions: [
      "Load the sled to 1.5x bodyweight.",
      "Adopt a low, aggressive forward lean.",
      "Drive powerfully through the legs, marching forward.",
      "Do not let the sled stop moving."
    ]
  }
];

export const nutritionPlans: NutritionPlan[] = [
  {
    id: "lean-engine",
    name: "Lean Engine",
    description: "A calculated deficit designed to strip body fat while preserving lean tissue and athletic performance.",
    goal: "Fat loss",
    dailyCalories: 1850,
    macros: {
      protein: 160,
      carbs: 150,
      fats: 65
    },
    meals: [
      { name: "Protein Oats & Berries", calories: 350, protein: 30, carbs: 45, fats: 8, time: "Breakfast" },
      { name: "Chicken & Quinoa Bowl", calories: 500, protein: 45, carbs: 55, fats: 12, time: "Lunch" },
      { name: "Salmon & Asparagus", calories: 450, protein: 40, carbs: 10, fats: 25, time: "Dinner" },
      { name: "Greek Yogurt & Almonds", calories: 250, protein: 25, carbs: 15, fats: 10, time: "Evening Snack" },
    ],
    guidelines: [
      "Prioritize protein in every meal.",
      "Drink at least 3 liters of water daily.",
      "Time carbohydrates around your training window."
    ]
  },
  {
    id: "hypertrophy-fuel",
    name: "Hypertrophy Fuel",
    description: "A calibrated surplus to drive muscular adaptation, recovery, and absolute strength.",
    goal: "Muscle gain",
    dailyCalories: 2850,
    macros: {
      protein: 190,
      carbs: 340,
      fats: 80
    },
    meals: [
      { name: "Egg & Oat Stack", calories: 600, protein: 40, carbs: 65, fats: 20, time: "Breakfast" },
      { name: "Beef & Potato Plate", calories: 800, protein: 55, carbs: 90, fats: 25, time: "Lunch" },
      { name: "Turkey Rice Bowl", calories: 750, protein: 50, carbs: 85, fats: 20, time: "Dinner" },
      { name: "Whey & Banana Shake", calories: 400, protein: 35, carbs: 45, fats: 8, time: "Post-Workout" },
    ],
    guidelines: [
      "Ensure a caloric surplus is maintained daily.",
      "Never miss the post-workout anabolism window.",
      "Sleep 8+ hours to maximize growth hormone."
    ]
  }
];

export const classes: ClassItem[] = [
  {
    id: "class-1",
    className: "Strength Prime",
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
    id: "class-3",
    className: "Elite Engine",
    startTime: "2026-06-29T17:30:00Z",
    endTime: "2026-06-29T18:25:00Z",
    category: "HIIT",
    level: "Elite",
    capacity: 14,
    currentEnrollment: 14,
    waitlistCount: 3,
    trainerId: "t-001"
  }
];
