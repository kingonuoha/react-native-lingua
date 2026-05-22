import type { Lesson } from "../types/learning";

export const lessons: Lesson[] = [
  // ====================================================================
  // SPANISH LESSONS
  // ====================================================================
  {
    id: "es-hello-goodbye",
    unitId: "es-basics",
    title: "Hello & Goodbye",
    description: "Learn how to greet people and say goodbye in Spanish.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "es-hg-goal-1", description: "Greet someone with 'Hola'" },
      { id: "es-hg-goal-2", description: "Say goodbye with 'Adiós'" },
      { id: "es-hg-goal-3", description: "Use 'Buenos días' and 'Buenas noches'" },
    ],
    activities: [
      {
        id: "es-hg-vocab-1",
        type: "vocabulary",
        title: "Key Words",
        instruction: "Learn these essential Spanish greetings.",
        vocabulary: [
          {
            id: "es-vocab-hola",
            word: "Hola",
            translation: "Hello",
            pronunciation: "OH-lah",
          },
          {
            id: "es-vocab-adios",
            word: "Adiós",
            translation: "Goodbye",
            pronunciation: "ah-dee-OHS",
          },
          {
            id: "es-vocab-buenos-dias",
            word: "Buenos días",
            translation: "Good morning",
            pronunciation: "BWEH-nohs DEE-ahs",
          },
          {
            id: "es-vocab-buenas-noches",
            word: "Buenas noches",
            translation: "Good night",
            pronunciation: "BWEH-nahs NOH-chehs",
          },
        ],
      },
      {
        id: "es-hg-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Hola" mean?',
        options: ["Goodbye", "Hello", "Good morning", "Good night"],
        correctAnswer: "Hello",
      },
      {
        id: "es-hg-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'How do you say "Goodbye" in Spanish?',
        options: ["Buenos días", "Hola", "Adiós", "Buenas noches"],
        correctAnswer: "Adiós",
      },
      {
        id: "es-hg-fill-1",
        type: "fill-blank",
        title: "Fill in the Blank",
        instruction: 'Complete: "___ días" means "Good morning".',
        options: ["Buenos", "Hola", "Buenas", "Adiós"],
        correctAnswer: "Buenos",
      },
      {
        id: "es-hg-ai-1",
        type: "ai-teacher",
        title: "Practice with AI Teacher",
        instruction: "Practice your greetings with the AI teacher in a real conversation.",
        prompt: {
          introduction:
            "You are a friendly Spanish teacher. Greet the student and ask how they are.",
          scenario:
            "The student is meeting you for the first time. Greet them in Spanish and wait for their response.",
          targetLanguage: "Spanish",
          instructionLanguage: "English",
          keyPhrases: ["Hola", "¿Cómo estás?", "Muy bien, gracias", "Adiós"],
          culturalNotes:
            "In Spanish culture, it is common to greet with a handshake or a kiss on the cheek depending on the relationship.",
        },
      },
    ],
  },
  {
    id: "es-please-thankyou",
    unitId: "es-basics",
    title: "Please & Thank You",
    description: "Learn polite expressions in Spanish.",
    order: 2,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "es-pt-goal-1", description: "Say 'please' and 'thank you'" },
      { id: "es-pt-goal-2", description: "Apologize with 'lo siento'" },
      { id: "es-pt-goal-3", description: "Use 'de nada' for 'you are welcome'" },
    ],
    activities: [
      {
        id: "es-pt-vocab-1",
        type: "vocabulary",
        title: "Polite Expressions",
        instruction: "Learn these essential polite phrases in Spanish.",
        vocabulary: [
          {
            id: "es-vocab-por-favor",
            word: "Por favor",
            translation: "Please",
            pronunciation: "por fah-VOR",
          },
          {
            id: "es-vocab-gracias",
            word: "Gracias",
            translation: "Thank you",
            pronunciation: "GRAH-see-ahs",
          },
          {
            id: "es-vocab-de-nada",
            word: "De nada",
            translation: "You are welcome",
            pronunciation: "deh NAH-dah",
          },
          {
            id: "es-vocab-lo-siento",
            word: "Lo siento",
            translation: "I am sorry",
            pronunciation: "loh see-EHN-toh",
          },
        ],
      },
      {
        id: "es-pt-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Gracias" mean?',
        options: ["Please", "Sorry", "Thank you", "You are welcome"],
        correctAnswer: "Thank you",
      },
      {
        id: "es-pt-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'How do you say "Please" in Spanish?',
        options: ["Gracias", "Lo siento", "Por favor", "De nada"],
        correctAnswer: "Por favor",
      },
      {
        id: "es-pt-audio-1",
        type: "audio-lesson",
        title: "Listen & Repeat",
        instruction: "Listen to each phrase and repeat it out loud.",
        phrases: [
          { id: "es-phrase-please", phrase: "Por favor", translation: "Please" },
          { id: "es-phrase-thanks", phrase: "Gracias", translation: "Thank you" },
          { id: "es-phrase-welcome", phrase: "De nada", translation: "You are welcome" },
          { id: "es-phrase-sorry", phrase: "Lo siento", translation: "I am sorry" },
        ],
        duration: 60,
      },
    ],
  },
  {
    id: "es-introductions",
    unitId: "es-basics",
    title: "Introductions",
    description: "Learn how to introduce yourself in Spanish.",
    order: 3,
    difficulty: "beginner",
    xpReward: 15,
    estimatedMinutes: 7,
    goals: [
      { id: "es-int-goal-1", description: "Say your name with 'Me llamo'" },
      { id: "es-int-goal-2", description: "Ask someone their name" },
      { id: "es-int-goal-3", description: "Say where you are from" },
    ],
    activities: [
      {
        id: "es-int-vocab-1",
        type: "vocabulary",
        title: "Introduction Phrases",
        instruction: "Learn how to introduce yourself in Spanish.",
        vocabulary: [
          {
            id: "es-vocab-me-llamo",
            word: "Me llamo",
            translation: "My name is",
            pronunciation: "meh YAH-moh",
          },
          {
            id: "es-vocab-como-te-llamas",
            word: "¿Cómo te llamas?",
            translation: "What is your name?",
            pronunciation: "KOH-moh teh YAH-mahs",
          },
          {
            id: "es-vocab-mucho-gusto",
            word: "Mucho gusto",
            translation: "Nice to meet you",
            pronunciation: "MOO-choh GOOS-toh",
          },
          {
            id: "es-vocab-soy-de",
            word: "Soy de",
            translation: "I am from",
            pronunciation: "soy deh",
          },
        ],
      },
      {
        id: "es-int-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Me llamo" mean?',
        options: ["What is your name?", "Nice to meet you", "My name is", "I am from"],
        correctAnswer: "My name is",
      },
      {
        id: "es-int-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'How do you ask "What is your name?" in Spanish?',
        options: ["Me llamo", "Mucho gusto", "Soy de", "¿Cómo te llamas?"],
        correctAnswer: "¿Cómo te llamas?",
      },
      {
        id: "es-int-chat-1",
        type: "chat-tutor",
        title: "Introduce Yourself",
        instruction: "Introduce yourself to the AI tutor in Spanish.",
        prompt: {
          introduction:
            "You are a friendly Spanish tutor. Help the student introduce themselves.",
          scenario:
            "The student is meeting a new friend. Guide them to say their name and where they are from.",
          targetLanguage: "Spanish",
          instructionLanguage: "English",
          keyPhrases: ["Me llamo...", "Soy de...", "Mucho gusto", "¿Cómo te llamas?"],
        },
      },
    ],
  },
  {
    id: "es-numbers-1-10",
    unitId: "es-numbers-colors",
    title: "Numbers 1-10",
    description: "Learn to count from one to ten in Spanish.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "es-num-goal-1", description: "Count from 1 to 5 in Spanish" },
      { id: "es-num-goal-2", description: "Count from 6 to 10 in Spanish" },
      { id: "es-num-goal-3", description: "Recognize Spanish numbers by sound" },
    ],
    activities: [
      {
        id: "es-num-vocab-1",
        type: "vocabulary",
        title: "Numbers 1-10",
        instruction: "Learn the Spanish numbers from one to ten.",
        vocabulary: [
          { id: "es-vocab-uno", word: "Uno", translation: "One", pronunciation: "OO-noh" },
          { id: "es-vocab-dos", word: "Dos", translation: "Two", pronunciation: "dohs" },
          { id: "es-vocab-tres", word: "Tres", translation: "Three", pronunciation: "trehs" },
          { id: "es-vocab-cuatro", word: "Cuatro", translation: "Four", pronunciation: "KWAH-troh" },
          { id: "es-vocab-cinco", word: "Cinco", translation: "Five", pronunciation: "SEEN-koh" },
          { id: "es-vocab-seis", word: "Seis", translation: "Six", pronunciation: "says" },
          { id: "es-vocab-siete", word: "Siete", translation: "Seven", pronunciation: "see-EH-teh" },
          { id: "es-vocab-ocho", word: "Ocho", translation: "Eight", pronunciation: "OH-choh" },
          { id: "es-vocab-nueve", word: "Nueve", translation: "Nine", pronunciation: "NWEH-veh" },
          { id: "es-vocab-diez", word: "Diez", translation: "Ten", pronunciation: "dee-ehs" },
        ],
      },
      {
        id: "es-num-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What number is "Tres"?',
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "Three",
      },
      {
        id: "es-num-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What is "Five" in Spanish?',
        options: ["Cuatro", "Cinco", "Seis", "Siete"],
        correctAnswer: "Cinco",
      },
      {
        id: "es-num-audio-1",
        type: "audio-lesson",
        title: "Count Along",
        instruction: "Listen and repeat the numbers from 1 to 10 in Spanish.",
        phrases: [
          { id: "es-num-phrase-1", phrase: "Uno, dos, tres", translation: "One, two, three" },
          { id: "es-num-phrase-2", phrase: "Cuatro, cinco, seis", translation: "Four, five, six" },
          { id: "es-num-phrase-3", phrase: "Siete, ocho, nueve, diez", translation: "Seven, eight, nine, ten" },
        ],
        duration: 90,
      },
    ],
  },
  {
    id: "es-basic-colors",
    unitId: "es-numbers-colors",
    title: "Basic Colors",
    description: "Learn the names of common colors in Spanish.",
    order: 2,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "es-col-goal-1", description: "Name common colors in Spanish" },
      { id: "es-col-goal-2", description: "Describe objects using colors" },
    ],
    activities: [
      {
        id: "es-col-vocab-1",
        type: "vocabulary",
        title: "Colors",
        instruction: "Learn the Spanish names for common colors.",
        vocabulary: [
          { id: "es-vocab-rojo", word: "Rojo", translation: "Red", pronunciation: "ROH-hoh" },
          { id: "es-vocab-azul", word: "Azul", translation: "Blue", pronunciation: "ah-SOOL" },
          { id: "es-vocab-verde", word: "Verde", translation: "Green", pronunciation: "BEHR-deh" },
          { id: "es-vocab-amarillo", word: "Amarillo", translation: "Yellow", pronunciation: "ah-mah-REE-yoh" },
          { id: "es-vocab-blanco", word: "Blanco", translation: "White", pronunciation: "BLAHN-koh" },
          { id: "es-vocab-negro", word: "Negro", translation: "Black", pronunciation: "NEH-groh" },
        ],
      },
      {
        id: "es-col-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What color is "Rojo"?',
        options: ["Blue", "Green", "Red", "Yellow"],
        correctAnswer: "Red",
      },
      {
        id: "es-col-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'How do you say "Blue" in Spanish?',
        options: ["Verde", "Rojo", "Azul", "Blanco"],
        correctAnswer: "Azul",
      },
    ],
  },
  // ====================================================================
  // FRENCH LESSONS
  // ====================================================================
  {
    id: "fr-hello-goodbye",
    unitId: "fr-basics",
    title: "Bonjour & Au Revoir",
    description: "Learn how to greet people and say goodbye in French.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "fr-hg-goal-1", description: "Greet someone with 'Bonjour'" },
      { id: "fr-hg-goal-2", description: "Say goodbye with 'Au revoir'" },
      { id: "fr-hg-goal-3", description: "Use 'Bonsoir' and 'Bonne nuit'" },
    ],
    activities: [
      {
        id: "fr-hg-vocab-1",
        type: "vocabulary",
        title: "Key Words",
        instruction: "Learn these essential French greetings.",
        vocabulary: [
          { id: "fr-vocab-bonjour", word: "Bonjour", translation: "Hello / Good day", pronunciation: "bohn-ZHOOR" },
          { id: "fr-vocab-au-revoir", word: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAHR" },
          { id: "fr-vocab-bonsoir", word: "Bonsoir", translation: "Good evening", pronunciation: "bohn-SWAHR" },
          { id: "fr-vocab-bonne-nuit", word: "Bonne nuit", translation: "Good night", pronunciation: "buhn NWEE" },
        ],
      },
      {
        id: "fr-hg-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Bonjour" mean?',
        options: ["Goodbye", "Good evening", "Hello / Good day", "Good night"],
        correctAnswer: "Hello / Good day",
      },
      {
        id: "fr-hg-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'How do you say "Goodbye" in French?',
        options: ["Bonjour", "Bonsoir", "Au revoir", "Bonne nuit"],
        correctAnswer: "Au revoir",
      },
      {
        id: "fr-hg-ai-1",
        type: "ai-teacher",
        title: "Practice with AI Teacher",
        instruction: "Practice your French greetings with the AI teacher.",
        prompt: {
          introduction:
            "You are a friendly French teacher. Greet the student in French and ask how they are.",
          scenario:
            "The student is arriving for a French lesson. Greet them appropriately based on the time of day.",
          targetLanguage: "French",
          instructionLanguage: "English",
          keyPhrases: ["Bonjour", "Bonsoir", "Comment allez-vous?", "Au revoir"],
          culturalNotes:
            "In France, it is polite to say 'Bonjour' when entering a shop or starting a conversation.",
        },
      },
    ],
  },
  {
    id: "fr-please-thankyou",
    unitId: "fr-basics",
    title: "S'il Vous Plaît & Merci",
    description: "Learn polite expressions in French.",
    order: 2,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "fr-pt-goal-1", description: "Say 'please' and 'thank you'" },
      { id: "fr-pt-goal-2", description: "Apologize with 'Pardon'" },
      { id: "fr-pt-goal-3", description: "Use 'De rien' for 'you are welcome'" },
    ],
    activities: [
      {
        id: "fr-pt-vocab-1",
        type: "vocabulary",
        title: "Polite Expressions",
        instruction: "Learn these essential polite phrases in French.",
        vocabulary: [
          { id: "fr-vocab-svp", word: "S'il vous plaît", translation: "Please", pronunciation: "seel voo PLEH" },
          { id: "fr-vocab-merci", word: "Merci", translation: "Thank you", pronunciation: "mehr-SEE" },
          { id: "fr-vocab-de-rien", word: "De rien", translation: "You are welcome", pronunciation: "duh ree-EHN" },
          { id: "fr-vocab-pardon", word: "Pardon", translation: "Sorry / Excuse me", pronunciation: "pahr-DOHN" },
        ],
      },
      {
        id: "fr-pt-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Merci" mean?',
        options: ["Please", "Sorry", "Thank you", "You are welcome"],
        correctAnswer: "Thank you",
      },
      {
        id: "fr-pt-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'How do you say "Please" in French?',
        options: ["Merci", "Pardon", "S'il vous plaît", "De rien"],
        correctAnswer: "S'il vous plaît",
      },
    ],
  },
  {
    id: "fr-numbers-1-10",
    unitId: "fr-numbers-colors",
    title: "Numbers 1-10",
    description: "Learn to count from one to ten in French.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "fr-num-goal-1", description: "Count from 1 to 5 in French" },
      { id: "fr-num-goal-2", description: "Count from 6 to 10 in French" },
    ],
    activities: [
      {
        id: "fr-num-vocab-1",
        type: "vocabulary",
        title: "Numbers 1-10",
        instruction: "Learn the French numbers from one to ten.",
        vocabulary: [
          { id: "fr-vocab-un", word: "Un", translation: "One", pronunciation: "uhn" },
          { id: "fr-vocab-deux", word: "Deux", translation: "Two", pronunciation: "duh" },
          { id: "fr-vocab-trois", word: "Trois", translation: "Three", pronunciation: "trwah" },
          { id: "fr-vocab-quatre", word: "Quatre", translation: "Four", pronunciation: "KAH-truh" },
          { id: "fr-vocab-cinq", word: "Cinq", translation: "Five", pronunciation: "sank" },
          { id: "fr-vocab-six", word: "Six", translation: "Six", pronunciation: "sees" },
          { id: "fr-vocab-sept", word: "Sept", translation: "Seven", pronunciation: "seht" },
          { id: "fr-vocab-huit", word: "Huit", translation: "Eight", pronunciation: "weet" },
          { id: "fr-vocab-neuf", word: "Neuf", translation: "Nine", pronunciation: "nuhf" },
          { id: "fr-vocab-dix", word: "Dix", translation: "Ten", pronunciation: "dees" },
        ],
      },
      {
        id: "fr-num-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What number is "Trois"?',
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "Three",
      },
      {
        id: "fr-num-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What is "Seven" in French?',
        options: ["Six", "Sept", "Huit", "Neuf"],
        correctAnswer: "Sept",
      },
    ],
  },
  // ====================================================================
  // GERMAN LESSONS
  // ====================================================================
  {
    id: "de-hello-goodbye",
    unitId: "de-basics",
    title: "Hallo & Tschüss",
    description: "Learn how to greet people and say goodbye in German.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "de-hg-goal-1", description: "Greet someone with 'Hallo'" },
      { id: "de-hg-goal-2", description: "Say goodbye with 'Tschüss'" },
      { id: "de-hg-goal-3", description: "Use 'Guten Morgen' and 'Gute Nacht'" },
    ],
    activities: [
      {
        id: "de-hg-vocab-1",
        type: "vocabulary",
        title: "Key Words",
        instruction: "Learn these essential German greetings.",
        vocabulary: [
          { id: "de-vocab-hallo", word: "Hallo", translation: "Hello", pronunciation: "HAH-loh" },
          { id: "de-vocab-tschüss", word: "Tschüss", translation: "Goodbye", pronunciation: "chews" },
          { id: "de-vocab-guten-morgen", word: "Guten Morgen", translation: "Good morning", pronunciation: "GOO-ten MOR-gen" },
          { id: "de-vocab-gute-nacht", word: "Gute Nacht", translation: "Good night", pronunciation: "GOO-teh nakht" },
        ],
      },
      {
        id: "de-hg-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Hallo" mean?',
        options: ["Goodbye", "Hello", "Good morning", "Good night"],
        correctAnswer: "Hello",
      },
      {
        id: "de-hg-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'How do you say "Goodbye" in German?',
        options: ["Hallo", "Guten Morgen", "Tschüss", "Gute Nacht"],
        correctAnswer: "Tschüss",
      },
    ],
  },
  {
    id: "de-please-thankyou",
    unitId: "de-basics",
    title: "Bitte & Danke",
    description: "Learn polite expressions in German.",
    order: 2,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "de-pt-goal-1", description: "Say 'please' and 'thank you'" },
      { id: "de-pt-goal-2", description: "Apologize with 'Entschuldigung'" },
    ],
    activities: [
      {
        id: "de-pt-vocab-1",
        type: "vocabulary",
        title: "Polite Expressions",
        instruction: "Learn these essential polite phrases in German.",
        vocabulary: [
          { id: "de-vocab-bitte", word: "Bitte", translation: "Please / You are welcome", pronunciation: "BIT-teh" },
          { id: "de-vocab-danke", word: "Danke", translation: "Thank you", pronunciation: "DAHN-keh" },
          { id: "de-vocab-entschuldigung", word: "Entschuldigung", translation: "Sorry / Excuse me", pronunciation: "ent-SHOOL-dee-goong" },
        ],
      },
      {
        id: "de-pt-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Danke" mean?',
        options: ["Please", "Sorry", "Thank you", "You are welcome"],
        correctAnswer: "Thank you",
      },
    ],
  },
  {
    id: "de-numbers-1-10",
    unitId: "de-numbers-colors",
    title: "Numbers 1-10",
    description: "Learn to count from one to ten in German.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "de-num-goal-1", description: "Count from 1 to 5 in German" },
      { id: "de-num-goal-2", description: "Count from 6 to 10 in German" },
    ],
    activities: [
      {
        id: "de-num-vocab-1",
        type: "vocabulary",
        title: "Numbers 1-10",
        instruction: "Learn the German numbers from one to ten.",
        vocabulary: [
          { id: "de-vocab-eins", word: "Eins", translation: "One", pronunciation: "eyns" },
          { id: "de-vocab-zwei", word: "Zwei", translation: "Two", pronunciation: "tsvey" },
          { id: "de-vocab-drei", word: "Drei", translation: "Three", pronunciation: "dry" },
          { id: "de-vocab-vier", word: "Vier", translation: "Four", pronunciation: "feer" },
          { id: "de-vocab-fünf", word: "Fünf", translation: "Five", pronunciation: "fuenf" },
          { id: "de-vocab-sechs", word: "Sechs", translation: "Six", pronunciation: "zeks" },
          { id: "de-vocab-sieben", word: "Sieben", translation: "Seven", pronunciation: "ZEE-ben" },
          { id: "de-vocab-acht", word: "Acht", translation: "Eight", pronunciation: "akht" },
          { id: "de-vocab-neun", word: "Neun", translation: "Nine", pronunciation: "noyn" },
          { id: "de-vocab-zehn", word: "Zehn", translation: "Ten", pronunciation: "tsayn" },
        ],
      },
      {
        id: "de-num-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What number is "Drei"?',
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "Three",
      },
      {
        id: "de-num-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What is "Eight" in German?',
        options: ["Acht", "Neun", "Sechs", "Sieben"],
        correctAnswer: "Acht",
      },
    ],
  },
  // ====================================================================
  // ITALIAN LESSONS
  // ====================================================================
  {
    id: "it-hello-goodbye",
    unitId: "it-basics",
    title: "Ciao & Arrivederci",
    description: "Learn how to greet people and say goodbye in Italian.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "it-hg-goal-1", description: "Greet someone with 'Ciao'" },
      { id: "it-hg-goal-2", description: "Say goodbye with 'Arrivederci'" },
      { id: "it-hg-goal-3", description: "Use 'Buongiorno' and 'Buonasera'" },
    ],
    activities: [
      {
        id: "it-hg-vocab-1",
        type: "vocabulary",
        title: "Key Words",
        instruction: "Learn these essential Italian greetings.",
        vocabulary: [
          { id: "it-vocab-ciao", word: "Ciao", translation: "Hello / Goodbye", pronunciation: "CHOW" },
          { id: "it-vocab-arrivederci", word: "Arrivederci", translation: "Goodbye (formal)", pronunciation: "ah-ree-veh-DEHR-chee" },
          { id: "it-vocab-buongiorno", word: "Buongiorno", translation: "Good morning", pronunciation: "bwohn-JOHR-noh" },
          { id: "it-vocab-buonasera", word: "Buonasera", translation: "Good evening", pronunciation: "bwoh-nah-SEH-rah" },
        ],
      },
      {
        id: "it-hg-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Ciao" mean?',
        options: ["Good morning", "Hello / Goodbye", "Good evening", "Goodbye (formal)"],
        correctAnswer: "Hello / Goodbye",
      },
    ],
  },
  {
    id: "it-please-thankyou",
    unitId: "it-basics",
    title: "Per Favore & Grazie",
    description: "Learn polite expressions in Italian.",
    order: 2,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "it-pt-goal-1", description: "Say 'please' and 'thank you'" },
      { id: "it-pt-goal-2", description: "Use 'Prego' for 'you are welcome'" },
    ],
    activities: [
      {
        id: "it-pt-vocab-1",
        type: "vocabulary",
        title: "Polite Expressions",
        instruction: "Learn these essential polite phrases in Italian.",
        vocabulary: [
          { id: "it-vocab-per-favore", word: "Per favore", translation: "Please", pronunciation: "pehr fah-VOH-reh" },
          { id: "it-vocab-grazie", word: "Grazie", translation: "Thank you", pronunciation: "GRAHT-see-eh" },
          { id: "it-vocab-prego", word: "Prego", translation: "You are welcome", pronunciation: "PREH-goh" },
          { id: "it-vocab-mi-dispiace", word: "Mi dispiace", translation: "I am sorry", pronunciation: "mee dees-PYAH-cheh" },
        ],
      },
      {
        id: "it-pt-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Grazie" mean?',
        options: ["Please", "Sorry", "Thank you", "You are welcome"],
        correctAnswer: "Thank you",
      },
    ],
  },
  // ====================================================================
  // PORTUGUESE LESSONS
  // ====================================================================
  {
    id: "pt-hello-goodbye",
    unitId: "pt-basics",
    title: "Olá & Tchau",
    description: "Learn how to greet people and say goodbye in Portuguese.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "pt-hg-goal-1", description: "Greet someone with 'Olá'" },
      { id: "pt-hg-goal-2", description: "Say goodbye with 'Tchau'" },
    ],
    activities: [
      {
        id: "pt-hg-vocab-1",
        type: "vocabulary",
        title: "Key Words",
        instruction: "Learn these essential Portuguese greetings.",
        vocabulary: [
          { id: "pt-vocab-ola", word: "Olá", translation: "Hello", pronunciation: "oh-LAH" },
          { id: "pt-vocab-tchau", word: "Tchau", translation: "Goodbye", pronunciation: "CHOW" },
          { id: "pt-vocab-bom-dia", word: "Bom dia", translation: "Good morning", pronunciation: "bohn DEE-ah" },
          { id: "pt-vocab-boa-noite", word: "Boa noite", translation: "Good night", pronunciation: "BOH-ah NOY-chee" },
        ],
      },
      {
        id: "pt-hg-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Olá" mean?',
        options: ["Goodbye", "Hello", "Good morning", "Good night"],
        correctAnswer: "Hello",
      },
    ],
  },
  {
    id: "pt-please-thankyou",
    unitId: "pt-basics",
    title: "Por Favor & Obrigado",
    description: "Learn polite expressions in Portuguese.",
    order: 2,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "pt-pt-goal-1", description: "Say 'please' and 'thank you'" },
      { id: "pt-pt-goal-2", description: "Use 'De nada' for 'you are welcome'" },
    ],
    activities: [
      {
        id: "pt-pt-vocab-1",
        type: "vocabulary",
        title: "Polite Expressions",
        instruction: "Learn these essential polite phrases in Portuguese.",
        vocabulary: [
          { id: "pt-vocab-por-favor", word: "Por favor", translation: "Please", pronunciation: "por fah-VOR" },
          { id: "pt-vocab-obrigado", word: "Obrigado", translation: "Thank you (male speaker)", pronunciation: "oh-bree-GAH-doo" },
          { id: "pt-vocab-obrigada", word: "Obrigada", translation: "Thank you (female speaker)", pronunciation: "oh-bree-GAH-dah" },
          { id: "pt-vocab-de-nada", word: "De nada", translation: "You are welcome", pronunciation: "dee NAH-dah" },
        ],
      },
      {
        id: "pt-pt-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "Obrigado" mean?',
        options: ["Please", "Sorry", "Thank you", "You are welcome"],
        correctAnswer: "Thank you",
      },
    ],
  },
  // ====================================================================
  // JAPANESE LESSONS
  // ====================================================================
  {
    id: "ja-hello-goodbye",
    unitId: "ja-basics",
    title: "こんにちは & さようなら",
    description: "Learn how to greet people and say goodbye in Japanese.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "ja-hg-goal-1", description: "Greet someone with 'Konnichiwa'" },
      { id: "ja-hg-goal-2", description: "Say goodbye with 'Sayōnara'" },
      { id: "ja-hg-goal-3", description: "Use 'Ohayō gozaimasu' in the morning" },
    ],
    activities: [
      {
        id: "ja-hg-vocab-1",
        type: "vocabulary",
        title: "Key Words",
        instruction: "Learn these essential Japanese greetings.",
        vocabulary: [
          { id: "ja-vocab-konnichiwa", word: "こんにちは", translation: "Hello / Good afternoon", pronunciation: "kon-nee-chee-wah" },
          { id: "ja-vocab-sayonara", word: "さようなら", translation: "Goodbye", pronunciation: "sah-yoh-nah-rah" },
          { id: "ja-vocab-ohayo", word: "おはようございます", translation: "Good morning", pronunciation: "oh-hah-yoh goh-zah-ee-mahs" },
          { id: "ja-vocab-konbanwa", word: "こんばんは", translation: "Good evening", pronunciation: "kon-bahn-wah" },
        ],
      },
      {
        id: "ja-hg-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "こんにちは" (Konnichiwa) mean?',
        options: ["Goodbye", "Good morning", "Hello / Good afternoon", "Good evening"],
        correctAnswer: "Hello / Good afternoon",
      },
    ],
  },
  // ====================================================================
  // KOREAN LESSONS
  // ====================================================================
  {
    id: "ko-hello-goodbye",
    unitId: "ko-basics",
    title: "안녕하세요 & 안녕",
    description: "Learn how to greet people and say goodbye in Korean.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "ko-hg-goal-1", description: "Greet someone with '안녕하세요'" },
      { id: "ko-hg-goal-2", description: "Say goodbye with '안녕'" },
    ],
    activities: [
      {
        id: "ko-hg-vocab-1",
        type: "vocabulary",
        title: "Key Words",
        instruction: "Learn these essential Korean greetings.",
        vocabulary: [
          { id: "ko-vocab-annyeong-haseyo", word: "안녕하세요", translation: "Hello (formal)", pronunciation: "ahn-nyeong-hah-seh-yo" },
          { id: "ko-vocab-annyeong", word: "안녕", translation: "Hello / Goodbye (informal)", pronunciation: "ahn-nyeong" },
          { id: "ko-vocab-gamsahamnida", word: "감사합니다", translation: "Thank you", pronunciation: "kam-sah-hahm-nee-dah" },
          { id: "ko-vocab-jal-ga", word: "잘 가", translation: "Goodbye (to someone leaving)", pronunciation: "jal ga" },
        ],
      },
      {
        id: "ko-hg-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "안녕하세요" (Annyeonghaseyo) mean?',
        options: ["Goodbye", "Hello (formal)", "Thank you", "Good morning"],
        correctAnswer: "Hello (formal)",
      },
      {
        id: "ko-hg-ai-1",
        type: "ai-teacher",
        title: "Practice with AI Teacher",
        instruction: "Practice your Korean greetings with the AI teacher.",
        prompt: {
          introduction:
            "You are a friendly Korean teacher. Greet the student and ask how they are.",
          scenario:
            "The student is meeting you for a Korean lesson. Greet them formally in Korean.",
          targetLanguage: "Korean",
          instructionLanguage: "English",
          keyPhrases: ["안녕하세요", "감사합니다", "네", "안녕"],
          culturalNotes:
            "Korean has formal and informal speech levels. Use '안녕하세요' in formal situations and '안녕' with close friends.",
        },
      },
    ],
  },
  // ====================================================================
  // CHINESE LESSONS
  // ====================================================================
  {
    id: "zh-hello-goodbye",
    unitId: "zh-basics",
    title: "你好 & 再见",
    description: "Learn how to greet people and say goodbye in Chinese.",
    order: 1,
    difficulty: "beginner",
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { id: "zh-hg-goal-1", description: "Greet someone with '你好'" },
      { id: "zh-hg-goal-2", description: "Say goodbye with '再见'" },
    ],
    activities: [
      {
        id: "zh-hg-vocab-1",
        type: "vocabulary",
        title: "Key Words",
        instruction: "Learn these essential Chinese greetings.",
        vocabulary: [
          { id: "zh-vocab-nihao", word: "你好", translation: "Hello", pronunciation: "nee how" },
          { id: "zh-vocab-zaijian", word: "再见", translation: "Goodbye", pronunciation: "zye jyen" },
          { id: "zh-vocab-zao-shang-hao", word: "早上好", translation: "Good morning", pronunciation: "zow shang how" },
          { id: "zh-vocab-xiexie", word: "谢谢", translation: "Thank you", pronunciation: "shyeh shyeh" },
        ],
      },
      {
        id: "zh-hg-mc-1",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'What does "你好" (Nǐ hǎo) mean?',
        options: ["Goodbye", "Hello", "Good morning", "Thank you"],
        correctAnswer: "Hello",
      },
      {
        id: "zh-hg-mc-2",
        type: "multiple-choice",
        title: "Check Your Understanding",
        instruction: 'How do you say "Goodbye" in Chinese?',
        options: ["你好", "谢谢", "再见", "早上好"],
        correctAnswer: "再见",
      },
    ],
  },
];

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons.filter((lesson) => lesson.unitId === unitId);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getLessonsByIds(ids: string[]): Lesson[] {
  return lessons.filter((lesson) => ids.includes(lesson.id));
}
