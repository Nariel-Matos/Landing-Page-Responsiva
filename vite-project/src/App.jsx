
import './css/App.css'
import './css/responsive.css'
import logo from './assets/logo.svg'
import imgPainel from './assets/painel.jpg'
import logoAbout from './assets/logo-secoes.png'
import imgGaleriesOne from './assets/4.jpg'
import imgGaleriesTwo from './assets/2.jpg'
import imgGaleriesThree from './assets/3.jpg'
import imgGaleriesFour from './assets/1.jpg'
import fundoFace from './assets/face.png'
import fundoInsta from './assets/insta.png'

function App() {
  return (

    <main className='main-container'>

      <header className='header'>
        <a className='link' href="#index.html">
          <img src={logo} alt="Isso é um logo" />

        </a>

        <nav className='nav'>
          <ul className='ul'>
            <li> <a href="#quem-somos">Quem somos</a></li>
            <li><a href="#onde-estamos"> Onde estamos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

      </header>

      <section className='section-home'>
        <img src={imgPainel} className="img-painel" alt="" />
        <p>Aqui o café é só o começo.</p>
      </section>

      <section className='section-about' id="quem-somos">
        <div className='content-about'>
          <img src={logoAbout} alt="" />
          <h1>Quem Somos</h1>
          <div className='div-content-about-paragraf'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
          </div>

        </div>

      </section>

      <section className='section-galeries'>
        <div className='div-galeries-one'
          style={{ backgroundImage: `url(${imgGaleriesOne})` }}>
        </div>

        <div className='div-galeries-two'>
          <div className='div-galeries-two-imgs'>
            <img src={imgGaleriesTwo} className="img-galeries-one" alt="" />
            <img src={imgGaleriesThree} className="img-galeries-two" alt="" />

          </div>

          <div className='div-galeries-three'>
            <img src={imgGaleriesFour} alt="" />
          </div>
          <div>

          </div>
        </div>
      </section>

      <section className='container-adress'>
        <div className='div-adress'>
          <img src={logoAbout} alt="isso é um logo de uma flor de café" id='onde-estamos' />
          <h1>ONDE ESTAMOS</h1>
          <p>Avenida Brigadeiro Faria Lima, 444 <br /> São Paulo</p>
        </div>
      </section>

      <section className='container-contact'>

        <div className='div-container-contact-img' id='contato'>

          <div className='div-container-paragraf'>
            <h1>Contato</h1>
            <p>Telefone: (51)9-9999-9999 <br />
              Email:contato@codecafe.com <br /> <br />
              Horário de atendimento: <br />
              seg a sexta 9h até 18</p>
          </div>
        </div>
      </section>

      <footer className='main-footer'>

        <div className='footer-itens'>
          <a href="" className='container-logo'>
            <img src={logo} className="logo-footer" alt="" />
          </a>

          <nav className='nav-footer'>
            <ul className='ul-footer'>
              <li> Quem somos</li>
              <li>Onde estamos</li>
              <li>Contato</li>

            </ul>
          </nav>
        </div>
        <div className='footer-social-main'>
          <img src={fundoFace} className="footer-face" alt="" />
          <img src={fundoInsta} className="footer-insta" alt="" />
        </div>

        <p className='p-footer'> © 2021 Code Café </p>

      </footer >

    </main >

  )
}

export default App
