import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';
import { TaskCardsComponent } from '../task-cards/task-cards.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FeaturesComponent,TaskCardsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  taskDetails:any=[{id:1,title:'Read',desc:"Complete Todo App"},{id:2,title:'Prac',desc:'Practice React'}]

  getTask(e:any){
    console.log(e)
    const id= this.taskDetails.length+1;
    const tempObj={
      id,
      title:e.title,
      desc:e.desc

    }
    this.taskDetails.push(tempObj)
  }
  deleteTask(e:any){
    this.taskDetails=[...e]
  }


}
