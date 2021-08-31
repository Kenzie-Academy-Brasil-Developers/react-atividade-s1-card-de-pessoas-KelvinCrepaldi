import "./style.css";

const Developer = ({ name, age, country }) => {
  return (
    <div className="card">
      <label for="name">{name}</label>
      <label for="name">{age}</label>
      <label for="name">{country}</label>
    </div>
  );
};

export default Developer;
