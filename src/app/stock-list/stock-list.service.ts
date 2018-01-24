import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StockListService {
  
  constructor(private http: Http){
    
  }
  
 getStockList(){
   return this.http.get('https://rest.prfteci.com/api/angulartest/')
   .map((response) => response.json() )
 }

}