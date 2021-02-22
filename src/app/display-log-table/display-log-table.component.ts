import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-log-table',
  templateUrl: './display-log-table.component.html',
  styleUrls: ['./display-log-table.component.css']
})
export class DisplayLogTableComponent implements OnInit {

  @Input('logRecords') logRecords : any;
  constructor() { }
  ngOnInit(): void {
  }
  
}
