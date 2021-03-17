import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, 
  MatDatepickerModule, 
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';


const Materials =[ 
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatTableModule,
]
@NgModule({
  
  imports: [
    Materials
  ],
  exports:[
    Materials
  ]
})
export class StylesModule { }
