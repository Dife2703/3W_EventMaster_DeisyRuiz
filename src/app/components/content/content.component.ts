import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { FormatoService } from 'src/app/services/formato.service';
import { FilterService } from 'src/app/services/filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [DatePipe]
})
export class ContentComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  currentDate: string;
  private timer: any;
  isPopupOpen = false;
  events: any[] = [];
  filteredEvents: any[] = [];
  colors: string[] = ['#d1c4e9', '#FFD1E3', '#e0f7fa', '#c8e6c9', '#ffe0b2'];
  categories: string[] = ['Conferencia', 'Celebraciones y Fiestas', 'Evento cultural', 'Evento deportivo', 'Taller', 'Otro'];

  event = {
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: ''
  };

  private categoryFilterSubscription: Subscription | null = null;
  private dateFilterSubscription: Subscription | null = null;

  constructor(private datePipe: DatePipe, private formatoService: FormatoService, private filterService: FilterService) {
    this.currentDate = this.datePipe.transform(new Date(), '') || '';
  }

  ngOnInit() {
    this.updateCurrentDateTime();
    this.timer = setInterval(() => {
      this.updateCurrentDateTime();
    }, 1000);

    this.formatoService.getFormato().subscribe(formato => {
      this.events = formato.map(event => ({ ...event }));
      this.applyFilters();
    });

    this.categoryFilterSubscription = this.filterService.categoryFilter$.subscribe(category => {
      this.applyFilters();
    });

    this.dateFilterSubscription = this.filterService.dateFilter$.subscribe(date => {
      this.applyFilters();
    });
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.categoryFilterSubscription) {
      this.categoryFilterSubscription.unsubscribe();
    }
    if (this.dateFilterSubscription) {
      this.dateFilterSubscription.unsubscribe();
    }
  }

  applyFilters() {
    const selectedCategory = this.filterService.categoryFilter$.getValue();
    const selectedDate = this.filterService.dateFilter$.getValue();

    this.filteredEvents = this.events.filter(event => {
      const matchesCategory = !selectedCategory || event.category === selectedCategory;
      const matchesDate = !selectedDate || event.date === selectedDate;
      return matchesCategory && matchesDate;
    });
  }

  updateCurrentDateTime() {
    const now = new Date();
    this.currentDate = this.datePipe.transform(now, 'dd MMMM y, h:mm:ss a', 'es') || '';
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

  async onSubmit() {
    if (!this.event.title || !this.event.description || !this.event.date || !this.event.time || !this.event.location || !this.event.category) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, llene todos los campos.'
      });
      return;
    }

    const response = await this.formatoService.addFormato(this.event);
    console.log(response);

    this.events.push({ ...response });
    this.applyFilters(); // Update the filtered events list

    this.event = {
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      category: ''
    };

    Swal.fire({
      icon: 'success',
      title: 'Evento creado',
      text: 'El evento ha sido creado exitosamente.'
    });

    this.closePopup();
  }

  async onClickDelete(index: number) {
    try {
      const response = await this.formatoService.deleteFormato(this.filteredEvents[index].id);
      console.log(response);
      this.events = this.events.filter(event => event.id !== this.filteredEvents[index].id);
      this.applyFilters(); // Update the filtered events list
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  }

  getCardColor(index: number): string {
    return this.colors[index % this.colors.length];
  }
}
