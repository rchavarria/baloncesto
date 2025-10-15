const Tallies = ({ tallies }) => {
  const [ home, visit ] = tallies.split('-');

  return (
    <div className="col col-tally">
      <span className="home-tally">{home}</span>
      <span className="dash-tally">-</span>
      <span className="visit-tally">{visit}</span>
    </div>
  );
};
