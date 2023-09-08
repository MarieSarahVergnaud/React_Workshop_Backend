function AdminPage() {
    return (
     <ul className="admin-page">
        <li className="admin-page_title">
            <h2>Créer votre personnage</h2>
        </li>
        <li className="admin-page_form">
            <form className="creation-character_form">
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <button type="submit" >Submit</button>
            </form>
        </li>
          <li className="admin-page_message_success">
            <div className="progress-bar"></div>
            <p>Personnage crée !</p>
          </li>
     </ul>
    )
}

export default AdminPage;