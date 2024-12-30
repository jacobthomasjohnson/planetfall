import Image from "next/image";

export const Header = ({ ref, toggle }) => {
      return (
            <div
                  ref={ref}
                  className="flex relative bg-background z-50 p-8 left-0 w-full justify-between"
            >
                  <div className="relative">PLANETFALL</div>
                  <Image
                        onClick={toggle}
                        className="invert hover:cursor-pointer"
                        src="/menu.svg"
                        width={15}
                        height={15}
                        alt="Menu"
                        style={{ width: "15px", height: "15px" }}
                  />
            </div>
      );
};

export default Header;
