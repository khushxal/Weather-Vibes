import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";

function About() {
  return (
    <div id="container-about" className="container mt-5 rounded-5">
      <div className="row p-lg-5">
        <div className="col-12 col-lg-6 text-lg-center">
          <img src="img-about.png" alt="This is about" width={400} />
        </div>
        <div className="col-12 col-lg-6">
          <p className="fs-1 p-2 p-lg-0">About Us</p>
          <hr />
          <div className="row pb-5">
            <div className="col-12 text-center text-lg-start">
              <div className="fs-5 text-dark ">
                Glad you visited here. Hope you had created an account and used
                our privilages. Didn't created an account{" "}
                <Link to="/register">click here</Link>.
              </div>
              <div className="fs-5 text-dark">
                We are creator of WeatherVibes - a music streaming platform. Why
                to choose us ? Why you are here ? How different we are ?
                <hr />
                We created WeatherVibes for seamless music streaming inspired by{" "}
                <strong className="text-dark">
                  Weather in your region
                </strong>{" "}
                and on user <strong className="text-dark">Mood</strong>. We
                assist and analyze user mood by our WeatherBot. It is an AI
                chatbot which do the rest of thing. We also look for user
                weather and predict songs.
                <hr />
                User's Mood ∝ Weather. We look for relevent songs that matches
                the weather.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
