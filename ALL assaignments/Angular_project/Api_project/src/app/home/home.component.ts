import { Component } from '@angular/core';
import { UserdataService} from '../services/userdata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users:any;
  data:any;

  constructor(private userdataService:UserdataService){ }

  ngOnInit(): void {
    
  }

  onSubmit(){
    
  }

}
