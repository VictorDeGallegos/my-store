import { Component } from '@angular/core';

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
}
