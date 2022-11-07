function App() {
  const played = matches.filter(m => m.played);
  const notPlayed = matches.filter(m => !m.played);

  return <>
    <h1>Próximo partido</h1>
    <ScheduledMatch match={matches[nextScheduledMatchIndex]} />

    <h1>Partidos jugados</h1>
    { played.map((match, index) => <PlayedMatch key={index} match={match} />) }

    <h1>Clasificación</h1>
    <Standings />

    <h1>Partidos por jugar</h1>
    { notPlayed.map((match, index) => <ScheduledMatch key={index} match={match} />) }
  </>;
}
