import {Link} from "react-router-dom";
export function BottomWarning({label,buttontext,to}){
    return <div>
        <div className="py-2 text-sm flext justify-center">
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer " to={to}>
            {buttontext}
        </Link>
    </div>
}