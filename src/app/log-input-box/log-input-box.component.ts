import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-log-input-box',
  templateUrl: './log-input-box.component.html',
  styleUrls: ['./log-input-box.component.css']
})
export class LogInputBoxComponent implements OnInit {

  @Output('textchange') textchange = new EventEmitter<any>();

  constructor() {
   
      this.input_text = "";
    
   }

   input_text : string ;
  textChanged(event : any)
  {
    this.input_text = event.target.value;
    console.log(this.input_text);
    this.textchange.emit(this.input_text);
  }

  ngOnInit(): void {
  }
}
