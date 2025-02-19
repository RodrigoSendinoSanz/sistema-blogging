import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() posts: IPost[] = []; // Permite recibir posts desde el padre

  selectedPost: IPost | null = null;

  openModal(post: IPost) {
    this.selectedPost = post;
  }

  closeModal(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.selectedPost = null;
  }
}
