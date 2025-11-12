function computeEmoji(home, visit) {
  if (isNaN(home) || isNaN(visit)) {
    return "🛠️";
  }

  return (home >= visit) ? "🤩" : "😭";
}
const Emoji = ({ tallies }) => {
  const [ homeTally, visitTally ] = tallies.split('-');
  const home = parseInt(homeTally, 10);
  const visit = parseInt(visitTally, 10);
  const emoji = computeEmoji(home, visit);

  return (
    <div className="result-emoji">{emoji}</div>
  );
};
