import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  list:any[]=[];//all product
  list2:any[]=[]; // all categories
  constructor(public http:HttpClient,public app:AppComponent){
    
    // API call to get all existing categories

    let url = this.app.baseUrl+'seller/getAllProducts'+this.app.id;
    this.http.get(url).subscribe((data:any)=>
    {
      if(data==null)
      {
        window.alert('Something is wrong');
      }
      else{
        this.list=data;
      }
    }
    );

    let url2 = app.baseUrl+'admin/getAllCategories'
    http.get(url2).subscribe((data:any)=>
    {
      if(data==null)
      {
        window.alert('Something is wrong');
      }
      else{
        this.list2=data;
      }
    }
    );
  }

  load(){
    let url = this.app.baseUrl+'seller/getAllProducts'+this.app.id;
    this.http.get(url).subscribe((data:any)=>
    {
      if(data==null)
      {
        window.alert('Something is wrong');
      }
      else{
        this.list=data;
      }
    }
    );
  }

  name:string='';
  price:number=0;
  quantity:number=0;
  description:string='';
  discount:number=0;
  catid:number=0;

  addProduct() {
    // Basic validation for required fields in Angular
    if (!this.name || this.name.trim() === '') {
      window.alert('Product name cannot be null or empty');
      return;  // Stop execution if validation fails
    }
  
    if (this.price === null || this.price === 0) {
      window.alert('Price cannot be zero or null');
      return;  // Stop execution if validation fails
    }
  
    // Prepare the product object after validation passes
    let product = {
      "name": this.name,
      "userid": this.app.id,
      "price": this.price,
      "quantity": this.quantity,
      "description": this.description,
      "discount": this.discount,
      "categoryid": this.catid
    };
  
    let url = this.app.baseUrl + 'seller/addNewProduct';
  
    // Send the validated product object to the backend
    this.http.post(url, product).subscribe((data: any) => {
      if (data == null) {
        window.alert('Something is wrong');
      } else {
        // Push the new product to the list and reset the form
        this.list.push(data);
        this.load();
        this.name = '';
        this.price = 0;
        this.quantity = 0;
        this.description = '';
        this.discount = 0;
      }
    });
  }
  
  }




