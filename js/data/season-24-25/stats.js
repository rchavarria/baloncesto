const stats = [
  {
    round: 'num jornada',
    date: '2022-10-22T00:00:00',
    team: {
      short: 'nombre corto',
      name: 'nombre largo',
      venue: 'donde juega',
    },
    time: {
      minutes: 26,
      seconds: 47,
    },
    points: 19,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 18,
      three: 1,
    },
    faults: 'num faltas cometidas',
    valuation: 'valoracion (aunque no se como se calcula)',
  },
  {
    round: 1,
    date: '2024-09-25T19:00:00',
    team: teams.realMadrid,
    time: {
      minutes: 31,
      seconds: 25,
    },
    points: 13,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: 6,
      three: 0,
    },
    faults: 1,
    valuation: -11,
  },
  {
    round: 2,
    date: '2024-09-29T11:15:00',
    team: teams.alcorcon,
    time: {
      minutes: 33,
      seconds: 41,
    },
    points: 12,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 6,
      three: 0,
    },
    faults: 3,
    valuation: 24,
  },
  {
    round: 3,
    date: '2024-10-06T19:30:00',
    team: teams.sba,
    time: {
      minutes: 23,
      seconds: 10,
    },
    points: 13,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: 6,
      three: 0,
    },
    faults: 4,
    valuation: 19,
  },
  {
    round: 104,
    date: '2024-10-19T16:45:00',
    team: teams.murcia,
    time: {
      minutes: 25,
      seconds: 0,
    },
    points: 13,
    throws: {
      free: {
        successful: 1,
        total: 7,
      },
      two: 6,
      three: 0,
    },
    faults: 2,
    valuation: 0,
  },
  {
    round: 4,
    date: '2024-10-20T11:30:00',
    team: teams.canoe,
    time: {
      minutes: 29,
      seconds: 56,
    },
    points: 18,
    throws: {
      free: {
        successful: 4,
        total: 5,
      },
      two: 7,
      three: 0,
    },
    faults: 2,
    valuation: 16,
  },
  {
    round: 5,
    date: '2024-10-27T18:00:00',
    team: teams.rozas,
    time: {
      minutes: 29,
      seconds: 40,
    },
    points: 14,
    throws: {
      free: {
        successful: 0,
        total: 2,
      },
      two: 7,
      three: 0,
    },
    faults: 2,
    valuation: 3,
  },
  {
    round: 6,
    date: '2024-11-10T13:30:00',
    team: teams.realMadrid,
    time: {
      minutes: 32,
      seconds: 13,
    },
    points: 20,
    throws: {
      free: {
        successful: 2,
        total: 3,
      },
      two: 9,
      three: 0,
    },
    faults: 2,
    valuation: -3,
  },
  {
    round: 7,
    date: '2024-11-17T13:30:00',
    team: teams.alcorcon,
    time: {
      minutes: 26,
      seconds: 27,
    },
    points: 13,
    throws: {
      free: {
        successful: 0,
        total: 2,
      },
      two: 5,
      three: 1,
    },
    faults: 2,
    valuation: 18,
  },
  {
    round: 201,
    date: '2024-11-22T18:00:00',
    team: teams.estudiantes,
    time: {
      minutes: 17,
      seconds: 26,
    },
    points: 4,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 2,
      three: 0,
    },
    faults: 4,
    valuation: -19,
  },
  {
    round: 202,
    date: '2024-11-23T09:00:00',
    team: teams.barcelona,
    time: {
      minutes: 23,
      seconds: 59,
    },
    points: 7,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: 3,
      three: 0,
    },
    faults: 2,
    valuation: -23,
  },
  {
    round: 8,
    date: '2024-11-27T20:00:00',
    team: teams.sba,
    time: {
      minutes: 18,
      seconds: 27,
    },
    points: 16,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 8,
      three: 0,
    },
    faults: 2,
    valuation: 33,
  },
  {
    round: 9,
    date: '2024-12-01T13:00:00',
    team: teams.canoe,
    time: {
      minutes: 27,
      seconds: 13,
    },
    points: 8,
    throws: {
      free: {
        successful: 2,
        total: 4,
      },
      two: 3,
      three: 0,
    },
    faults: 3,
    valuation: 2,
  },
  {
    round: 301,
    date: '2024-12-07T16:00:00',
    team: teams.estudiantes,
    time: {
      minutes: 35,
      seconds: 40,
    },
    points: 14,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 7,
      three: 0,
    },
    faults: 2,
    valuation: -1,
  },
  {
    round: 204,
    date: '2024-12-22T15:00:00',
    team: teams.valencia,
    time: {
      minutes: 25,
      seconds: 1,
    },
    points: 8,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 4,
      three: 0,
    },
    faults: 3,
    valuation: 14,
  },
  {
    round: 205,
    date: '2024-12-27T18:00:00',
    team: teams.catalunya,
    time: {
      minutes: 10,
      seconds: 38,
    },
    points: 0,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 0,
      three: 0,
    },
    faults: 0,
    valuation: -2,
  },
  {
    round: 206,
    date: '2024-12-28T09:45:00',
    team: teams.aragon,
    time: {
      minutes: 22,
      seconds: 0,
    },
    points: 6,
    throws: {
      free: {
        successful: 2,
        total: 2,
      },
      two: 2,
      three: 0,
    },
    faults: 3,
    valuation: 3,
  },
  {
    round: 207,
    date: '2024-12-30T09:30:00',
    team: teams.canarias,
    time: {
      minutes: 11,
      seconds: 38,
    },
    points: 4,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 2,
      three: 0,
    },
    faults: 5,
    valuation: 3,
  },
  {
    round: 208,
    date: '2025-01-03T13:30:00',
    team: teams.murcia,
    time: {
      minutes: 13,
      seconds: 9,
    },
    points: 2,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 1,
      three: 0,
    },
    faults: 3,
    valuation: 22,
  },
  {
    round: 209,
    date: '2025-01-04T09:30:00',
    team: teams.melilla,
    time: {
      minutes: 6,
      seconds: 56,
    },
    points: 5,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: 2,
      three: 0,
    },
    faults: 2,
    valuation: 11,
  },
  {
    round: 210,
    date: '2025-01-04T17:30:00',
    team: teams.canarias,
    time: {
      minutes: 12,
      seconds: 21,
    },
    points: 8,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 4,
      three: 0,
    },
    faults: 3,
    valuation: 10,
  },
  {
    round: 211,
    date: '2025-01-05T15:30:00',
    team: teams.baleares,
    time: {
      minutes: 22,
      seconds: 7,
    },
    points: 9,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: 4,
      three: 0,
    },
    faults: 2,
    valuation: 14,
  },
  {
    round: 212,
    date: '2025-01-06T19:30:00',
    team: teams.baleares,
    time: {
      minutes: 20,
      seconds: 49,
    },
    points: 0,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 0,
      three: 0,
    },
    faults: 5,
    valuation: 1,
  },
  {
    round: 213,
    date: '2025-01-07T11:30:00',
    team: teams.valencia,
    time: {
      minutes: 13,
      seconds: 10,
    },
    points: 6,
    throws: {
      free: {
        successful: 2,
        total: 2,
      },
      two: 2,
      three: 0,
    },
    faults: 4,
    valuation: 10,
  },
  {
    round: 11,
    date: '2025-01-12T13:00:00',
    team: teams.estudiantes,
    time: {
      minutes: 24,
      seconds: 41,
    },
    points: 11,
    throws: {
      free: {
        successful: 1,
        total: 1,
      },
      two: 5,
      three: 0,
    },
    faults: 3,
    valuation: 8,
  },
  {
    round: 12,
    date: '2025-01-19T09:15:00',
    team: teams.rozas,
    time: {
      minutes: 30,
      seconds: 17,
    },
    points: 10,
    throws: {
      free: {
        successful: 2,
        total: 2,
      },
      two: 4,
      three: 0,
    },
    faults: 3,
    valuation: 1,
  },
  {
    round: 13,
    date: '2025-01-29T19:30:00',
    team: teams.realMadrid,
    time: {
      minutes: 30,
      seconds: 7,
    },
    points: 8,
    throws: {
      free: {
        successful: 2,
        total: 4,
      },
      two: 3,
      three: 0,
    },
    faults: 4,
    valuation: -26,
  },
  {
    round: 14,
    date: '2025-02-02T13:30:00',
    team: teams.urosRivas,
    time: {
      minutes: 12,
      seconds: 50,
    },
    points: 8,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 4,
      three: 0,
    },
    faults: 0,
    valuation: 17,
  },
  {
    round: 15,
    date: '2025-02-09T13:15:00',
    team: teams.tresCantos,
    time: {
      minutes: 25,
      seconds: 19,
    },
    points: 17,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: 8,
      three: 0,
    },
    faults: 0,
    valuation: 24,
  },
  {
    round: 16,
    date: '2025-02-16T11:15:00',
    team: teams.estudiantes,
    time: {
      minutes: 23,
      seconds: 26,
    },
    points: 17,
    throws: {
      free: {
        successful: 1,
        total: 1,
      },
      two: 8,
      three: 0,
    },
    faults: 3,
    valuation: 13,
  },
  {
    round: 17,
    date: '2025-02-23T18:00:00',
    team: teams.rozas,
    time: {
      minutes: 15,
      seconds: 43,
    },
    points: 9,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: 4,
      three: 0,
    },
    faults: 5,
    valuation: -1,
  },
  {
    round: 18,
    date: '2025-03-02T11:15:00',
    team: teams.realMadrid,
    time: {
      minutes: 35,
      seconds: 31,
    },
    points: 12,
    throws: {
      free: {
        successful: 2,
        total: 2,
      },
      two: 5,
      three: 0,
    },
    faults: 1,
    valuation: -20,
  },
  {
    round: 318,
    date: '2025-03-03T18:30:00',
    team: teams.valcude,
    time: {
      minutes: 7,
      seconds: 2,
    },
    points: 2,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 1,
      three: 0,
    },
    faults: 2,
    valuation: 6,
  },
  {
    round: 19,
    date: '2025-03-09T09:15:00',
    team: teams.urosRivas,
    time: {
      minutes: 22,
      seconds: 4,
    },
    points: 13,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: 6,
      three: 0,
    },
    faults: 3,
    valuation: 34,
  },
  {
    round: 19,
    date: '2025-03-16T12:30:00',
    team: teams.tresCantos,
    time: {
      minutes: 13,
      seconds: 0,
    },
    points: 6,
    throws: {
      free: {
        successful: 2,
        total: 2,
      },
      two: 2,
      three: 0,
    },
    faults: 2,
    valuation: 30,
  },
  {
    round: 321,
    date: '2025-03-22T18:30:00',
    team: teams.torrejon,
    time: {
      minutes: 9,
      seconds: 34,
    },
    points: 2,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 1,
      three: 0,
    },
    faults: 2,
    valuation: 1,
  },
]
