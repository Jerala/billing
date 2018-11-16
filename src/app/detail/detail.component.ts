import { Component, OnInit } from '@angular/core';
import {Detail} from '../Detail';
import {DetailService} from '../detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details: Detail[] = [];
  constructor(private detailService: DetailService) { }

  ngOnInit() {
    this.getDetails();
  }
  getDetails(): void {
    this.detailService.getDetails()
      .subscribe(details => this.details = details);
  }

}
