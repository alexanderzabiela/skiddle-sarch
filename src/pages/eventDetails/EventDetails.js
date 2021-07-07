import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./EventDetails.scss";

const EventDetails = () => {
  const [eventDetails, setEventsDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      let eventDetailsData;
      try {
        const response = await fetch(
          `https://www.skiddle.com/api/v1/events/${id}/?api_key=008f1e6099ecc48e990e3776784d447b`
        ); // incase of network errors
        eventDetailsData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        eventDetailsData = [];
      }
      setEventsDetails(eventDetailsData);
    })();
  }, [id]);
  return (
    <div className="eventDetails">
      <h2>{eventDetails.eventname}</h2>
      <img
        className="eventImage"
        src={eventDetails.largeimageurl}
        alt="eventImage"
      />
      <h4>Minimum age: {eventDetails.MinAge}</h4>
      <p>{eventDetails.description}</p>

      <div className="artistImages">
        {eventDetails.artists
          ? eventDetails.artists.map(artist => (
              <Link to={`/artist/${artist.artistid}`}>
                <div className="artists">
                  <img
                    className="artistImage"
                    src={artist.image}
                    alt={artist.name}
                  />
                  <h4 className="artistName">{artist.name}</h4>
                </div>
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
};

export default EventDetails;
