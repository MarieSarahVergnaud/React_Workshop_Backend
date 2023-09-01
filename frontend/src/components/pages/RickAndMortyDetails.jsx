import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RickAndMortyDetails() {
    const [data, setData] = useState(undefined);

    const { id } = useParams();
   
    useEffect(() => {
        fetch(`http://localhost:5000/characters/${id}`)
            .then((response) => response.json())
            .then(([res]) => setData(res))
            .catch((err) => console.error(err))
    }, [])

    return (
        <ul className="home-page_ul">
            {data !== undefined &&
            <li className="rick-and-morty-card">
                <img src={data.image} />
                <p>My name is {data.name}</p>
                <p>My status is {data.status}</p>
            </li>
            }
        </ul>
    )
}

export default RickAndMortyDetails;