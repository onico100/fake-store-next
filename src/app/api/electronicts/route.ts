import { NextResponse } from "next/server";

let electronics = [
  {
    id: 1,
    name: "Diamond Necklace",
    price: 500,
    imageUrl: "https://example.com/images/diamond-necklace.jpg",
  },
  {
    id: 2,
    name: "Gold Ring",
    price: 300,
    imageUrl: "https://example.com/images/gold-ring.jpg",
  },
  {
    id: 3,
    name: "Silver Bracelet",
    price: 150,
    imageUrl: "https://example.com/images/silver-bracelet.jpg",
  },
];

export async function GET() {
  return NextResponse.json(electronics);
}

export async function POST(request: Request) {
  const newElectronics = await request.json();
  newElectronics.id = electronics.length
    ? electronics[electronics.length - 1].id + 1
    : 1;
  electronics.push(newElectronics);
  return NextResponse.json(newElectronics, { status: 201 });
}

export async function PUT(request: Request) {
  const updatedElectronics = await request.json();
  electronics = electronics.map((item) =>
    item.id === updatedElectronics.id ? updatedElectronics : item
  );
  return NextResponse.json(updatedElectronics);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  electronics = electronics.filter((item) => item.id !== id);
  return NextResponse.json({
    message: "Electronics item deleted successfully",
  });
}
