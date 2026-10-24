
import { Link, Outlet } from 'react-router'

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside>
        <h2>Administración</h2>

        <nav>
          <ul>
            <li>
              <Link to="/admin/dashboard">
                Panel principal
              </Link>
            </li>
            <li>
              <Link to="/">
                Volver al inicio
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout

