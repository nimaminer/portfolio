import "./footer.css"

function Footer() {
    return (
        <footer className="pageFooter">
            <div className="footerElements">
                <a rel="noreferrer" target="_blank" href="mailto: sabzenima@gmail.com"><img className="footerIcons" src="images/footer/gmail.png" alt="Gmail's Logo" /></a>
                <a rel="noreferrer" target="_blank" href="tel:0403520859"><img className="footerIcons" src="images/footer/phone.png" alt="Phone Logo" /></a>
                <img id="footerLogo" src="images/header/logo.png" alt="Website's main Logo" />
                <a rel="noreferrer" target="_blank" href="http://www.youtube.com/@nimaminer"><img className="footerIcons" src="images/footer/youtube.png" alt="Youtube's Logo" /></a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nima-sabzeh?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWHY%2F7W0yRTW4G17HT0ghYw%3D%3D"><img className="footerIcons" src="images/footer/linkedin.png" alt="Linkedin's Logo" /></a>
            </div>
        </footer>
    )}

export default Footer;