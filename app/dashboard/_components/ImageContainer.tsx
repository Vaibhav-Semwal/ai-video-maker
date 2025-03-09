import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";

export default function ImageContainer() {
  return (
    <div className="grid grid-cols-3 gap-4">
        {[...Array(10)].map((_, i) => (
            <Card key={i} className="h-40 bg-[url(/test-image-1.png)]">
                {/* <img src="/background.jpg" alt="Card Background" className="inset-0 w-full h-full object-cover opacity-50" /> */}
                <CardContent className="p-4 text-white">
                    Card {i + 1}
                </CardContent>
            </Card>
        ))}
    </div>
  );
}