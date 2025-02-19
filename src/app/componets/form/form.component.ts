import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPost } from '../../interfaces/ipost';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() postAdded = new EventEmitter<IPost>(); // Emite la nueva noticia
  isFormHidden = true; // Por defecto, el formulario está oculto en móvil

  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      image: ['', [Validators.required, Validators.pattern(/\.(jpg|jpeg|png|gif)$/i)]],
      content: ['', [Validators.required, Validators.minLength(20)]],
      date: ['', Validators.required],
    });
  }

  addPost(): void {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched(); // Muestra errores si los hay
      return;
    }

    const newPost: IPost = this.postForm.value;
    this.postAdded.emit(newPost);
    this.postForm.reset(); // Reiniciar formulario
  }

  toggleForm() {
    this.isFormHidden = !this.isFormHidden;
  }
}
