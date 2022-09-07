import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, Inject, Type } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
// import { DialogContentExampleDialog } from '../product/product.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public api:ApiService,
  ){}

  saveData(){
    this.api.posts('books',this.data).subscribe(result=>
      {this.dialogRef.close(this.data)})
  }

  ngOnInit(): void {
  }

}

