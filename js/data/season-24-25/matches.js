const matches = [
  {
    date: new Date('2024-09-25T19:00:00'),
    home: teams.realMadrid,
    away: teams.alcobendas,
    played: true,
    tally: {
      home: {
        total: 83,
        p1: 29,
        p2: 20,
        p3: 17,
        p4: 17,
      },
      away: {
        total: 61,
        p1: 20,
        p2: 11,
        p3: 22,
        p4: 8,
      },
      einar: 13,
    },
  },
  {
    date: new Date('2024-09-29T11:15:00'),
    home: teams.alcobendas,
    away: teams.alcorcon,
    played: true,
    tally: {
      home: {
        total: 67,
        p1: 9,
        p2: 19,
        p3: 18,
        p4: 21,
      },
      away: {
        total: 50,
        p1: 8,
        p2: 8,
        p3: 17,
        p4: 17,
      },
      einar: 12,
    },
  },
  {
    date: new Date('2024-10-06T19:30:00'),
    home: teams.sba,
    away: teams.alcobendas,
    played: true,
    tally: {
      home: {
        total: 89,
        p1: 24,
        p2: 29,
        p3: 15,
        p4: 21,
      },
      away: {
        total: 111,
        p1: 29,
        p2: 27,
        p3: 31,
        p4: 24,
      },
      einar: 13,
    },
  },
  {
    date: new Date('2024-10-19T16:45:00'),
    home: teams.alcobendas,
    away: teams.murcia,
    played: true,
    tally: {
      home: {
        total: 68,
        p1: 22,
        p2: 9,
        p3: 21,
        p4: 16,
      },
      away: {
        total: 76,
        p1: 13,
        p2: 20,
        p3: 16,
        p4: 27,
      },
      einar: 13,
    },
  },
  {
    date: new Date('2024-10-20T11:30:00'),
    home: teams.alcobendas,
    away: teams.canoe,
    played: true,
    tally: {
      home: {
        total: 82,
        p1: 21,
        p2: 23,
        p3: 19,
        p4: 19,
      },
      away: {
        total: 69,
        p1: 14,
        p2: 14,
        p3: 16,
        p4: 25,
      },
      einar: 18,
    },
  },
  {
    date: new Date('2024-10-27T18:00:00'),
    home: teams.rozas,
    away: teams.alcobendas,
    played: true,
    tally: {
      home: {
        total: 67,
        p1: 18,
        p2: 25,
        p3: 16,
        p4: 8,
      },
      away: {
        total: 62,
        p1: 9,
        p2: 14,
        p3: 19,
        p4: 20,
      },
      einar: 14,
    },
  },
  {
    date: new Date('2024-11-10T13:30:00'),
    home: teams.alcobendas,
    away: teams.realMadrid,
    played: true,
    tally: {
      home: {
        total: 76,
        p1: 26,
        p2: 17,
        p3: 12,
        p4: 21,
      },
      away: {
        total: 86,
        p1: 17,
        p2: 25,
        p3: 26,
        p4: 18,
      },
      einar: 20,
    },
  },
  {
    date: new Date('2024-11-17T13:30:00'),
    home: teams.alcorcon,
    away: teams.alcobendas,
    played: true,
    tally: {
      home: {
        total: 70,
        p1: 18,
        p2: 19,
        p3: 20,
        p4: 13,
      },
      away: {
        total: 94,
        p1: 28,
        p2: 22,
        p3: 21,
        p4: 23,
      },
      einar: 13,
    },
  },
  {
    date: new Date('2024-11-22T18:00:00'),
    home: teams.seleccionMadrid,
    away: teams.estudiantes,
    played: true,
    tally: {
      home: {
        total: 63,
        p1: 13,
        p2: 19,
        p3: 24,
        p4: 7,
      },
      away: {
        total: 100,
        p1: 18,
        p2: 23,
        p3: 31,
        p4: 28,
      },
      einar: 4,
    },
  },
  {
    date: new Date('2024-11-23T09:00:00'),
    home: teams.seleccionMadrid,
    away: teams.barcelona,
    played: true,
    tally: {
      home: {
        total: 39,
        p1: 12,
        p2: 9,
        p3: 9,
        p4: 9,
      },
      away: {
        total: 104,
        p1: 33,
        p2: 26,
        p3: 22,
        p4: 23,
      },
      einar: 7,
    },
  },
  {
    date: new Date('2024-11-27T20:00:00'),
    home: teams.alcobendas,
    away: teams.sba,
    played: true,
    tally: {
      home: {
        total: 97,
        p1: 34,
        p2: 19,
        p3: 20,
        p4: 24,
      },
      away: {
        total: 54,
        p1: 17,
        p2: 9,
        p3: 16,
        p4: 12,
      },
      einar: 16,
    },
  },
  {
    date: new Date('2024-12-01T13:00:00'),
    home: teams.canoe,
    away: teams.alcobendas,
    played: true,
    tally: {
      home: {
        total: 72,
        p1: 21,
        p2: 13,
        p3: 17,
        p4: 21,
      },
      away: {
        total: 68,
        p1: 17,
        p2: 16,
        p3: 15,
        p4: 20,
      },
      einar: 8,
    },
  },
  {
    date: new Date('2024-12-07T16:00:00'),
    home: teams.estudiantes,
    away: teams.alcobendas,
    played: true,
    tally: {
      home: {
        total: 87,
        p1: 15,
        p2: 22,
        p3: 24,
        p4: 26,
      },
      away: {
        total: 83,
        p1: 28,
        p2: 14,
        p3: 13,
        p4: 28,
      },
      einar: 14,
    },
  },
  {
    date: new Date('2024-12-22T15:00:00'),
    home: teams.seleccionMadrid,
    away: teams.valencia,
    played: true,
    tally: {
      home: {
        total: 79,
        p1: 27,
        p2: 14,
        p3: 24,
        p4: 14,
      },
      away: {
        total: 67,
        p1: 20,
        p2: 11,
        p3: 19,
        p4: 17,
      },
      einar: 8,
    },
  },
  {
    date: new Date('2024-12-27T18:00:00'),
    home: teams.seleccionMadrid,
    away: teams.catalunya,
    played: true,
    tally: {
      home: {
        total: 59,
        p1: 20,
        p2: 15,
        p3: 17,
        p4: 7,
      },
      away: {
        total: 70,
        p1: 18,
        p2: 18,
        p3: 21,
        p4: 13,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-12-28T09:45:00'),
    home: teams.seleccionMadrid,
    away: teams.aragon,
    played: true,
    tally: {
      home: {
        total: 66,
        p1: 19,
        p2: 22,
        p3: 12,
        p4: 13,
      },
      away: {
        total: 60,
        p1: 15,
        p2: 16,
        p3: 9,
        p4: 20,
      },
      einar: 6,
    },
  },
];
