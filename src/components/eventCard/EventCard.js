import "./EventCard.scss";
import Location from "../location/Location";
import Date from "../date/Date";
import Button from "../button/Button";

const EventCard = ({ eventData }) => {
  let linkText = "Buy Tickets";
  let buttonClass = "active";

  if (eventData.cancelled === "1") {
    console.log(eventData.cancellationType);
    linkText = eventData.cancellationType;
    buttonClass = "cancelled";
  }

  return (
    <div className="card">
      <div
        style={{ backgroundImage: `url(${eventData.xlargeimageurlWebP})` }}
        className="card_image"
      ></div>
      <div className="card_container">
        <div className="card_body">
          <h1 className="card_title">{eventData.eventname}</h1>
          <Location location={eventData.venue} />
          <Date date={eventData.date} />
        </div>
        <div>
          <Button
            link={`/event/${eventData.id}`}
            text={linkText}
            buttonClass={buttonClass}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
