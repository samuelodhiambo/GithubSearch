import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'access_token:' + environment.githubSeachAPIKey
  })
};

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  results: any[] = []
  ghUser?: any;

  constructor(private http: HttpClient) { }

  search(term: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get(`https://api.github.com/users/${term}/repos`, httpOptions).subscribe({
        next: (res: any) => {
          console.log(res)
          this.results = res;
          resolve();
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log('complete')
        }
      });
      
    });
    return promise
  }

  searchUser(term: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get(`https://api.github.com/users/${term}`, httpOptions).subscribe({
        next: (res: any) => {
          console.log(res)
          this.ghUser = res;
          resolve();
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log('complete')
        }
      });
      
    });
    return promise
  }
}
