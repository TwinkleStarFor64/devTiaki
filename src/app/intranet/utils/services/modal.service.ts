import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private showModalSource = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModalSource.asObservable();

  constructor() {}

  setShowModal(show: boolean) {
    this.showModalSource.next(show);
  }
}
