const stylingObject = {
    userInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3rem",
    },
    box: {
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4rem",
        padding: "1rem",
        background: "linear-gradient(45deg, #f5f5f5, #ffffff)",
        borderRadius: "1rem",
        boxShadow: "0 0 0.5rem 0.1rem #6673fc",
    },
    textData: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0.5rem",
    },
    text: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#6673fc",
    },
};

function getTimeDifference(timestamp) {
    let now = new Date();
    let then = new Date(timestamp);
    let difference = now - then;
    
    let minutes = Math.floor(difference / 1000 / 60);
    let hours = Math.floor(difference / 1000 / 60 / 60);
    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    let months = Math.floor(difference / 1000 / 60 / 60 / 24 / 30);
    let years = Math.floor(difference / 1000 / 60 / 60 / 24 / 365.25);
    
    if(minutes === 0) {
        return "Just now";
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 30) {
      return `${days} days ago`;
    } else if (months < 12) {
      return `${months} months ago`;
    } else {
      return `${years} years ago`;
    }
  }
    
  

const UserInfo = ({ userInfo }) => {
    return (
        <div style={stylingObject.userInfo}>
            <div style={stylingObject.box}>
                <div style={stylingObject.textData}>
                    <p style={stylingObject.text}>{userInfo.handle}</p>
                    { userInfo.firstName && userInfo.lastName && <p style={stylingObject.text}>{`${userInfo.firstName} ${userInfo.lastName}`}</p> }
                    { userInfo.city && userInfo.country && <p style={stylingObject.text}>{`${userInfo.city}, ${userInfo.country}`}</p> }
                    { userInfo.organization && <p style={stylingObject.text}>{userInfo.organization}</p> }
                    { userInfo.rank && <p style={stylingObject.text}>Rank: {userInfo.rank}</p> }
                    { userInfo.rating && <p style={stylingObject.text}>Rating: {userInfo.rating}</p> }
                    { userInfo.maxRating && <p style={stylingObject.text}>Max Rating: {userInfo.maxRating}</p> }
                    <p style={stylingObject.text}>Contribution: {userInfo.contribution}</p>
                    <p style={stylingObject.text}>Friends: {userInfo.friendOfCount}</p>
                    <p style={stylingObject.text}>
                        Last visit: {getTimeDifference(userInfo.lastOnlineTimeSeconds*1000)}
                    </p>
                    <p style={stylingObject.text}>
                        Registered: {getTimeDifference(userInfo.registrationTimeSeconds*1000)}</p>
                    <p style={stylingObject.text}></p>
                </div>
                <div style={stylingObject}>
                    <img src={userInfo.titlePhoto} alt={userInfo.handle} />
                </div>
            </div>
        </div>
    );
}
 
export default UserInfo;