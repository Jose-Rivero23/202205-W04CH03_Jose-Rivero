import React from "react";
import { Personaje } from "../models/personaje";
import { Card } from "./card";
export function List({ personajes }: { personajes: Array<Personaje> }) {
    return (
        <ul className="characters-list row list-unstyled">
            {personajes.map((personaje) => (
                <li key={personaje.nombre} className="character col">
                    <Card Personaje={personaje}></Card>
                </li>
            ))}
        </ul>
    );
}
