const BACKGROUND_IMAGES = {
  ball: 'img/posts/balon.jpg',
  bench: 'img/posts/banquillo.jpg',
  ferrandiz: 'img/posts/ferrandiz.jpg',
  fives: 'img/posts/saludando.jpg',
  free_throw: 'img/posts/tiro-libre.jpg',
  group: 'img/posts/grupal.jpg',
  moneando: 'img/posts/moneando.jpg',
  rebound: 'img/posts/rebote.jpg',
  rm: 'img/posts/rm.jpg',
  running: 'img/posts/carrera.jpg',
  shoes: 'img/posts/zapas.jpg',
  start_play: 'img/posts/inicio-jugada.jpg',
  team: 'img/posts/equipo.jpg',
  white: 'img/posts/equipo-blanco.jpg',
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
          <option value="team">Equipo (presentacion)</option>
          <option value="ball">Balon</option>
          <option value="bench">Banquillo</option>
          <option value="ferrandiz">Ferrandiz</option>
          <option value="fives">Saludando</option>
          <option value="free_throw">Tiro libre</option>
          <option value="group">Grupal equipo</option>
          <option value="moneando">Moneando</option>
          <option value="rebound">Rebote</option>
          <option value="rm">Real Madrid</option>
          <option value="running">En carrera</option>
          <option value="shoes">Zapas</option>
          <option value="start_play">Inicio jugada</option>
          <option value="shoes">Zapas</option>
          <option value="white">Equipo blanco</option>
        </select>
        <br/>

        <label htmlFor="opponent">Equipo rival:</label>
        <select id="opponent" value={selectedOpponentKey} onChange={handleSelectChange}>
          <option value="">Equipo rival</option>
          <option value="rozas">Las Rozas U16</option>
          <option value="juande">Juande Alcala</option>
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
