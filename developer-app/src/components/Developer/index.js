import "./style.css";

const Developer = ({ name, age, country }) => {
  return (
    <div className="card">
      <label for="name">Dev: {name}</label>
      <label for="name">Idade: {age}</label>
      <label for="name">país: {country}</label>
    </div>
  );
};

export default Developer;
