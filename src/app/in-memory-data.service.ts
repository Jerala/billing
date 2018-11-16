import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const users = [
      { id: 89660626214, passportData: 4811357392, tariffId: 1, userName: 'Mikhail', balance: 15.01},
      { id: 88005553535, passportData: 4811357392, tariffId: 1, userName: 'Mikhail', balance: -5.00}
    ];
    const tariffs = [
      { id: 1, name: 'Все по 300', description: 'И так все понятно'},
      { id: 2, name: 'Какое-то название', description: 'С пост оплатой'}
    ];
    const sales = [
      {id: 1, name: 'Новогодняя акция', startDate: new Date(2018, 12, 15),
        endDate: new Date(2019, 1, 15)}
    ];
    const discounts = [
      {id: 1, name: 'Какая-то скидка', startDate: new Date(2018, 12,10),
        endDate: new Date(2019,2,19), description: '5%'}
    ];
    const detail = [
      {id: 1, action: 'SMS', time: new Date(2018, 11, 10, 25, 25, 10),
        toPay: 10, userId: 89660626214},
      {id: 2, action: 'Звонок', time: new Date(2018, 11, 10, 15, 10, 5),
        toPay: 15, userId: 89660626214}
    ];
    return {users, tariffs, sales, discounts, detail};
  }
}
