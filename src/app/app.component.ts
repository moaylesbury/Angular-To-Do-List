import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { of } from "rxjs";
import { delay, map,  tap } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // contains create and destroy fade in/out animations for dynamically generated tasks
  animations: [
        trigger('fadeInOut', [
            transition(':enter', [style({ opacity: '0' }), animate('.5s ease-out', style({ opacity: '1' }))]),
            transition(':leave', [style({ opacity: '1' }), animate('.5s ease-out', style({ opacity: '0' }))]),
        ]),
    
  ]

})
export class AppComponent {
  // holds tasks
  tasks:string[] = ["task one", "task two", "task three", "task four", "task five", "task six"];
  // uncomment this to have no starting tasks
  // tasks:string[] = [];

  // holds user input
  userInput:string;

  // empty constructor
  constructor() {}

  // removes task at index from tasks
  // completeTask(index:number){
  //    if (index > -1) {
  //       this.tasks.splice(index, 1);
  //   } 
  // }
  completeTask(task:string){
    var index = this.tasks.indexOf(task);
     if (index > -1) {
        this.tasks.splice(index, 1);
    } 
  }

  // adds newTask to tasks list at the end
  addTask(newTask:string){
    if (newTask && !(this.tasks.includes(newTask))) {
      this.tasks.push(newTask);
      (event.target as HTMLInputElement).value = "";
    }
    
  }

  // empties tasks
  clearTasks() {
    this.tasks = [];
  }

  getValue(event: Event): string {
    if (((event.target as HTMLInputElement).value).length != 0){
      return (event.target as HTMLInputElement).value;
    }
    
  }

}
