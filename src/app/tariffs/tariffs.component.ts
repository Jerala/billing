import {Component, Input, OnInit} from '@angular/core';
import {TariffService} from '../tariff.service';
import {Tariffs} from '../Tariffs';

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.css']
})
export class TariffsComponent implements OnInit {
  tariff: Tariffs;
  tariffs: Tariffs[] = [];
  constructor(private tariffService: TariffService) { }

  ngOnInit() {
    this.getTariff();
    this.getTariffs();
  }
  getTariff() {
    this.tariffService.getTariff()
      .subscribe(tariff => this.tariff = tariff);
  }
  getTariffs() {
    this.tariffService.getTariffs()
      .subscribe(tariffs => this.tariffs = tariffs);
  }
}
