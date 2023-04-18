import React from 'react'
import suport from '../assets/serviceOne.svg'
import design from '../assets/serviceTwo.svg'
import marketing from '../assets/serviceThree.svg'
import '../css/Services.css';

function Services() {
  return (
    <section id="about" class="serviceContainter">
    <div class="serviceOneContainer">
        <img alt="management" src={suport} class="serviceOne" />
        <div class="textContainerOne">
            <h3 class="serviceTitleOne">ASSESSORIA</h3>
            <p class="serviceTextOne">
                Através de gestão e suporte, estaremos no dia a dia do atleta, dando todo
                o amparo necessário que ele precise.</p>
        </div>
    </div>
    <div class="serviceOneContainer">
        <div class="textContainerOne">
            <h3 class="serviceTitleOne">DESIGN</h3>
            <p class="serviceTextOne">
                Potenciaremos ao máximo a imagem de nossos atletas em suas redes sociais,
                gerando mais interação e descobertas do público em geral.</p>
        </div>
        <img alt="management" src={design} class="serviceOne" />
    </div>
    <div class="serviceOneContainer">
        <img alt="management" src={marketing} class="serviceOne" />
        <div class="textContainerOne">
            <h3 class="serviceTitleOne">MARKETING</h3>
            <p class="serviceTextOne">
                Conjunto de ações e trabalhos para auto divulgação dos atletas,
                conquistando mais espaço nas mídias sociais e melhorando a rede de interações.</p>
        </div>
    </div>
</section>
  )
}

export default Services