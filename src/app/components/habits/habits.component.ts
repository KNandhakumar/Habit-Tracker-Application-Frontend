import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Habit } from '../../model/habit.model';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-habits',
  imports: [CommonModule],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css'
})
export class HabitsComponent implements OnInit{
  constructor(private habitService:HabitService) {}

  // getting all habits
  habits:Habit[] = [];

  ngOnInit(): void {
    this.habitService.getHabits().subscribe((data) => {
      this.habits = data;
    });
  };

}