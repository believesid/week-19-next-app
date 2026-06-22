
import axios from "axios";

export default async function Home() {
       const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
       const data = response.data;
  return (
   <div>
    hi there
    <div>
      {data.name}
    </div>
    <div>
      {data.email}
    </div>
    </div>
  );
}
