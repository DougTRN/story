import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetoModule } from './pages/projeto/projeto.module';
import { AlunosModule } from './pages/alunos/alunos.module';
import { PrimengModule } from './primeng.module';
import { ProfessorModule } from './pages/professor/professor.module';
import { CoreModule } from './pages/core/core.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    ProjetoModule,
    AlunosModule,
    ProfessorModule,
    CoreModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
