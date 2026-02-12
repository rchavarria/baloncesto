const BACKGROUND_IMAGES = {
  antela: 'img/posts/antela.jpg',
  aware: 'img/posts/atento.jpg',
  ball: 'img/posts/balon.jpg',
  bench: 'img/posts/banquillo.jpg',
  bench_up: 'img/posts/banquillo-in-crescendo.jpg',
  box_out: 'img/posts/cerrando-rebot.jpg',
  celebration: 'img/posts/celebrando.jpg',
  circle_logo: 'img/posts/circulo-sobre-logo.jpg',
  drive: 'img/posts/entrada.jpg',
  ferrandiz: 'img/posts/ferrandiz.jpg',
  fives: 'img/posts/saludando.jpg',
  free_throw: 'img/posts/tiro-libre.jpg',
  group: 'img/posts/grupal.jpg',
  moneando: 'img/posts/moneando.jpg',
  premio: 'img/posts/premio.jpg',
  rebound: 'img/posts/rebote.jpg',
  rm: 'img/posts/rm.jpg',
  running: 'img/posts/carrera.jpg',
  shoes: 'img/posts/zapas.jpg',
  start_play: 'img/posts/inicio-jugada.jpg',
  team: 'img/posts/equipo.jpg',
  tor_nuk: 'img/posts/tor-nuk.jpg',
  thankfull: 'img/posts/agradecidos.jpg',
  white: 'img/posts/equipo-blanco.jpg',
  www: 'img/posts/www.jpg',
}

/**
 * Main App
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  /*
  * Opponents teams must be loaded from a `teams.js` file
  * Each team must have a `name` and a `logo` property, so that
  * they're rendered correctly in this page
  */
  const defaultOpponentTeam = { name: 'Elige rival', logo: 'img/new-logos/alcobendas-transparent.png' };
  const [selectedBackgroundKey, setSelectedBackgroundKey] = React.useState('');
  const [selectedOpponentKey, setSelectedOpponentKey] = React.useState('');
  const [tallies, setTallies] = React.useState('99-00');
  const [opponentTeam, setOpponentTeam] = React.useState(defaultOpponentTeam);
  const [background, setBackground] = React.useState(BACKGROUND_IMAGES.rm);

  const handleInputChange = (event) => {
    setTallies(event.target.value);
  };

  const handleSelectChange = (event) => {
    const key = event.target.value;

    if (teams[key]) {
      setOpponentTeam(teams[key]);
    }

    setSelectedOpponentKey(event.target.value);
  };

  const handleSelectBackgroundChange = (event) => {
    const key = event.target.value;

    if (BACKGROUND_IMAGES[key]) {
      setBackground(BACKGROUND_IMAGES[key]);
    }

    setSelectedBackgroundKey(event.target.value);
  };

  return (
    <div>
      <div className="data-input">
        <label htmlFor="opponent">Imagen de fondo:</label>
        <select id="opponent" value={selectedBackgroundKey} onChange={handleSelectBackgroundChange}>
          <option value="">Imagen</option>
          <option value="antela">En el Antela</option>
          <option value="aware">Atento</option>
          <option value="ball">Balon</option>
          <option value="bench">Banquillo</option>
          <option value="bench_up">Banquillo in Crescendo</option>
          <option value="box_out">Cerrando el rebote</option>
          <option value="circle_logo">Círculo</option>
          <option value="drive">Entrada</option>
          <option value="ferrandiz">Ferrandiz</option>
          <option value="fives">Saludando</option>
          <option value="free_throw">Tiro libre</option>
          <option value="group">Grupal equipo</option>
          <option value="moneando">Moneando</option>
          <option value="premio">Premio</option>
          <option value="rebound">Rebote</option>
          <option value="rm">Real Madrid</option>
          <option value="running">En carrera</option>
          <option value="shoes">Zapas</option>
          <option value="start_play">Inicio jugada</option>
          <option value="team">Equipo (presentacion)</option>
          <option value="tor_nuk">Rodeado de Tor y Nuk</option>
          <option value="white">Equipo blanco</option>
          <option value="www">Piernas en W</option>
        </select>
        <br/>

        <label htmlFor="opponent">Equipo rival:</label>
        <select id="opponent" value={selectedOpponentKey} onChange={handleSelectChange}>
          <option value="">Equipo rival</option>
          <option value="realMadrid">Real Madrid</option>
          <option value="tresCantos">Tres Cantos</option>
          <option value="distrito">Distrito Olímpico</option>
          <option value="fuenlabrada">Fuenlabrada</option>
          <option value="canoe">Canoe</option>
          <option value="getafe">Getafe</option>
          <option value="rozas">Las Rozas</option>
          <option value="juande">Juande</option>
          <option value="alcorcon">Alcorcón</option>
        </select>
        <br/>

        <label htmlFor="tallies">Marcador:</label>
        <input id="tallies" type="text" value={tallies} onChange={handleInputChange}/>
      </div>

      <div className="poster-container">
        <img className="poster-image"
             src={background}
             alt="whole team celebrating"
        />

        <div className="bottom-overlay">
          <div className="row">
            <div className="col col-home-team">
              CB ALCOBENDAS
            </div>
            <div className="col col-visit-team">
              {opponentTeam.name}
            </div>
          </div>

          <div className="row row-results">
            <div className="col">
              <img className="logo"
                   src="img/new-logos/alcobendas-transparent.png"
                   alt="alcobendas logo"
              />
            </div>

            <Tallies tallies={tallies} />

            <div className="col">
              <img className="logo"
                   src={opponentTeam.logo}
                   alt="opponent logo"
              />
            </div>
          </div>

        </div>

        <Emoji tallies={tallies} />
      </div>
    </div>
  );
};
