import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Account } from './account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  accounts$: Account[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getAccounts()
    .subscribe(data => this.accounts$ = data);
  }
}
