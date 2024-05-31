import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnChanges {

  @Input() taskTitle:any=""
  @Input() taskDesc:any=""
  @Input() taskId:any=""
  @Output() updateTaskEvent=new EventEmitter<any>()

  ngOnInit(){
    console.log("oninit",this.taskId)
  }
  constructor(){
    console.log("cons",this.taskId)
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("onCHange",this.taskId,changes)
  }




  editTask=()=>{
    console.log("",this.taskDesc,this.taskTitle)
    this.updateTaskEvent.emit({id:this.taskId,title:this.taskTitle,desc:this.taskDesc})
    this.taskDesc=""
    this.taskId="",
    this.taskTitle=""


  }

}
