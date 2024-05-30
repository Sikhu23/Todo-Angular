import { Component, EventEmitter, Input, Output } from '@angular/core';




@Component({
  selector: 'app-task-cards',
  standalone: true,
  imports: [],
  templateUrl: './task-cards.component.html',
  styleUrl: './task-cards.component.css'
})
export class TaskCardsComponent {

  @Input() data:any=[]
  @Output() deleteDataEvent=new EventEmitter<any>()





  getData(){
    console.log("task card",this.data)
  }

  deleteTask(data:any){
    console.log("data delete--",data,this.data)
    const flag=false;
    const tempTaskDetails: any=[]

   this.data.map((task: { id: number;title:any,desc:any })=>{
    console.log("---task",task)
    let tempId=task.id
if(task.id>data.id){
tempId--;
}
if(task.id !== data.id){
  tempTaskDetails.push({id:tempId,title:task.title,desc:task.desc})
}

   })

this.deleteDataEvent.emit(tempTaskDetails)

  //  this.data=[...tempTaskDetails]


  }
}
