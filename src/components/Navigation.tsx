import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className="p-4 flex gap-4 justify-center bg-white shadow-sm">
      <Link
        to="/"
        className={`px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors ${
          location.pathname === '/' ? 'bg-gray-100' : ''
        }`}
      >
        Logs icon animation
      </Link>
      <Link
        to="/modal"
        className={`px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors ${
          location.pathname === '/modal' ? 'bg-gray-100' : ''
        }`}
      >
        Modal
      </Link>
    </nav>
  )
}

export { Navigation }
