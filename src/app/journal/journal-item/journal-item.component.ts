import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Journal } from '../journal.model';

@Component({
  selector: 'app-journal-item',
  templateUrl: './journal-item.component.html',
  styleUrls: ['./journal-item.component.css'],
})
export class JournalItemComponent {
  @Input() journal!: Journal; // Input to accept a journal object from the parent
  @Output() viewDetail = new EventEmitter<string>(); // Event emitter for detail view navigation

  constructor(private router: Router) {}

  onNavigateToDetail(): void {
    this.viewDetail.emit(this.journal.id); // Emit the journal id for the parent to handle
  }
}
