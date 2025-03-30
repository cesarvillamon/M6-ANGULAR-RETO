import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RealizaroperacionesService } from 'src/app/services/realizaroperaciones.service';

@Component({
  selector: 'app-crearoperaciones',
  templateUrl: './crearoperaciones.component.html',
  styleUrls: ['./crearoperaciones.component.css']
})
export class CrearoperacionesComponent {
  formulario: FormGroup;
  
  // Mapa de códigos de transacción a sus descripciones
  codigosTransaccion = {
    'sucursal': 'Deposito desde sucursal',
    'cajero': 'Deposito desde cajero automático',
    'otraCuenta': 'Deposito desde otra cuenta',
    'fisico': 'Compra en establecimiento fisico',
    'web': 'Compra en pagina web',
    'retiro': 'Retiro en cajero'
  };
 
  constructor(private fb: FormBuilder, private realizaroperacionesService: RealizaroperacionesService) {
    this.formulario = this.fb.group({
      cuenta: ['1'],
      codigoTransaccion: [''],
      monto: ['']
    });
  }
 
  enviarFormulario() {
    console.log('Datos del formulario:', this.formulario.value);
    this.realizarTransaccion(
      this.formulario.value.cuenta, 
      this.formulario.value.codigoTransaccion, 
      this.formulario.value.monto
    );
  }

  // Método para obtener la descripción de un código
  getDescripcionTransaccion(codigo: string): string {
    return this.codigosTransaccion[codigo] || 'Tipo de transacción desconocido';
  }

  
  realizarTransaccion(nroCuenta, codigoTransaccion, valortransaccion): void {
    // Obtener la descripción del código de transacción
    const descripcionTransaccion = this.getDescripcionTransaccion(codigoTransaccion);
    console.log(descripcionTransaccion)

  if (['sucursal', 'cajero', 'otraCuenta'].includes(codigoTransaccion)) {
    this.realizaroperacionesService.crearDeposito(nroCuenta, codigoTransaccion, valortransaccion).subscribe({
      next: (response) => {
        console.log(response)
        alert('Transacción "' + descripcionTransaccion + '" realizada con éxito');
        this.formulario.patchValue({
          codigoTransaccion: '',
          monto: ''
        });
      },
      error: (err) => {
        console.log(err)
        alert('Error al realizar la transacción: ' + descripcionTransaccion);
      }
    });
  } else if (['fisico', 'web'].includes(codigoTransaccion)) {
    var esWeb = false;
    if(['web'].includes(codigoTransaccion)){
      esWeb = true;
    }
    this.realizaroperacionesService.crearCompra(nroCuenta, codigoTransaccion, valortransaccion, esWeb).subscribe({
      next: (response) => {
        console.log(response)
        alert('Transacción "' + descripcionTransaccion + '" realizada con éxito');
        this.formulario.patchValue({
          codigoTransaccion: '',
          monto: ''
        });
      },
      error: (err) => {
        console.log(err)
        alert('Error al realizar la transacción: ' + descripcionTransaccion);
      }
    });
  } else if (codigoTransaccion === 'retiro') {
    this.realizaroperacionesService.crearRetiro(nroCuenta, codigoTransaccion, valortransaccion).subscribe({
      next: (response) => {
        console.log(response)
        alert('Transacción "' + descripcionTransaccion + '" realizada con éxito');
        this.formulario.patchValue({
          codigoTransaccion: '',
          monto: ''
        });
      },
      error: (err) => {
        console.log(err)
        alert('Error al realizar la transacción: ' + descripcionTransaccion);
      }
    });
  } else {
    alert('Tipo de transacción no válido');
    return;
  }

 
    
  }
}
