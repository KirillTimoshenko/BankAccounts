import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorId = 404;
  errorMsg: string;
  tmp: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(map(p => p.id)).subscribe(errorI=>{
      this.errorId = Number(errorI);
    });

    this.initErrorMsg();
  }

  initErrorMsg(){
    switch(this.errorId){
      case 400:
        console.log("400")
        this.errorMsg = "Bad Request";
        break;
      case 403:
        this.errorMsg = "Forbidden";
        break;
        default:
          console.log("404");
          this.errorId = 404;
          this.errorMsg = "Not Found";
          this.router.navigate(['404']);
    }
  }

}
