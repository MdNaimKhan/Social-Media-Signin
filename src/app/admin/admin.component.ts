import { Component, OnInit  } from '@angular/core';
import { Router} from '@angular/router';
import { NewAuth } from '../auth.service';
import { SessionStorageService } from 'ngx-webstorage'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

   user: any;
  
  constructor(private auth: NewAuth, private router: Router){

           // Getting data from session and parsing it into javascript object    
           this.user=JSON.parse(sessionStorage.getItem('user'));
      }
   
  // Log out method

  logout (){

    this.router.navigate([''])
    this.auth.setLoggedIn(false);
    
  }



  ngOnInit() {
  }

}
