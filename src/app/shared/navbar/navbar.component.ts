import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  buscar(value : string){
    console.log(value);
    if(!value){
      return
    }

    this.router.navigate(['/usuario', value]);

  }

}
