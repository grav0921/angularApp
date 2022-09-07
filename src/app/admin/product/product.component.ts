import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { MaterialDesign } from 'src/app/material/material';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { DeclarationListEmitMode } from '@angular/compiler';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title : any;
  buku : any = {};
  books : any = [];
  // data : any;

  //View data
  getBooks(){
    // this.books=[
    //   {
    //     judul:'Digital-Fortress',
    //     genre:'Teknologi',
    //     penulis:'Dan Brown',
    //     penerbit:'St. Martin press',
    //     tahun: 1998,
    //     harga: 100000
    //   },
    //   {
    //     judul:'Lord of The Ring',
    //     genre:'Fantasi',
    //     penulis:'J. R. R. Tolkien',
    //     penerbit:'J. R. R. Tolkien',
    //     tahun: 1954,
    //     harga: 555000
    //   }
    // ]
    this.api.gets('books').subscribe(result=>{
      this.books=result;
    });
  }
  constructor(
    public api:ApiService,
    public dialog: MatDialog,

  ) { }
  
  openDialog(data: any, index: any){
    const dialogRef = this.dialog.open(ProductDetailComponent,  {
      width:'400pt',
      data:data
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        if (index===-1)this.books.push(result);
        else this.books[index]=result;
      }
    });
  }

  ngOnInit(): void {
    this.title='Product';
    this.getBooks();
    console.log(this.books);
 }
}

// @Component({
//   selector: 'app-product-detail',
//   templateUrl: '../product-detail/product-detail.component.html',
// })
// export class DialogContentExampleDialog {}