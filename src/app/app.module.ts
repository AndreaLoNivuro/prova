import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CiclovitaComponent } from './ciclovita/ciclovita.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { ProvaRoutingModule } from './app-routing.module';
import { HighlightDirective } from './highlight.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    SecondoComponent,
    CiclovitaComponent,
    PageNotFoundComponent,
    MenuComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProvaRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
