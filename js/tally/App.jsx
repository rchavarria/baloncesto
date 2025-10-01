const App = () => {
  const [tallies, setTallies] = React.useState('99-00');

  const handleInputChange = (event) => {
    setTallies(event.target.value);
  };

  return (
    <div>
      <div className="data-input">
        <label htmlFor="tallies">Marcador:</label>
        <input
          id="tallies"
          type="text"
          value={tallies}
          onChange={handleInputChange}
          placeholder="Escribe algo..."
        />
      </div>

      <div className="flex-container">
        <div className="row header-row">
          <div className="col col-fbm">
            <img src="img/new-logos/fbm-logo-colores-2025-no-ibrcj.png"/>
          </div>
          <div className="col col-headers">
            <div className="header-title category">Cadete 2011</div>
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
            ZENTRO BASKET
          </div>
        </div>

        <div className="row row-results">
          <div className="col">
            <img className="logo" src="img/new-logos/alcobendas-transparent.png"/>
          </div>
          <Tallies tallies={tallies} />
          <div className="col">
            <img className="logo" src="img/new-logos/zentro-transparent.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};
