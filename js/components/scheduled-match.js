function ScheduledMatch({ match }) {
  return <div className="scheduled-match">
    <div className="teams-and-date">
      <div className="home-team">
        <div className="team-logo-container">
          <img className="team-logo" src={match.home.logo} />
        </div>
        <div className="home-team-name">{ match.home.name }</div>
      </div>
      <MatchDateTime date={match.date} />
      <div className="away-team">
        <div className="away-team-name">{ match.away.name }</div>
        <div className="team-logo-container">
          <img className="team-logo" src={match.away.logo} />
        </div>
      </div>
    </div>

    <div className="stadium-address">
      <div className="stadium-address-name">{ match.home.stadium.address }</div>
      <div>
        <a href={ match.home.stadium.map }>
          <img src="img/icons/map.svg"
               title={ match.home.stadium.address }
               className="stadium-address-map" />
        </a>
      </div>
    </div>
  </div>;
}
