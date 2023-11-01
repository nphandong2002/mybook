import { getAllMenu } from "@/server";
import * as React from "react";

export default function Sidebar() {
  getAllMenu().then((a) => console.log(a));
  return <div className="mr-2">Sidebar</div>;
}
