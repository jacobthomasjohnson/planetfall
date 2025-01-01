import Link from "next/link";

export const Menu = ({ menuOpen, toggleMenu, ref, headerBottom }) => {
    const onMenuLinkClick = (page) => {
        toggleMenu();
    };
    return (
        <div

            className={`fixed flex flex-col transition ease-snappy z-40 left-0 w-full bg-backgroundLight ${
                menuOpen ? "-translate-y-0" : "-translate-y-full"
            }`}
            style={{
                  top: headerBottom + "px"
            }}
            ref={ref}
        >
            <div className="menu-item">
                <Link
                    className="menu-item-link"
                    onClick={onMenuLinkClick}
                    href="/population"
                >
                    &#9658; Population Management
                </Link>
            </div>
            <div className="menu-item">
                <Link
                    className="menu-item-link"
                    onClick={onMenuLinkClick}
                    href="/resources"
                >
                    &#9658; Resource Management
                </Link>
            </div>
            <div className="menu-item">
                <Link
                    className="menu-item-link"
                    onClick={onMenuLinkClick}
                    href="/technology"
                >
                    &#9658; Technology & Research
                </Link>
            </div>
            <div className="menu-item">
                <Link
                    className="menu-item-link"
                    onClick={onMenuLinkClick}
                    href="/log"
                >
                    &#9658; Event Log
                </Link>
            </div>
            <div className="menu-item">
                <Link
                    className="menu-item-link"
                    onClick={onMenuLinkClick}
                    href="/stats"
                >
                    &#9658; Statistics
                </Link>
            </div>
            <div className="menu-item">
                <Link
                    className="menu-item-link"
                    onClick={onMenuLinkClick}
                    href="/travel"
                >
                    &#9658; Travel
                </Link>
            </div>
        </div>
    );
};

export default Menu;
