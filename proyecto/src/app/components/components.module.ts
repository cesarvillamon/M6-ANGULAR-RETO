import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutItemComponent } from './about/about-item/about-item.component';
import { NewsComponent } from './news/news.component';
import { NewComponent } from './news/new/new.component';
import { ServicesComponent } from './services/services.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertComponent,
    HeroComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    AboutItemComponent,
    NewsComponent,
    NewComponent,
    ServicesComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    AlertComponent,
    HeroComponent                                                                     
  ]
})
export class ComponentsModule { }
