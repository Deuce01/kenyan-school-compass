
export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    dimension: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
    weight: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "At a party, you would rather:",
    options: [
      { text: "Talk to many people about various topics", value: "E", dimension: 'E', weight: 2 },
      { text: "Have a deep conversation with a few close friends", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 2,
    question: "When learning something new, you prefer to:",
    options: [
      { text: "Focus on facts and details first", value: "S", dimension: 'S', weight: 2 },
      { text: "Understand the big picture and possibilities", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 3,
    question: "When making decisions, you typically:",
    options: [
      { text: "Use logical analysis and objective criteria", value: "T", dimension: 'T', weight: 2 },
      { text: "Consider how it affects people and relationships", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 4,
    question: "You prefer to:",
    options: [
      { text: "Have things settled and decided", value: "J", dimension: 'J', weight: 2 },
      { text: "Keep your options open", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 5,
    question: "You get energized by:",
    options: [
      { text: "Being around lots of people", value: "E", dimension: 'E', weight: 2 },
      { text: "Having quiet time alone", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 6,
    question: "You are more interested in:",
    options: [
      { text: "What is real and practical", value: "S", dimension: 'S', weight: 2 },
      { text: "What is possible and theoretical", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 7,
    question: "You are more convinced by:",
    options: [
      { text: "Logical reasoning", value: "T", dimension: 'T', weight: 2 },
      { text: "Emotional appeal", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 8,
    question: "Do you prefer to work:",
    options: [
      { text: "To deadlines and schedules", value: "J", dimension: 'J', weight: 2 },
      { text: "Just 'whenever' and spontaneously", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 9,
    question: "Are you more:",
    options: [
      { text: "Outgoing and expressive", value: "E", dimension: 'E', weight: 2 },
      { text: "Reserved and quiet", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 10,
    question: "Are you more drawn to:",
    options: [
      { text: "Sensible and down-to-earth approaches", value: "S", dimension: 'S', weight: 2 },
      { text: "Creative and innovative approaches", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  // Continue with more questions...
  {
    id: 11,
    question: "Are you more comfortable with:",
    options: [
      { text: "Objective and impersonal criticism", value: "T", dimension: 'T', weight: 2 },
      { text: "Personal and tactful suggestions", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 12,
    question: "Do you prefer:",
    options: [
      { text: "Planned events and activities", value: "J", dimension: 'J', weight: 2 },
      { text: "Unplanned and spontaneous activities", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 13,
    question: "You feel more comfortable:",
    options: [
      { text: "Speaking first, thinking later", value: "E", dimension: 'E', weight: 2 },
      { text: "Thinking first, speaking later", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 14,
    question: "You trust more:",
    options: [
      { text: "Your experience and observations", value: "S", dimension: 'S', weight: 2 },
      { text: "Your hunches and intuitions", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 15,
    question: "You value more:",
    options: [
      { text: "Justice and fairness", value: "T", dimension: 'T', weight: 2 },
      { text: "Mercy and forgiveness", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 16,
    question: "You are more satisfied when:",
    options: [
      { text: "Things are settled and concluded", value: "J", dimension: 'J', weight: 2 },
      { text: "Things are open and flexible", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 17,
    question: "In social groups, you:",
    options: [
      { text: "Initiate conversation easily", value: "E", dimension: 'E', weight: 2 },
      { text: "Wait for others to approach you", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 18,
    question: "You prefer to focus on:",
    options: [
      { text: "The present and immediate reality", value: "S", dimension: 'S', weight: 2 },
      { text: "The future and possibilities", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 19,
    question: "You are more likely to:",
    options: [
      { text: "See inconsistencies in arguments", value: "T", dimension: 'T', weight: 2 },
      { text: "See the human impact of decisions", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 20,
    question: "You work better with:",
    options: [
      { text: "Clear guidelines and expectations", value: "J", dimension: 'J', weight: 2 },
      { text: "Freedom to explore and experiment", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  // Adding more questions to reach 70...
  {
    id: 21,
    question: "At school, you prefer:",
    options: [
      { text: "Group projects and discussions", value: "E", dimension: 'E', weight: 2 },
      { text: "Individual work and research", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 22,
    question: "You learn best through:",
    options: [
      { text: "Hands-on practice and examples", value: "S", dimension: 'S', weight: 2 },
      { text: "Concepts and theories", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 23,
    question: "When giving feedback, you:",
    options: [
      { text: "Focus on what can be improved", value: "T", dimension: 'T', weight: 2 },
      { text: "Focus on encouraging the person", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 24,
    question: "You prefer assignments that are:",
    options: [
      { text: "Well-structured with clear deadlines", value: "J", dimension: 'J', weight: 2 },
      { text: "Open-ended with flexible timelines", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 25,
    question: "You recharge by:",
    options: [
      { text: "Spending time with friends", value: "E", dimension: 'E', weight: 2 },
      { text: "Having alone time", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 26,
    question: "You are more interested in:",
    options: [
      { text: "How things work in practice", value: "S", dimension: 'S', weight: 2 },
      { text: "Why things work in theory", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 27,
    question: "You make decisions based on:",
    options: [
      { text: "Facts and logical analysis", value: "T", dimension: 'T', weight: 2 },
      { text: "Values and personal feelings", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 28,
    question: "You prefer a lifestyle that is:",
    options: [
      { text: "Structured and organized", value: "J", dimension: 'J', weight: 2 },
      { text: "Flexible and adaptable", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 29,
    question: "You enjoy activities that:",
    options: [
      { text: "Involve lots of people", value: "E", dimension: 'E', weight: 2 },
      { text: "You can do by yourself", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 30,
    question: "You pay attention to:",
    options: [
      { text: "Details and specifics", value: "S", dimension: 'S', weight: 2 },
      { text: "Patterns and meanings", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  // Continue adding questions up to 70...
  {
    id: 31,
    question: "You are motivated by:",
    options: [
      { text: "Achieving efficiency and competence", value: "T", dimension: 'T', weight: 2 },
      { text: "Helping others and making connections", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 32,
    question: "You prefer to:",
    options: [
      { text: "Make plans and stick to them", value: "J", dimension: 'J', weight: 2 },
      { text: "Go with the flow and adapt", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 33,
    question: "In conversations, you:",
    options: [
      { text: "Think out loud and share ideas", value: "E", dimension: 'E', weight: 2 },
      { text: "Think before you speak", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 34,
    question: "You are more interested in:",
    options: [
      { text: "Practical applications", value: "S", dimension: 'S', weight: 2 },
      { text: "Abstract concepts", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 35,
    question: "You prioritize:",
    options: [
      { text: "Being right and accurate", value: "T", dimension: 'T', weight: 2 },
      { text: "Being kind and considerate", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 36,
    question: "Your ideal weekend involves:",
    options: [
      { text: "Social activities with many people", value: "E", dimension: 'E', weight: 2 },
      { text: "Quiet activities with few people", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 37,
    question: "You prefer teachers who:",
    options: [
      { text: "Give clear, step-by-step instructions", value: "S", dimension: 'S', weight: 2 },
      { text: "Encourage creative exploration", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 38,
    question: "When solving problems, you:",
    options: [
      { text: "Analyze pros and cons objectively", value: "T", dimension: 'T', weight: 2 },
      { text: "Consider impact on people involved", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 39,
    question: "You perform better with:",
    options: [
      { text: "Set routines and schedules", value: "J", dimension: 'J', weight: 2 },
      { text: "Variety and spontaneity", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 40,
    question: "You feel more natural:",
    options: [
      { text: "Leading group discussions", value: "E", dimension: 'E', weight: 2 },
      { text: "Working independently", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 41,
    question: "You trust information that is:",
    options: [
      { text: "Concrete and proven", value: "S", dimension: 'S', weight: 2 },
      { text: "Innovative and untested", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 42,
    question: "You are more comfortable:",
    options: [
      { text: "Critiquing ideas objectively", value: "T", dimension: 'T', weight: 2 },
      { text: "Supporting people personally", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 43,
    question: "You prefer environments that are:",
    options: [
      { text: "Predictable and stable", value: "J", dimension: 'J', weight: 2 },
      { text: "Changing and dynamic", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 44,
    question: "You gain insights through:",
    options: [
      { text: "Discussing with others", value: "E", dimension: 'E', weight: 2 },
      { text: "Reflecting quietly", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 45,
    question: "You value:",
    options: [
      { text: "Practical experience", value: "S", dimension: 'S', weight: 2 },
      { text: "Imaginative possibilities", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 46,
    question: "You believe it's worse to:",
    options: [
      { text: "Be too emotional", value: "T", dimension: 'T', weight: 2 },
      { text: "Be too logical", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 47,
    question: "You prefer to have:",
    options: [
      { text: "Everything planned out", value: "J", dimension: 'J', weight: 2 },
      { text: "Freedom to choose as you go", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 48,
    question: "You communicate better:",
    options: [
      { text: "Face-to-face with people", value: "E", dimension: 'E', weight: 2 },
      { text: "Through writing or one-on-one", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 49,
    question: "You focus on:",
    options: [
      { text: "What is happening now", value: "S", dimension: 'S', weight: 2 },
      { text: "What could happen next", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 50,
    question: "You are drawn to:",
    options: [
      { text: "Logical consistency", value: "T", dimension: 'T', weight: 2 },
      { text: "Emotional harmony", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 51,
    question: "You work best when:",
    options: [
      { text: "Goals are clearly defined", value: "J", dimension: 'J', weight: 2 },
      { text: "You can explore different approaches", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 52,
    question: "You prefer activities that:",
    options: [
      { text: "Get you out meeting people", value: "E", dimension: 'E', weight: 2 },
      { text: "Allow for personal reflection", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 53,
    question: "You are more attracted to:",
    options: [
      { text: "Sensible, practical people", value: "S", dimension: 'S', weight: 2 },
      { text: "Creative, imaginative people", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 54,
    question: "You would rather be seen as:",
    options: [
      { text: "Fair and impartial", value: "T", dimension: 'T', weight: 2 },
      { text: "Caring and compassionate", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 55,
    question: "You handle stress better with:",
    options: [
      { text: "Clear structure and planning", value: "J", dimension: 'J', weight: 2 },
      { text: "Flexibility and options", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 56,
    question: "You process information by:",
    options: [
      { text: "Talking it through with others", value: "E", dimension: 'E', weight: 2 },
      { text: "Thinking it through privately", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 57,
    question: "You are more interested in:",
    options: [
      { text: "What has been proven to work", value: "S", dimension: 'S', weight: 2 },
      { text: "What might be possible", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 58,
    question: "You decide based more on:",
    options: [
      { text: "Objective analysis", value: "T", dimension: 'T', weight: 2 },
      { text: "Personal values", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 59,
    question: "You prefer a daily routine that is:",
    options: [
      { text: "Regular and predictable", value: "J", dimension: 'J', weight: 2 },
      { text: "Varied and spontaneous", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 60,
    question: "You feel more energized after:",
    options: [
      { text: "Being in a crowd", value: "E", dimension: 'E', weight: 2 },
      { text: "Being alone", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 61,
    question: "You learn more from:",
    options: [
      { text: "Detailed examples and facts", value: "S", dimension: 'S', weight: 2 },
      { text: "General concepts and theories", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 62,
    question: "You are more persuaded by:",
    options: [
      { text: "Rational arguments", value: "T", dimension: 'T', weight: 2 },
      { text: "Emotional appeals", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 63,
    question: "You prefer projects that:",
    options: [
      { text: "Have clear deadlines and steps", value: "J", dimension: 'J', weight: 2 },
      { text: "Allow for flexibility and creativity", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 64,
    question: "You enjoy:",
    options: [
      { text: "Being the center of attention", value: "E", dimension: 'E', weight: 2 },
      { text: "Staying in the background", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 65,
    question: "You pay more attention to:",
    options: [
      { text: "The facts of the situation", value: "S", dimension: 'S', weight: 2 },
      { text: "The meaning of the situation", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 66,
    question: "You are more concerned with:",
    options: [
      { text: "Getting the job done right", value: "T", dimension: 'T', weight: 2 },
      { text: "Getting along with people", value: "F", dimension: 'F', weight: 2 }
    ]
  },
  {
    id: 67,
    question: "You function better with:",
    options: [
      { text: "Organized schedules", value: "J", dimension: 'J', weight: 2 },
      { text: "Open-ended time", value: "P", dimension: 'P', weight: 2 }
    ]
  },
  {
    id: 68,
    question: "You prefer to:",
    options: [
      { text: "Express yourself openly", value: "E", dimension: 'E', weight: 2 },
      { text: "Keep your thoughts private", value: "I", dimension: 'I', weight: 2 }
    ]
  },
  {
    id: 69,
    question: "You are drawn to:",
    options: [
      { text: "Realistic possibilities", value: "S", dimension: 'S', weight: 2 },
      { text: "Imaginative possibilities", value: "N", dimension: 'N', weight: 2 }
    ]
  },
  {
    id: 70,
    question: "Your final decision is usually:",
    options: [
      { text: "Based on logical analysis", value: "T", dimension: 'T', weight: 2 },
      { text: "Based on personal feelings", value: "F", dimension: 'F', weight: 2 }
    ]
  }
];

// School data for recommendations
export interface School {
  id: string;
  name: string;
  type: 'national' | 'county' | 'sub-county';
  category: 'boys' | 'girls' | 'mixed';
  boarding: 'boarding' | 'day' | 'both';
  region: string;
  county: string;
  subjects: string[];
  facilities: string[];
  cutoffPoints: number;
  fees: {
    tuition: number;
    boarding?: number;
  };
  personalityMatch: ('E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P')[];
}

export const schools: School[] = [
  {
    id: "1",
    name: "Alliance High School",
    type: "national",
    category: "boys",
    boarding: "boarding",
    region: "Central",
    county: "Kiambu",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Kiswahili"],
    facilities: ["Laboratory", "Library", "Sports Complex", "Computer Lab"],
    cutoffPoints: 400,
    fees: { tuition: 53000, boarding: 25000 },
    personalityMatch: ['E', 'N', 'T', 'J']
  },
  {
    id: "2",
    name: "Kenya High School",
    type: "national",
    category: "girls",
    boarding: "boarding",
    region: "Nairobi",
    county: "Nairobi",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Literature"],
    facilities: ["Science Labs", "Library", "Music Room", "Art Studio"],
    cutoffPoints: 395,
    fees: { tuition: 53000, boarding: 25000 },
    personalityMatch: ['I', 'N', 'F', 'J']
  },
  {
    id: "3",
    name: "Starehe Boys Centre",
    type: "national",
    category: "boys",
    boarding: "boarding",
    region: "Nairobi",
    county: "Nairobi",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "Business"],
    facilities: ["Modern Labs", "Workshop", "Sports Facilities", "Medical Center"],
    cutoffPoints: 380,
    fees: { tuition: 53000, boarding: 25000 },
    personalityMatch: ['E', 'S', 'T', 'P']
  },
  // Add more schools...
  {
    id: "4",
    name: "Moi Girls High School Eldoret",
    type: "national",
    category: "girls",
    boarding: "boarding",
    region: "Rift Valley",
    county: "Uasin Gishu",
    subjects: ["Mathematics", "Chemistry", "Biology", "Geography", "History"],
    facilities: ["Science Labs", "Library", "Dormitories", "Dining Hall"],
    cutoffPoints: 375,
    fees: { tuition: 53000, boarding: 25000 },
    personalityMatch: ['I', 'S', 'F', 'J']
  },
  {
    id: "5",
    name: "Mangu High School",
    type: "national",
    category: "boys",
    boarding: "boarding",
    region: "Central",
    county: "Kiambu",
    subjects: ["Mathematics", "Physics", "Chemistry", "Agriculture", "Geography"],
    facilities: ["Farm", "Science Labs", "Workshop", "Library"],
    cutoffPoints: 370,
    fees: { tuition: 53000, boarding: 25000 },
    personalityMatch: ['E', 'S', 'T', 'J']
  }
  // Continue with more schools to reach 14+ recommendations...
];
