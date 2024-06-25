import { Component, OnInit, AfterViewInit} from '@angular/core';
declare var M: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    M.AutoInit();
  }

  initializeParallax(): void {
    // Inicializa todos los elementos con clase 'parallax'
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }
}