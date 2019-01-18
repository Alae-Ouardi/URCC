import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposDataService {

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    const url = 'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc';
    return this.http.get(url);
  }
  getMoreRepos(page): Observable<any> {
    const url = 'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=' + page;
    return this.http.get(url);
  }

}
