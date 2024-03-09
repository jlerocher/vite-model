/* eslint-disable react/react-in-jsx-scope */

import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header 
            className=""
        >
            <Typography
                placeholder=""
                variant="h1"
                className=""
            >
                <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
            </Typography>

        </header>
    );
};

export default Header;