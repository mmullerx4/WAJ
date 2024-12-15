import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../quote.service';
import { JournalService } from '../journal.service';
import { Journal } from '../journal.model';
import { FormsModule } from '@angular/forms'; // Required for template-driven forms

@Component({
  selector: 'app-journal-edit',
  templateUrl: './journal-edit.component.html',
  styleUrls: ['./journal-edit.component.css'],
})
export class JournalEditComponent implements OnInit {
  journal: Journal | undefined; // The journal to edit or create
  randomQuote: { text: string, author: string } | undefined; // Holds the random quote
  isEditMode: boolean = false; // Determines if editing or creating a new journal

  constructor(
    private route: ActivatedRoute, // To get the route parameters
    private journalService: JournalService, // Service for journal operations
    public router: Router, // Router for navigation
    private quoteService: QuoteService // Service for fetching quotes
  ) {
    console.log('JournalEditComponent constructor called');
  }

  ngOnInit(): void {
    // Fetch a random quote
    this.quoteService.getRandomQuote().subscribe((quote: { text: string; author: string }) => {
      this.randomQuote = quote;
    });

    // Get the ID from the route parameters to check if we are in edit mode
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      // Fetch the journal entry by ID
      this.journalService.getJournal(id).subscribe(
        (journal: Journal) => {
          this.journal = journal;
        },
        (error) => {
          console.error('Error fetching journal:', error);
          alert('Failed to fetch journal. Please try again.');
        }
      );
    } else {
      this.isEditMode = false;
      // Initialize a blank journal object for creation
      this.journal = { title: '', content: '', date: new Date() } as Journal;
    }
  }

  // Save the journal (either create or update)
  onSave(): void {
    if (this.journal) {
      if (this.isEditMode) {
        // Update an existing journal
        this.journalService.updateJournal(this.journal.id, this.journal).subscribe(
          () => {
            alert('Journal updated successfully!');
            this.router.navigate(['/journals', this.journal?.id]); // Redirect to the journal detail page
          },
          (error) => {
            console.error('Error updating journal:', error);
            alert('Failed to update journal. Please try again.');
          }
        );
      } else {
        // Create a new journal
        const newJournal: Journal = {
          ...this.journal,
          id: Date.now().toString(), // Generate a unique ID
          date: new Date(), // Set the current date
        };
        this.journalService.addJournal(newJournal).subscribe(
          () => {
            alert('New journal created successfully!');
            this.router.navigate(['/journals']); // Redirect to the journal list page
          },
          (error) => {
            console.error('Error creating journal:', error);
            alert('Failed to create journal. Please try again.');
          }
        );
      }
    }
  }
}
