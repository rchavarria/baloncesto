function PlayedMatch({ match }) {

  function MatchPart({ part, tallies, team }) {
    const tally = tallies[team];
    if (tally[part] === undefined) {
      return <></>;
    }

    return <div className="match-quarter">
      <div className={`match-quarter-${team}-header`}>{ part.toUpperCase() }</div>
      <div className="match-quarter-score">{ tally[part] }</div>
    </div>;
  }

  return <div className="played-match">
    <MatchDateTime date={match.date} map={match.home.stadium.map}/>

    <div className="played-match-teams">
      <div className="played-match-home-team">
        <div className="home-team-logo">
          <img className="team-logo" src={match.home.logo} />
        </div>
        <div className="played-match-team-name">{ match.home.name }</div>

        <MatchPart part={ 'p1' } tallies={ match.tally } team={'home'} />
        <MatchPart part={ 'p2' } tallies={ match.tally } team={'home'} />
        <MatchPart part={ 'p3' } tallies={ match.tally } team={'home'} />
        <MatchPart part={ 'p4' } tallies={ match.tally } team={'home'} />
        <MatchPart part={ 'p5' } tallies={ match.tally } team={'home'} />
        <MatchPart part={ 'p6' } tallies={ match.tally } team={'home'} />

        <div className="match-quarter-total-score">{ match.tally.home.total }</div>
      </div>

      <div className="played-match-away-team">
        <div className="away-team-logo">
          <img className="team-logo" src={match.away.logo} />
        </div>
        <div className="played-match-team-name">{ match.away.name }</div>

        <MatchPart part={ 'p1' } tallies={ match.tally } team={'away'} />
        <MatchPart part={ 'p2' } tallies={ match.tally } team={'away'} />
        <MatchPart part={ 'p3' } tallies={ match.tally } team={'away'} />
        <MatchPart part={ 'p4' } tallies={ match.tally } team={'away'} />
        <MatchPart part={ 'p5' } tallies={ match.tally } team={'away'} />
        <MatchPart part={ 'p6' } tallies={ match.tally } team={'away'} />

        <div className="match-quarter-total-score">{ match.tally.away.total }</div>
      </div>
    </div>
  </div>;
}
