import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section className="pt-[10rem] flex justify-center">
      <div className="flex flex-col w-[85%] justify-center items-center">
        <h2 className="font-bold text-[35px] text-white text-center mb-[1rem]">
          Entre em Contato
        </h2>
        <p className="font-bold text-[13.6px] text-white text-center">
          Tem dúvidas sobre nossos produtos ou serviços? Estamos aqui para
          ajudar!
        </p>

        <div className="flex flex-row justify-between mt-[4rem] w-[50%] flex-wrap gap-y-[3rem]">
          <div className="flex flex-col gap-y-[9rem]">
            <div className="flex flex-col">
              <h3 className="text-white text-[17px] font-bold">Endereço</h3>

              <div className="flex flex-row gap-x-[1rem] mt-[2rem] items-center">
                <MapPin size={35} className="text-[#E37F2A] " />
                <div>
                  <p className="text-white font-bold mb-[0.5rem]">Visite-nos</p>
                  <p className="text-[#4B5563]">123 Avenida PetShop</p>
                  <p className="text-[#4B5563]">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-white text-[17px] font-bold mb-[1rem]">
                Horário de Funcionamento
              </h3>
              <p className="mb-[1rem] mt-[1rem] text-[#4B5563]">
                Segunda-Sexta: 6:30 às 19:30
              </p>
              <p className="mb-[1rem] text-[#4B5563]">
                Sábado: 6:30 às 12:00 e 15:30 às 19:00
              </p>
              <p className="text-[#4B5563]">Domingo: 6:30 às 12:00</p>
            </div>
          </div>

          <div>
            <h3 className="text-white text-[17px] font-bold">
              Informações de Contato
            </h3>

            <div className="flex flex-row gap-x-[1rem] mt-[2rem] items-center">
              <Phone size={30} className="text-[#E37F2A] " />
              <div>
                <p className="text-white font-bold mb-[0.5rem]">
                  Ligue ou Mande uma mensagem
                </p>
                <p className="text-[#4B5563]">(00) 00000-0000</p>
              </div>
            </div>

            <div className="flex flex-row gap-x-[1rem] mt-[2rem] items-center">
              <Mail size={30} className="text-[#E37F2A] " />
              <div>
                <p className="text-white font-bold mb-[0.5rem]">
                  Mande um E-mail
                </p>
                <p className="text-[#4B5563]">petshop@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
