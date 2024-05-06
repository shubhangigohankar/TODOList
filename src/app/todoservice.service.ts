import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  private todolist: BehaviorSubject<any> = new BehaviorSubject([]);
  public filterList:BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor() { }

  getTodoList():Observable<string[]>{
  return this.todolist.asObservable();
  }
 
  addTodoList(todo:any){
  const currentvalue = this.todolist.value;
  const updatedvalue = [...currentvalue, todo];
  this.todolist.next(updatedvalue);
  }

}
