import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['home'])
    Swal.fire(
      'Exitos!',
      'Beneficios Obtenidos',
      'success');
  }

}
