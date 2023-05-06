import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterStateSnapshot  } from '@angular/router';
import { Category } from 'src/app/Models/ProductAndGiftManagement/category';
import { Product } from 'src/app/Models/ProductAndGiftManagement/product';
import { CategoryService } from 'src/app/components/category-management/category.service';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  selectedCategory: any={}; 
  p:Product={
    idProduct: 0,
    referenceProduct: '',
    nameProduct: '',
    imageProduct: '',
    descriptionProduct: '',
    priceProduct: '',
    quantityProduct: '',
    expired: 0,
    expirationDateProduct: new Date(),
    userProduct: { idUser: 1, firstName: 'sahar', lastName: 'letaief', email: 'sahar.letaief@esprit.tn' },
    ReclamationsProduct: [],
    creationDate: new Date(),
    categoryProduct: new Category(),
  }

  allCategories:Category[];
  prod:Product;
  categ:Category=new Category();
  name:any;


  constructor(private fb: FormBuilder,private cs:CategoryService,private router:Router,private ps:ProductService,private route: ActivatedRoute) {
    this.createForm();
  }
  createForm() {
    this.productForm = this.fb.group({
      Pp: ['', [Validators.required, Validators.min(15)]],
      Pq: ['', [Validators.required, Validators.min(15)]],
      nameC:['', Validators.required]
    });
  }
  ngOnInit(): void {
    
    this.getCategories();
 
   
   
  }
  public getCategories() {
    this.cs.getAllCategoriesNotArchived().subscribe(data => {
      this.allCategories = data;
      console.log(data);
    });
  }
  public getCategoryByName() {
    this.cs.getCategoryByName(this.name).subscribe((data: Category) => {
      this.categ = data;
      console.log("Category object: ", this.categ);
    });
  }

  onSelected(value:string): void {
    console.log("Selected category name: ", value);
    this.name = value;
    console.log("nameee"+this.name)
  }

  addProduct(p: Product) {
    
    this.cs.getCategoryByName(this.name).subscribe((data: Category) => {
      this.categ = data;
      console.log("Category object: ", this.categ);
      p.categoryProduct=this.categ
      console.log("lena l9aha "+p.categoryProduct.idCategory)
      this.ps.addProduct(p).subscribe(() => {
        this.router.navigate(['/product-management']);
      });
    });
      
     
    
  }
  
  
  
   /*expDate(Date: Date): Boolean {
    //const date1 = new Date(date1);
    const date2 = new Date();
    const diffMs = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return date2>date1;
  }*/


  /*onSubmit() {
    this.addProduct();
  }*/
  
  }

