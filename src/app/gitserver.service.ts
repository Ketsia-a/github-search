import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Repository} from './repository';
import {User} from './user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitserverService {

  user:User;
  repository:Repository[]
   constructor(private http:HttpClient) { 
     this.user=new User("","","",0,0,0,new Date)
     this.repository=[]
   }
   userRequest(textsearch:string){
     interface ApiResponse{
       avatar_url:string;
       name:string;
       login:string;
       public_repos:number
       followers:number;
       following:number;
       created_at:Date
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>('https://api.github.com/users/'+textsearch+'?access_token='+environment.apiKey).toPromise().then(response=>{
         this.user.avatar_url = response.avatar_url
         this.user.name =response.name
         this.user.login=response.login
         this.user. public_repos = response. public_repos
         this.user.followers=response.followers
         this.user.following=response.following
         this.user.created_at=response.created_at
         resolve()
       },
       error=>{
       this.user.avatar_url ="there was an error"
        this.user.followers=34
       reject(error);
       })
     })
     return promise
   }
  
}