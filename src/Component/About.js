import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is the About Us Page</h2>
            {/* <User name= {"Kiran Chikhalikar (Function)"} /> */}

            <UserClass name= {"Kiran Chikhalikar (class)"} location={"Pune (Class)"} />
        </div>
    )
}

export default About;