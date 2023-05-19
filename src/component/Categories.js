import '../style/Categories.css'

function Categories({ categorie, isFiltre, setIsFiltre }) {
    const listCategorie = categorie
    console.log(isFiltre)
    return (
        <div className='lmj-categories'>
            <select className='lmj-categories-select'
                value={isFiltre}
                onChange={(e) => setIsFiltre(e.target.value)}
            >
                <option >Catégorie de plante</option>
                {listCategorie.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
            
            </select>
            <button onClick={() => setIsFiltre('')}>Réinitialiser</button>
        </div>
        
        
    )
}

export default Categories

