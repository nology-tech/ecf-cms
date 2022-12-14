import "./HomePage.scss";
import Button from "../../components/Button/Button";
import logo from "../../assets/ECFP-company-logo.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__container">
        <div>
          <div className="homePage__logo">
            <div className="homePage__tag">
              <img src={logo} alt="ECF-CMS logo" className="homePage__image" />
              <h2 className="homePage__tagText">
                <span className="homePage__span">THE</span>
                <br />
                FUTURE HUB
              </h2>
            </div>
          </div>
        </div>
        <h2 className="homePage__heading">
          Welcome to the<br></br> ECF - CMS
        </h2>
        <p className="homePage__tagline">
          The Early Careers Foundation Content Management System
        </p>
        <div className="homePage__buttons">
          <Link to="/register">
            <Button
              style={"button login-black rounded-square-border modal"}
              textStyle={"text medium-text black"}
              buttonText={"Create An Account"}
            />
          </Link>
        </div>
        <Link to="/sign-in">
          <Button
            style={"button light-grey rounded-square-border modal"}
            textStyle={"text medium-text light-grey"}
            buttonText={"Sign In"}
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
