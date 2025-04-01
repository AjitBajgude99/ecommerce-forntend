import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

deleteProduct(id:number)
{

  let url=this.app.baseUrl+'buyer/deleteProduct'+id;
  this.http.delete(url).subscribe((data:any)=>
  {
    if(data==null)
    {
      window.alert("something is wrong");
    }
    else
    {
      this.lists=data;
      this.loadCart();
    }
  });
}

getFinalPrice():number
{
let  total=0;
for(let item of this.lists)
{
  const discountPrice = item.price * (1 - item.discount/100);
  total +=discountPrice * item.quantity1;

}
return total;
}

lists:any[]=[]

constructor(public http:HttpClient, public app:AppComponent)
{
  let url=this.app.baseUrl+'buyer/getAllProductsByUserid'+app.id;
  http.get(url).subscribe((data:any)=>
  {
    if(data==null)
    {
      window.alert('Something is wrong');
    }
    else{
      this.lists=data;
    }
  });
}

loadCart()
{
  let url=this.app.baseUrl+'buyer/getAllProductsByUserid'+this.app.id;
  this.http.get(url).subscribe((data:any)=>
  {
    if(data==null)
    {
      window.alert('something is wrong');
    }
    else{
      this.lists=data;
    }
  })
}

orderProduct(lists:any[]
  
)
{

  let list2:any[]=[];

  for(let i=0;i<this.lists.length;i++)
  {
    let array:number[]=new Array(2);
    array[0] = this.lists[i].id;
    array[1] = this.lists[i].quantity1;
    list2.push(array);
  }

  let url = this.app.baseUrl+'buyer/placeOrder'+this.app.id;
  this.http.post(url,list2).subscribe((data:any)=>
  {
    if(data==null)
    {
      window.alert("something is wrong");
    }
    else{
      this.lists=data;
      window.alert("Done");
      this.lists=[];
    }
  });

}

}
