import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  whatToShow:number=0;
  name:String='';

  constructor(public http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+'login/getName'+app.id;
    http.get(url).subscribe((data:any)=>
    {
      if(data==null)
      {
        window.alert('something is wrong');
      }
      else{
        this.name=data[0];
      }
    })
  }

  changeWhatToShow(num :number){

    this.whatToShow=num;
    
  }

  logout(){

    this.app.whatToShow=0;
    
  }
}
