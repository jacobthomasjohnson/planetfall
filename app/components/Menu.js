export const Menu = ({ menuTop, menuOpen, toggleMenu }) => {
      return (
            <div
                  style={{
                        top: menuTop,
                  }}
                  className={`fixed flex flex-col transition ease-snappy z-40 left-0 w-full bg-backgroundLight ${
                        menuOpen ? "-translate-y-0" : "-translate-y-full"
                  }`}
            >
                  <div onClick={toggleMenu} className="menu-item">
                        &#9658; OPERATIONS
                  </div>
                  <div onClick={toggleMenu} className="menu-item">
                        &#9658; POPULATION
                  </div>
                  <div onClick={toggleMenu} className="menu-item">
                        &#9658; MINING
                  </div>
                  <div onClick={toggleMenu} className="menu-item">
                        &#9658; FOOD GATHERING
                  </div>
                  <div onClick={toggleMenu} className="menu-item">
                        &#9658; TRAVEL
                  </div>
            </div>
      );
};

export default Menu;