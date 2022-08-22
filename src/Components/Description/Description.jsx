import "./Description.scss";

const Description = (props) => {

  return (
    <div className="description__container">
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Description;
