import Image from "next/image";
import Homeclient from "./components/Homeclient";
import Homeserver from "./components/Homeserver";
import Homerouter from "./components/Homerouter";

export default function Home() {
  return (
    <div className="w-full">
      <Homeclient />
      <Homeserver />
      <Homerouter />
    </div>
  );
}
