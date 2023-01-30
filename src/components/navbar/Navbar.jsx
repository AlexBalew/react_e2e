import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Link to='/' data-testid='main-page-main'>Main</Link>
            <br />
            <Link to='/about' data-testid='about-page-main'>About</Link>
            <br />
            <Link to='/users' data-testid='users-page-main'>Users</Link>
        </div>
    )
}