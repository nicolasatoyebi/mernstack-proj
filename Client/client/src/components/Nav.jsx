import { Link } from 'react-router-dom'

const Nav = () => {
    const navLink = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Register",
            path: "/register"
        },
        {
            name: "Signin",
            path: "/signin"
        },
    ]
  return (
    <div>
        <ul className="flex items-center justify-between bg-gray-900 p-5 text-white">
            {navLink.map((link)=>(
                <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Nav