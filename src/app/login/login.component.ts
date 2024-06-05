import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Injectable, inject } from "@angular/core";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  authService = inject(AuthService);
  router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  errorMessage: string | null = null;

  onSubmit() {
    this.submitted = true;
  
    // Detener ejecución si el formulario no es válido
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .login( this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next:() => {
          console.log("esto te dare")
          console.log(this.authService.login( this.loginForm.value.email, this.loginForm.value.password).subscribe.name);
          const verificacion = (): boolean => {
            return true;
          };
          // verificacion();
      this.router.navigateByUrl('/home');
    },
    error: (err) => {
      this.errorMessage = err.code;
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña incorrecta'
      });
    },
  });


  
    // Capturar los valores del formulario
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  



    console.log('Email:', email);
    console.log('Password:', password);
  
    // Lógica de envío si el formulario es válido
    //alert('Formulario enviado correctamente.');
    
  }
}
