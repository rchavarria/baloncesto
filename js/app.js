function App() {
  const played = matches.filter(m => m.played);
  const notPlayed = matches.filter(m => !m.played);

  return <>
    { played.map((match, index) => <PlayedMatch key={index} match={match} />) }
    { notPlayed.map((match, index) => <ScheduledMatch key={index} match={match} />) }
  </>;
}
