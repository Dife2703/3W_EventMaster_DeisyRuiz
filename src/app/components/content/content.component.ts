import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [DatePipe]
})
export class ContentComponent {
  @Input() title: string;
  eventForm: FormGroup;
  isPopupOpen = false;
  categories: string[] = ['Conferencia', 'Celebraciones y Fiestas', 'Evento cultural', 'Evento deportivo', 'Taller', 'Otro'];

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe){
    this.title = '';
    this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  minDate(): string {
    const currentDate = new Date();
    return this.datePipe.transform(currentDate, 'yyyy-MM-dd') || '';
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  onSubmit() {
    if (this.eventForm.invalid) {
      return;
    }
    console.log('Evento creado:', this.eventForm.value);
    this.closePopup();
  }
}
