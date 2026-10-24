
import { Link, Outlet } from 'react-router'

function PublicLayout() {
return (
    <div>
    <header>
        <h2>Mi Portal</h2>


            <nav>
            <Link to="/">Inicio</Link>
            {' | '}
            <Link to="/about">Acerca de</Link>
            {' | '}
            <Link to="/hooks">Hooks</Link>
            {' | '}
            <Link to="/admin/dashboard">
                Administración
            </Link>
            </nav>
    </header>

    <hr />

    <main>
        <Outlet />
    </main>

    <hr />

    <footer>
        <p>Mi Portal - Proyecto React Router</p>
    </footer>
    </div>
    )
}

export default PublicLayout
