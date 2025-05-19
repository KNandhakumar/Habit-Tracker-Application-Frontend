import { Habit } from './../model/habit.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  // this is use for integrate between frontend to backend
  constructor(private http:HttpClient) { }

  // backend api url
  private apiUrl = 'http://localhost:8080/api/habits';

  // getting all habits from backend
  getHabits():Observable<Habit[]>{
    return this.http.get<Habit[]>(this.apiUrl);
  };

  // create habits
  createHabit(habit:Habit):Observable<Habit>{
    return this.http.post<Habit>(this.apiUrl,habit);
  };

}
