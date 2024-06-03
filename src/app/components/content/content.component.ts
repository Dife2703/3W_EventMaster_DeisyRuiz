import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() title: string;

  constructor() {
    this.title = '';
  }

  isPopupOpen = false;

  categories: string[] = ['Conferencia', 'Taller', 'Seminario', 'Concierto', 'Webinar'];

  event = {
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: ''
  };

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  onSubmit() {
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log('Evento creado:', this.event);
    this.closePopup();
  }
}
