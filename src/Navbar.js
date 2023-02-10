import { Link } from "react-router-dom";
import Patch from "./Patch";

const stylingObject = {
    navbar: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.4rem 1rem",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 18px 0px rgba(0,0,0,0.4)",
        zIndex: "999",
    },
    leftSide: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    avatar: {
        width: "2.6rem",
        height: "2.6rem",
        borderRadius: "50%",
        border: "2px solid #6673fc",
    },
    handle: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#6673fc",
    },
    rightSide: {
        textDecoration: "none",
        padding: "0.5rem 1rem",
        color: "#eaeef3",
        backgroundColor: "#6673fc",
        borderRadius: "0.4rem",
        fontSize: "1.2rem",
        fontWeight: "bold",
    }
}

const Navbar = ({ userInfo }) => {
    return (
        <nav style={stylingObject.navbar}>
            <div style={stylingObject.leftSide}>
                <img style={stylingObject.avatar} src={userInfo.titlePhoto} alt="user" />
                <h1 style={stylingObject.handle}>{userInfo.handle}</h1>
                <Patch rank={userInfo.rank}/>
            </div>
            <Link style={stylingObject.rightSide} to="/">new profile</Link>
        </nav>
    );
}
 
export default Navbar;