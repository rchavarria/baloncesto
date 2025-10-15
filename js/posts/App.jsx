const BACKGROUND_IMAGES = {
  first: 'img/posts/poster-resultado-01.jpg',
  second: 'img/posts/poster-resultado-02.jpg',
  third: 'img/posts/poster-resultado-03.jpg',
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
  const [background, setBackground] = React.useState(BACKGROUND_IMAGES.first);

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
          <option value="first">Primera</option>
          <option value="second">Segunda</option>
        </select>
        <br/>

        <label htmlFor="opponent">Equipo rival:</label>
        <select id="opponent" value={selectedOpponentKey} onChange={handleSelectChange}>
          <option value="">Equipo rival</option>
          <option value="valcude">Valcude 2010</option>
          <option value="estudiantes">Estudiantes 2010</option>
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
      </div>
    </div>
  );
};
