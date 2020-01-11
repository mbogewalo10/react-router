/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from "react-router-dom";
import InfoData from "./cards.json";
import "./index.css";

const InfoList = ({ match }) => {
  return (
    <div className="cards">
      {InfoData.map(infoDetail => (
          <div key={infoDetail.id} className="dataCard">
            <img src={infoDetail.photo} alt={infoDetail.title}/>
            <h2>{infoDetail.title}</h2>
            <p>{infoDetail.text}</p>
            <div className="button">
              <Link to={`${match.url}${infoDetail.id}`}>Read more</Link>
            </div>
          </div>
      ))}
    </div>
  );
};

export default InfoList;
