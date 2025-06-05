import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { MultiSelectModule } from 'primeng/multiselect';
import { FocusTrapModule } from 'primeng/focustrap';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';



@NgModule({
  
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ScrollTopModule,
    SkeletonModule,
    MultiSelectModule,
    FocusTrapModule,
    TooltipModule,
    InputSwitchModule,
    ProgressSpinnerModule,
    SidebarModule,
    OverlayPanelModule
  ],
  
})
export class PrimengModule { }
