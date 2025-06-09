import App from "../src/App";  
import {Appbar} from "../components/Appbar";
export function Dashboard() {
    return <div>
        <Appbar/>
        <div className="m-8">
            <Balance value={"8000"}></Balance>
        </div>
    </div>
}