function ScheduledMatch({ match }) {
  return <div className="scheduled-match">
    <div className="teams-and-date">
      <div className="home-team">
        <div className="home-team-logo">{ match.home.logo }</div>
        <div className="home-team-name">{ match.home.name }</div>
      </div>
      <MatchDateTime date={match.date} />
      <div className="away-team">
        <div className="away-team-name">{ match.away.name }</div>
        <div className="away-team-logo">{ match.away.logo }</div>
      </div>
    </div>

    <div className="stadium-address">
      <div className="stadium-address-name">{ match.stadium.address }</div>
      <div className="stadium-address-map">
        <a href={ match.stadium.map }>mapa</a>
      </div>
    </div>
  </div>;
}
