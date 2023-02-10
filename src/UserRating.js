import { 
    ResponsiveContainer, 
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid
} from "recharts";

const stylingObject = {
    userRating: {
        width: "100%",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        "margin": "4rem 0",
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 0 10px #6673fc",
    },
    tooltip: {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        color: "#000",
    }
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div style={stylingObject.tooltip}>
                <h4 className="label">{ payload[0].value }</h4>
                <h4 className="label">{ label }</h4>
            </div>
        );
    }
    return null;
};

const UserRating = ({ userRating }) => {
    const result = userRating.result;

    const length = result.length;
    const data = [];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (let i = 0; i < length; i++) {
        let dateFormat = new Date(result[i].ratingUpdateTimeSeconds * 1000);
        dateFormat = months[dateFormat.getMonth()] + ", " + dateFormat.getFullYear();
        data.push({
            date: dateFormat,
            rating: result[i].newRating
        });
    }

    return (
        <div style={stylingObject.userRating}>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart 
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                >
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6673fc" stopOpacity={0.6}/>
                            <stop offset="40%" stopColor="#6673fc" stopOpacity={0.4}/>
                            <stop offset="75%" stopColor="#256D85" stopOpacity={0.2}/>
                        </linearGradient>
                    </defs>

                    <Area type="monotone" dataKey="rating" stroke="#6673fc" fill="url(#color)" />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tickCount={Math.min(8, length)}/>
                    <YAxis dataKey="rating" axisLine={false} tickLine={false} />
                    <Tooltip  content={<CustomTooltip />}/>
                    <CartesianGrid opacity={0.1} vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
 
export default UserRating;