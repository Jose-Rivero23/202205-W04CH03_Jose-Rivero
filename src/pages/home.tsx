import React from "react";
import { List } from "../components/list";
import { PersonajesData } from "../data/personajes-data";
import "../css/style.css";
export function HomePage() {
    const personajes = PersonajesData();

    return (
        <>
            <h1>Gome Of Thrones</h1>
            <div className="app container">
                <List personajes={personajes}></List>
            </div>
        </>
    );
}
