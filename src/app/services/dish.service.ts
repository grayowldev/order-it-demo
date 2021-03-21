import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private apiUrl = '';
  private menuEndPoint = ''

  constructor(private http: HttpClient) { }

}
