import { Component, OnInit, HostListener } from '@angular/core';

import { Repositories } from '../shared/repos';
import { ReposDataService } from '../services/repos-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  repos: Repositories;
  repoErrMsg: string;
  page = 2;

  constructor(private RepoService: ReposDataService) { }

  ngOnInit() {
    this.RepoService.getRepos().subscribe((repo) => {
      this.repos = repo;
    }, repoErrmsg => this.repoErrMsg = repoErrmsg);
  }

  keepScrolling() {
    this.RepoService.getMoreRepos(this.page).subscribe((repo) => {
      this.repos = repo; this.page += 1;
    }, repoErrmsg => this.repoErrMsg = repoErrmsg);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('scrolled to page: ' + this.page);
        this.keepScrolling();
    }
  }

}
