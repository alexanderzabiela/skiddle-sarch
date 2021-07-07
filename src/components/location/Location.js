import "./Location.scss";

const Location = ({ location }) => {
  return (
    <div className="location">
      <p>
        {location.name}, {location.town}
      </p>
    </div>
  );
};

export default Location;
