import { ShoppingCartIcon } from "lucide-react";

function Header() {
  return (
    <header>
      <div>
        <h3>PetShop</h3>

        <nav>
          <ul>
            <li>
              <p>Produtos</p>
            </li>
            <li>
              <p>Sobre</p>
            </li>
            <li>
              <p>Contato</p>
            </li>
          </ul>
        </nav>

        <div>
          <a href="">
            <ShoppingCartIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
