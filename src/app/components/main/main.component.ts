import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Github Search'

  constructor(public searchService: SearchServiceService) { 
    this.title = 'Github Search'
  }

  ngOnInit(): void {
    this.searchService.searchUser('samuelodhiambo')
    this.searchService.search('samuelodhiambo')
  }

  doSearch (term: string) {
    this.searchService.search(term)
    this.searchService.searchUser(term)
  }

}
