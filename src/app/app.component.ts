import { Component } from '@angular/core';

import { Product } from './product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Victor';
  age = 23;
  img = 'https://source.unsplash.com/random/200x200';
  btnDisabled = true;
  progress = 50;
  person = {
    name: 'Hugo',
    age: 23,
    profession: 'Developer',
    state: 'active',
    profileimg: 'https://source.unsplash.com/random/200x200',
  };

  toggleButtton() {
    this.btnDisabled = !this.btnDisabled;
  }

  incrementarEdad() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  emojis: String[] = ['😂', '🐦', '🐳', '🌮', '💚'];
  newEmoji = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpeg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpeg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpeg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpeg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpeg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  //Agregar emoji a la lista
  addEmoji() {
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }

  //Eliminar emoji de la lista
  deleteEmoji(index: number) {
    this.emojis.splice(index, 1);
  }
}
