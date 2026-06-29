export type TrainingLevel = "Beginner" | "Intermediate" | "Elite";

export type TrainingGoal =
  | "Fat loss"
  | "Muscle gain"
  | "Endurance"
  | "Mobility"
  | "Performance";

export type TrainingPhase = "Foundation" | "Build" | "Peak" | "Recovery";

export interface Trainer {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface SportProgram {
  id: string;
  name: string;
  description: string;
  category: string;
  level: TrainingLevel;
  goal: TrainingGoal;
  duration: string;
  intensity: number;
  equipment: string[];
  imageUrl: string;
  focus: string[];
  phases: TrainingPhase[];
  weeklyPlan: { day: string; title: string; type: string }[];
}

export interface Exercise {
  id: string;
  name: string;
  sport: string;
  level: TrainingLevel;
  targetMuscles: string[];
  prescription: {
    sets: number;
    reps: string;
    restTime: string;
  };
  caloriesBurned: number;
  intensity: number;
  equipment: string[];
  imageUrl: string;
  instructions: string[];
}

export interface NutritionMeal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  time: string;
}

export interface NutritionPlan {
  id: string;
  name: string;
  description: string;
  goal: TrainingGoal;
  dailyCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
  meals: NutritionMeal[];
  guidelines: string[];
}

export interface ClassItem {
  id: string;
  className: string;
  startTime: string;
  endTime: string;
  category: string;
  level: TrainingLevel;
  capacity: number;
  currentEnrollment: number;
  waitlistCount: number;
  trainerId: string;
}
