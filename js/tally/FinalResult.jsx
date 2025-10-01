const FinalResult = ({ tallies }) => {
  const [ rawHome, rawVisit ] = tallies.split('-');
  const home = parseInt(rawHome, 10);
  const visit = parseInt(rawVisit, 10);
  let result = '🐛';
  if (isNaN(home) || isNaN(visit)) {
    result = '🐛';
  } else if (home === visit) {
    result = '🔀';
  } else if (home > visit) {
    result = '🤩';
  } else {
    result = '😭';
  }

  return (
    <div className="header-title result">{result} Resultado Final</div>
  );
};
