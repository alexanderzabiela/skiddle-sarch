import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ArtistDetails.scss";

const ArtistDetails = () => {
  const [artistDetails, setArtistDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      let ArtistDetailsData;
      try {
        const response = await fetch(
          `https://www.skiddle.com/api/v1/artist/${id}?api_key=008f1e6099ecc48e990e3776784d447b`
        ); // incase of network errors
        ArtistDetailsData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        ArtistDetailsData = [];
      }
      setArtistDetails(ArtistDetailsData);
    })();
  }, [id]);
  return (
    <div className="artistDetails">
      <h2>{artistDetails.name}</h2>
      <img
        className="eventImage"
        src={artistDetails.imageurl}
        alt="eventImage"
      />
      <p>{artistDetails.description}</p>
    </div>
  );
};

export default ArtistDetails;
