import React from 'react';
import suport from '../assets/serviceOne.svg';
import design from '../assets/serviceTwo.svg';
import marketing from '../assets/serviceThree.svg';
import '../css/Services.css';

function Services() {
  return (
    <section id="about" className="serviceContainter">
      <div className="serviceOneContainer">
        <img alt="management" src={ suport } className="serviceOne" />
        <div className="textContainerOne">
          <h3 className="serviceTitleOne">ASSESSORIA</h3>
          <p className="serviceTextOne">
            Através de gestão e suporte, estaremos no dia a dia do atleta, dando todo
            o amparo necessário que ele precise.
          </p>
        </div>
      </div>
      <div className="serviceOneContainer">
        <div className="textContainerOne">
          <h3 className="serviceTitleOne">DESIGN</h3>
          <p className="serviceTextOne">
            Potenciaremos ao máximo a imagem de nossos atletas em suas redes sociais,
            gerando mais interação e descobertas do público em geral.
          </p>
        </div>
        <img alt="management" src={ design } className="serviceOne" />
      </div>
      <div className="serviceOneContainer">
        <img alt="management" src={ marketing } className="serviceOne" />
        <div className="textContainerOne">
          <h3 className="serviceTitleOne">MARKETING</h3>
          <p className="serviceTextOne">
            Conjunto de ações e trabalhos para auto divulgação dos atletas,
            conquistando mais espaço nas mídias sociais e melhorando a rede de interações.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
