import React from 'react';
import '../styles/styles.css'; // Asegúrate de que este archivo contiene los estilos necesarios

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
