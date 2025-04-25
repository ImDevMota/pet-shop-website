import { Heart, Shield, Trophy, Truck } from "lucide-react";
import InfoImg from "../assets/Info.jpeg";

function Info() {
  return (
    <section className="pt-[20rem] flex justify-center">
      <div className="w-[85%] flex flex-col">
        <h2 className="font-bold text-[35px] text-white text-center mb-[1rem]">
          Por que escolher nosso PetShop?
        </h2>
        <p className="text-center font-[13.6px] text-[#4B5563]">
          Somos mais do que uma loja de animais - somos amantes de animais
          dedicados a fornecer
          <br /> o melhor para o seu companheiro querido.
        </p>

        <div className="flex flex-col justify-center items-center mt-[4rem] gap-y-[3rem]">
          <div className="flex flex-row justify-around w-[75%] flex-wrap gap-y-[1rem]">
            <div className="flex flex-col bg-white rounded-xl p-6 gap-y-[1rem] w-[17rem]">
              <Heart className="text-[#9333EA]" />
              <p className="font-bold text-[15.3px]">
                Produtos aprovados para animais de estimação
              </p>
              <p className="text-[13.6px] text-[#4B5563]">
                Cada produto é testado e amado pelos animais de estimação antes
                de chegar às nossas prateleiras.
              </p>
            </div>

            <div className="flex flex-col bg-white rounded-xl p-6 gap-y-[1rem] w-[17rem]">
              <Shield className="text-[#0D9488]" />
              <p className="font-bold text-[15.3px]">Qualidade garantida</p>
              <p className="text-[13.6px] text-[#4B5563]">
                Nós fornecemos apenas produtos da mais alta qualidade de
                fabricantes confiáveis.
              </p>
            </div>

            <div className="flex flex-col bg-white rounded-xl p-6 gap-y-[1rem] w-[17rem]">
              <Trophy className="text-[#F97316]" />
              <p className="font-bold text-[15.3px]">Serviço premiado</p>
              <p className="text-[13.6px] text-[#4B5563]">
                Reconhecido pelo excelente atendimento ao cliente e experiência
                em cuidados com animais de estimação.
              </p>
            </div>

            <div className="flex flex-col bg-white rounded-xl p-6 gap-y-[1rem] w-[17rem]">
              <Truck className="text-[#EA3336]" />
              <p className="font-bold text-[15.3px]">Entrega rápida</p>
              <p className="text-[13.6px] text-[#4B5563]">
                Envio rápido e confiável para que você receba suprimentos para
                seu animal de estimação quando precisar.
              </p>
            </div>
          </div>

          <div className="flex flex-row p-8 items-center gap-x-[5rem] bg-white rounded-xl flex-wrap">
            <div className="flex flex-col w-[30rem] gap-y-[1rem]">
              <h3 className="text-[21px] font-bold">Nossa História</h3>
              <p className="text-[#4B5563] text-[13.6px]">
                Fundado em 2016, nosso PetShop começou com uma missão simples:
                fornecer aos donos de animais de estimação produtos da mais alta
                qualidade e conselhos especializados para seus amados
                companheiros.
              </p>
              <p className="text-[#4B5563] text-[13.6px]">
                Hoje, temos orgulho de atender milhares de animais de estimação
                felizes e seus donos, oferecendo produtos cuidadosamente
                selecionados que atendem aos nossos rigorosos padrões de
                qualidade.
              </p>
            </div>

            <img
              src={InfoImg}
              alt=""
              className="w-[35rem] h-[20rem] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
