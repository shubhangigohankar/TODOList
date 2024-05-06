import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  productForm!:FormGroup;
  todoText: string = '';
  filterdata:any;
  actionBtn :string = "Save";
  taskstatus=[
    {
      value:'Completed'
    }
  ]
  constructor(private formbuilder:FormBuilder, private dialogRef:MatDialogRef<AddTodoComponent>, private todoservice:TodoserviceService) { }

  ngOnInit(): void {
    this.productForm= this.formbuilder.group({  
      taskname:['',Validators.required],
      completed:['',Validators.required]
    })
   
  }
 
  addTaskList(){
        if(this.productForm.value!==""){
          if(this.productForm.value.completed==""){
            this.productForm.controls['completed'].setValue(false);        }
          this.todoservice.addTodoList(this.productForm.value);
        }  
        this.dialogRef.close('save');
  }
  
}

