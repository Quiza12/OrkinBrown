export class Job {
    title: string;
    location: string;
    experience: string;
    skills: string[];
    pay: string;
  
    constructor(title: string, location: string, experience: string, skills: string[], pay: string) {
        this.title = title;
        this.location = location;
        this.experience = experience;
        this.skills = skills;
        this.pay = pay;
    }
  }
  