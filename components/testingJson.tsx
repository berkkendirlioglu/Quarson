import { getUserInfo } from "@/services/collection/collections";
import React from "react";

export default async function TestingJson() {
  const userData = await getUserInfo();

  console.log("test data: ", userData);
  return <div>test2</div>;
}
