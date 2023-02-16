import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from '../../utils/services/modal.service';

@Component({
  selector: 'app-programme-kine',
  templateUrl: './programme-kine.component.html',
  styleUrls: ['./programme-kine.component.scss']
})
export class ProgrammeKineComponent implements OnInit {
  avatar!:string;
  selectedMedia: { type: string, url: string } | null = null;

  mediaList: { type: string, url: string }[] = [  // Ajout de mediaList ici
  { type: 'image', url: 'assets/iconeKineOpto/exercice1.jpg' },
  { type: 'image', url: 'assets/iconeKineOpto/exercice2.jpg' },
  { type: 'video', url: 'assets/iconeKineOpto/exercice3.mp4' },
];
  
  constructor(public sanitizer: DomSanitizer,public modalService: ModalService) { }

  showMedia(i: number) {
    this.selectedMedia = this.mediaList[i];
    this.modalService.setShowModal(true);
  }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';

  }

}
