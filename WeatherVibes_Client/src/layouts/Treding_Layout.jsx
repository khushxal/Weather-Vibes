import React, { useEffect, useState } from "react";
import axios from "axios";
function Treding_Layout() {
  const [trending, setTrending] = useState([]);
  async function getAllTrending() {
    try {
      const response = await axios.get(
        "https://v1.nocodeapi.com/khushal1010/spotify/xGXFDJvkPngbgPNP/browse/new"
      );
      console.log(response.data.albums.items);
      setTrending(response.data.albums.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllTrending();
  }, []);

  return (
    <div className="row">
      {trending.map((trending, index) => (
        <div className="col-12 col-lg-3 p-1" key={index}>
          <div className="card">Radhe Radhe</div>
        </div>
      ))}
    </div>
  );
}

export default Treding_Layout;
