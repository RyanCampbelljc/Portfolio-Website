import { Injectable } from '@angular/core';

export interface WorkCard {
  Employer: string,
  JobTitle: string,
  Points: string[]
}

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  
readonly TLP_EMPLOYER: string = "The Lost Pixels";
readonly TLP_JOB_TITLE: string = "Games Programmer";
readonly TLP_POINTS: string[] = [
  "Built a data-driven AI system for poker bots with behavior configurable through JSON.",
  "Refactored the player movement system to be more modular, making it easier to extend with new features.",
  "Contributed to porting a mobile game to Steam, adapting systems for cross-platform compatibility.",
  "Integrated UI with gameplay systems to keep player interactions responsive and consistent.",
  "Collaborated with designers and artists to translate requirements into functional game systems."
]
  readonly TLP_CARD: WorkCard = { Employer: this.TLP_EMPLOYER, JobTitle: this.TLP_JOB_TITLE, Points: this.TLP_POINTS }

  public getWorkInformation(): WorkCard[] {
    return [ this.TLP_CARD ]
  }
}
