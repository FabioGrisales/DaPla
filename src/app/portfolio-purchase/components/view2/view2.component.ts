import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule ,FormControl,FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {

  modalSwitch!:boolean
  datos!:any;

  form = new FormGroup({
    name: new FormControl ('',[Validators.required]),
    seleccione: new FormControl ('',[Validators.required]),
    documento: new FormControl ('',[Validators.required]),
    ciudad: new FormControl ('',[Validators.required]),
    address: new FormControl ('',[Validators.required]),
    text: new FormControl ('',[Validators.required]),
    opcional: new FormControl(''),
    telefono:  new FormControl ('',[Validators.required])
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.datos=[1,2,3,4,5,6,7,8,9,10];
  }

  ngOnInit(): void {
  }
  save(event:Event){
    event.preventDefault();
    if(this.form.valid){
      this.modalSwitch = true;
      this.router.navigate(['home'])
      Swal.fire(
        'Exitos!',
        'Creado correctamente',
        'success');
    }
  }

  get priceField(){
    return this.form.get('ingresos');
  }

  cambiar(){this.router.navigate(['home'])}

}
