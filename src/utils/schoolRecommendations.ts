
import { schools, School } from '@/data/questions';

export interface PersonalityScore {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface UserProfile {
  region?: string;
  county?: string;
  preferredType?: 'boarding' | 'day' | 'both';
  preferredCategory?: 'boys' | 'girls' | 'mixed';
  academicLevel?: 'high' | 'medium' | 'low';
}

export const calculatePersonalityType = (answers: Record<number, string>): string => {
  const scores: PersonalityScore = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  };

  Object.values(answers).forEach(value => {
    if (scores.hasOwnProperty(value)) {
      scores[value as keyof PersonalityScore] += 2;
    }
  });

  const type = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  return type;
};

export const getPersonalityDescription = (type: string) => {
  const descriptions: Record<string, { name: string; description: string }> = {
    'ENFP': {
      name: 'The Campaigner',
      description: 'Enthusiastic, creative, and sociable free spirits who always find reasons to smile.'
    },
    'ENFJ': {
      name: 'The Protagonist',
      description: 'Charismatic and inspiring leaders, able to mesmerize listeners.'
    },
    'INFP': {
      name: 'The Mediator',
      description: 'Poetic, kind and altruistic people, always eager to help causes.'
    },
    'INFJ': {
      name: 'The Advocate',
      description: 'Creative and insightful, inspired and independent.'
    },
    'ENTJ': {
      name: 'The Commander',
      description: 'Bold, imaginative and strong-willed leaders.'
    },
    'ENTP': {
      name: 'The Debater',
      description: 'Smart and curious thinkers who cannot resist intellectual challenges.'
    },
    'INTJ': {
      name: 'The Architect',
      description: 'Imaginative and strategic thinkers, with a plan for everything.'
    },
    'INTP': {
      name: 'The Thinker',
      description: 'Innovative inventors with an unquenchable thirst for knowledge.'
    },
    'ESFP': {
      name: 'The Entertainer',
      description: 'Spontaneous, energetic and enthusiastic people - life is never boring.'
    },
    'ESFJ': {
      name: 'The Consul',
      description: 'Extraordinarily caring, social and popular people, always eager to help.'
    },
    'ISFP': {
      name: 'The Adventurer',
      description: 'Flexible and charming artists, always ready to explore new possibilities.'
    },
    'ISFJ': {
      name: 'The Protector',
      description: 'Very dedicated and warm protectors, always ready to defend loved ones.'
    },
    'ESTJ': {
      name: 'The Executive',
      description: 'Excellent administrators, unsurpassed at managing things or people.'
    },
    'ESTP': {
      name: 'The Entrepreneur',
      description: 'Smart, energetic and perceptive people, truly enjoy living on the edge.'
    },
    'ISTJ': {
      name: 'The Logistician',
      description: 'Practical and fact-minded, reliable and responsible.'
    },
    'ISTP': {
      name: 'The Virtuoso',
      description: 'Bold and practical experimenters, masters of all kinds of tools.'
    }
  };

  return descriptions[type] || { name: 'Unknown Type', description: 'Personality type not found.' };
};

export const recommendSchools = (
  personalityType: string,
  userProfile: UserProfile = {}
): School[] => {
  const typeChars = personalityType.split('') as ('E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P')[];
  
  return schools
    .map(school => {
      let score = 0;
      
      // Personality match scoring
      const matchingTraits = school.personalityMatch.filter(trait => 
        typeChars.includes(trait)
      ).length;
      score += matchingTraits * 25;
      
      // Regional preference
      if (userProfile.region && school.region === userProfile.region) {
        score += 20;
      }
      
      // County preference
      if (userProfile.county && school.county === userProfile.county) {
        score += 15;
      }
      
      // Boarding preference
      if (userProfile.preferredType) {
        if (school.boarding === userProfile.preferredType || school.boarding === 'both') {
          score += 10;
        }
      }
      
      // Category preference
      if (userProfile.preferredCategory) {
        if (school.category === userProfile.preferredCategory || school.category === 'mixed') {
          score += 10;
        }
      }
      
      return { ...school, matchScore: score };
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 14);
};
