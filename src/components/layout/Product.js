'use client';
import { useEffect, useState } from "react";
import MenuItem from "./Menu/MenuItem";
import { redirect } from "next/navigation";

export default function Product(){

    const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);

    return(
        <section className="mt-6">
            <div className="text-center">
                <h3 className="text-primary ">
                Product

                </h3>
                <h2 className="text-secondary font-bold text-2xl">
                    Most Popular Items
                </h2>
            </div>
            <div className=" grid grid-cols-3 gap-4 py-6 ">
            {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
            </div>

        </section>

    );
}