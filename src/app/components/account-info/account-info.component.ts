import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AccountServiceService } from '../../services/account-service.service';
import { TransactionServiceService } from '../../services/transaction-service.service';
import { Account } from '../../types/Account';
import { Transaction } from '../../types/Transaction';
import { Operation } from '../../types/Operation';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  account: Account;
  transactions: Transaction[];
  flag: number=0;
  amount: number=0;
  status: boolean;


  displayedColumns: string[] = ['num', 'account', 'amount'];

  operations: Operation[] = [
    {value: 1, title: 'Refill'},
    {value: -1, title: 'Withdraw'}
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountServiceService,
    private transactionService: TransactionServiceService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> 
      this.accountService.getAccount(params.get('id')))
    ).subscribe(returnedAccount=>{
      this.account = returnedAccount;
      this.initTransactionTable()
    }, error=>{
      this.router.navigate(['404'])
    })
  }

  onSubmit() {
    console.log(`trying add transaction: ${this.flag*this.amount}`)
    console.log(`balance: ${this.account.balance+(this.flag*this.amount)}`)

    if(this.account.balance + (this.flag * this.amount) < 0) {
      this._snackBar.open("Transaction denied: Not Enough Funds", "DENIED", {
        duration: 2000,
      });
    } else {
      const transaction: Partial<Transaction> = {
        accountId: this.account.id,
        amount: this.flag*this.amount
      }

      this.addTransaction(transaction);
      this.update()
    }
  }

  addTransaction(transaction: Partial<Transaction>): void {
    this.transactionService.createTransaction(transaction).subscribe(insertedTran=>{
      this.transactions.push(insertedTran);
    });
  }

  initTransactionTable(): void{
    this.transactionService.getTransactions(this.account.id).subscribe(transactions=>{
      this.transactions = transactions;
    }, error=>{
      this.router.navigate(['error/400'])
    });
  }

  changeAccountStatus(){
    console.log("changing status");
    
    this.accountService.updateStatus(this.account).subscribe(updatedAc=>{
      const accountToUpd: Account = {...this.account, status: updatedAc.status };
      this.account = accountToUpd;
    }, error=>{
      this.router.navigate(['error/400']);
    })

    this.update();
  }
  
  update():void{
    console.log("updating page info");

    this.route.paramMap.pipe(
      switchMap((params: ParamMap)=> 
      this.accountService.getAccount(params.get('id')))
    ).subscribe(returnedAccount=>{
      this.account = returnedAccount;
      this.initTransactionTable();
    }, error=>{
      this.router.navigate(['404'])
    })
  }


  disableForm(): boolean {
    return this.account.status==="opened" ? false : true;
  }

}
