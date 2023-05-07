import { Component, Injectable, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../../models/shop/product';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../../models/Cart/cart';
import { Router } from '@angular/router';
import { ShopGridComponent } from '../../pages/shop-grid/shop-grid.component';

@Injectable({
  providedIn: 'root'
})
export class CartHelperService implements OnInit {
  // cart = new Cart({
  //   idCommand: 1,
  //   statusCommand: 'pending',
  //  // dateCommand: '2022-05-06T10:30:00.000Z',
  //   shippingAddressCommand: '123 Main St, Anytown USA',
  //   idUser: 123,
  //   deliveryPersonId: undefined,
  //   purchaseCommandId: undefined,
  //   dateLivraison: undefined,
  //   notes: 'Please deliver to front door'
  // });
  cart = new Cart()
  numbers: number[] = [];
  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private router:Router
  ) {
    

    

    // console.log(cart);

    this.cartItems = []
  }

  public cartItems: Product[];
  public itemQuantity: number | undefined

  public calculateprice() {
    return this.cartItems != undefined ? this.productService.getGrandTotal(this.cartItems) : 1;
  }

  public handleAddToCart(product: Product) {
    this.productService.addToCart(product);
  }

  public handleDeleteFromCart(product: Product) {
    if (confirm('Are you sure you want to delete all this item from your cart?')) {
      this.productService.deleteFromCart(product);
    }
  }

  public handleDecrementQty(product: Product) {
    this.productService.decrementQuantity(product)
  }

  public getItemQuantity(product: Product) {
    return this.productService.getProductCountInCart(product);
  }

  addCommand(command: Cart): void {
    this.cartItems.map((p)=>{
      this.numbers.push(p.id)
    })
   this.cart.productList=this.numbers
  // this.cart.idUser="hot fiha l id mtee l user"
   console.log(this.numbers)
    this.http.post<Cart>('http://localhost:8082/PharmaLife/commands/add-command', command).subscribe(response => {
      console.log('Command added:', response);
      
      this.router.navigate(['/shop-grid']);




     
    }, error => {
      console.error('Failed to add command:', error);
    });
  }

  ngOnInit(): void {
    this.cartItems = this.productService.getProductsFromCart();

    this.productService.watchStorage().subscribe((data) => {
      this.cartItems = this.productService.getProductsFromCart();
     
    })
  }
}