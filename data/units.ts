import type { Unit } from "../types/learning";

export const units: Unit[] = [
  // === Spanish ===
  {
    id: "es-basics",
    languageCode: "es",
    title: "Basics",
    description: "Essential Spanish greetings, farewells, and polite expressions.",
    order: 1,
    lessonIds: ["es-hello-goodbye", "es-please-thankyou", "es-introductions"],
  },
  {
    id: "es-numbers-colors",
    languageCode: "es",
    title: "Numbers & Colors",
    description: "Learn to count and describe the world around you in Spanish.",
    order: 2,
    lessonIds: ["es-numbers-1-10", "es-basic-colors"],
  },
  // === French ===
  {
    id: "fr-basics",
    languageCode: "fr",
    title: "Les Bases",
    description: "Essential French greetings, farewells, and polite expressions.",
    order: 1,
    lessonIds: ["fr-hello-goodbye", "fr-please-thankyou"],
  },
  {
    id: "fr-numbers-colors",
    languageCode: "fr",
    title: "Nombres et Couleurs",
    description: "Learn to count and describe the world around you in French.",
    order: 2,
    lessonIds: ["fr-numbers-1-10"],
  },
  // === German ===
  {
    id: "de-basics",
    languageCode: "de",
    title: "Grundlagen",
    description: "Essential German greetings, farewells, and polite expressions.",
    order: 1,
    lessonIds: ["de-hello-goodbye", "de-please-thankyou"],
  },
  {
    id: "de-numbers-colors",
    languageCode: "de",
    title: "Zahlen und Farben",
    description: "Learn to count and describe the world around you in German.",
    order: 2,
    lessonIds: ["de-numbers-1-10"],
  },
  // === Italian ===
  {
    id: "it-basics",
    languageCode: "it",
    title: "Fondamenta",
    description: "Essential Italian greetings, farewells, and polite expressions.",
    order: 1,
    lessonIds: ["it-hello-goodbye", "it-please-thankyou"],
  },
  // === Portuguese ===
  {
    id: "pt-basics",
    languageCode: "pt",
    title: "Básico",
    description: "Essential Portuguese greetings, farewells, and polite expressions.",
    order: 1,
    lessonIds: ["pt-hello-goodbye", "pt-please-thankyou"],
  },
  // === Japanese ===
  {
    id: "ja-basics",
    languageCode: "ja",
    title: "基本",
    description: "Essential Japanese greetings, farewells, and polite expressions.",
    order: 1,
    lessonIds: ["ja-hello-goodbye"],
  },
  // === Korean ===
  {
    id: "ko-basics",
    languageCode: "ko",
    title: "기초",
    description: "Essential Korean greetings, farewells, and polite expressions.",
    order: 1,
    lessonIds: ["ko-hello-goodbye"],
  },
  // === Chinese ===
  {
    id: "zh-basics",
    languageCode: "zh",
    title: "基础",
    description: "Essential Chinese greetings, farewells, and polite expressions.",
    order: 1,
    lessonIds: ["zh-hello-goodbye"],
  },
];

export function getUnitsByLanguage(languageCode: string): Unit[] {
  return units.filter((unit) => unit.languageCode === languageCode);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}
