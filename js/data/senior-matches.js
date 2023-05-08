const matches = [
  {
    date: new Date('2022-10-15T09:30:00'),
    home: teams.revolution,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 54,
        p1: 10,
        p2: 11,
        p3: 19,
        p4: 14,
      },
      away: {
        total: 21,
        p1: 2,
        p2: 0,
        p3: 9,
        p4: 10,
      },
      einar: 4,
    },
  },
  {
    date: new Date('2022-10-22T10:00:00'),
    home: teams.alboradaSenior,
    away: teams.veritas,
    played: true,
    tally: {
      home: {
        total: 69,
        p1: 17,
        p2: 22,
        p3: 15,
        p4: 15,
      },
      away: {
        total: 18,
        p1: 6,
        p2: 0,
        p3: 4,
        p4: 8,
      },
      einar: 4,
    },
  },
  {
    date: new Date('2022-11-05T12:00:00'),
    home: teams.alboradaSenior,
    away: teams.paracuellos,
    played: true,
    tally: {
      home: {
        total: 42,
        p1: 17,
        p2: 11,
        p3: 8,
        p4: 6,
      },
      away: {
        total: 14,
        p1: 2,
        p2: 3,
        p3: 0,
        p4: 9,
      },
      einar: 8,
    },
  },
  {
    date: new Date('2022-11-12T09:15:00'),
    home: teams.boadilla,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 63,
        p1: 13,
        p2: 19,
        p3: 21,
        p4: 10,
      },
      away: {
        total: 22,
        p1: 3,
        p2: 4,
        p3: 11,
        p4: 4,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2022-11-19T10:00:00'),
    home: teams.alboradaSenior,
    away: teams.descansa,
    played: true,
    tally: {
      home: {
        total: 0,
        p1: 0,
        p2: 0,
        p3: 0,
        p4: 0,
      },
      away: {
        total: 0,
        p1: 0,
        p2: 0,
        p3: 0,
        p4: 0,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2022-12-10T18:00:00'),
    home: teams.alboradaSenior,
    away: teams.alcobendas,
    played: true,
    tally: {
      home: {
        total: 20,
        p1: 6,
        p2: 4,
        p3: 2,
        p4: 8,
      },
      away: {
        total: 63,
        p1: 18,
        p2: 10,
        p3: 15,
        p4: 20,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2022-12-11T09:30:00'),
    home: teams.isaac,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 71,
        p1: 18,
        p2: 19,
        p3: 14,
        p4: 20,
      },
      away: {
        total: 30,
        p1: 4,
        p2: 6,
        p3: 8,
        p4: 12,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2022-12-17T12:00:00'),
    home: teams.alboradaSenior,
    away: teams.paz,
    played: true,
    tally: {
      home: {
        total: 46,
        p1: 17,
        p2: 15,
        p3: 8,
        p4: 6,
      },
      away: {
        total: 27,
        p1: 6,
        p2: 6,
        p3: 6,
        p4: 9,
      },
      einar: 7,
    },
  },
  {
    date: new Date('2022-12-18T16:00:00'),
    home: teams.osuna,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 51,
        p1: 13,
        p2: 12,
        p3: 12,
        p4: 14,
      },
      away: {
        total: 35,
        p1: 5,
        p2: 8,
        p3: 9,
        p4: 13,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-01-14T00:00:00'),
    home: teams.fenixSenior,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 41,
        p1: 13,
        p2: 5,
        p3: 8,
        p4: 15,
      },
      away: {
        total: 36,
        p1: 7,
        p2: 15,
        p3: 5,
        p4: 9,
      },
      einar: 11,
    },
  },
  {
    date: new Date('2023-01-21T16:30:00'),
    home: teams.alboradaSenior,
    away: teams.salesianos,
    played: true,
    tally: {
      home: {
        total: 2,
        p1: 2,
        p2: 0,
        p3: 0,
        p4: 0,
      },
      away: {
        total: 54,
        p1: 26,
        p2: 23,
        p3: 4,
        p4: 1,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-01-28T10:00:00'),
    home: teams.alboradaSenior,
    away: teams.revolution,
    played: true,
    tally: {
      home: {
        total: 37,
        p1: 8,
        p2: 7,
        p3: 6,
        p4: 16,
      },
      away: {
        total: 48,
        p1: 12,
        p2: 14,
        p3: 14,
        p4: 8,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-02-04T11:15:00'),
    home: teams.veritas,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 31,
        p1: 6,
        p2: 2,
        p3: 14,
        p4: 9,
      },
      away: {
        total: 35,
        p1: 8,
        p2: 2,
        p3: 7,
        p4: 18,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-02-11T10:00:00'),
    home: teams.paracuellos,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 66,
        p1: 15,
        p2: 14,
        p3: 25,
        p4: 12,
      },
      away: {
        total: 46,
        p1: 11,
        p2: 9,
        p3: 16,
        p4: 10,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-02-12T10:00:00'),
    home: teams.alboradaSenior,
    away: teams.boadilla,
    played: true,
    tally: {
      home: {
        total: 14,
        p1: 6,
        p2: 5,
        p3: 3,
        p4: 0,
      },
      away: {
        total: 65,
        p1: 20,
        p2: 17,
        p3: 16,
        p4: 12,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-02-18T12:00:00'),
    home: teams.descansa,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 0,
        p1: 0,
        p2: 0,
        p3: 0,
        p4: 0,
      },
      away: {
        total: 0,
        p1: 0,
        p2: 0,
        p3: 0,
        p4: 0,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-03-04T10:00:00'),
    home: teams.alboradaSenior,
    away: teams.osuna,
    played: true,
    tally: {
      home: {
        total: 29,
        p1: 9,
        p2: 7,
        p3: 4,
        p4: 9,
      },
      away: {
        total: 26,
        p1: 6,
        p2: 0,
        p3: 18,
        p4: 2,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-03-11T12:00:00'),
    home: teams.alcobendas,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 62,
        p1: 15,
        p2: 22,
        p3: 13,
        p4: 12,
      },
      away: {
        total: 12,
        p1: 6,
        p2: 6,
        p3: 0,
        p4: 0,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-03-25T19:30:00'),
    home: teams.paz,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 28,
        p1: 12,
        p2: 0,
        p3: 10,
        p4: 6,
      },
      away: {
        total: 58,
        p1: 8,
        p2: 12,
        p3: 18,
        p4: 20,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-04-14T19:00:00'),
    home: teams.alboradaSenior,
    away: teams.fenixSenior,
    played: true,
    tally: {
      home: {
        total: 22,
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 8,
      },
      away: {
        total: 40,
        p1: 13,
        p2: 14,
        p3: 6,
        p4: 7,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-04-21T19:30:00'),
    home: teams.alboradaSenior,
    away: teams.isaac,
    played: true,
    tally: {
      home: {
        total: 45,
        p1: 12,
        p2: 8,
        p3: 9,
        p4: 16,
      },
      away: {
        total: 22,
        p1: 7,
        p2: 6,
        p3: 7,
        p4: 2,
      },
      einar: 7,
    },
  },
  {
    date: new Date('2023-04-22T12:00:00'),
    home: teams.salesianos,
    away: teams.alboradaSenior,
    played: true,
    tally: {
      home: {
        total: 54,
        p1: 18,
        p2: 8,
        p3: 11,
        p4: 17,
      },
      away: {
        total: 24,
        p1: 6,
        p2: 5,
        p3: 4,
        p4: 9,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-05-06T19:00:00'),
    home: teams.alboradaSenior,
    away: teams.maravillas,
    played: true,
    tally: {
      home: {
        total: 11,
        p1: 4,
        p2: 5,
        p3: 2,
        p4: 0,
      },
      away: {
        total: 61,
        p1: 18,
        p2: 23,
        p3: 20,
        p4: 0,
      },
      einar: 2,
    },
  },
  {
    date: new Date('2023-05-13T09:00:00'),
    home: teams.maravillas,
    away: teams.alboradaSenior,
    played: false,
  },
];
