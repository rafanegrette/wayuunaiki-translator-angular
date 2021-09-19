import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslatorComponent } from './translator/translator.component';
import { HeaderComponent } from './header/header.component';
import { PhrasesListComponent } from './phrases-list/phrases-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    HeaderComponent,
    PhrasesListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
