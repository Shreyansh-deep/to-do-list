import logo from "./logo.webp"
import Avatar from '@mui/material/Avatar';

function Header({firstLetter}) {

    const nameFirstAlpha = () => {
}
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} className="header--image"alt="logo-image" />
                <h1 className="header--name">Your To Do List</h1>
            </div>
            <Avatar className="avatar">{firstLetter}</Avatar>
        </div>
    )
}

export default Header;