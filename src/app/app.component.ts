import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';

  logRecords : Array<any> = [];
  textChanged(text : any)
  {
    if(text != "")
    this.logRecords.push({character_entered_at_time : new Date() ,text : text});
  }
}
