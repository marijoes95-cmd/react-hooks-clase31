
import { useNavigate } from 'react-router'

function HomePage() {
const navigate = useNavigate()

function irAcercaDe() {
    navigate('/about')
}

return (
    <div>
    <h1>Bienvenidos a Mi Portal</h1>

    <p>Esta es la página de inicio.</p>

    <p>
        Estamos aprendiendo a navegar entre
        páginas utilizando React Router.
    </p>

    <button
        onClick={irAcercaDe}
        className="btn-navegar"
    >
        Ir a Acerca de
    </button>
    </div>
)
}

export default HomePage
