function Navigation() {
  return (
    <section className="pt-[10rem] flex justify-center pb-[3rem]">
      <div className="flex flex-row w-[85%] justify-center gap-x-[12rem] gap-y-[2rem] flex-wrap">
        <div className="flex flex-col w-[12rem] gap-y-[1rem]">
          <p className="text-white font-bold">PetShop</p>
          <p className="text-[13.6px] text-[#4B5563]">
            Suprimentos de qualidade para animais de estimação.
          </p>
        </div>

        <div className="flex flex-col w-[4.5rem]">
          <p className="text-white font-bold">Navegue</p>

          <div className="flex flex-col gap-y-[0.8rem] mt-[1rem]">
            <a href="#info" className="text-[13.6px] text-[#4B5563]">
              Sobre Nós
            </a>
            <a href="#products" className="text-[13.6px] text-[#4B5563]">
              Comprar
            </a>
            <a href="#contact" className="text-[13.6px] text-[#4B5563]">
              Contato
            </a>
          </div>
        </div>

        <div className="flex flex-col w-[10.5rem] gap-y-[1rem]">
          <p className="text-white font-bold ">Contate-nos</p>
          <div className="flex flex-col">
            <p className="text-[13.6px] text-[#4B5563]">
              E-mail: petshop@email.com
            </p>
            <p className="text-[13.6px] text-[#4B5563]">
              Celular: (00) 00000-0000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
