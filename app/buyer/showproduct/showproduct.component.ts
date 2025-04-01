import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent {
  
  prods:any;
  cats:any;
  carts:any;

constructor(public http:HttpClient,public app:AppComponent){

  let url2 = app.baseUrl+'admin/getAllCategories'
  http.get(url2).subscribe((data:any)=>
  {
    if(data==null)
    {
      window.alert('Something is wrong');
    }
    else{
      this.cats=data;
    }
  }
  );
}

categoryid:number=0;
minprice:number=0;
maxprice:number=0;
minrating:number=0;

showProducts()
{
   let obj=[this.categoryid,this.minprice,this.maxprice,this.minrating];

   let url=this.app.baseUrl+'buyer/getProductsByFilter';

  this.http.post(url,obj).subscribe((data:any)=>
  {
    if(data==null)
    {
      window.alert('something is wrong');
    }
    else
    {
      if(data==0)
      {
        window.alert('No products are available in this range');
      }
      this.prods=data;
    }
  });
}

  addToCart(p:any){

    let url=this.app.baseUrl+'buyer/getByProductandUsers'+p.id+'and'+this.app.id;
    this.http.get(url).subscribe((data:any)=>
    {
      if(data==null)
        {
          window.alert('something is wrong');
        }
        else
        {
          console.log(p.id+" "+this.app.id);
          window.alert('Done Added to Cart');
          this.carts=data;
        }
    });
  
  }

  updateRating(p:any){
    
    let url3=this.app.baseUrl+'buyer/getRating'+p.id+'and'+this.app.id+'and'+p.stars;
    this.http.get(url3).subscribe((data:any)=>
    {
      if(data==null)
      {
        window.alert('something is wrong');
      }
      else{
        window.alert('Done...!');
      this.prods=data;
      this.showProducts();
      }
    });
  }
}
