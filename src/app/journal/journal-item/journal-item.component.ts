import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-journal-item',
  templateUrl: './journal-item.component.html',
  styleUrls: ['./journal-item.component.css']
})
export class JournalItemComponent {
  @Input() journal: { id: string; title: string; date: string }; // Journal entry input
  @Output() selectEntry = new EventEmitter<string>(); // Emit selected entry ID

  onSelectEntry() {
    this.selectEntry.emit(this.journal.id);
  }
}

