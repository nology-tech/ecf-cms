import "./SelectComponent.scss";
import topicArrow from "../../assets/upside-down-arrow-grey.svg";

const SelectComponent = ({ onChange }) => {
  return (
    <div>
      <label className="select__label">Lesson Type</label>
      <div className="select">
        <select
          className="select__dropdown"
          src={topicArrow}
          onChange={onChange}
        >
          <option className="select__dropdownoption">Lesson</option>
          <option className="select__dropdownoption">Assessment Quiz</option>
        </select>
      </div>
    </div>
  );
};
export default SelectComponent;
