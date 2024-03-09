/* eslint-disable react/react-in-jsx-scope */

import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "À propos - " + import.meta.env.VITE_APP_TITLE; // Change app title in .env
    }, []);
    return (
        <div>About</div>
    );
};

export default About;