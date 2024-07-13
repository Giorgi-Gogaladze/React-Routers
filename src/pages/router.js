import LinkLayout from "./layouts/LinkLayout";
import MainPage from "./MainPage";
import FaceId from "./FaceId";
import About from "./About";

const router = [
    {
        element: <LinkLayout />,
        path: "/",
        children: [
            {
                element: <MainPage />,
                path: "mainPage"
            },
            {
                element: <About />,
                path: "about"
            },
            {
                element: <FaceId />,
                path: "faceId/:id" 
            }
        ]
    }
];

export default router;
