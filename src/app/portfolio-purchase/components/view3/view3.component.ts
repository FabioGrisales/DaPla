import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule ,FormControl,FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.scss']
})
export class View3Component implements OnInit {

  finalized!: boolean;
  infoOperation: any;
  date: any

  saldo:number = 1500;

  form = new FormGroup({
    waytopay: new FormControl ('',[Validators.required]),
    coverage: new FormControl ('',[Validators.required]),

  });

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  finish(){
    this.router.navigate(['./home']);
  }
  saveForm(event:Event){
    event.preventDefault();

    if(this.form.valid){
      this.finalized = true

      console.log(this.form.value)
      this.infoOperation = this.form.value

      this.date = new Date()
    }
  }

  reducirSaldo(){
    if (this.saldo>0) {

      this.saldo = this.saldo - 100;
      console.log(this.saldo);


    }
  }

  beneficios(){
    this.router.navigate(['formulario/view1']);
  }

}
