import { Component } from '@angular/core';

@Component({
  selector: 'app-habits',
  imports: [],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css'
})
export class HabitsComponent {
  habits = [
    {id: 1, name: 'Morning Exercise',description: "30 minutes run",completed: true},
    {id: 2, name: 'Books Reading',description: "Read 10 Pages",completed: true},
    {id: 3, name: 'Drink Water',description: "8 Glasses a day",completed: false},
  ]
}