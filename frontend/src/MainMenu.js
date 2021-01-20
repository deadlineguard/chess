import React from "react";
import {Link} from "react-router-dom";

const MainMenu = () => (
    <div>
        <h1>Главное меню</h1>
        <Link to="/game">
            <button>Начать игру</button>
        </Link>
    </div>
);

export default MainMenu;
