import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public initialValeur=[12,6,78];

  constructor() { }

  reset(){
    this.initialValeur=[0,0,0];
  }

  increment(position: number): number {
    this.initialValeur[position] ++;
    return this.initialValeur[position];

  }
}
