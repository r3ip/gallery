import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BsSun } from 'react-icons/bs'
import { FiMoon } from 'react-icons/fi'
import { BiHomeAlt2, BiInfoCircle } from 'react-icons/bi'

export const Nav = () => {

  const darkTheme = 'dracula'
  const ligthTheme = 'cupcake'

  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme)
  }

  useEffect(() => {
    if (theme === true) {
      document.querySelector('html').setAttribute('data-theme', darkTheme);
    } else {
      document.querySelector('html').setAttribute('data-theme', ligthTheme);
    }
  }, [theme])


  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="navbar-center hidden lg:flex">
          <a className="btn btn-ghost normal-case text-xl">My gallery</a>
        </div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/" className="mx-4"><BiHomeAlt2 /> Home</Link></li>
              <li><Link to="/about" className="mx-4"><BiInfoCircle /> About</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2">
            <li className="mx-3"><Link to="/"><BiHomeAlt2 className="w-6 h-6" /> Home</Link></li>
            <li><Link to="/about"><BiInfoCircle className="w-6 h-6" /> About</Link></li>
          </ul>
        </div>
        <div className="navbar-center lg:hidden">
          <a className="btn btn-ghost normal-case text-xl">My gallery</a>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate mx-2">
            <input type="checkbox" onChange={changeTheme} checked={theme} />
            <BsSun className="swap-on fill-current w-5 h-5" />
            <FiMoon className="swap-off fill-current w-5 h-5" />
          </label>
        </div>
      </div>
    </div>
  )
}
