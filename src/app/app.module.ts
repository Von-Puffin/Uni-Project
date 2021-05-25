import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRootComponent } from './app-root/app-root.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopPageComponent,
    HomepageComponent,
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NgxSpinnerModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
