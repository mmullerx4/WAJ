// src/app/journal/quote.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quotes: string[] = [
    "The best way to predict your future is to create it. – Abraham Lincoln",
    "Gratitude is not only the greatest of virtues but the parent of all the others. – Marcus Tullius Cicero",
    "In every walk with nature, one receives far more than he seeks. – John Muir",
    "To appreciate the beauty of a snowflake, it is necessary to stand out in the cold. – Aristotle",
    "Do not follow where the path may lead. Go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "The world is full of beautiful things, just like the people who live in it. – Unknown",
    "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love... – Marcus Aurelius",
    "What you think, you become. What you feel, you attract. What you imagine, you create. – Buddha",
    "Appreciation is a wonderful thing: It makes what is excellent in others belong to us as well. – Voltaire",
    "You cannot protect yourself from sadness without protecting yourself from happiness. – Jonathan Safran Foer",
    "The earth has music for those who listen. – George Santayana",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go. – Dr. Seuss",
    "Look deep into nature, and then you will understand everything better. – Albert Einstein",
    "The world is a book, and those who do not travel read only one page. – Saint Augustine",
    "The goal is not to be perfect by the end, but to be better today. – Simon Sinek",
    "The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science. – Albert Einstein",
    "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow. – Melody Beattie",
    "We do not remember days, we remember moments. – Cesare Pavese"
  ];

  constructor() { }

  getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
