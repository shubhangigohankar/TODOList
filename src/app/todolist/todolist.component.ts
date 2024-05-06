import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoserviceService } from '../todoservice.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  displayedColumns: string[] = [ 'id','taskname', 'completed','action'];
searchData: string = '';
dataSource!: Observable<any[]>;
data:any[]=[];
isEdittodo:boolean = false;
checked:string="";
  constructor(public dialog: MatDialog, private todoservice:TodoserviceService) { }

  ngOnInit(): void {
      this.getTodoList(); 
  }
  
  getTodoList(){
    this.dataSource = this.todoservice.getTodoList();
    this.dataSource.subscribe(res=>
      this.data = res);
  }

  applyFilter(event:any) {
   if(!event.target.value){
    this.getTodoList();
   }
   else{
    this.data =this.data.filter(item =>{
      return JSON.stringify(item).toLowerCase().includes(event.target.value.toLowerCase())
     }
     
    );
   }
  }

  deleteTask(id:number){
    if (id > -1) {
      this.data.splice(id, 1);
      this.data = [...this.data]; 
    }
  }

}
