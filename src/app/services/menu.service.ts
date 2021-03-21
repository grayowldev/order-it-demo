import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Menu } from '../models/menu';
import { MenuCategory } from '../models/menuCategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = `${environment.baseApiUrl}/api/v1/menu/100`;
  // private menu: Menu;
  // private categories: MenuCategory[];

  constructor(private http: HttpClient) { }

  public getMenu(): Observable<Menu> {
    return this.http.get<Menu>(this.apiUrl);
  }

  
}
