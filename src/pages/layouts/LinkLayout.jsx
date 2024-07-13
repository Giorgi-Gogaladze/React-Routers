import { Link, Outlet } from "react-router-dom";

const LinkLayout = () => {
    return (
        <div>
            <Link to={'mainPage'}>Main Page</Link> <br />
            <Link to={'about'}>About</Link><br />
            <Link to={'faceId/1'}>FaceId</Link> {/* Pass an ID here */}

            <Outlet />
        </div>
    );
};

export default LinkLayout;
