const App = () => {
  const defaultOpponentTeam = { name: 'ELIGE UN EQUIPO RIVAL', logo: 'img/new-logos/alcobendas-transparent.png' };
  const [selectedAge, setSelectedAge] = React.useState('2011');
  const [selectedOpponentKey, setSelectedOpponentKey] = React.useState('');
  const [tallies, setTallies] = React.useState('99-00');
  const [opponentTeam, setOpponentTeam] = React.useState(defaultOpponentTeam);

  const handleInputChange = (event) => {
    setTallies(event.target.value);
  };

  const handleSelectChange = (event) => {
    const key = event.target.value;
    const teams = {
      coslada: {
        name: 'CB COSLADA',
        logo: 'img/new-logos/coslada-transparent.png',
      },
      patrocinio: {
        name: 'PATROCINIO SAN JOSE',
        logo: 'img/new-logos/patrocinio-transparent.png',
      },
    }

    setOpponentTeam(teams[key]);
    setSelectedOpponentKey(event.target.value);
  };

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  return (
    <div>
      <div className="data-input">
        <label htmlFor="age">Año:</label>
        <select id="age" value={selectedAge} onChange={handleAgeChange}>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
        </select>
        <br />

        <label htmlFor="opponent">Equipo rival:</label>
        <select id="opponent" value={selectedOpponentKey} onChange={handleSelectChange}>
          <option value="">Equipo rival</option>
          <option value="coslada">Coslada</option>
          <option value="patrocinio">Patrocinio</option>
        </select>
        <br />

        <label htmlFor="tallies">Marcador:</label>
        <input id="tallies" type="text" value={tallies} onChange={handleInputChange} />
      </div>

      <div className="flex-container">
        <div className="row header-row">
          <div className="col col-fbm">
            <img src="img/new-logos/fbm-logo-colores-2025-no-ibrcj.png"/>
          </div>
          <div className="col col-headers">
            <div className="header-title category">Cadete {selectedAge}</div>
            <FinalResult tallies={tallies} />
          </div>
        </div>

        <div className="row row-home-team">
          <div className="col">
            CB ALCOBENDAS
          </div>
        </div>

        <div className="row row-visit-team">
          <div className="col">
            {opponentTeam.name}
          </div>
        </div>

        <div className="row row-results">
          <div className="col">
            <img className="logo" src="img/new-logos/alcobendas-transparent.png"/>
          </div>
          <Tallies tallies={tallies} />
          <div className="col">
            <img className="logo" src={opponentTeam.logo} alt="opponent logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
