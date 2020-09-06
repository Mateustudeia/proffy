import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQFXKDFXmeZ_yQ/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=wDhZiAfuGN9GtY_zEUFr8eL4-l0hXjGZE6MVFjXWsf8" alt="Mateus Tudéia"/>
                <div>
                    <strong>Mateus Tudéia</strong>
                    <span>Quality Analyst</span>
                </div>
            </header>
            
            <p>
                Entusiasta das melhores tecnologias para analise de qualide de software.
                <br/><br/> 
                Apaixonado por encontrar erros e criticar o trabalhos dos desenvolvedores, pois não consegiu ser um, agora ele vive para encontrar defeitos no trabalho dos outros.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 250,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        
        </article>
    );
}

export default TeacherItem;
