import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Injectable, inject } from "@angular/core";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registerForm: FormGroup;
  submitted = false;
  //http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  errorMessage: string | null = null;

  onSubmit() {
    this.submitted = true;
  
    // Detener ejecución si el formulario no es válido
    if (this.registerForm.invalid) {
      return;
    }
  
    //const rawForm = this.formBuilder.getRawValue()
    this.authService
      .register( this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password)
      .subscribe({
        next:() => {
      this.router.navigateByUrl('/');
    },
    error: (err) => {
      this.errorMessage = err.code;
    },
  });
    // Capturar los valores del formulario
    const name = this.registerForm.value.name;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  

    // Lógica de envío si el formulario es válido
    //alert('Formulario enviado correctamente.');
  }
}
