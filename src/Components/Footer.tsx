import '../FooterStyle.css'
import githubLogo from '../assets/github-white.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import gastonLink from '../assets/webLogo.png';


const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__container'>

                <div className="gitHubCode">
                    <img src={githubLogo} alt="github logo" />
                    <span>
                        Mirá este código en
                        <a
                            href="https://github.com/GastonYasuda/book-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/GastonYasuda
                        </a>
                    </span>
                </div>


                <div className="linkedinLink">
                    <img src={linkedinLogo} alt="linkedin logo" />
                    <span>
                        Mirá mi perfil en
                        <a
                            href="https://www.linkedin.com/in/gaston-yasuda/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/gaston-yasuda/
                        </a>

                    </span>
                </div>

                <div className="webLink">
                    <img src={gastonLink} alt="my web logo" />
                    <span>
                        Conocé mis proyectos en
                        <a
                            href="https://book-app-gaston.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            gastonyasuda.netlify
                        </a>
                    </span>
                </div>

            </div>
        </section>
    );
};

export default Footer;
