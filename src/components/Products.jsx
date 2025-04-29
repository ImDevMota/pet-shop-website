import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import RacaoCachorroImg from "../assets/racao-cachorro.jpeg";
import RacaoGatoImg from "../assets/racao-gato.jpeg";
import RacaoRoedoresImg from "../assets/racao-roedores.jpeg";
import BrinquedoRoedoresImg from "../assets/brinquedo-roedores.jpeg";
import BrinquedoGatoImg from "../assets/brinquedo-gato.jpeg";
import BrinquedoCachorroImg from "../assets/brinquedo-cachorro.jpeg";
import ShampooCachorroImg from "../assets/shampoo-cachorro.jpeg";
import ShampooGatoImg from "../assets/shampoo-gato.jpeg";
import ShampooRoedoresImg from "../assets/shampoo-roedores.jpeg";
import RemedioCachorroImg from "../assets/remedio-cachorro.jpeg";
import RemedioGatoImg from "../assets/remedio-gato.jpeg";
import RemedioRoedoresImg from "../assets/remedio-roedores.jpg";

function Products() {
  const [startIndexCachorro, setStartIndexCachorro] = useState(0);
  const [startIndexGato, setStartIndexGato] = useState(0);
  const [startIndexRoedores, setStartIndexRoedores] = useState(0);

  const slidesCachorro = [
    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={RacaoCachorroImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Ração para Cachorro</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>

        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,
    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={BrinquedoCachorroImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Brinquedo para Cachorro</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,
    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={ShampooCachorroImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Shampoos para Cachorro</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,
    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={RemedioCachorroImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Remédios para Cachorro</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,
  ];

  const slidesGato = [
    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={RacaoGatoImg}
        alt=""
        className="w-[15rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Ração para Gato</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,

    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={BrinquedoGatoImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Brinquedo para Gato</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,

    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={ShampooGatoImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Shampoos para Gato</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,

    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={RemedioGatoImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Remédios para Gato</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,
  ];

  const slidesRoedores = [
    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={RacaoRoedoresImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Ração para Roedores</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,

    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={BrinquedoRoedoresImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Brinquedo para Roedores</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,

    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={ShampooRoedoresImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Shampoos para Roedores</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,

    <div className="bg-white w-[20rem] rounded-md flex flex-col items-center py-[1rem] gap-y-[0.2rem]">
      <img
        src={RemedioRoedoresImg}
        alt=""
        className="w-[18rem] h-[20rem] rounded-md"
      />
      <div className="flex flex-col w-[90%]">
        <p className="font-bold">Remédios para Roedores</p>
        <p className="font-bold text-[#2D5A27]">R$00,00</p>
        <button className="px-[1rem] py-[0.7rem] mt-[0.5rem] bg-[#22C55E] rounded-md text-white">
          Adicione ao Carrinho
        </button>
      </div>
    </div>,
  ];

  const nextSlide = (startIndex, setStartIndex, slides) => {
    if (startIndex < slides.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = (startIndex, setStartIndex) => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#E37F2A] to-[#4A90E2] flex justify-center pt-[20rem] ">
      <div className="flex flex-col gap-y-[5rem] justify-center items-center">
        <h2
          id="products"
          className="font-bold text-[35px] text-white text-center scroll-mt-20"
        >
          Nossos Produtos
        </h2>

        <h3 className="font-bold text-[25.5px] text-white text-center">
          Cachorro
        </h3>

        <div className="flex flex-row gap-x-[2rem]">
          <button
            onClick={() => prevSlide(startIndexCachorro, setStartIndexCachorro)}
            disabled={startIndexCachorro === 0}
            className="text-white"
          >
            <ChevronLeft size={100} />
          </button>

          {slidesCachorro
            .slice(startIndexCachorro, startIndexCachorro + 3)
            .map((slide, index) => (
              <div key={index} style={{ marginRight: "10px" }}>
                {slide}
              </div>
            ))}

          <button
            onClick={() =>
              nextSlide(
                startIndexCachorro,
                setStartIndexCachorro,
                slidesCachorro
              )
            }
            disabled={startIndexCachorro >= slidesCachorro.length - 3}
            className="text-white"
          >
            <ChevronRight size={100} />
          </button>
        </div>

        <h3 className="font-bold text-[25.5px] text-white text-center">Gato</h3>

        <div className="flex flex-row gap-x-[2rem]">
          <button
            onClick={() => prevSlide(startIndexGato, setStartIndexGato)}
            disabled={startIndexGato === 0}
            className="text-white"
          >
            <ChevronLeft size={100} />
          </button>

          {slidesGato
            .slice(startIndexGato, startIndexGato + 3)
            .map((slide, index) => (
              <div key={index} style={{ marginRight: "10px" }}>
                {slide}
              </div>
            ))}

          <button
            onClick={() =>
              nextSlide(startIndexGato, setStartIndexGato, slidesGato)
            }
            disabled={startIndexGato >= slidesGato.length - 3}
            className="text-white"
          >
            <ChevronRight size={100} />
          </button>
        </div>

        <h3 className="font-bold text-[25.5px] text-white text-center">
          Roedores
        </h3>

        <div className="flex flex-row gap-x-[2rem]">
          <button
            onClick={() => prevSlide(startIndexRoedores, setStartIndexRoedores)}
            disabled={startIndexRoedores === 0}
            className="text-white"
          >
            <ChevronLeft size={100} />
          </button>

          {slidesRoedores
            .slice(startIndexRoedores, startIndexRoedores + 3)
            .map((slide, index) => (
              <div key={index} style={{ marginRight: "10px" }}>
                {slide}
              </div>
            ))}

          <button
            onClick={() =>
              nextSlide(
                startIndexRoedores,
                setStartIndexRoedores,
                slidesRoedores
              )
            }
            disabled={startIndexRoedores >= slidesRoedores.length - 3}
            className="text-white"
          >
            <ChevronRight size={100} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;
