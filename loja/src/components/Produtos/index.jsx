import './Produto.css'

import bolsa from '../../assets/bolsa.png'
import note from '../../assets/portaNotebook.png'
import sandalia1 from '../../assets/sandalia1.png'
import sandalia2 from '../../assets/sandalia2.png'
import tamanco from '../../assets/tamanco.png'
import tenis from '../../assets/tenis.png'

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Novidades</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at quam recusandae voluptatem deserunt saepe praesentium explicabo, ea voluptatum perferendis assumenda, eligendi quae  modi exercitationem? Corporis, sit! Pariatur, doloremque exercitationem.
                </p>
                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt='sandalia' />
                            <span className='badge-venda'>Mais Vendidos</span>
                        </div>

                        <div className='card-info'>
                            <h3>Sandalia de couro</h3>
                            <p className='preco'>R$349,90</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia2} alt='sandalia' />
                        </div>
                        <div className='card-info'>
                            <h3>Sandalia Rosa</h3>
                            <p className='preco'>R$229,90</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={tamanco} alt='sandalia' />
                            <span className='badge-desconto'>10% de desconto</span>
                        </div>
                        <div className='card-info'>
                            <h3>Tamanco Couro</h3>
                            <p className='preco'>R$369,90</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={bolsa} alt='sandalia' />
                        </div>
                        <div className='card-info'>
                            <h3>Bolsa Shopper</h3>
                            <p className='preco'>R$569,90</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={tenis} alt='sandalia' />
                        </div>
                        <div className='card-info'>
                            <h3>Tênis preto</h3>
                            <p className='preco'>R$469,90</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={note} alt='sandalia' />
                        </div>
                        
                        <div className='card-info'>
                            <h3>Porta Notebook</h3>
                            <p className='preco'>R$269,90</p>
                            <button className='btn'>Comprar Agora</button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}