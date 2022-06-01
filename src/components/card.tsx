import { Personaje } from "../models/personaje";

export function Card({ Personaje }: { Personaje: Personaje }) {
    const template = (
        <div className="card character__card">
            <img
                src={"../img/" + Personaje.nombre.toLowerCase() + ".jpg"}
                alt={Personaje.nombre + Personaje.familia}
                className="character__picture card-img-top"
            />
            <div className="card-body">
                <h2 className="character__name card-title h4">
                    {Personaje.nombre} y {Personaje.familia}
                </h2>
                <div className="character__info">
                    <ul className="list-unstyled">
                        <li>Edad: {Personaje.edad} años</li>

                        <li>
                            Estado:
                            {Personaje.estadoVivo ? (
                                <i className="fas fa-thumbs-up"></i>
                            ) : (
                                <i className="fas fa-thumbs-down"></i>
                            )}
                        </li>
                    </ul>
                </div>
                {/* <CardOverly personaje={Personaje}></CardOverly> */}
            </div>
        </div>
    );

    return template;
}
