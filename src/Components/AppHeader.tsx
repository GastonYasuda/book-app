
import logo from '../assets/logoTanuki.png';


const AppHeader = (props: Props) => {
    return (
        <div className="header_logo">
            <img src={logo} alt="logo" />
        </div>
    );
};

export default AppHeader;
