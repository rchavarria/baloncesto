function App() {
  return matches.map((match, index) => <ScheduledMatch key={index} match={match} />);
}
