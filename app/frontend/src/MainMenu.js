import React from "react";
import {Link} from "react-router-dom";

const MainMenu = () => (
    <div>
        <h1>Главное меню</h1>
        <button>
            <Link to="/game">Начать игру</Link>
        </button>
    </div>
);

export default MainMenu;