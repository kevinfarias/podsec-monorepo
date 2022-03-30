import { BiUserCircle } from "react-icons/bi";

export default function UserDetails() {
    return (
        <div>
            <hr className="vertical" style={{ top: '45px', margin: '0px', position: 'absolute' }} />
            <div className="row userDetails">
                <div className="col-9">
                    <a href="javascript: void(0)">LOGIN</a>
                    <br/>
                    <a href="javascript: void(0)">CADASTRE-SE</a>
                </div>
                <div className="loginUserIcon col-3">
                    <BiUserCircle></BiUserCircle>
                </div>
            </div>
        </div>
    );
}