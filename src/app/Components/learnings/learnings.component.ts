import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.css']
})
export class LearningsComponent {
  constructor(private route:Router){

  }
  Learnings = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  onSelected(learn:any){
    this.route.navigate(['/Learn',learn.id])
  }
}
