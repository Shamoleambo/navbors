import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar' role='navigation'>
      <div className='navbar-left'>
        <a href='/' className='logo'>
          Shop Now
        </a>
      </div>
      <div className='navbar-center'>
        <ul className='nav-links'>
          <li>
            <a href='/products'>Products</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <a href='/cart' className='cart-icon' aria-label='Shopping Cart'>
          <i className='fas fa-shopping-cart'></i>
          <span className='cart-count'>0</span>
        </a>
        <a href='/account' className='user-icon' aria-label='User Account'>
          <i className='fas fa-user'></i>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
