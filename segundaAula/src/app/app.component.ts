import { Component } from '@angular/core';
import { Team } from './team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newTeam : Team = new Team();
  teams : Team[] = [];
  showError : boolean = false;

  constructor() {
    this.newTeam = new Team();
  }

  addNewTeam() {
    if (!this.newTeam.name || this.newTeam.name.trim() == '' || !this.newTeam.points) {
      this.showError = true;

    } else {
      this.showError = false;
      this.teams.push(this.newTeam);
      this.newTeam = new Team();
    }
  }

}
