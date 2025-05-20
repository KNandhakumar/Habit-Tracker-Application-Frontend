import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Habit } from '../../model/habit.model';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-habits',
  imports: [CommonModule,FormsModule],
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

  // creating habits
  newHabit:Habit = {
    name: '',
    description: '',
    completed: false
  };

  addHabit(){
    if (!this.newHabit.name || !this.newHabit.description) return;
    this.habitService.createHabit(this.newHabit).subscribe((habit) => {
      this.habits.push(habit);
      this.newHabit = {name: '',description: '', completed: false};
    });
  };

}