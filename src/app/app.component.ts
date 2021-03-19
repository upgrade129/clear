import { Component, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  details;
  TabDetail;
  title = 'style';
  flag

  getDetailsFromInput(value){
    // this.details=value;
    
    this.getdetailsfromls(value);
    this.flag=0
  }

  getDetailsFromTable(value){
    this.TabDetail=value;
    console.log("tab-det-app",this.TabDetail);
  }

  getdetailsfromls(value){
    this.details=value
  }
 
}
