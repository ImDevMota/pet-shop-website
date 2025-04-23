import { ShoppingCartIcon } from "lucide-react";

function Header() {
  return (
    <header className="bg-[#4A9341] flex justify-center">
      <div className="flex flex-row justify-between text-white items-center py-[0.5rem] w-[85%]">
        <h3 className="font-bold">PetShop</h3>

        <div className="flex flex-row gap-[1.5rem] items-center">
          <nav className="">
            <ul className="flex flex-row gap-[1.5rem]">
              <li>
                <p className="text-[13.5px]">Produtos</p>
              </li>
              <li>
                <p className="text-[13.5px]">Sobre</p>
              </li>
              <li>
                <p className="text-[13.5px]">Contato</p>
              </li>
            </ul>
          </nav>

          <div className="bg-[#22C55E] rounded-md">
            <a href="#" className="px-[1rem] py-[0.5rem] flex justify-center">
              <ShoppingCartIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
