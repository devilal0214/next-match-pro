import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegBell, FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-3xl">Home</h1>
      <Button 
      as={Link}
      href="/members"
       color="primary" 
       variant="bordered" 
       startContent={<FaRegSmile size={20}/>}>Click</Button>
    </div>
  );
}
