import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutGrid, User } from "lucide-react";
import Sidebar from './_components/SideBar';
import Header from './_components/Header';
import ImageContainer from './_components/ImageContainer';


export default function DashboardLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <Sidebar/>
        
        {/* Main Content */}
        <div className="flex h-screen w-full flex-1 flex-col">
            {/* Header */}
            <Header/>
            
            {/* Content Grid */}
            <main className="flex-1 p-6 ">
                <ImageContainer/>
            </main>
        </div>
        </div>
    );
}