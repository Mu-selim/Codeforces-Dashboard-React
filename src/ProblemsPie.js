import { Box } from '@mui/system';
import { 
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from 'recharts';

const stylingObject = {
    chartsBox: {
        width: "100%",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
    },
    boxUI: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        width: "fit-content",
        height: "fit-content",
    }
}

const COLORSProblems = ['#2ed8b6', '#ff5370'];
const COLORSType = ['#4099ff', '#ffb64d'];
const COLORSContest = ['#2ed8b6', '#4099ff'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ 
    cx, 
    cy, 
    midAngle, 
    innerRadius, 
    outerRadius, 
    percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
};

const ProblemsPie = ({ problems, participantType, solvedAsContestant }) => {
    
    return (
        <div style={stylingObject.chartsBox}>
            <Box sx={stylingObject.boxUI}>
                <PieChart width={200} height={200}>
                    <Pie
                    data={problems}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    dataKey="value"
                    >
                        {problems.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORSProblems[index % COLORSProblems.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <PieChart width={200} height={200}>
                    <Pie
                    data={participantType}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    dataKey="value"
                    >
                        {problems.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORSType[index % COLORSType.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <PieChart width={200} height={200}>
                    <Pie
                    data={solvedAsContestant}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    dataKey="value"
                    >
                        {problems.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORSContest[index % COLORSContest.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </Box>
        </div>
    );
}
 
export default ProblemsPie;