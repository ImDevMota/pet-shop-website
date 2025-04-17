import { Heart, Shield, Trophy, Truck } from "lucide-react";

function Info() {
  return (
    <section>
      <div>
        <h2>Por que escolher nosso PetShop?</h2>
        <p>
          Somos mais do que uma loja de animais - somos amantes de animais
          dedicados a fornecer o melhor para o seu companheiro querido.
        </p>

        <div>
          <div>
            <div>
              <Heart />
              <p>Produtos aprovados para animais de estimação</p>
              <p>
                Cada produto é testado e amado pelos animais de estimação antes
                de chegar às nossas prateleiras.
              </p>
            </div>

            <div>
              <Shield />
              <p>Qualidade garantida</p>
              <p>
                Nós fornecemos apenas produtos da mais alta qualidade de
                fabricantes confiáveis.
              </p>
            </div>

            <div>
              <Trophy />
              <p>Serviço premiado</p>
              <p>
                Reconhecido pelo excelente atendimento ao cliente e experiência
                em cuidados com animais de estimação.
              </p>
            </div>

            <div>
              <Truck />
              <p>Entrega rápida</p>
              <p>
                Envio rápido e confiável para que você receba suprimentos para
                seu animal de estimação quando precisar.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h3>Nossa História</h3>
              <p>
                Fundado em 2016, nosso PetShop começou com uma missão simples:
                fornecer aos donos de animais de estimação produtos da mais alta
                qualidade e conselhos especializados para seus amados
                companheiros.
              </p>
              <p>
                Hoje, temos orgulho de atender milhares de animais de estimação
                felizes e seus donos, oferecendo produtos cuidadosamente
                selecionados que atendem aos nossos rigorosos padrões de
                qualidade.
              </p>
            </div>

            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
