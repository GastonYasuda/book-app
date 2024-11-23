
import logo from '../assets/logoTanuki.png';

type AppHeaderProps = {
    setSelectedValue: (value: undefined) => void; // Define setSelectedValue como una función
};

const AppHeader = ({ setSelectedValue }: AppHeaderProps) => {
    return (
        <div className="header_logo" onClick={() => { setSelectedValue(undefined) }}>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default AppHeader;
