
export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    dimension: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
    weight: number;
  }[];
}

export const psychometricQuestions: Question[] = [
  {
    id: 1,
    question: "At a party, you would rather:",
    options: [
      { text: "Talk to many people about various topics", dimension: 'E', weight: 2 },
      { text: "Have a deep conversation with a few close friends", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 2,
    question: "When learning something new, you prefer to:",
    options: [
      { text: "Focus on facts and details first", dimension: 'S', weight: 2 },
      { text: "Understand the big picture and possibilities", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 3,
    question: "When making decisions, you typically:",
    options: [
      { text: "Use logical analysis and objective criteria", dimension: 'T', weight: 2 },
      { text: "Consider how it affects people and relationships", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 4,
    question: "You prefer to:",
    options: [
      { text: "Have things settled and decided", dimension: 'J', weight: 2 },
      { text: "Keep your options open", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 5,
    question: "You get energized by:",
    options: [
      { text: "Being around lots of people", dimension: 'E', weight: 2 },
      { text: "Having quiet time alone", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 6,
    question: "You are more interested in:",
    options: [
      { text: "What is real and practical", dimension: 'S', weight: 2 },
      { text: "What is possible and theoretical", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 7,
    question: "You are more convinced by:",
    options: [
      { text: "Logical reasoning", dimension: 'T', weight: 2 },
      { text: "Emotional appeal", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 8,
    question: "Do you prefer to work:",
    options: [
      { text: "To deadlines and schedules", dimension: 'J', weight: 2 },
      { text: "Just 'whenever' and spontaneously", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 9,
    question: "Are you more:",
    options: [
      { text: "Outgoing and expressive", dimension: 'E', weight: 2 },
      { text: "Reserved and quiet", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 10,
    question: "Are you more drawn to:",
    options: [
      { text: "Sensible and down-to-earth approaches", dimension: 'S', weight: 2 },
      { text: "Creative and innovative approaches", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 11,
    question: "Are you more comfortable with:",
    options: [
      { text: "Objective and impersonal criticism", dimension: 'T', weight: 2 },
      { text: "Personal and tactful suggestions", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 12,
    question: "Do you prefer:",
    options: [
      { text: "Planned events and activities", dimension: 'J', weight: 2 },
      { text: "Unplanned and spontaneous activities", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 13,
    question: "You feel more comfortable:",
    options: [
      { text: "Speaking first, thinking later", dimension: 'E', weight: 2 },
      { text: "Thinking first, speaking later", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 14,
    question: "You trust more:",
    options: [
      { text: "Your experience and observations", dimension: 'S', weight: 2 },
      { text: "Your hunches and intuitions", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 15,
    question: "You value more:",
    options: [
      { text: "Justice and fairness", dimension: 'T', weight: 2 },
      { text: "Mercy and forgiveness", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 16,
    question: "You are more satisfied when:",
    options: [
      { text: "Things are settled and concluded", dimension: 'J', weight: 2 },
      { text: "Things are open and flexible", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 17,
    question: "In social groups, you:",
    options: [
      { text: "Initiate conversation easily", dimension: 'E', weight: 2 },
      { text: "Wait for others to approach you", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 18,
    question: "You prefer to focus on:",
    options: [
      { text: "The present and immediate reality", dimension: 'S', weight: 2 },
      { text: "The future and possibilities", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 19,
    question: "You are more likely to:",
    options: [
      { text: "See inconsistencies in arguments", dimension: 'T', weight: 2 },
      { text: "See the human impact of decisions", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 20,
    question: "You work better with:",
    options: [
      { text: "Clear guidelines and expectations", dimension: 'J', weight: 2 },
      { text: "Freedom to explore and experiment", dimension: 'P', weight: 2 }
    ]
  },
  // Continue with more questions...
  {
    id: 21,
    question: "At school, you prefer:",
    options: [
      { text: "Group projects and discussions", dimension: 'E', weight: 2 },
      { text: "Individual work and research", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 22,
    question: "You learn best through:",
    options: [
      { text: "Hands-on practice and examples", dimension: 'S', weight: 2 },
      { text: "Concepts and theories", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 23,
    question: "When giving feedback, you:",
    options: [
      { text: "Focus on what can be improved", dimension: 'T', weight: 2 },
      { text: "Focus on encouraging the person", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 24,
    question: "You prefer assignments that are:",
    options: [
      { text: "Well-structured with clear deadlines", dimension: 'J', weight: 2 },
      { text: "Open-ended with flexible timelines", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 25,
    question: "You recharge by:",
    options: [
      { text: "Spending time with friends", dimension: 'E', weight: 2 },
      { text: "Having alone time", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 26,
    question: "You are more interested in:",
    options: [
      { text: "How things work in practice", dimension: 'S', weight: 2 },
      { text: "Why things work in theory", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 27,
    question: "You make decisions based on:",
    options: [
      { text: "Facts and logical analysis", dimension: 'T', weight: 2 },
      { text: "Values and personal feelings", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 28,
    question: "You prefer a lifestyle that is:",
    options: [
      { text: "Structured and organized", dimension: 'J', weight: 2 },
      { text: "Flexible and adaptable", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 29,
    question: "You enjoy activities that:",
    options: [
      { text: "Involve lots of people", dimension: 'E', weight: 2 },
      { text: "You can do by yourself", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 30,
    question: "You pay attention to:",
    options: [
      { text: "Details and specifics", dimension: 'S', weight: 2 },
      { text: "Patterns and meanings", dimension: 'N', weight: 2 }
    ]
  },
  // Adding more questions to reach 70...
  {
    id: 31,
    question: "You are motivated by:",
    options: [
      { text: "Achieving efficiency and competence", dimension: 'T', weight: 2 },
      { text: "Helping others and making connections", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 32,
    question: "You prefer to:",
    options: [
      { text: "Make plans and stick to them", dimension: 'J', weight: 2 },
      { text: "Go with the flow and adapt", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 33,
    question: "In conversations, you:",
    options: [
      { text: "Think out loud and share ideas", dimension: 'E', weight: 2 },
      { text: "Think before you speak", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 34,
    question: "You are more interested in:",
    options: [
      { text: "Practical applications", dimension: 'S', weight: 2 },
      { text: "Abstract concepts", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 35,
    question: "You prioritize:",
    options: [
      { text: "Being right and accurate", dimension: 'T', weight: 2 },
      { text: "Being kind and considerate", dimension: 'F', weight: 2 }
    ]
  },
  // Continue adding questions up to 70...
  // For brevity, I'll add a few more key questions and you can expand as needed
  {
    id: 36,
    question: "Your ideal weekend involves:",
    options: [
      { text: "Social activities with many people", dimension: 'E', weight: 2 },
      { text: "Quiet activities with few people", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 37,
    question: "You prefer teachers who:",
    options: [
      { text: "Give clear, step-by-step instructions", dimension: 'S', weight: 2 },
      { text: "Encourage creative exploration", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 38,
    question: "When solving problems, you:",
    options: [
      { text: "Analyze pros and cons objectively", dimension: 'T', weight: 2 },
      { text: "Consider impact on people involved", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 39,
    question: "You perform better with:",
    options: [
      { text: "Set routines and schedules", dimension: 'J', weight: 2 },
      { text: "Variety and spontaneity", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 40,
    question: "You feel more natural:",
    options: [
      { text: "Leading group discussions", dimension: 'E', weight: 2 },
      { text: "Working independently", dimension: 'I', weight: 2 }
    ]
  },
  // Adding remaining questions to reach 70 total
  {
    id: 41,
    question: "You trust information that is:",
    options: [
      { text: "Concrete and proven", dimension: 'S', weight: 2 },
      { text: "Innovative and untested", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 42,
    question: "You are more comfortable:",
    options: [
      { text: "Critiquing ideas objectively", dimension: 'T', weight: 2 },
      { text: "Supporting people personally", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 43,
    question: "You prefer environments that are:",
    options: [
      { text: "Predictable and stable", dimension: 'J', weight: 2 },
      { text: "Changing and dynamic", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 44,
    question: "You gain insights through:",
    options: [
      { text: "Discussing with others", dimension: 'E', weight: 2 },
      { text: "Reflecting quietly", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 45,
    question: "You value:",
    options: [
      { text: "Practical experience", dimension: 'S', weight: 2 },
      { text: "Imaginative possibilities", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 46,
    question: "You believe it's worse to:",
    options: [
      { text: "Be too emotional", dimension: 'T', weight: 2 },
      { text: "Be too logical", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 47,
    question: "You prefer to have:",
    options: [
      { text: "Everything planned out", dimension: 'J', weight: 2 },
      { text: "Freedom to choose as you go", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 48,
    question: "You communicate better:",
    options: [
      { text: "Face-to-face with people", dimension: 'E', weight: 2 },
      { text: "Through writing or one-on-one", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 49,
    question: "You focus on:",
    options: [
      { text: "What is happening now", dimension: 'S', weight: 2 },
      { text: "What could happen next", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 50,
    question: "You are drawn to:",
    options: [
      { text: "Logical consistency", dimension: 'T', weight: 2 },
      { text: "Emotional harmony", dimension: 'F', weight: 2 }
    ]
  },
  // Continue with questions 51-70...
  {
    id: 51,
    question: "You work best when:",
    options: [
      { text: "Goals are clearly defined", dimension: 'J', weight: 2 },
      { text: "You can explore different approaches", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 52,
    question: "You prefer activities that:",
    options: [
      { text: "Get you out meeting people", dimension: 'E', weight: 2 },
      { text: "Allow for personal reflection", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 53,
    question: "You are more attracted to:",
    options: [
      { text: "Sensible, practical people", dimension: 'S', weight: 2 },
      { text: "Creative, imaginative people", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 54,
    question: "You would rather be seen as:",
    options: [
      { text: "Fair and impartial", dimension: 'T', weight: 2 },
      { text: "Caring and compassionate", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 55,
    question: "You handle stress better with:",
    options: [
      { text: "Clear structure and planning", dimension: 'J', weight: 2 },
      { text: "Flexibility and options", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 56,
    question: "You process information by:",
    options: [
      { text: "Talking it through with others", dimension: 'E', weight: 2 },
      { text: "Thinking it through privately", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 57,
    question: "You are more interested in:",
    options: [
      { text: "What has been proven to work", dimension: 'S', weight: 2 },
      { text: "What might be possible", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 58,
    question: "You decide based more on:",
    options: [
      { text: "Objective analysis", dimension: 'T', weight: 2 },
      { text: "Personal values", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 59,
    question: "You prefer a daily routine that is:",
    options: [
      { text: "Regular and predictable", dimension: 'J', weight: 2 },
      { text: "Varied and spontaneous", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 60,
    question: "You feel more energized after:",
    options: [
      { text: "Being in a crowd", dimension: 'E', weight: 2 },
      { text: "Being alone", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 61,
    question: "You learn more from:",
    options: [
      { text: "Detailed examples and facts", dimension: 'S', weight: 2 },
      { text: "General concepts and theories", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 62,
    question: "You are more persuaded by:",
    options: [
      { text: "Rational arguments", dimension: 'T', weight: 2 },
      { text: "Emotional appeals", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 63,
    question: "You prefer projects that:",
    options: [
      { text: "Have clear deadlines and steps", dimension: 'J', weight: 2 },
      { text: "Allow for flexibility and creativity", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 64,
    question: "You enjoy:",
    options: [
      { text: "Being the center of attention", dimension: 'E', weight: 2 },
      { text: "Staying in the background", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 65,
    question: "You pay more attention to:",
    options: [
      { text: "The facts of the situation", dimension: 'S', weight: 2 },
      { text: "The meaning of the situation", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 66,
    question: "You are more concerned with:",
    options: [
      { text: "Getting the job done right", dimension: 'T', weight: 2 },
      { text: "Getting along with people", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 67,
    question: "You function better with:",
    options: [
      { text: "Organized schedules", dimension: 'J', weight: 2 },
      { text: "Open-ended time", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 68,
    question: "You prefer to:",
    options: [
      { text: "Express yourself openly", dimension: 'E', weight: 2 },
      { text: "Keep your thoughts private", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 69,
    question: "You are drawn to:",
    options: [
      { text: "Realistic possibilities", dimension: 'S', weight: 2 },
      { text: "Imaginative possibilities", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 70,
    question: "Your final decision is usually:",
    options: [
      { text: "Based on logical analysis", dimension: 'T', weight: 2 },
      { text: "Based on personal feelings", dimension: 'F', weight: 2 }
    ]
  }
];
