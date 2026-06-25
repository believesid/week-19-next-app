
import axios from "axios";
// import Signin from "./Signin/page";

import Link from "next/link";

export default async function Home() {
       const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
       const data = response.data;
  return (
   <div className="h-screen w-screen flex justify-center items-center">
    <div>
      Todo application

      <br />
      <Link className="text-md border m-2" href= "/signin">Sign in to Todo app</Link>

      <Link className="text-md border m-2" href="/signup">Sign up to Todo app</Link>
    </div>
    
    </div>
  );
}
