import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() postAdded = new EventEmitter<IPost>(); // Emite la nueva noticia
  isFormHidden = false; // Por defecto, el formulario está oculto en móvil

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    image: new FormControl('', [Validators.required, Validators.pattern(/https?:\/\/.+\.(jpg|jpeg|png|gif)/i)]),
    content: new FormControl('', [Validators.required, Validators.minLength(20)]),
    date: new FormControl('', [Validators.required]),
  });


  toggleForm() {
    this.isFormHidden = !this.isFormHidden;
  }

  addPost(): void {
    if (this.postForm.invalid) {
      alert('Todos los campos son obligatorios y deben cumplir los requisitos.');
      return;
    }

    // Emitir la nueva noticia al componente padre
    this.postAdded.emit(this.postForm.value as IPost);

    // Resetear el formulario
    this.postForm.reset();
  }
}
