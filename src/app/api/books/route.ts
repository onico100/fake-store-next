import { NextResponse } from "next/server";

let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 100,
    imageUrl: "https://m.media-amazon.com/images/I/81QuEGw8VPL._SY522_.jpg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 120,
    imageUrl:
      "https://m.media-amazon.com/images/I/51IXWZzlgSL._SY445_SX342_.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 150,
    imageUrl: "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg",
  },
];

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request: Request) {
  const newBook = await request.json();
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(newBook);
  return NextResponse.json(newBook, { status: 201 });
}

export async function PUT(request: Request) {
  const updatedBook = await request.json();
  books = books.map((book) =>
    book.id === updatedBook.id ? updatedBook : book
  );
  return NextResponse.json(updatedBook);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  books = books.filter((book) => book.id !== id);
  return NextResponse.json({ message: "Book deleted successfully" });
}
