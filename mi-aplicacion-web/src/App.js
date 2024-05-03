import React from 'react';
import './App.css'; // Asegúrate de tener el archivo App.css en tu proyecto para poder importarlo

function App() {
  return (
    <div className="App">
      <body className="cuerpo"> 
        <nav className="izquierda">
          <img className="logo" src="img/ferremas.png" alt="Logo de Meta-Games" />
          <ul>
            <li> <img src="icons/Inicio.svg" alt="icon inicio" /> <a href="index.html">Inicio</a></li>
            <li> <img src="icons/Nosotros.svg" alt="icon nosotros" /> <a href="html/Nosotros.html">Nosotros</a></li>
            <li> <img src="icons/Retro.svg" alt="icon retrogames" /> <a href="html/RetroGames.html">Retro Games</a></li>
            <li> <img src="icons/Nuevos.svg" alt="icon nuevos" /> <a href="html/NewGames.html">New Games</a></li>
            <li> <img src="icons/Clasicos.svg" alt="icon clasicos" /> <a href="html/ClassicGames.html">Classic Games</a></li>
            <li> <img src="icons/Contactanos.svg" alt="icon contacto" /> <a href="html/Contactanos.html">Contacto</a></li>
          </ul>
        </nav>

        <header className="cabecera">
          <div className="search">
            <span className="uil uil-search"></span>
            <input id="searchInput" placeholder="Buscar...." type="text" />
          </div>
          <a className="sing-in" href="html\Registrarse.html">Registrarse</a>
          <a className="log-in" href="html\IniciarSesion.html">Iniciar Sesión</a>
        </header>

        <main className="contenido">
          <div className="titulo-pagina"><span>¡Bienvenido a Meta Games!</span></div>
          {/* Aquí continúa el contenido del cuerpo principal */}
        </main>

        <footer className="pie">  
          {/* Aquí continúa el contenido del pie de página */}
        </footer>
      </body>
    </div>
  );
}

export default App;
