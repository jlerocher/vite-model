/* eslint-disable react/react-in-jsx-scope */

import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        document.title = "Page non trouvée - " + import.meta.env.VITE_APP_TITLE; // Change app title in .env
    }, []);
    return (
        <div>NotFound</div>
    );
};

export default NotFound;