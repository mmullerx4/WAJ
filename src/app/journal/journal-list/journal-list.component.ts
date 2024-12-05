import { Component, OnInit } from '@angular/core';
import { Journal } from '../../journal.model';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {
  journals: Journal[] = [];

  constructor() {}

  ngOnInit(): void {

    this.journals = [
      { id: 1, title: 'My first journal', date: '2024-01-01', content: 'This is the first entry.' },
      { id: 2, title: 'A day at the beach', date: '2024-01-02', content: 'Went to the beach today!' },
      
    ];
  }
}


