import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuService } from './services/menu.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TempComponent } from './pages/temp/temp.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuCategoryComponent,
    DishCardComponent,
    NavbarComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
