import { Component, Input, } from '@angular/core';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [DatePipe]
})
export class ContentComponent {
  @Input() title: string;

  constructor(private datePipe: DatePipe) {
    this.title = '';
    this.currentDate = this.datePipe.transform(new Date(), '') || '';
  }
  currentDate: string;
  private timer: any;
  ngOnInit() {
    this.updateCurrentDateTime();
    this.timer = setInterval(() => {
      this.updateCurrentDateTime();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  updateCurrentDateTime() {
    const now = new Date();
    this.currentDate = this.datePipe.transform(now, 'dd MMMM y, h:mm:ss a', 'es') || '';
}

  minDate(): string {
    const currentDate = new Date();
    return this.datePipe.transform(currentDate, 'yyyy-MM-dd') || '';
  }


  isPopupOpen = false;
  events: any[] = []; // Array to hold all events
  colors: string[] = ['#d1c4e9', '#FFD1E3', '#e0f7fa', '#c8e6c9','#ffe0b2' ]; // Array of background colors
  

  categories: string[] = ['Conferencia', 'Celebraciones y Fiestas', 'Evento cultural', 'Evento deportivo', 'Taller', 'Otro'];
  

  
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
    // Verificar si todos los campos están llenos
    // if (!this.event.title || !this.event.description || !this.event.date || !this.event.time || !this.event.location || !this.event.category) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Campos incompletos',
    //     text: 'Por favor, llene todos los campos.'
    //   });
    //   return;
    // }

    // Aquí puedes manejar la lógica para enviar el formulario
    // Add the event to the array of events
    this.events.push({ ...this.event });

    // Clear the form
    this.event = {
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      category: ''
    };

    // Optionally close the popup or give feedback
    Swal.fire({
      icon: 'success',
      title: 'Evento creado',
      text: 'El evento ha sido creado exitosamente.'
    });

     // Update the current date and time
     this.updateCurrentDateTime();
  }
  getCardColor(index: number): string {
    return this.colors[index % this.colors.length];
  }
}