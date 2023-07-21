import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        loggedInUser
        <UserContext.Consumer>
          {({loggedInUser}) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2>This is the About Us Page</h2>
      {/* <User name= {"Kiran Chikhalikar (Function)"} /> */}

      <UserClass name={"Kiran Chikhalikar (class)"} location={"Pune (Class)"} />
    </div>
  );
};

export default About;
