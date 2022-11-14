function Standings() {

  function renderRow(teamStanding, index) {
    const alboradaRow = teamStanding.team === teams.alboradaJunior || teamStanding.team === teams.alboradaSenior
      ? 'row-alborada'
      : '';

    return <tr key={index} className={alboradaRow}>
      <td className="col-position">{ index + 1 }</td>
      <td className="col-team">
        <img className="small-team-logo" src={teamStanding.team.logo} alt={teamStanding.team.name} />
        <span>
          { teamStanding.team.name }
        </span>
      </td>
      <td className="col-games">{ teamStanding.games }</td>
      <td className="col-wins">{ teamStanding.wins }</td>
      <td className="col-loses">{ teamStanding.loses }</td>
      {/*<td className="col-draws">{ teamStanding.draws }</td>*/}
      {/*<td className="col-score">{ teamStanding.score }</td>*/}
      {/*<td className="col-oppositeScore">{ teamStanding.oppositeScore }</td>*/}
      <td className="col-points">{ teamStanding.points }</td>
    </tr>;
  }

  return <table>
    <colgroup>
      <col className="col-position"></col>
      <col className="col-team"></col>
      <col className="col-games"></col>
      <col className="col-wins"></col>
      <col className="col-loses"></col>
      {/*<col className="col-draws"></col>*/}
      {/*<col className="col-score"></col>*/}
      {/*<col className="col-oppositeScore"></col>*/}
      <col className="col-points"></col>
    </colgroup>
    <thead>
      <tr>
        <th>#</th>
        <th>Equipo</th>
        <th>Jugados</th>
        <th>Ganados</th>
        <th>Perdidos</th>
        {/*<th>Empatados</th>*/}
        {/*<th>A favor</th>*/}
        {/*<th>En contra</th>*/}
        <th>Puntos</th>
      </tr>
    </thead>
    <tbody>
      { standings.map(renderRow) }
    </tbody>
  </table>;
}
