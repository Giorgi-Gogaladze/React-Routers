import { useParams } from "react-router-dom";

const data = [
    { id: 1, fact: `Tyler is a charismatic and persuasive leader.` },
    { id: 2, fact: `Tyler is anarchistic and rebellious.` },
    { id: 3, fact: `Tyler is an embodiment of primal masculinity and freedom from societal constraints.` },
    { id: 4, fact: `Tyler is a clever and resourceful strategist.` },
    { id: 5, fact: `Tyler is antagonistic towards consumerism and modern society.` }
];

const FaceId = () => {
    const param = useParams();
    const user = data.find(user => user.id === parseInt(param.id)); // Convert to number

    if (!user) return <h2 style={{ color: 'red', fontWeight: "bold" }}>We couldn't find fact with that ID</h2>;

    return (
        <div>
            <h1>{user.fact}</h1>
        </div>
    );
};

export default FaceId;
