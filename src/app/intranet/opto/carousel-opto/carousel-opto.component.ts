import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../../utils/services/modal.service';

@Component({
  selector: 'app-carousel-opto',
  templateUrl: './carousel-opto.component.html',
  styleUrls: ['./carousel-opto.component.scss']
})
export class CarouselOptoComponent {
  @ViewChild('carouselContainer', {static: true}) carouselContainer: ElementRef;
  mediaList = [
    { type: 'image', url: 'assets/exoOpto/carteMcDonald.svg' },
    { type: 'image', url: 'assets/exoOpto/un-oeil.jpg' },
    { type: 'video', url: 'video1.mp4' },
    { type: 'image', url: 'assets/exoOpto/hemi2.svg' },
    { type: 'image', url: 'assets/exoOpto/occlumotricite.svg'},
    { type: 'image', url: 'assets/exoOpto/carteMcDonald.svg' },
    { type: 'image', url: 'assets/exoOpto/un-oeil.jpg' },
    { type: 'video', url: 'video1.mp4' },
    { type: 'image', url: 'assets/exoOpto/hemi2.svg' },
    { type: 'image', url: 'assets/exoOpto/occlumotricite.svg'},
    { type: 'image', url: 'assets/exoOpto/un-oeil.jpg' },
    { type: 'video', url: 'video1.mp4' },
    { type: 'image', url: 'assets/exoOpto/hemi2.svg' },
    { type: 'image', url: 'assets/exoOpto/occlumotricite.svg'},
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

