import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostviewerComponent } from './components/postviewer/postviewer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WherepipePipe } from './pipe/wherepipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PostviewerComponent,
    NavigationComponent,
    WherepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
