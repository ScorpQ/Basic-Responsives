import { Link } from 'react-router-dom'
import card from '../../assets/group2.jpg'
import search from '../../assets/group3.jpg'
import './header.css'

const Header = () => {
  return (
    <header>
      <div>
        <Link to={'/'}>MY JEWELRY STORE </Link>
      </div>
      <nav>
        <button>
          <img src={search} />
        </button>
        <Link to='/card' className='link'>
          <img src={card} />
        </Link>
      </nav>
    </header>
  )
}

export default Header
