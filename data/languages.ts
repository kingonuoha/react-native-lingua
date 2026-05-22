import type { Language } from "../types/learning";

export const languages: Language[] = [
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flagUrl: "https://flagcdn.com/w40/es.png",
    difficulty: "beginner",
    totalLessons: 12,
    totalUnits: 2,
    description:
      "One of the most spoken languages in the world. Start your journey with basic greetings and everyday phrases.",
    learners: 28400000,
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flagUrl: "https://flagcdn.com/w40/fr.png",
    difficulty: "beginner",
    totalLessons: 12,
    totalUnits: 2,
    description:
      "The language of love and diplomacy. Learn essential French phrases for travel and conversation.",
    learners: 19400000,
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flagUrl: "https://flagcdn.com/w40/de.png",
    difficulty: "intermediate",
    totalLessons: 12,
    totalUnits: 2,
    description:
      "A key language in European business and culture. Build a foundation in German vocabulary and grammar.",
    learners: 8100000,
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flagUrl: "https://flagcdn.com/w40/it.png",
    difficulty: "beginner",
    totalLessons: 12,
    totalUnits: 2,
    description:
      "A beautiful Romance language. Learn to speak Italian with confidence through fun, interactive lessons.",
    learners: 6500000,
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flagUrl: "https://flagcdn.com/w40/br.png",
    difficulty: "beginner",
    totalLessons: 12,
    totalUnits: 2,
    description:
      "Spoken across Brazil, Portugal, and beyond. Start learning Portuguese with our beginner-friendly lessons.",
    learners: 5200000,
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flagUrl: "https://flagcdn.com/w40/jp.png",
    difficulty: "advanced",
    totalLessons: 12,
    totalUnits: 2,
    description:
      "A fascinating language with three writing systems. Begin your journey into Japanese language and culture.",
    learners: 12700000,
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flagUrl: "https://flagcdn.com/w40/kr.png",
    difficulty: "intermediate",
    totalLessons: 12,
    totalUnits: 2,
    description:
      "The language of K-culture and innovation. Learn Hangul and essential Korean expressions.",
    learners: 9300000,
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flagUrl: "https://flagcdn.com/w40/cn.png",
    difficulty: "advanced",
    totalLessons: 12,
    totalUnits: 2,
    description:
      "The most spoken language in the world. Take your first steps in Mandarin Chinese.",
    learners: 7400000,
  },
];

export function getLanguageByCode(code: string): Language | undefined {
  return languages.find((lang) => lang.code === code);
}

export const defaultLanguage = languages[0];
