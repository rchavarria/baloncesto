function PlayedMatch({ match }) {
  return <div className="played-match">
    <MatchDateTime date={match.date} map={match.home.stadium.map}/>

    <div className="played-match-teams">
      <div className="played-match-home-team">
        <div className="home-team-logo">{ match.home.logo }</div>
        <div className="played-match-team-name">{ match.home.name }</div>

        <div className="match-quarter">
          <div className="match-quarter-home-header">P1</div>
          <div className="match-quarter-score">{ match.tally.home.p1 }</div>
        </div>
        <div className="match-quarter">
          <div className="match-quarter-home-header">P2</div>
          <div className="match-quarter-score">{ match.tally.home.p2 }</div>
        </div>
        <div className="match-quarter">
          <div className="match-quarter-home-header">P3</div>
          <div className="match-quarter-score">{ match.tally.home.p3 }</div>
        </div>
        <div className="match-quarter">
          <div className="match-quarter-home-header">P4</div>
          <div className="match-quarter-score">{ match.tally.home.p4 }</div>
        </div>

        <div className="match-quarter-total-score">{ match.tally.home.total }</div>
      </div>

      <div className="played-match-away-team">
        <div className="away-team-logo">{ match.away.logo }</div>
        <div className="played-match-team-name">{ match.away.name }</div>

        <div className="match-quarter">
          <div className="match-quarter-away-header">P1</div>
          <div className="match-quarter-score">{ match.tally.away.p1 }</div>
        </div>
        <div className="match-quarter">
          <div className="match-quarter-away-header">P2</div>
          <div className="match-quarter-score">{ match.tally.away.p2 }</div>
        </div>
        <div className="match-quarter">
          <div className="match-quarter-away-header">P3</div>
          <div className="match-quarter-score">{ match.tally.away.p3 }</div>
        </div>
        <div className="match-quarter">
          <div className="match-quarter-away-header">P4</div>
          <div className="match-quarter-score">{ match.tally.away.p4 }</div>
        </div>

        <div className="match-quarter-total-score">{ match.tally.away.total }</div>
      </div>
    </div>
  </div>;
}
