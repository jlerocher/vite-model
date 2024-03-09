/* eslint-disable react/react-in-jsx-scope */

import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Page d'acceuil - " + import.meta.env.VITE_APP_TITLE; // Change app title in .env
    }, []);
    return (
        <div>Home</div>
    );
};

export default Home;