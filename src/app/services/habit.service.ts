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
    // this.http.get<Habit[]> makes a get request and expects an array of Habit objects
    return this.http.get<Habit[]>(this.apiUrl);
  };

  // create habits
  createHabit(habit:Habit):Observable<Habit>{
    // this.http.get<Habit[]> makes a post request to create a new habit
    return this.http.post<Habit>(this.apiUrl,habit);
  };

  // update habit
  updateHabit(habit:Habit):Observable<Habit>{
    return this.http.put<Habit>(`${this.apiUrl}/${habit.id}`,habit);
  };

  deleteService(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  };

}
