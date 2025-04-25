import { ChevronLeft, ChevronRight } from "lucide-react";
import RacaoCachorroImg from "../assets/Racao-Cachorro.jpeg";

function Products() {
  return (
    <section className="bg-gradient-to-b from-[#E37F2A] to-[#4A90E2] flex justify-center pt-[20rem]">
      <div className="flex flex-col gap-y-[5rem]">
        <h2 className="font-bold text-[35px] text-white text-center">
          Nossos Produtos
        </h2>

        <h3 className="font-bold text-[25.5px] text-white text-center">
          Cachorro
        </h3>

        <div className="flex flex-row gap-x-[2rem]">
          <button className="text-white">
            <ChevronLeft size={100} />
          </button>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Ração para Cachorro</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>

              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Brinquedo para Cachorro</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Shampoos para Cachorro</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Remédios para Cachorro</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <button className="text-white">
            <ChevronRight size={100} />
          </button>
        </div>

        <h3 className="font-bold text-[25.5px] text-white text-center">Gato</h3>

        <div className="flex flex-row gap-x-[2rem]">
          <button className="text-white">
            <ChevronLeft size={80} />
          </button>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Ração para Gato</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Brinquedo para Gato</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Shampoos para Gato</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Remédios para Gato</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <button className="text-white">
            <ChevronRight size={100} />
          </button>
        </div>

        <h3 className="font-bold text-[25.5px] text-white text-center">
          Roedores
        </h3>

        <div className="flex flex-row gap-x-[2rem]">
          <button className="text-white">
            <ChevronLeft size={100} />
          </button>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Ração para Roedores</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Brinquedo para Roedores</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Shampoos para Roedores</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md flex flex-col items-center gap-y-[0.5rem] py-[1rem]">
            <img
              src={RacaoCachorroImg}
              alt=""
              className="w-[18rem] h-[20rem] rounded-md"
            />
            <div className="flex flex-col w-[90%] gap-y-[0.5rem]">
              <p className="font-bold">Remédios para Roedores</p>
              <p className="font-bold text-[#2D5A27]">R$00,00</p>
              <button className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md text-white">
                Adicione ao Carrinho
              </button>
            </div>
          </div>

          <button className="text-white">
            <ChevronRight size={80} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;
