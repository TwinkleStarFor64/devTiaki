import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalService } from '../../utils/services/modal.service';
import { ProgrammeI } from '../../utils/modeles/Types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @ViewChild('carouselContainer', {static: true}) carouselContainer: ElementRef;
  @Input() items: ProgrammeI[] = [];
  @Output() onSelect: EventEmitter<ProgrammeI> = new EventEmitter<ProgrammeI>();
  @Output() carouselItemClick: EventEmitter<ProgrammeI> = new EventEmitter<ProgrammeI>();

  currentSlide = 0;
  selectedMedia: any;
 
  constructor() {
    this.carouselContainer = new ElementRef(null);
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.items.length % 4;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length % 4;
    this.updateCarousel();
  }

  updateCarousel() {
    this.carouselContainer;
  }

  onCarouselItemClick(item: ProgrammeI) {
    this.carouselItemClick.emit(item);
  }

}

