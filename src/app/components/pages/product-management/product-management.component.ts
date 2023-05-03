import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { Product } from '../../../Models/ProductAndGiftManagement/product';
import { CategoryService } from '../../category-management/category.service';
import { Category } from '../../../Models/ProductAndGiftManagement/category';
import { Reclamation } from 'src/app/Models/ProductAndGiftManagement/reclamation';
import { ReclamationService } from '../../reclamation-management/reclamation.service';
import { GiftService } from '../../gift-management/gift.service';
import { Gift } from 'src/app/Models/ProductAndGiftManagement/gift';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
//import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  allProducts!: Product[];
  top3Products!: Product[];
  allCategories!: Category[];
  searchText: any;
  detailsProduct?:Product;
  product!:Product;
  giftId:number=1;
  reclamation!:Reclamation;

  constructor(private ps: ProductService, router: Router, private cs: CategoryService,
    private rs:ReclamationService,private gs:GiftService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getTop3Products();
    this.getCategories();

  }

  public getCategories() {
    this.cs.getAllCategoriesNotArchived().subscribe(data => {
      this.allCategories = data;
    });
  }


  public getAllProducts() {
    this.ps.getAllProductsNotExpired().subscribe(data => {
      this.allProducts = data;
    });
  }

  public getTop3Products() {
    this.ps.getTop3Prodcuts().subscribe(data => {
      this.top3Products = data;
    });
  }
  public  deleteProduct(productId: number) {
    this.ps.deleteProduct(productId).subscribe(() => {
     // this.toast.success({ detail: 'Success', summary: 'Product successfully deleted !', position: 'tr', duration: 1000 })
      this.getAllProducts();
    });
  }

  public addReclamation(){
    this.rs.addReclamation(this.reclamation).subscribe(()=>{
      this.reclamation.idProduct=this.reclamation.product.idProduct;
      this.reclamation.idUser=1;
      console.log("reclamation")
      //this.toast.success({ detail: 'Success', summary: 'Reclamation successfully sent !', position: 'tr', duration: 2000 })
      this.getAllProducts();
    });
  }
  public addGift(p:Product){
    this.gs.addGift(1,p).subscribe(
      (response: Gift) => {
        console.log(response);
        this.getAllProducts();
      },
      (error: HttpErrorResponse) => {
        alert("error gift"+error.message);
      }
    );
  }

  public onAddProduct(addForm: NgForm):void{
    this.ps.addProduct(addForm.value).subscribe(
      (response:any) => {
        console.log(response);
        this.getAllProducts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert("error adding"+error.message);
      }
    );
  }



  public onOpenModal(product: Product, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode == 'details') {
      this.detailsProduct = product;
      button.setAttribute('data-target', '#productDetailsModal');
      console.log("details")
    }
    if (mode === 'add') {

      button.setAttribute('data-target', '#addProductModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public getDateDiffInDays(dateString1: string, c: Category):any {
    const date1 = new Date(dateString1);
    const date2 = new Date();
    const diffMs = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    if ((date2 < date1) ) {
      return "Still available for " + diffDays + " days." + "\n" ;  
    }
  }

  



}
