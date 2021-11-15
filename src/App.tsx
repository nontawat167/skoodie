import { useEffect, useState } from "react";
import useFetch from "use-http";
import InfoCard from "./components/InfoCard/InfoCard";
import { AdmissionInfo } from "./types/AdmissionInfo";
import './asset/style/app.scss'

function App() {
  const [data, setData] = useState<AdmissionInfo[] | null>(null);
  const tcasAPI = useFetch(
    "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
  );

  const init = async () => {
    try {
      const res: AdmissionInfo[] = await tcasAPI.get();
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      {data && data.map((info) => <InfoCard key={info.id} info={info} />)}
    </div>
  );
}

export default App;
