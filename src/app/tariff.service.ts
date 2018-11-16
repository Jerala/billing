import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Tariffs} from './Tariffs';
import {DataHolderService} from './data-holder.service';

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  private tariffsUrl = 'api/tariffs';
  constructor(private http: HttpClient,
              private dataHolder: DataHolderService) { }
  getTariffs(): Observable<Tariffs[]> {
    return this.http.get<Tariffs[]>(this.tariffsUrl);
  }
  getTariff(): Observable<Tariffs> {
    const id = this.dataHolder.getTariffId();
    const url = `${this.tariffsUrl}/${id}`;
    return this.http.get<Tariffs>(url);
  }
}
