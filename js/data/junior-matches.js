const matches = [
  {
    date: new Date('2022-10-22T12:00:00'),
    home: teams.alboradaJunior,
    away: teams.valle,
    played: true,
    tally: {
      home: {
        total: 58,
        p1: 3,
        p2: 20,
        p3: 12,
        p4: 11,
        p5: 6,
        p6: 6,
      },
      away: {
        total: 27,
        p1: 9,
        p2: 2,
        p3: 2,
        p4: 2,
        p5: 0,
        p6: 12,
      },
      einar: 19,
    },
  },
  {
    date: new Date('2022-11-05T09:00:00'),
    home: teams.fuenlabrada,
    away: teams.alboradaJunior,
    played: true,
    tally: {
      home: {
        total: 63,
        p1: 11,
        p2: 4,
        p3: 18,
        p4: 8,
        p5: 14,
        p6: 8,
      },
      away: {
        total: 38,
        p1: 9,
        p2: 9,
        p3: 5,
        p4: 4,
        p5: 3,
        p6: 8,
      },
      einar: 18,
    },
  },
  {
    date: new Date('2022-11-19T09:30:00'),
    home: teams.sanfernando,
    away: teams.alboradaJunior,
    played: true,
    tally: {
      home: {
        total: 38,
        p1: 6,
        p2: 10,
        p3: 7,
        p4: 6,
        p5: 7,
        p6: 2,
      },
      away: {
        total: 66,
        p1: 13,
        p2: 9,
        p3: 11,
        p4: 16,
        p5: 0,
        p6: 17,
      },
      einar: 30,
    },
  },
  {
    date: new Date('2022-11-25T19:00:00'),
    home: teams.alboradaJunior,
    away: teams.pilaristas,
    played: true,
    tally: {
      home: {
        total: 81,
        p1: 27,
        p2: 10,
        p3: 19,
        p4: 2,
        p5: 14,
        p6: 9,
      },
      away: {
        total: 31,
        p1: 0,
        p2: 18,
        p3: 7,
        p4: 6,
        p5: 0,
        p6: 0,
      },
      einar: 41,
    },
  },
  {
    date: new Date('2022-12-10T13:30:00'),
    home: teams.saltium,
    away: teams.alboradaJunior,
    played: true,
    tally: {
      home: {
        total: 70,
        p1: 3,
        p2: 5,
        p3: 16,
        p4: 14,
        p5: 17,
        p6: 15,
      },
      away: {
        total: 68,
        p1: 16,
        p2: 15,
        p3: 0,
        p4: 18,
        p5: 8,
        p6: 11,
      },
      einar: 35,
    },
  },
  {
    date: new Date('2022-12-17T10:00:00'),
    home: teams.alboradaJunior,
    away: teams.fenixJunior,
    played: true,
    tally: {
      home: {
        total: 68,
        p1: 16,
        p2: 10,
        p3: 8,
        p4: 11,
        p5: 4,
        p6: 19,
      },
      away: {
        total: 51,
        p1: 11,
        p2: 18,
        p3: 9,
        p4: 8,
        p5: 9,
        p6: 6,
      },
      einar: 31,
    },
  },
  {
    date: new Date('2022-12-18T12:30:00'),
    home: teams.alboradaJunior,
    away: teams.aranjuez,
    played: true,
    tally: {
      home: {
        total: 76,
        p1: 20,
        p2: 17,
        p3: 11,
        p4: 6,
        p5: 14,
        p6: 8,
      },
      away: {
        total: 24,
        p1: 4,
        p2: 7,
        p3: 3,
        p4: 3,
        p5: 5,
        p6: 2,
      },
      einar: 23,
    },
  },
  {
    date: new Date('2023-01-14T12:00:00'),
    home: teams.alboradaJunior,
    away: teams.spinola,
    played: true,
    tally: {
      home: {
        total: 20,
        p1: 0,
        p2: 0,
        p3: 0,
        p4: 0,
        p5: 0,
        p6: 0,
      },
      away: {
        total: 0,
        p1: 0,
        p2: 0,
        p3: 0,
        p4: 0,
        p5: 0,
        p6: 0,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2023-01-21T11:15:00'),
    home: teams.maravillas,
    away: teams.alboradaJunior,
    played: true,
    tally: {
      home: {
        total: 26,
        p1: 2,
        p2: 10,
        p3: 2,
        p4: 4,
        p5: 8,
        p6: 0,
      },
      away: {
        total: 77,
        p1: 22,
        p2: 4,
        p3: 24,
        p4: 14,
        p5: 11,
        p6: 2,
      },
      einar: 40,
    },
  },
  {
    date: new Date('2023-01-28T13:00:00'),
    home: teams.valle,
    away: teams.alboradaJunior,
    played: false,
  },
  {
    date: new Date('2023-02-05T00:00:00'),
    home: teams.alboradaJunior,
    away: teams.fuenlabrada,
    played: false,
  },
  {
    date: new Date('2023-02-12T00:00:00'),
    home: teams.pilaristas,
    away: teams.alboradaJunior,
    played: false,
  },
  {
    date: new Date('2023-02-19T00:00:00'),
    home: teams.alboradaJunior,
    away: teams.sanfernando,
    played: false,
  },
  {
    date: new Date('2023-02-20T00:00:00'),
    home: teams.aranjuez,
    away: teams.alboradaJunior,
    played: false,
  },
  {
    date: new Date('2023-03-05T00:00:00'),
    home: teams.alboradaJunior,
    away: teams.saltium,
    played: false,
  },
  {
    date: new Date('2023-03-12T00:00:00'),
    home: teams.fenixJunior,
    away: teams.alboradaJunior,
    played: false,
  },
  {
    date: new Date('2023-03-19T00:00:00'),
    home: teams.spinola,
    away: teams.alboradaJunior,
    played: false,
  },
  {
    date: new Date('2023-03-26T00:00:00'),
    home: teams.alboradaJunior,
    away: teams.maravillas,
    played: false,
  },
];
