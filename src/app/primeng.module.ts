import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';



@NgModule({
  
  exports: [
  
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    TableModule

  ],
  
})
export class PrimengModule { }
