import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {
  private tariffId: number;
  private userId: number;
  constructor() { }
  getTariffId(): number {
    return this.tariffId;
  }
  setTariffId(id: number): void {
    this.tariffId = id;
  }
  getUserId(): number {
    return this.userId;
  }
  setUserId(id: number): void {
    this.userId = id;
  }
}
