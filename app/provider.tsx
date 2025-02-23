import React from "react";

export default function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
