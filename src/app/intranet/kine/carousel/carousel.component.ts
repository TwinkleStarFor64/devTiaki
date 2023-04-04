import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../../utils/services/modal.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @ViewChild('carouselContainer', {static: true}) carouselContainer: ElementRef;
  mediaList = [
    { type: 'image', url: 'assets/exoKine/4pattes.svg' },
    { type: 'image', url: 'assets/exoKine/appuis.svg' },
    { type: 'video', url: 'video1.mp4' },
    { type: 'image', url: 'assets/exoKine/escalier.svg' },
    { type: 'image', url: 'assets/exoKine/grenouille.svg'},
    { type: 'image', url: 'assets/exoKine/ours.svg' },
    { type: 'image', url: 'assets/exoKine/appuis.svg' },
    { type: 'video', url: 'video1.mp4' },
    { type: 'image', url: 'assets/exoKine/rampe.svg' },
    { type: 'image', url: 'assets/exoKine/planche.svg'},
    { type: 'image', url: 'assets/exoKine/appuis.svg' },
    { type: 'video', url: 'video1.mp4' },
    { type: 'image', url: 'assets/exoKine/retournement.svg' },
    { type: 'image', url: 'assets/exoKine/appuis.svg' },
  ];

  currentSlide = 0;
  selectedMedia: any;
 
  showModal = false;
  constructor(public modalService: ModalService) {
    this.carouselContainer = new ElementRef(null);
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.mediaList.length % 4;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.mediaList.length) % this.mediaList.length % 4;
    this.updateCarousel();
  }

  updateCarousel() {
    this.carouselContainer.nativeElement.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

  showMedia(index: number) {
    this.selectedMedia = this.mediaList[index];
    this.modalService.setShowModal(true);
  }

  closeModal() {
    this.showModal = false;
  }
}

