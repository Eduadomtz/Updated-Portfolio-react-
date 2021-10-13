
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 text-white ">
            <a className="text-2xl pl-14 italic">
                <a href="#about"
                    onClick={() => handlePageChange('About')}

                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    Eduardo Martínez
                </a>
            </a>
            <ul className="flex justify-end text-2xl pr-5">
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
                        href="https://drive.google.com/file/d/1t01Alijv7Ix9RMZyFEVx4L_FmlwOMeyE/view?usp=sharing"
                    >
                        Resume
                    </a>
                </li>

            </ul>
        </div>

    );
}

export default NavTabs;