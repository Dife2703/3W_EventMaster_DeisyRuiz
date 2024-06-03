import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
  
    // Detener ejecución si el formulario no es válido
    if (this.loginForm.invalid) {
      return;
    }
  
    // Capturar los valores del formulario
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Lógica de envío si el formulario es válido
    alert('Formulario enviado correctamente.');
  }
}
