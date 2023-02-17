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

  mediaList: { type: string, url: string }[] = [];
  
  constructor(public sanitizer: DomSanitizer,public modalService: ModalService) { }

  showMedia(i: number) {
    this.selectedMedia = this.mediaList[i];
    this.modalService.setShowModal(true);
  }

  ngOnInit(): void {
    this.avatar = 'assets/imgAsidebar/cheerleader1.svg';

  }

}
