// list.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() posts: IPost[] = [];
  selectedPost: IPost | null = null;

  openModal(post: IPost): void {
    this.selectedPost = post;
  }

  closeModal(event?: MouseEvent): void {
    this.selectedPost = null;
    if (event) {
      event.stopPropagation(); // Evitar el cierre si se hace clic dentro de la modal
    }
  }
}