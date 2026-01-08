import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-delete-data',
    templateUrl: './delete-data.component.html',
    styleUrls: ['./delete-data.component.scss'],
    standalone: false
})
export class DeleteDataComponent implements OnInit  {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DeleteDataComponent>) {}

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
