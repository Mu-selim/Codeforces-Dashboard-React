import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const stylingObject = {
    dashboardHead: {
        width: "100%",
        marginTop: "56px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: "1.6rem",
        fontWeight: "bold",
        color: "#666",
    },
    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#dee2e6",
        padding: "0.5rem 1rem",
        borderRadius: "2rem",
        gap: "0.5rem",
    },
    HomeIcon: {
        color: "#adb5bd",
    },
    home: {
        textDecoration: "none",
        color: "#6c757d",
    },
    text: {
        color: "#6c757d",
    },
    text2: {
        color: "#212529",
    }
};

const DashboardHead = () => {
    return (
        <div style={stylingObject.dashboardHead}>
            <h1 style={stylingObject.title}>Dashboard</h1>
            <div style={stylingObject.box}>
                <HomeIcon style={stylingObject.HomeIcon}/>
                <Link to="/" style={stylingObject.home}>Home</Link>
                <p style={stylingObject.text}>{">"}</p>
                <p style={stylingObject.text2}>Dashbaord</p>
            </div>
        </div>
    );
}
 
export default DashboardHead;