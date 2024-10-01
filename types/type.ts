export interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    details: ProjectDetail[];
}

export interface ProjectDetail {
    type: 'text' | 'image' | 'link' | 'techDetail';
    content: string;
    caption?: string;
    url?: string;
}


export interface BlogPost {
    id: number;
    title: string;
    date: string;
}

export interface TimelineItem {
    icon: any;
    date: string;
    title: string;
    company: string;
    description: string;
  }

export interface EducationTimelineItem {
    icon: any;
    date: string;
    institution: string;
    degree: string;
    description: string;
}