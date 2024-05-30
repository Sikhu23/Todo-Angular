import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ModalComponent,FormsModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  @Output() myEvent= new EventEmitter<object>()

  taskTitle:string=""
  taskDesc:string=""


  getData(){
    console.log(this.taskDesc,this.taskTitle)
    this.myEvent.emit({title:this.taskTitle,desc:this.taskDesc})
    this.taskDesc=""
    this.taskTitle=""
  }

}
