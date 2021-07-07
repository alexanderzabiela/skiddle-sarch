import { useState, useEffect } from "react";
import "./Home.scss";
import EventCard from "../../components/eventCard/EventCard";

function Home() {
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    (async () => {
      let eventData;
      try {
        const response = await fetch(
          `https://www.skiddle.com/api/v1/events/search/?api_key=008f1e6099ecc48e990e3776784d447b`
        ); // incase of network errors
        eventData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        eventData = [];
      }

      setAllEvents(eventData);
      setEvents(eventData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredEvents = allEvents.filter(event =>
      `${event.eventname}`.toLowerCase().includes(value)
    );

    setEvents(filteredEvents);

    (async () => {
      let eventData;
      const value = event.target.value.toLowerCase();
      try {
        const response = await fetch(
          `https://www.skiddle.com/api/v1/events/search/?api_key=008f1e6099ecc48e990e3776784d447b&keyword=${value}`
        ); // incase of network errors
        eventData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        eventData = [];
      }

      setAllEvents(eventData);
      setEvents(eventData);
    })();
  };

  return (
    <div className="Home">
      <input
        className="search-box"
        placeholder="Search..."
        onInput={filterCards}
      />
      <div className="cards-container">
        {events.map((event, index) => (
          <EventCard eventData={event} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
