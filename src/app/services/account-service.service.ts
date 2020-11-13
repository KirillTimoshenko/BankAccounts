import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../types/Account';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  accountUrl: string = 'http://localhost:48015';
  accountsStr: string = 'accounts';
  accountStr: string = 'account';

  constructor(
    private http: HttpClient
  ) { }

  createAccount(account: Partial<Account>): Observable<Account>{
    const url = `${this.accountUrl}/${this.accountsStr}`;
  
    return this.http.post<Account>(
      url, account, httpOptions
      );
  }


  updateStatus(account: Partial<Account>): Observable<Partial<Account>> {
    const url = `${this.accountUrl}/${this.accountStr}/${account.id}`;

    return this.http.put<Partial<Account>>(
      url, account, httpOptions
    );
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(
      `${this.accountUrl}/${this.accountsStr}`
      );
  }

  getAccount(id: string): Observable<Account>{
    return this.http.get<Account>(
      `${this.accountUrl}/${this.accountStr}/${id}`
      );
  }
}
