import Link from "next/link";

import React from "react";

export default function Sidebar() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[rgba(242,242,242)] shadow-xl p-4 flex flex-col">
        <nav className="flex-1">
          <ul>
            <li className="mb-2">
              <Link href="#"className="flex items-center gap-2 p-2 rounded hover:bg-[rgba(220,220,220)]">
                Overview
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#"className="flex items-center gap-2 p-2 rounded hover:bg-[rgba(220,220,220)]">
                Create New
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#"className="flex items-center gap-2 p-2 rounded hover:bg-[rgba(220,220,220)]">
                Account
              </Link>
            </li>
            {/* Add more navigation items here */}
          </ul>
        </nav>
      </aside>
    </div>
  );
}