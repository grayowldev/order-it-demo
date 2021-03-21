import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Menu } from './models/menu';
import { MenuCategory } from './models/menuCategory';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orderit-ordering';
  public menu:Menu;
  public categories: MenuCategory[];

  constructor(private menuService: MenuService){}

  ngOnInit(){
    this.getCategories();
  }

  public getCategories(): void {
    this.menuService.getMenu().subscribe(
      (response: any) => {
        this.menu = response;
        this.categories = response.categories;
      },(error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
