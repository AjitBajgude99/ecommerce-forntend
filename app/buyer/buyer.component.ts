import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent {

  whatToShow:number=0;
  name:String='';
  changeWhatToShow(num:number){

    this.whatToShow=num;
    
  }

 
  constructor(public http:HttpClient,public app:AppComponent){

    let url = app.baseUrl+'login/getName'+app.id;
    http.get(url).subscribe((data:any)=>
    {
      if(data==null)
      {
        window.alert('Something is wrong');
      }
      else{
        this.name=data[0];
      }
    });


 }
 logout(){

  this.app.whatToShow=0;
  
}

}
