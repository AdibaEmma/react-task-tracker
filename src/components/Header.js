import { FaTimes } from "react-icons/fa"
import PropTypes from 'prop-types'
import Button from "./Button"


const Header = ({ title, onToggle, close }) => {

    return (
        <header className="header">
            <h1>{ title }</h1>
            { !close ? <Button onClick={ onToggle } color="green" text="Add" /> : 
            <FaTimes style={{color: 'red', cursor: 'pointer', fontSize: '25px'}} onClick={onToggle} /> }
        </header>
    )
}
Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
