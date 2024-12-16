export interface Journal {
  id: string;  // use string if MongoDB ObjectId
  _id?: string; // The "?" checks if the object is null or undefined
  title: string;
  content: string;
  date: Date;
}

