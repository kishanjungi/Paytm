import App from "../src/App";  
import {Appbar} from "../components/Appbar";
import {Balance} from "../components/Balance";
import axios from "axios";
import {Users} from "../components/Users";


export const Dashboard=()=> {
    return <div>
        <Appbar/>
        <div className="m-8">
            <Balance value={"8000"}></Balance>
            <Users/>
        </div>
    </div>
}