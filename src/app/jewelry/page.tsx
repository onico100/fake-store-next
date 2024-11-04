"use client";

import { useEffect, useState } from "react";
import { jewelryAPI } from "../../services/jewelryService";

type JewelryItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export default function JewelryPage() {
  const [jewelry, setJewelry] = useState<JewelryItem[]>([]);

  useEffect(() => {
    const fetchJewelry = async () => {
      const response = await jewelryAPI.getAll();
      setJewelry(response.data);
    };
    fetchJewelry();
  }, []);

  return (
    <div className="container">
      <h1>Jewelry Collection</h1>
      <div>
        {jewelry.map((item) => (
          <div key={item.id} className="card">
            <img
              src={item.imageUrl || "https://via.placeholder.com/150"}
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
