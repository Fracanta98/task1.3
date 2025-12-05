import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../classess/order';
import { catchError, map, Observable, of } from 'rxjs';
import{value} from "../../../public/data.json"


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient){}

  private url = 'data.json'
  private a: Order [] = value;

  getJsonData(){
      return this.http.get<{value : Order[]}>(this.url);
  }


  // getOrderBySalesOrder(salOrd: string) {
  //   return this.http.get<any[] >(this.url).pipe(
  //     map(() =>this.a.filter(o => o.SalesOrder === salOrd)),
  //     catchError((err) =>{
  //       console.log(err)
  //       return of([])        
  //     })
  //   )
  // }



   getOrderBySalesOrder(salOrd: string) {
    return this.http.get<Order[] >(this.url).pipe(
      map(() =>this.a.filter(o => o.SalesOrder?.includes(salOrd))),
      catchError((err) =>{
        console.log(err)
        return of([])        
      })
    )
  }





}
