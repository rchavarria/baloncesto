const matches = [
  {
    date: new Date('2023-09-24T13:00:00'),
    home: teams.alcobendasC,
    away: teams.leganes,
    played: true,
    tally: {
      home: {
        total: 79,
        p1: 14,
        p2: 21,
        p3: 16,
        p4: 28,
      },
      away: {
        total: 77,
        p1: 20,
        p2: 16,
        p3: 28,
        p4: 13,
      },
      einar: 4,
    },
  },
  {
    date: new Date('2023-10-01T17:30:00'),
    home: teams.rozas,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 38,
        p1: 9,
        p2: 9,
        p3: 12,
        p4: 8,
      },
      away: {
        total: 61,
        p1: 20,
        p2: 11,
        p3: 18,
        p4: 12,
      },
      einar: 8,
    },
  },
  {
    date: new Date('2023-10-08T17:30:00'),
    home: teams.torrelodones,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 36,
        p1: 6,
        p2: 11,
        p3: 11,
        p4: 8,
      },
      away: {
        total: 86,
        p1: 24,
        p2: 24,
        p3: 18,
        p4: 20,
      },
      einar: 20,
    },
  },
  {
    date: new Date('2023-10-22T17:00:00'),
    home: teams.alcobendasC,
    away: teams.sanAgustin,
    played: true,
    tally: {
      home: {
        total: 86,
        p1: 16,
        p2: 14,
        p3: 23,
        p4: 33,
      },
      away: {
        total: 85,
        p1: 22,
        p2: 21,
        p3: 22,
        p4: 20,
      },
      einar: 20,
    },
  },
  {
    date: new Date('2023-11-05T16:15:00'),
    home: teams.torrejon,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 35,
        p1: 9,
        p2: 11,
        p3: 12,
        p4: 3,
      },
      away: {
        total: 85,
        p1: 23,
        p2: 26,
        p3: 30,
        p4: 6,
      },
      einar: 8,
    },
  },
  {
    date: new Date('2023-11-12T16:45:00'),
    home: teams.leganes,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 79,
        p1: 17,
        p2: 18,
        p3: 30,
        p4: 14,
      },
      away: {
        total: 72,
        p1: 19,
        p2: 20,
        p3: 20,
        p4: 13,
      },
      einar: 10,
    },
  },
  {
    date: new Date('2023-11-19T13:00:00'),
    home: teams.alcobendasC,
    away: teams.rozas,
    played: true,
    tally: {
      home: {
        total: 69,
        p1: 23,
        p2: 18,
        p3: 14,
        p4: 14,
      },
      away: {
        total: 43,
        p1: 6,
        p2: 10,
        p3: 13,
        p4: 14,
      },
      einar: 8,
    },
  },
  {
    date: new Date('2023-11-26T13:00:00'),
    home: teams.alcobendasC,
    away: teams.torrelodones,
    played: true,
    tally: {
      home: {
        total: 72,
        p1: 24,
        p2: 24,
        p3: 22,
        p4: 2,
      },
      away: {
        total: 22,
        p1: 7,
        p2: 8,
        p3: 7,
        p4: 0,
      },
      einar: 8,
    },
  },
  {
    date: new Date('2023-12-03T10:45:00'),
    home: teams.sanAgustin,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 72,
        p1: 20,
        p2: 20,
        p3: 16,
        p4: 16,
      },
      away: {
        total: 93,
        p1: 31,
        p2: 19,
        p3: 19,
        p4: 24,
      },
      einar: 10,
    },
  },
  {
    date: new Date('2023-12-17T11:15:00'),
    home: teams.alcobendasC,
    away: teams.torrejon,
    played: true,
    tally: {
      home: {
        total: 57,
        p1: 25,
        p2: 25,
        p3: 7,
        p4: 0,
      },
      away: {
        total: 7,
        p1: 3,
        p2: 4,
        p3: 0,
        p4: 0,
      },
      einar: 2,
    },
  },
  {
    date: new Date('2023-12-17T13:00:00'),
    home: teams.alcobendasA,
    away: teams.fuenlabrada,
    played: true,
    tally: {
      home: {
        total: 91,
        p1: 23,
        p2: 27,
        p3: 15,
        p4: 14,
        ot1: 12,
      },
      away: {
        total: 98,
        p1: 16,
        p2: 22,
        p3: 30,
        p4: 11,
        ot1: 19,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-01-14T13:00:00'),
    home: teams.alcobendasA,
    away: teams.juande,
    played: true,
    tally: {
      home: {
        total: 53,
        p1: 7,
        p2: 15,
        p3: 15,
        p4: 16,
      },
      away: {
        total: 66,
        p1: 14,
        p2: 15,
        p3: 19,
        p4: 18,
      },
      einar: 12,
    },
  },
  {
    date: new Date('2024-01-14T11:15:00'),
    home: teams.alcobendasA,
    away: teams.estudio,
    played: true,
    tally: {
      home: {
        total: 83,
        p1: 23,
        p2: 22,
        p3: 20,
        p4: 18,
      },
      away: {
        total: 45,
        p1: 13,
        p2: 6,
        p3: 13,
        p4: 13,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-01-21T13:15:00'),
    home: teams.alcala,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 73,
        p1: 12,
        p2: 22,
        p3: 18,
        p4: 21,
      },
      away: {
        total: 65,
        p1: 17,
        p2: 15,
        p3: 24,
        p4: 9,
      },
      einar: 6,
    },
  },
  {
    date: new Date('2024-01-21T18:30:00'),
    home: teams.estudiantes,
    away: teams.alcobendasA,
    played: true,
    tally: {
      home: {
        total: 73,
        p1: 11,
        p2: 18,
        p3: 19,
        p4: 25,
      },
      away: {
        total: 71,
        p1: 22,
        p2: 14,
        p3: 17,
        p4: 18,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-01-21T13:15:00'),
    home: teams.canoe,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 87,
        p1: 15,
        p2: 23,
        p3: 32,
        p4: 17,
      },
      away: {
        total: 58,
        p1: 15,
        p2: 14,
        p3: 16,
        p4: 13,
      },
      einar: 12,
    },
  },
  {
    date: new Date('2024-01-28T19:00:00'),
    home: teams.alcobendasA,
    away: teams.realMadrid,
    played: true,
    tally: {
      home: {
        total: 69,
        p1: 23,
        p2: 15,
        p3: 14,
        p4: 17,
      },
      away: {
        total: 98,
        p1: 23,
        p2: 34,
        p3: 18,
        p4: 23,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-02-04T13:30:00'),
    home: teams.fuenlabrada,
    away: teams.alcobendasA,
    played: true,
    tally: {
      home: {
        total: 63,
        p1: 14,
        p2: 11,
        p3: 17,
        p4: 21,
      },
      away: {
        total: 73,
        p1: 15,
        p2: 12,
        p3: 33,
        p4: 13,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-02-04T18:00:00'),
    home: teams.alcobendasC,
    away: teams.tresCantos,
    played: true,
    tally: {
      home: {
        total: 54,
        p1: 6,
        p2: 13,
        p3: 15,
        p4: 20,
      },
      away: {
        total: 71,
        p1: 18,
        p2: 23,
        p3: 17,
        p4: 13,
      },
      einar: 14,
    },
  },
  {
    date: new Date('2024-02-11T13:00:00'),
    home: teams.alcobendasA,
    away: teams.alcorcon,
    played: true,
    tally: {
      home: {
        total: 49,
        p1: 11,
        p2: 14,
        p3: 3,
        p4: 21,
      },
      away: {
        total: 77,
        p1: 21,
        p2: 24,
        p3: 20,
        p4: 12,
      },
      einar: 2,
    },
  },
  {
    date: new Date('2024-02-11T16:30:00'),
    home: teams.atocha,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 79,
        p1: 20,
        p2: 19,
        p3: 21,
        p4: 19,
      },
      away: {
        total: 60,
        p1: 13,
        p2: 9,
        p3: 22,
        p4: 16,
      },
      einar: 9,
    },
  },
  {
    date: new Date('2024-02-24T13:30:00'),
    home: teams.juande,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 72,
        p1: 22,
        p2: 12,
        p3: 25,
        p4: 13,
      },
      away: {
        total: 40,
        p1: 13,
        p2: 13,
        p3: 8,
        p4: 6,
      },
      einar: 9,
    },
  },
  {
    date: new Date('2024-02-18T16:30:00'),
    home: teams.estudio,
    away: teams.alcobendasA,
    played: true,
    tally: {
      home: {
        total: 72,
        p1: 25,
        p2: 10,
        p3: 18,
        p4: 19,
      },
      away: {
        total: 56,
        p1: 9,
        p2: 16,
        p3: 17,
        p4: 14,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-02-25T13:00:00'),
    home: teams.alcobendasA,
    away: teams.estudiantes,
    played: true,
    tally: {
      home: {
        total: 74,
        p1: 15,
        p2: 15,
        p3: 20,
        p4: 24,
      },
      away: {
        total: 81,
        p1: 22,
        p2: 17,
        p3: 23,
        p4: 19,
      },
      einar: 2,
    },
  },
  {
    date: new Date('2024-02-25T19:00:00'),
    home: teams.alcobendasC,
    away: teams.alcala,
    played: true,
    tally: {
      home: {
        total: 86,
        p1: 22,
        p2: 22,
        p3: 19,
        p4: 23,
      },
      away: {
        total: 90,
        p1: 16,
        p2: 24,
        p3: 33,
        p4: 17,
      },
      einar: 19,
    },
  },
  {
    date: new Date('2024-03-03T13:00:00'),
    home: teams.alcobendasC,
    away: teams.canoe,
    played: true,
    tally: {
      home: {
        total: 57,
        p1: 19,
        p2: 10,
        p3: 12,
        p4: 16,
      },
      away: {
        total: 63,
        p1: 21,
        p2: 11,
        p3: 25,
        p4: 6,
      },
      einar: 16,
    },
  },
  {
    date: new Date('2024-03-03T18:00:00'),
    home: teams.realMadrid,
    away: teams.alcobendasA,
    played: true,
    tally: {
      home: {
        total: 86,
        p1: 27,
        p2: 22,
        p3: 17,
        p4: 20,
      },
      away: {
        total: 57,
        p1: 12,
        p2: 24,
        p3: 10,
        p4: 11,
      },
      einar: 4,
    },
  },
  {
    date: new Date('2024-03-10T10:45:00'),
    home: teams.tresCantos,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 68,
        p1: 18,
        p2: 16,
        p3: 13,
        p4: 21,
      },
      away: {
        total: 62,
        p1: 9,
        p2: 17,
        p3: 19,
        p4: 17,
      },
      einar: 15,
    },
  },
  {
    date: new Date('2024-03-10T13:00:00'),
    home: teams.alcobendasA,
    away: teams.fuenlabrada,
    played: true,
    tally: {
      home: {
        total: 84,
        p1: 14,
        p2: 17,
        p3: 19,
        p4: 25,
        ot1: 9,
      },
      away: {
        total: 82,
        p1: 16,
        p2: 22,
        p3: 19,
        p4: 18,
        ot1: 7,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-03-17T11:00:00'),
    home: teams.alcorcon,
    away: teams.alcobendasA,
    played: true,
    tally: {
      home: {
        total: 65,
        p1: 8,
        p2: 21,
        p3: 26,
        p4: 10,
      },
      away: {
        total: 76,
        p1: 15,
        p2: 15,
        p3: 22,
        p4: 24,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-03-17T17:00:00'),
    home: teams.alcobendasC,
    away: teams.atocha,
    played: true,
    tally: {
      home: {
        total: 94,
        p1: 31,
        p2: 19,
        p3: 20,
        p4: 24,
      },
      away: {
        total: 76,
        p1: 18,
        p2: 19,
        p3: 14,
        p4: 25,
      },
      einar: 23,
    },
  },
  {
    date: new Date('2024-03-28T15:30:00'),
    home: teams.azulejosMoncayoCBZ,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 48,
        p1: 22,
        p2: 9,
        p3: 8,
        p4: 9,
      },
      away: {
        total: 82,
        p1: 23,
        p2: 20,
        p3: 18,
        p4: 21,
      },
      einar: 4,
    },
  },
  {
    date: new Date('2024-03-29T20:00:00'),
    home: teams.alcobendasC,
    away: teams.burgos2011,
    played: true,
    tally: {
      home: {
        total: 65,
        p1: 29,
        p2: 18,
        p3: 18,
        p4: 0,
      },
      away: {
        total: 14,
        p1: 7,
        p2: 2,
        p3: 5,
        p4: 0,
      },
      einar: 12,
    },
  },
  {
    date: new Date('2024-03-30T11:00:00'),
    home: teams.zaragoza,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 74,
        p1: 10,
        p2: 33,
        p3: 25,
        p4: 6,
      },
      away: {
        total: 49,
        p1: 14,
        p2: 19,
        p3: 4,
        p4: 12,
      },
      einar: 0,
    },
  },
  {
    date: new Date('2024-03-30T17:00:00'),
    home: teams.burgos2010,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 36,
        p1: 12,
        p2: 11,
        p3: 8,
        p4: 5,
      },
      away: {
        total: 69,
        p1: 16,
        p2: 22,
        p3: 16,
        p4: 15,
      },
      einar: 6,
    },
  },
  {
    date: new Date('2024-03-31T12:00:00'),
    home: teams.fuenlabrada,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 65,
        p1: 17,
        p2: 12,
        p3: 17,
        p4: 19,
      },
      away: {
        total: 56,
        p1: 12,
        p2: 11,
        p3: 21,
        p4: 12,
      },
      einar: 2,
    },
  },
  {
    date: new Date('2024-04-07T11:15:00'),
    home: teams.parla,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 47,
        p1: 11,
        p2: 14,
        p3: 15,
        p4: 7,
      },
      away: {
        total: 69,
        p1: 24,
        p2: 18,
        p3: 15,
        p4: 12,
      },
      einar: 13,
    },
  },
  {
    date: new Date('2024-04-13T18:00:00'),
    home: teams.alcala,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 67,
        p1: 13,
        p2: 20,
        p3: 15,
        p4: 19,
      },
      away: {
        total: 65,
        p1: 26,
        p2: 14,
        p3: 8,
        p4: 17,
      },
      einar: 16,
    },
  },
  {
    date: new Date('2024-04-28T11:30:00'),
    home: teams.alcobendasA,
    away: teams.alcorcon,
    played: true,
    tally: {
      home: {
        total: 94,
        p1: 32,
        p2: 26,
        p3: 21,
        p4: 15,
      },
      away: {
        total: 64,
        p1: 13,
        p2: 14,
        p3: 14,
        p4: 23,
      },
      einar: 2,
    },
  },
  {
    date: new Date('2024-04-28T13:30:00'),
    home: teams.alcobendasC,
    away: teams.parla,
    played: true,
    tally: {
      home: {
        total: 71,
        p1: 17,
        p2: 17,
        p3: 26,
        p4: 11,
      },
      away: {
        total: 53,
        p1: 9,
        p2: 15,
        p3: 10,
        p4: 19,
      },
      einar: 17,
    },
  },
  {
    date: new Date('2024-05-03T11:00:00'),
    home: teams.alcobendasC,
    away: teams.humanitas,
    played: true,
    tally: {
      home: {
        total: 38,
        p1: 17,
        p2: 1,
        p3: 11,
        p4: 9,
      },
      away: {
        total: 44,
        p1: 7,
        p2: 20,
        p3: 13,
        p4: 4,
      },
      einar: 6,
    },
  },
  {
    date: new Date('2024-05-04T10:00:00'),
    home: teams.salvador,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 25,
        p1: 8,
        p2: 4,
        p3: 3,
        p4: 10,
      },
      away: {
        total: 56,
        p1: 20,
        p2: 13,
        p3: 13,
        p4: 10,
      },
      einar: 9,
    },
  },
  {
    date: new Date('2024-05-05T12:00:00'),
    home: teams.rozas,
    away: teams.alcobendasC,
    played: true,
    tally: {
      home: {
        total: 22,
        p1: 4,
        p2: 7,
        p3: 10,
        p4: 1,
      },
      away: {
        total: 42,
        p1: 18,
        p2: 8,
        p3: 12,
        p4: 4,
      },
      einar: 8,
    },
  },
  {
    date: new Date('2024-05-18T16:20:00'),
    home: teams.seleccionMadrid,
    away: teams.krvavec,
    played: true,
    tally: {
      home: {
        total: 46,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      away: {
        total: 18,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      einar: -1,
    },
  },
  {
    date: new Date('2024-05-18T20:00:00'),
    home: teams.seleccionMadrid,
    away: teams.banelot,
    played: true,
    tally: {
      home: {
        total: 53,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      away: {
        total: 2,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      einar: -1,
    },
  },
  {
    date: new Date('2024-05-19T09:50:00'),
    home: teams.pesaro,
    away: teams.seleccionMadrid,
    played: true,
    tally: {
      home: {
        total: 14,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      away: {
        total: 35,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      einar: -1,
    },
  },
  {
    date: new Date('2024-05-19T15:40:00'),
    home: teams.seleccionMadrid,
    away: teams.mexico,
    played: true,
    tally: {
      home: {
        total: 20,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      away: {
        total: 17,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      einar: -1,
    },
  },
  {
    date: new Date('2024-05-20T15:30:00'),
    home: teams.seleccionMadrid,
    away: teams.certifiedAhtletes,
    played: true,
    tally: {
      home: {
        total: 48,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      away: {
        total: 42,
        p1: -1,
        p2: -1,
        p3: -1,
        p4: -1,
      },
      einar: -1,
    },
  },
  {
    date: new Date('2024-05-26T18:00:00'),
    home: teams.alcobendasA,
    away: teams.zentro,
    played: true,
    tally: {
      home: {
        total: 87,
        p1: 28,
        p2: 18,
        p3: 23,
        p4: 18,
      },
      away: {
        total: 45,
        p1: 15,
        p2: 12,
        p3: 11,
        p4: 7,
      },
      einar: 10,
    },
  },
  {
    date: new Date('2024-06-02T15:30:00'),
    home: teams.rozas,
    away: teams.alcobendasA,
    played: true,
    tally: {
      home: {
        total: 71,
        p1: 17,
        p2: 20,
        p3: 11,
        p4: 23,
      },
      away: {
        total: 89,
        p1: 23,
        p2: 25,
        p3: 19,
        p4: 22,
      },
      einar: 7,
    },
  },
  {
    date: new Date('2024-06-09T18:00:00'),
    home: teams.alcobendasA,
    away: teams.estudio,
    played: true,
    tally: {
      home: {
        total: 84,
        p1: 27,
        p2: 19,
        p3: 30,
        p4: 8,
      },
      away: {
        total: 75,
        p1: 21,
        p2: 20,
        p3: 12,
        p4: 22,
      },
      einar: 2,
    },
  },
];
