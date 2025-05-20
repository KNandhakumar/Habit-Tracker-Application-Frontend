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

  // ngOninit() is called automatically, when the component loads
  ngOnInit(): void {
    // calls getHabits from the service
    this.habitService.getHabits().subscribe((data) => {
      // .subscribe listens to the data returned and stored it in this.habits
      this.habits = data;
    });
  };

  // creating habits
  // this is the model for a new habit that the user can full in.
  newHabit:Habit = {
    name: '',
    description: '',
    completed: false
  };

  addHabit(){
    // checks if both are filled.if not, it stops the function
    if (!this.newHabit.name || !this.newHabit.description) return;
    this.habitService.createHabit(this.newHabit).subscribe((habit) => {
      this.habits.push(habit);
      this.newHabit = {name: '',description: '', completed: false}; // reset the form again
    });
  };

  // toggle for Put request
  toggleHabit(habit:Habit):void{
    // it copies all the existing properties of the habit object
    // completed: this means we are toggling the value of completed
    // if habit.completed is true, it changes to false
    // if habit.completed is false,it changes to true
    habit.completed = !habit.completed;
  };

}