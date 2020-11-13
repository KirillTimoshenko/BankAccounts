import { Component, OnInit } from '@angular/core';
import { Account } from '../../types/Account';
import { AccountServiceService } from '../../services/account-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[];

  constructor(
    private router: Router,
    private accountService: AccountServiceService
  ) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts=>{
      this.accounts = accounts;
    });
  }


  addAccount(account: Account): void {
    this.accountService.createAccount(account).subscribe(insertedAccount=>{
      this.accounts.push(insertedAccount);
    }, error=>{
      this.router.navigate(['error/400'])
    });
  }

}
