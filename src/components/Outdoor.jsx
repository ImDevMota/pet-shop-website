import OutdoorImg from "../assets/Outdoor.png";

function Outdoor() {
  return (
    <section className="bg-gradient-to-b from-[#4A9341] to-[#E37F2A] flex justify-center pt-[9rem]">
      <div className="flex flex-row items-center text-white justify-between w-[85%]">
        <div className="flex flex-col gap-y-[1.5rem]">
          <h1 className="font-bold text-[51px]">
            Rações de Qualidade e Suprimentos
          </h1>
          <p className="text-[17px]">
            Tudo o que seu amigo peludo (ou com penagem), precisa para uma vida
            feliz e saudável.
          </p>

          <div className="">
            <a
              className="px-[1rem] py-[0.5rem] bg-[#22C55E] rounded-md"
              href="#"
            >
              Comprar
            </a>
          </div>
        </div>

        <img src={OutdoorImg} alt="" className="w-[40rem] h-[35rem]" />
      </div>
    </section>
  );
}

export default Outdoor;
