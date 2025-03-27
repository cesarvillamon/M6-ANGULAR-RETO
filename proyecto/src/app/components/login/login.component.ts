import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateLogin } from 'src/app/state/state-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);

  constructor(private fb: FormBuilder,
    private state:StateLogin, private router: Router
  ) { }

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Usuario logueado0');
      const usuario = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      if(usuario === 'cesar' && password === '12345678') {
        console.log('Usuario logueado');
        this.state.userEmail = 'cesarvilla@gmail.com';
        console.log('Usuario logueado2');
        this.router.navigate(['/main']);
      }
    } 
  }
}
