import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stylingObject = {
    div: {
        width: "100%",
        height: "100vh",
        position: "relative",
    },
    searchBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "2rem",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
        borderRadius: "10px",
    }, 
    input: {
        width: "100%",
        padding: "0.6rem 1rem",
        fontSize: "1.2rem",
        border: "none",
        outline: "none",
        background: "#eaeef3",
    },
    button: {
        padding: "0.6rem 1rem",
        fontSize: "1.2rem",
        border: "none",
        borderRadius: "5px",
        outline: "none",
        background: "#6673fc",
        color: "#eaeef3",
        cursor: "pointer",
    },
    alert: {
        color: "red",
    }
};

const Search = () => {
    const [handleValue, setHandleValue] = useState("");
    const [empty, setEmpty] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setHandleValue(e.target.value);
    };

    const handleSearch = () => {
        if (handleValue.trim() === "") {
            setEmpty(true);
            return;
        }
        
        // remove leading and trailing spaces
        navigate(`/${handleValue.replace(/^\s+|\s+$/g, '')}`);
    }

    return (
        <div style={stylingObject.div}>
            <div style={stylingObject.searchBox}>
                <h1>Get Your Dashbard</h1>
                <input 
                    style={stylingObject.input}
                    type="text" 
                    placeholder="Codeforces Handle"
                    spellCheck="false"
                    value={handleValue}
                    onChange={handleChange} 
                />
                <button onClick={handleSearch} style={stylingObject.button}>Get Dashboard</button>
                {empty && <p style={stylingObject.alert}>Please enter a handle</p>}
            </div>
        </div>
    );
}
 
export default Search;