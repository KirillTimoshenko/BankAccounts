import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Account } from '../../types/Account';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  @Output() addAccountItem: EventEmitter<Partial<Account>> = new EventEmitter();

  cname: string;
  balance: number;
  title: string;
  panelOpenState = false;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._snackBar.open("Account created", "OK", {
      duration: 2000,
    });

    console.log(this.balance);

    const account: Partial<Account> = {
      balance: this.balance,
      customerName: this.cname
    }

    this.addAccountItem.emit(account);
  }
}