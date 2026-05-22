export type LanguageCode = "en" | "es" | "fr" | "de" | "pt" | "it" | "ja" | "ko" | "zh";

export type ActivityType =
  | "vocabulary"
  | "multiple-choice"
  | "fill-blank"
  | "listen-repeat"
  | "audio-lesson"
  | "ai-teacher"
  | "chat-tutor";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface VocabularyItem {
  id: string;
  word: string;
  translation: string;
  pronunciation?: string;
  audioUrl?: string;
  imageUrl?: string;
}

export interface PhraseItem {
  id: string;
  phrase: string;
  translation: string;
  pronunciation?: string;
  audioUrl?: string;
}

export interface LessonGoal {
  id: string;
  description: string;
}

export interface AiTeacherPrompt {
  introduction: string;
  scenario: string;
  targetLanguage: string;
  instructionLanguage: string;
  keyPhrases: string[];
  culturalNotes?: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  instruction: string;
  vocabulary?: VocabularyItem[];
  phrases?: PhraseItem[];
  prompt?: AiTeacherPrompt;
  options?: string[];
  correctAnswer?: string;
  audioUrl?: string;
  imageUrl?: string;
  duration?: number;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  order: number;
  difficulty: Difficulty;
  xpReward: number;
  estimatedMinutes: number;
  goals: LessonGoal[];
  activities: Activity[];
}

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
}

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flagUrl: string;
  difficulty: Difficulty;
  totalLessons: number;
  totalUnits: number;
  description: string;
  learners?: number;
}
