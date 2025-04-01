const Nav = () => {
    return (
        <nav className='nav-section'>
            <section className='menu-section'>
                <img src="public/img/menu.png" alt="menu" />
                <span className='myer'>Myer</span>
            </section>

            <input type="text" placeholder=' Search for product or brand' />
            <span>Sign In / Join</span>
        </nav>
    )
}
export default Nav