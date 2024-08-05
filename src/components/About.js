import UserClass from "./UserClass";
import User from "./User";
// const About = () => {
//     return <>
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React web series</h2>
//             <User name={"Vaibhav"}></User>
//             <UserClass name={"Ramses the great"} location={"Egypt"}/>
//         </div>
//     </>
// }
import {Component} from "react";
class About extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <>
            <div>
                <h1>About</h1>
                <h2>This is Namaste React web series</h2>
                <UserClass name={"Ramses the great"} location={"Egypt"} />
            </div>
        </>
    }
    componentDidMount() {
    }
}


export default About;