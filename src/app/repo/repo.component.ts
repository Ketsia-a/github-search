import { Component, OnInit } from '@angular/core';
import { GitserverService } from '../gitserver.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo: Repository[]
  constructor( private repositoryService:GitserverService) { }
  reposearch(textsearch){
    this. repositoryService.RepoRequest(textsearch).then(
      ()=>{
        this.repo=this.repositoryService.repository;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
    this.repositoryService.RepoRequest("")
    this.repo = this.repositoryService.repository
  }
}
