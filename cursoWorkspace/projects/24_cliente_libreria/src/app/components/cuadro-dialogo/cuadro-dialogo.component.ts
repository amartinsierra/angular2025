import { Component,Inject} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-cuadro-dialogo',
  imports: [MatDialogModule],
  templateUrl: './cuadro-dialogo.component.html',
  styleUrl: './cuadro-dialogo.component.css'
})
export class CuadroDialogoComponent {
    constructor(private dialogRef:MatDialogRef<CuadroDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mensaje: string }){}
    cerrar() {
      this.dialogRef.close();
    }
}
