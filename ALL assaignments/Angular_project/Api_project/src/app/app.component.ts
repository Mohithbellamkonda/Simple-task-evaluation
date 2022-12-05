import { Component } from '@angular/core';
import { UserdataService} from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api_project';
  userData:any=[{}];

  constructor(private userdataService:UserdataService){
    this.userdataService.Users().subscribe(data=>{
      this.userData=data;
    })
  }
}
