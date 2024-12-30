import useGameStore from "../gameStore";

export const Menu = ({ menuTop, menuOpen, toggleMenu }) => {
      const currentPage = useGameStore((state) => state.currentPage);
      const changePage = useGameStore((state) => state.changePage);
      const onMenuLinkClick = (page) => {
            toggleMenu();
            changePage(page);
      }
      return (
            <div
                  style={{
                        top: menuTop,
                  }}
                  className={`fixed flex flex-col transition ease-snappy z-40 left-0 w-full bg-backgroundLight ${
                        menuOpen ? "-translate-y-0" : "-translate-y-full"
                  }`}
            >
                  <div onClick={() => onMenuLinkClick("operations")} className="menu-item">
                        &#9658; OPERATIONS
                  </div>
                  <div onClick={() => onMenuLinkClick("population")} className="menu-item">
                        &#9658; POPULATION
                  </div>
                  <div onClick={() => onMenuLinkClick("mining")} className="menu-item">
                        &#9658; MINING
                  </div>
                  <div onClick={() => onMenuLinkClick("foodgathering")} className="menu-item">
                        &#9658; FOOD GATHERING
                  </div>
                  <div onClick={() => onMenuLinkClick("travel")} className="menu-item">
                        &#9658; TRAVEL
                  </div>
            </div>
      );
};

export default Menu;