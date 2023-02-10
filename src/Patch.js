import VerifiedIcon from '@mui/icons-material/Verified';

const stylingObject = {
    div: {
        width: "1.5rem",
        height: "1.5rem",
    },
    verifiedIcon: {
        width: "100%",
        height: "100%",
    }
}

const rankColor = {
    "newbie": "#cccccc",
    "pupil": "#77ff77",
    "specialist": "#77ddbb",
    "expert": "#0000ff",
    "candidate master": "#a0a",
    "master": "#ff8c00",
    "international master": "#ff8c00",
    "grandmaster": "#ff0000",
    "international grandmaster": "#ff3333",
    "legendary grandmaster": "#aa0000",
}

const Patch = ({ rank }) => {
    const color = rank === undefined? {color: rankColor.newbie} : {color: rankColor[rank]};

    return (
        <div style={stylingObject.div}>
            {<VerifiedIcon style={
                {...stylingObject.verifiedIcon, ...color}
            }/>}
        </div>
    );
}
 
export default Patch;