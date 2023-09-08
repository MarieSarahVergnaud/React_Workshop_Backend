import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {
    const[isDataSended, setIsDataSended] = useState(false)
    const [formData,setFormData] = useState({
        name:"",
        status:"",
        gender:"",
        species:"",
        image:""
    });
    const navigate = useNavigate() // pour gérer une redirection automatique

    const handleChange = (e) => {    // Fonction permettant de mettre à jour notre objet 
        setFormData((previousValue) => ({ // Qui sera envoyé en base de donnée
            ...previousValue, [e.target.name]: e.target.value 
        }))

        console.log(formData) // On vera l'objet avec ses attributs : Object { name:" ce que tu tappe" etc}
    };

    const handleSubmit = (e) => {
        e.preventDefault();  // Permet que la page ne refraichisse pas, sinon la fonction ne serait pas exécutée

        fetch("http://localhost:5000/characters", {  // 2em paramètre d'un fetch c'est les options 
            headers: {
                'Accept':"application/json",
                'Content-Type': "application/json"
            },
            method:"POST",
            body: JSON.stringify(formData)
        })
        .then(() => {
            console.log("Insertion réussie") 
            setIsDataSended(true)  // Permet d'afficher conditonnellement le formulaire ou validation quand le formulaire est posté
            setTimeout(() => {
                navigate("/")  // redirige sur la route / au bout de 4000 milisecondes 
            }, 4000)
        })                                 
        .catch((err) => {
            console.error(err)
        })
    }

    return (
     <ul className="admin-page">
        <li className="admin-page_title">
            <h2>Créer votre personnage</h2>
        </li>
            {!isDataSended &&
        <li className="admin-page_form">
            
            <form className="creation-character_form">
                <input 
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    value={formData.name}
                    />
                <input 
                    name="status"
                    placeholder="status"
                    onChange={handleChange}
                    value={formData.status}
                    />
                <input 
                    name="gender"
                    placeholder="gender"
                    onChange={handleChange}
                    value={formData.gender}
                    />
                <input 
                    name="species"
                    placeholder="species"
                    onChange={handleChange}
                    value={formData.species}
                    />
                <input 
                    name="image"
                    placeholder="image"
                    onChange={handleChange}
                    value={formData.image}
                    />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </li>
            }{isDataSended &&
          <li className="admin-page_message_success">
            <div className="progress-bar"></div>
            <p>Personnage crée !</p>
          </li>
           }    
     </ul>
    )
}

export default AdminPage;