import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
