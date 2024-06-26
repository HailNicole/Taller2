import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router} from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    M.AutoInit();
  }
}