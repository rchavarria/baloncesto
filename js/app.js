function App() {
  const played = matches.filter(m => m.played);
  const notPlayed = matches.filter(m => !m.played);
  const officialStandings = `https://fbm.es/informes.aspx?delegacion=1&grupo=${officialStandingGroup}&informe=resultados-clasificacion-proxima&ultima_jornada=${lastMatchDay}&proxima_jornada=${lastMatchDay + 1}`;

  return <>
    <h1>Próximo partido</h1>
    <ScheduledMatch match={matches[nextScheduledMatchIndex]} />

    <h1>Partidos jugados</h1>
    { played.map((match, index) => <PlayedMatch key={index} match={match} />) }

    <h1>
      Clasificación
      (ver la oficial en <a href={officialStandings}>pdf</a>)
    </h1>
    <Standings />

    <h1>Partidos por jugar</h1>
    { notPlayed.map((match, index) => <ScheduledMatch key={index} match={match} />) }
  </>;
}
