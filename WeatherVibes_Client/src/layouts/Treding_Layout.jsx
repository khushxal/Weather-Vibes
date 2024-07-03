import React, { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
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
        <div className="col-12 col-lg-3 py-2" key={index}>
          <div className="card">
            <div className="card-img-top">
              <img
                src={trending.images[0].url}
                height={280}
                width={285}
                alt="Album image"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">{trending.name}</h4>
              <p class="card-text">
                <a href="https://api.spotify.com/v1/artists/1wRPtKGflJrBx9BmLsSwlU">
                  {trending.artists[0].name}
                </a>
              </p>
              <a href="#" class="btn">
                <FaPlayCircle></FaPlayCircle>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Treding_Layout;
