function MatchDateTime({ date }) {

  function formatMonth() {
    switch (date.getMonth()) {
    case 0: return 'ENE';
    case 1: return 'FEB';
    case 2: return 'MAR';
    case 3: return 'ABR';
    case 4: return 'MAY';
    case 5: return 'JUN';
    case 6: return 'JUL';
    case 7: return 'AGO';
    case 8: return 'SEP';
    case 9: return 'OCT';
    case 10: return 'NOV';
    case 11: return 'DIC';
    default: return '-';
    }
  }

  function formatTime() {
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  return <div className="match-date-time">
    <div className="match-date-day">{ date.getDate() }</div>
    <div className="match-date-month">{ formatMonth() }</div>
    <div className="match-time">{ formatTime() }</div>
  </div>;
}
