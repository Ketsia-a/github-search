import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GitserverService } from '../gitserver.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 user:User;
  constructor(private userService:GitserverService ) { }
  usersearch(textsearch){
    this.userService.userRequest(textsearch).then(
      ()=>{
        this.user=this.userService.user;
      },
      
    )
  }
  ngOnInit(): void {
    // this.userService.userRequest("Ketsia-a")
    // this.user = this.userService.user
    // this.userService.userRequest("Ketsia-a");
    this.usersearch("Ketsia-a")
  
  }
}
