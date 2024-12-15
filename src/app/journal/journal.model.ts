export interface Journal {
  id?: string;  // use string if MongoDB ObjectId
  title: string;
  content: string;
  date: Date;
}

