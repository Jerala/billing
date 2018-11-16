import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import {DataHolderService} from '../data-holder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id = 89660626214;
  users: User[] = [];
  user: User;

  constructor(private userService: UserService,
              private dataHolder: DataHolderService) {
  }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  getUser(phoneNumber: number): void {
    this.userService.getUser(phoneNumber)
      .subscribe((user) => {
        this.user = user;
        this.dataHolder.setTariffId(user.tariffId);
        this.dataHolder.setUserId(user.id);
      });
  }
}
