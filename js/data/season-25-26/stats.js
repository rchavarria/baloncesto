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
    round: 9901,
    date: '2025-09-06T12:00:00',
    team: teams.rozas,
    time: {
      minutes: -1,
      seconds: -1,
    },
    points: -1,
    throws: {
      free: {
        successful: -1,
        total: -1,
      },
      two: -1,
      three: 0,
    },
    faults: -1,
    valuation: -1,
  },
  {
    round: 9902,
    date: '2025-09-07T11:15:00',
    team: teams.godella,
    time: {
      minutes: -1,
      seconds: -1,
    },
    points: -1,
    throws: {
      free: {
        successful: -1,
        total: -1,
      },
      two: -1,
      three: 0,
    },
    faults: -1,
    valuation: -1,
  },
  {
    round: 9903,
    date: '2025-09-13T11:30:00',
    team: teams.canoe,
    time: {
      minutes: -1,
      seconds: -1,
    },
    points: -1,
    throws: {
      free: {
        successful: 3,
        total: 6,
      },
      two: -1,
      three: 0,
    },
    faults: -1,
    valuation: -1,
  },
  {
    round: 9904,
    date: '2025-09-18T20:00:00',
    team: teams.distrito,
    time: {
      minutes: 20,
      seconds: 0,
    },
    points: -1,
    throws: {
      free: {
        successful: -1,
        total: -1,
      },
      two: -1,
      three: 0,
    },
    faults: -1,
    valuation: -1,
  },
  {
    round: 1001,
    date: '2025-09-20T11:00:00',
    team: teams.realMadrid,
    time: {
      minutes: 17,
      seconds: 48,
    },
    points: 4,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: {
        successful: 2,
        total: 5,
      },
      three: {
        successful: 0,
        total: 1,
      },
    },
    faults: 2,
    plusMinus: 0,
    valuation: -5,
  },
  {
    round: 1101,
    date: '2025-09-20T18:30:00',
    team: teams.alcorcon,
    time: {
      minutes: 17,
      seconds: 48,
    },
    points: 6,
    throws: {
      free: {
        successful: 2,
        total: 4,
      },
      two: 2,
      three: 0,
    },
    faults: 1,
    valuation: 3,
  },
  {
    round: 1002,
    date: '2025-09-28T11:30:00',
    team: teams.rozas,
    time: {
      minutes: 28,
      seconds: 20,
    },
    points: 6,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: {
        successful: 3,
        total: 6,
      },
      three: {
        successful: 0,
        total: 1,
      },
    },
    faults: 1,
    plusMinus: 0,
    valuation: 6,
  },
  {
    round: 1102,
    date: '2025-09-28T20:15:00',
    team: teams.zentro,
    time: {
      minutes: 21,
      seconds: 20,
    },
    points: 15,
    throws: {
      free: {
        successful: 1,
        total: 3,
      },
      two: 7,
      three: 0,
    },
    faults: 1,
    valuation: 12,
  },
  {
    round: 1103,
    date: '2025-10-04T11:15:00',
    team: teams.coslada,
    time: {
      minutes: 13,
      seconds: 12,
    },
    points: 7,
    throws: {
      free: {
        successful: 1,
        total: 4,
      },
      two: 3,
      three: 0,
    },
    faults: 4,
    plusMinus: 22,
    valuation: 0,
  },
  {
    round: 1003,
    date: '2025-10-04T18:15:00',
    team: teams.rozas,
    time: {
      minutes: 18,
      seconds: 36,
    },
    points: 6,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: {
        successful: 1,
        total: 4,
      },
      three: {
        successful: 1,
        total: 1,
      },
    },
    faults: 4,
    plusMinus: 7,
    valuation: 4,
  },
  {
    round: 1004,
    date: '2025-10-18T19:00:00',
    team: teams.estudiantes,
    time: {
      minutes: 14,
      seconds: 27,
    },
    points: 14,
    throws: {
      free: {
        successful: 4,
        total: 7,
      },
      two: {
        successful: 5,
        total: 6,
      },
      three: {
        successful: 0,
        total: 0,
      },
    },
    faults: 3,
    plusMinus: -8,
    valuation: 16,
  },
  {
    round: 1104,
    date: '2025-10-19T18:00:00',
    team: teams.valcude,
    time: {
      minutes: 18,
      seconds: 36,
    },
    points: 6,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 3,
      three: 0,
    },
    faults: 4,
    plusMinus: 17,
    valuation: 2,
  },
  {
    round: 1105,
    date: '2025-10-25T11:15:00',
    team: teams.sanJorge,
    time: {
      minutes: 27,
      seconds: 6,
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
    faults: 0,
    plusMinus: -2,
    valuation: 6,
  },
  {
    round: 1005,
    date: '2025-10-26T12:00:00',
    team: teams.fuenlabrada,
    time: {
      minutes: 16,
      seconds: 24,
    },
    points: 1,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: {
        successful: 0,
        total: 2,
      },
      three: {
        successful: 0,
        total: 0,
      },
    },
    faults: 4,
    plusMinus: -14,
    valuation: -4,
  },
  {
    round: 1106,
    date: '2025-11-09T13:30:00',
    team: teams.alcorcon,
    time: {
      minutes: 13,
      seconds: 45,
    },
    points: 6,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: 3,
      three: 0,
    },
    faults: 0,
    plusMinus: -17,
    valuation: 6,
  },
  {
    round: 1006,
    date: '2025-11-09T18:00:00',
    team: teams.realMadrid,
    time: {
      minutes: 16,
      seconds: 4,
    },
    points: 7,
    throws: {
      free: {
        successful: 1,
        total: 2,
      },
      two: {
        successful: 3,
        total: 5,
      },
      three: {
        successful: 0,
        total: 1,
      },
    },
    faults: 1,
    plusMinus: -18,
    valuation: 7,
  },
  {
    round: 1107,
    date: '2025-11-15T11:15:00',
    team: teams.zentro,
    time: {
      minutes: 28,
      seconds: 13,
    },
    points: 10,
    throws: {
      free: {
        successful: 2,
        total: 4,
      },
      two: 4,
      three: 0,
    },
    faults: 4,
    plusMinus: 8,
    valuation: 4,
  },
  {
    round: 1007,
    date: '2025-11-16T13:30:00',
    team: teams.rozas,
    time: {
      minutes: 18,
      seconds: 7,
    },
    points: 6,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: {
        successful: 3,
        total: 6,
      },
      three: {
        successful: 0,
        total: 0,
      },
    },
    faults: 4,
    plusMinus: 8,
    valuation: 2,
  },
  {
    round: 110201,
    date: '2025-11-21T19:45:00',
    team: teams.realMadrid,
    time: {
      minutes: 18,
      seconds: 49,
    },
    points: 10,
    throws: {
      free: {
        successful: 2,
        total: 2,
      },
      two: {
        successful: 4,
        total: 5,
      },
      three: {
        successful: 0,
        total: 2,
      },
    },
    faults: 2,
    plusMinus: -13,
    valuation: 7,
  },
  {
    round: 110202,
    date: '2025-11-22T11:15:00',
    team: teams.joventut,
    time: {
      minutes: 25,
      seconds: 14,
    },
    points: 8,
    throws: {
      free: {
        successful: 2,
        total: 7,
      },
      two: {
        successful: 4,
        total: 4,
      },
      three: {
        successful: 0,
        total: 0,
      },
    },
    faults: 2,
    plusMinus: 6,
    valuation: 11,
  },
  {
    round: 110203,
    date: '2025-11-23T09:00:00',
    team: teams.seleccionMadrid,
    time: {
      minutes: 31,
      seconds: 1,
    },
    points: 16,
    throws: {
      free: {
        successful: 6,
        total: 12,
      },
      two: {
        successful: 5,
        total: 8,
      },
      three: {
        successful: 0,
        total: 0,
      },
    },
    faults: 4,
    plusMinus: 6,
    valuation: 14,
  },
  {
    round: 1108,
    date: '2025-11-27T19:45:00',
    team: teams.coslada,
    time: {
      minutes: 12,
      seconds: 4,
    },
    points: 2,
    throws: {
      free: {
        successful: 2,
        total: 2,
      },
      two: 0,
      three: 0,
    },
    faults: 3,
    plusMinus: 3,
    valuation: -1,
  },
  {
    round: 1009,
    date: '2025-11-30T11:30:00',
    team: teams.estudiantes,
    time: {
      minutes: 20,
      seconds: 27,
    },
    points: 6,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: {
        successful: 3,
        total: 3,
      },
      three: {
        successful: 0,
        total: 0,
      },
    },
    faults: 4,
    plusMinus: -32,
    valuation: 5,
  },
  {
    round: 1109,
    date: '2025-11-30T18:00:00',
    team: teams.valcude,
    time: {
      minutes: 25,
      seconds: 20,
    },
    points: 17,
    throws: {
      free: {
        successful: 1,
        total: 3,
      },
      two: 8,
      three: 0,
    },
    faults: 4,
    plusMinus: 28,
    valuation: 13,
  },
  {
    round: 1008,
    date: '2025-12-13T13:15:00',
    team: teams.patrocinio,
    time: {
      minutes: 0,
      seconds: 0,
    },
    points: 0,
    throws: {
      free: {
        successful: 0,
        total: 0,
      },
      two: {
        successful: 0,
        total: 0,
      },
      three: {
        successful: 0,
        total: 0,
      },
    },
    faults: 0,
    plusMinus: 0,
    valuation: 0,
  },
]
