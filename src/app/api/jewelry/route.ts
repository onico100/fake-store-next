import { NextResponse } from "next/server";

export async function GET() {
  const jewelry = [
    { id: 1, name: "Diamond Necklace", price: 500 },
    { id: 2, name: "Gold Ring", price: 300 },
    { id: 3, name: "Silver Bracelet", price: 150 },
  ];
  return NextResponse.json(jewelry);
}
