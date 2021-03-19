import { Component, OnInit, Input, SimpleChange, SimpleChanges, Output,EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


export interface TableElement {
  id:number,
  date:string,
  usedfor:string,
  option:string,
  amount:number
}

let ELEMENT_DATA: TableElement[] = [
  {id:1234,date:"3/25/2021", usedfor:"lunch", option:"online",  amount:222},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tabledetails
  @Output() tabledetailsChange = new EventEmitter();

  
  displayedColumns: string[] = ['id','date', 'usedfor', 'option', 'amount','del'];
  
  
  dataSource=ELEMENT_DATA
  flag=0
  del
  dummy
  changedata
  constructor() { }

  ngOnInit() {
    
  }
  

  ngOnChanges(changes: SimpleChanges){
    let data=changes.tabledetails.currentValue;
    this.flag=0
    if(data != undefined){
     let datas =JSON.stringify(this.adddata(data)); 
     let pardata =  JSON.parse(datas)
     console.log("final  value",datas,this.flag)
     this.dataSource= pardata;
    }

  }
  adddata(value){
    for(let i in ELEMENT_DATA){
    if(ELEMENT_DATA[i].id === value.id){
        ELEMENT_DATA[i]=value;
        this.flag=1;
        this.changedata=ELEMENT_DATA
        console.log("changed data",ELEMENT_DATA)
        return(this.changedata);
      }
    }
    if(!this.flag){
      let data= [value]
      ELEMENT_DATA=[...data,...ELEMENT_DATA]
      console.log("updated data",ELEMENT_DATA)
      return(ELEMENT_DATA);
    }
  }
  
 

  getselected(value){
    this.dummy=value
    console.log(value);
    
    if(this.del){
      this.dataSource=this.deleterow();
      // this.dataSource=datachange;
      
    }
    if(!this.del){
      this.tabledetailsChange.emit(value);
    }

  }

  delete(){
    this.del=true
  }

  deleterow(){
    console.log("del",true);
    for(let i in this.dataSource){
      if(this.dataSource[i].id === this.dummy.id){
        let  x :number =+ i
        let dele =this.dataSource.splice(x,1)
        return(dele);      
        
      }
    }
  }

}

  
// ngOnChanges(changes: SimpleChanges){
  //   // console.log("changes",changes);
  //   // let tdata =changes.tabledetials.currentValue;
  //   // console.log("tdata",tdata);
  //   // if(tdata.length >0){
  //   //   console.log("length",tdata.length)
  //   //   this.rows =  [...this.rows, ...tdata];
  //   //   this.dataSource = new MatTableDataSource(this.rows);
  //   //   console.log("element data",this.rows);

  //   // }
  //   for (let key in changes) {
  //     if (changes[key].currentValue != undefined) {
  //       // this.rows =  [...this.rows, ...changes[key].currentValue];
  //       this.rows.push(changes[key].currentValue[0]);
  //     }
  //   }
  //   this.dataSource.data = this.rows;
  // }

  // ngOnChanges(changes: SimpleChanges){
  // let data=changes.tabledetails.currentValue;
  // console.log("OnChange",data);
  
  // if(data != undefined){
  //   let tdata = [data];
  //   this.flag=0;
  //   console.log("tdata",tdata);
  //   console.log("old data",ELEMENT_DATA);
    
  //   for(let i in ELEMENT_DATA){
  //     console.log("check",ELEMENT_DATA[i].id,tdata[0].id);
  //     if(ELEMENT_DATA[i].id === tdata[0].id){
  //       let x: number =+ i;
  //       ELEMENT_DATA.splice(x,1,tdata[0]);
  //       console.log("same",ELEMENT_DATA[i]);
        
  //       this.same=1
  //     }
  //   }
  //   if(this.same){
  //     console.log("new data",ELEMENT_DATA);
  //     this.ChangeELEMENT_DATA=ELEMENT_DATA
  //     this.dataSource = this.demo;
  //     this.dataSource=this.ChangeELEMENT_DATA;
  //     this.total_amount();
  //     this.flag=1;
  //     this.same=0;
  //   }
  //       if(!this.flag && !this.same){
  //         ELEMENT_DATA = [...tdata,...ELEMENT_DATA];
  //         console.log("ele",ELEMENT_DATA);
  //         this.dataSource = ELEMENT_DATA;
          

  //         this.total_amount();
  //       }
   
    
    
  // }
  // console.log("............");
   
  // }
   // total_amount(){
  //   let cam:number
  //   let oam:number
  //   for(let data of ELEMENT_DATA){
  //     if(data.option === "online"){
  //       oam =+ data.amount
  //     }
  //     if(data.option === "cash"){
  //      cam =+ data.amount
  //     }
  //   }console.log("camount",cam);
  //   console.log("oamount",oam);

  // }
