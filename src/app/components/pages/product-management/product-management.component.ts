import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  allProducts:Product[] | undefined

  constructor(private ps: ProductService, router: Router, private toast: NgToastService) {  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.ps.getAllProductsNotExpired().subscribe(data => {
      this.allProducts = data;
    });
  }

}
