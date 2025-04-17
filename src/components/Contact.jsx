import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section>
      <div>
        <h2>Entre em Contato</h2>
        <p>
          Tem dúvidas sobre nossos produtos ou serviços? Estamos aqui para
          ajudar!
        </p>

        <div>
          <div>
            <div>
              <h3>Endereço</h3>

              <div>
                <MapPin />
                <div>
                  <p>Visite-nos</p>
                  <p>123 Avenida PetShop</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div>
              <h3>Horário de Funcionamento</h3>
              <p>Segunda-Sexta: 6:30 às 19:30</p>
              <p>Sábado: 6:30 às 12:00 e 15:30 às 19:00</p>
              <p>Domingo: 6:30 às 12:00</p>
            </div>
          </div>

          <div>
            <h3>Informações de Contato</h3>

            <div>
              <Phone />
              <div>
                <p>Ligue ou Mande uma mensagem</p>
                <p>(00) 00000-0000</p>
              </div>
            </div>

            <div>
              <Mail />
              <div>
                <p>Mande um E-mail</p>
                <p>petshop@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
