import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DangerousIcon from '@mui/icons-material/Dangerous';
import GroupsIcon from '@mui/icons-material/Groups';
import ProblemsPie from './ProblemsPie';

const stylingObject = {
    userStatus: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    grid: {
        margin: "1rem 0",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        width: "100%",
        gap: "1rem",
    },
    card: {
        padding: "0.8rem",
        borderRadius: "0.4rem",
        color: "#ffffff",
        display: "flex",
        gap: "0.8rem",
    },
    card1: {
        background: "linear-gradient(45deg, #2ed8b6, #59e0c5)",
    },
    card2: {
        background: "linear-gradient(45deg, #ff5370, #ff869a)",
    },
    card3: {
        background: "linear-gradient(45deg, #4099ff, #73b4ff)",
    },
    card4: {
        background: "linear-gradient(45deg, #ffb64d, #ffcb80)",
    },
    emojiBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        height: "fit-content",
        padding: "0.8rem",
        background: "#00000033",
        borderRadius: "50%",
    },
    emoji: {
        width: "40px",
        height: "40px",
    },
    cardDataBox: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    cardTitle: {
        fontSize: "1.6rem",
        fontWeight: "bold",
    },
}

const UserStatus = ({ userStatus }) => {
    const length = userStatus.length;
    let solvedProblems = 0;
    let wrongProblems = 0;
    let contestant = 0;
    let practice = 0;
    let solvedInContest = 0;

    for(let i = 0; i < length; i++) {
        if(userStatus[i].verdict === "OK") {
            solvedProblems += 1;
        } else {
            wrongProblems += 1;
        }

        if(userStatus[i].author.participantType === "CONTESTANT") {
            contestant += 1;
        } else {
            practice += 1;
        }

        if(userStatus[i].verdict === "OK" && userStatus[i].author.participantType === "CONTESTANT") {
            solvedInContest += 1;
        }
    }


    const problems = [
        { name: "Solved", value: solvedProblems },
        { name: "Wrong", value: wrongProblems },
    ];

    const participantType = [
        { name: "Contestant", value: contestant },
        { name: "Practice", value: practice },
    ];

    const solvedAsContestant = [
        { name: "Solved", value: solvedInContest },
        { name: "Wrong", value: contestant - solvedInContest },
    ];

    return (
        <div style={stylingObject.userStatus}>
            <div style={stylingObject.grid}>
                <div style={{...stylingObject.card, ...stylingObject.card1}}>
                    <div style={stylingObject.emojiBox}>
                        <EmojiObjectsIcon style={stylingObject.emoji}/>
                    </div>
                    <div style={stylingObject.cardDataBox}>
                        <h1 style={stylingObject.cardTitle}>Solved Problems</h1>
                        <h1>{ solvedProblems }</h1>
                    </div>
                </div>
                <div style={{...stylingObject.card, ...stylingObject.card2}}>
                    <div style={stylingObject.emojiBox}>
                        <DangerousIcon style={stylingObject.emoji}/>
                    </div>
                    <div style={stylingObject.cardDataBox}>
                        <h1 style={stylingObject.cardTitle}>Wrong Answers</h1>
                        <h1>{ wrongProblems }</h1>
                    </div>
                </div>
                <div style={{...stylingObject.card, ...stylingObject.card3}}>
                    <div style={stylingObject.emojiBox}>
                        <GroupsIcon style={stylingObject.emoji}/>
                    </div>
                    <div style={stylingObject.cardDataBox}>
                        <h1 style={stylingObject.cardTitle}>Contestant</h1>
                        <h1>{ contestant }</h1>
                    </div>
                </div>
                <div style={{...stylingObject.card, ...stylingObject.card4}}>
                    <div style={stylingObject.emojiBox}>
                        <GroupsIcon style={stylingObject.emoji}/>
                    </div>
                    <div style={stylingObject.cardDataBox}>
                        <h1 style={stylingObject.cardTitle}>Practice</h1>
                        <h1>{ practice }</h1>
                    </div>
                </div>
            </div>
            <ProblemsPie problems={problems} participantType={participantType} solvedAsContestant={solvedAsContestant}/>
        </div>
    );
}
 
export default UserStatus;