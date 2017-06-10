import { NgModule } from '@angular/core';

import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SaComponent } from './sa/sa.component';
import { SpsComponent } from './sps/sps.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SaComponent,
    SpsComponent,
    AboutComponent,
    ContactComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
