import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost';
import { ListComponent } from '../list/list.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [ListComponent, FormComponent],
})
export class BlogComponent {
  posts: IPost[] = [
    {
      title: 'Noticia 1',
      image: 'https://picsum.photos/500/400?random=1',
      content:
        'Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid.',
      date: '2023-10-01',
    },
    {
      title: 'Noticia 2',
      image: 'https://picsum.photos/500/400?random=2',
      content: `Lorem fistrum dolore aute magna está la cosa muy malar. No puedor et hasta luego Lucas veniam te voy a borrar el cerito ese pedazo de.`,
      date: '2023-10-02',
    },
    {
      title: 'Noticia 3',
      image: 'https://picsum.photos/500/400?random=3',
      content: `Lorem fistrum aliquip jarl elit. Elit ahorarr diodenoo sit amet jarl.`,
      date: '2023-10-02',
    },
  ];

  addPost(newPost: IPost): void {
    this.posts.push(newPost); // Agregar la nueva noticia al array
  }
}
