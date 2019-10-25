import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public initialValeur=[0,0,0];

 

  constructor(private httpClient:HttpClient) { }

  reset(){
    this.initialValeur=[0,0,0];
  }

  increment(value: Counter): Observable<Counter>{
      return this.httpClient.patch<Counter>("https://lp4asgadot.herokuapp.com/counters/3",value.value++);
      
    }
     
     


 

  
  getCounterValue(id:number): Observable<Counter> {
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/"+id+".json");
  }

 
}
