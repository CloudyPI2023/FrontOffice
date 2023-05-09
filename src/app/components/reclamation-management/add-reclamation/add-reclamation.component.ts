import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/ProductAndGiftManagement/product';
import { Reclamation } from 'src/app/Models/ProductAndGiftManagement/reclamation';
import { User } from 'src/app/Models/ProductAndGiftManagement/user';
import { ProductService } from '../../pages/product-management/product.service';
import { ReclamationService } from '../reclamation.service';
//import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  reclamationForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private ps: ProductService, private rs: ReclamationService,private formBuilder: FormBuilder) {
    this.reclamationForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.pattern(/^[^_!?:;*+-/]*$/)]]

      
    });
  }
   


  r: Reclamation = {
    idReclamation: 0,
    descriptionReclamation: '',
    dateReclamation: "",
    archived: 0,
    idUser: 0,
    idProduct: 0,
    userProduct: { idUser: 1, firstName: 'sahar', lastName: 'letaief', email: 'sahar.letaief@esprit.tn' },
    product: new Product()
  }
  oneProduct: Product;
  myReclamations: Reclamation[];

  ngOnInit(): void {
    this.getProductById();
  }


  getProductById() {
    this.r.idProduct = this.route.snapshot.params['id'];
    console.log(this.r.idProduct)
    this.ps.OnDetailsProduct(this.r.idProduct).subscribe(data => {
      this.oneProduct = data;
      console.log(data);
    });
  }
  public getMyReclamations(idUser: number) {
    this.rs.getMyReclamations(1).subscribe(data => {
      this.myReclamations = data;
    });
  }



  AddReclamation() {
    this.r.idProduct = this.oneProduct.idProduct;
    this.r.idUser = 1;
    this.rs.duplicatedReclamation(this.r.idUser, this.r.idProduct).subscribe((reclamations: Reclamation[]) => {
      if (reclamations.length > 0) {
        alert("A reclamation for this product has already been submitted.");
      } else {
        this.rs.addReclamation(this.r).subscribe(() => {
          alert("Reclamation sent successfully, check your email")
          this.router.navigate(['/reclamation-management']);
        });
      }
    });
}

  
}
