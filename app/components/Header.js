import Image from "next/image";

export const Header = ({ ref, toggle, menuOpen }) => {
      return (
            <div
                  ref={ref}
                  className="flex relative bg-background z-50 p-8 left-0 w-full justify-between"
            >
                  <div className="relative">PLANETFALL</div>
                  <Image
                        onClick={toggle}
                        className={`invert hover:cursor-pointer ${menuOpen ? "hidden" : "visible"}`}
                        src="/menu.svg"
                        width={15}
                        height={15}
                        alt="Menu"
                        style={{ width: "15px", height: "15px" }}
                  />
                  {menuOpen && (
                        <div className="flex text-lg items-center justify-center w-[15px] h-[15px] hover:cursor-pointer" onClick={toggle}>
                              &#x2A09;
                        </div>
                  )}
            </div>
      );
};

export default Header;
