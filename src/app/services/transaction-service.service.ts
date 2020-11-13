import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../types/Transaction';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  accountUrl: string = 'http://localhost:48015';
  transactionStr: string = 'transactions';

  constructor(
    private http: HttpClient
  ) { }

  createTransaction(transaction: Partial<Transaction>): Observable<Transaction>{
    const url = `${this.accountUrl}/${this.transactionStr}/${transaction.accountId}`;
  
    return this.http.post<Transaction>(url, transaction, httpOptions);
  }

  getTransactions(id: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `${this.accountUrl}/${this.transactionStr}/${id}`
    );
  }
}
