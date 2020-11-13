import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from 'src/app/types/Account';
import { AccountServiceService } from '../../services/account-service.service';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.css']
})
export class AccountItemComponent implements OnInit {
  @Input() account: Account;
  @Output() deleteAccountItem: EventEmitter<Account> = new EventEmitter();

  constructor(
    private accountService: AccountServiceService
  ) { }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      "account": true,
      "is-closed": this.account.status === "closed"
    }
  }
}
