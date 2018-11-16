import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataHolderService} from './data-holder.service';
import {Observable} from 'rxjs';
import {Detail} from './Detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private detailUrl = 'api/detail';
  constructor(private http: HttpClient,
              private dataHolder: DataHolderService) { }
  getDetails(): Observable<Detail[]> {
    const userId = this.dataHolder.getUserId();
    const url = `${this.detailUrl}/?userId=${userId}`;
    return this.http.get<Detail[]>(url);
  }
}


