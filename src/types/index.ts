// src/types/index.ts
export interface Project {
    title: string;
    description: string;
  }
  
  export interface Skill {
    name: string;
    level: number;
  }

  export interface SkillCategoryProps {
    title: string;
    skills: string[];
  }
  
  