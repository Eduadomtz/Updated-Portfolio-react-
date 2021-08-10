
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="flex justify-end bg-black text-white">
            <li className="p-4">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}

                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="p-4">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}

                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="p-4">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}

                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="p-4">
                <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}

                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>

        </ul>
    );
}

export default NavTabs;