import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardHead from "./DashboardHead";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import UserInfo from "./UserInfo";
import UserRating from "./UserRating";
import UserStatus from "./UserStatus";

const stylingObject = {
    dashbaord: {
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    loading: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#6673fc",
    },
    error: {
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#6673fc",
        textAlign: "center",
    }
}

const Dashbaord = () => {
    const { handle } = useParams();
    const [title, setTitle] = useState(handle);
    const { data: userStatus, isPending: statusPending} = useFetch(`https://codeforces.com/api/user.status?handle=${handle}`);
    const { data: userInfo} = useFetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    const { data: userRating} = useFetch(`https://codeforces.com/api/user.rating?handle=${handle}`);

    console.log(userRating);
    useEffect(() => {
        setTitle(handle);
        document.title = `${title} | Codeforces Dashboard`;
    }, [handle, title]);
    

    return (
        <div style={stylingObject.dashbaord}>
            { statusPending && <div style={stylingObject.loading}>Loading...</div> }
            { userInfo && userInfo.status === "FAILED" && <div style={stylingObject.error}>{`User ${handle} not found`}</div> }
            { userInfo && userInfo.status === "OK" && <Navbar userInfo={userInfo.result[0]}/> }
            { userInfo && userInfo.status === "OK" && <DashboardHead /> }
            { userStatus && userStatus.status === "OK" && <UserStatus userStatus={userStatus.result} /> }
            { userInfo && userInfo.status === "OK" && <UserInfo userInfo={userInfo.result[0]} /> }
            { userRating && userRating.status === "OK" && userRating.result.length > 0 && <UserRating userRating={userRating} /> }
        </div>
    );
}
 
export default Dashbaord;