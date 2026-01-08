import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ProgrammeI } from '../../utils/modeles/Types';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    standalone: false
})
export class CarouselComponent {
  @ViewChild('carouselContainer', { static: true }) carouselContainer: ElementRef;
  @Input() items: ProgrammeI[] = [];
  @Output() onSelect: EventEmitter<ProgrammeI> = new EventEmitter<ProgrammeI>();
  @Output() carouselItemClick: EventEmitter<ProgrammeI> = new EventEmitter<ProgrammeI>();

  currentSlide = 0;
  selectedMedia: any;

  constructor() {
    this.carouselContainer = new ElementRef(null);
  }
  //méthode pour changer de slide
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    this.updateCarousel();
  }
  //méthode pour changer de slide
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
    this.updateCarousel();
  }
  // méthode permettant de mettre à jour le container de slide
  updateCarousel() {
    const containerWidth = this.carouselContainer.nativeElement.offsetWidth;
    const slideWidth = containerWidth / 4;
    const containerOffset = -this.currentSlide * slideWidth;//Le décalage du container en fonction du currentSlide
    this.carouselContainer.nativeElement.style.transform = `translateX(${containerOffset}px)`;//Transformation CSS au container pour effectuer le défilement
  }
  // gérer le clic sur un élément du carrousel.
  onCarouselItemClick(item: ProgrammeI) {
    this.carouselItemClick.emit(item);
  }
}

