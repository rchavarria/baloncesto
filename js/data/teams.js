const teams = {
  template: {
    name: 'name',
    short: 'short name used in the app',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'address',
      map: 'https://maps.google.com',
    },
    web: 'https://web.com'
  },
  descansa: {
    name: '** DESCANSA **',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'n/a',
      map: 'https://maps.google.com',
    },
    web: 'https://web.com'
  },
  alcobendasC: {
    short: 'ALC',
    name: 'Italtel Alcobendas C',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  alboradaSenior: {
    name: 'BASKET ALBORADA RSDA',
    logo: 'img/logos/alborada.jpg',
    stadium: {
      address: 'Colegio Alborada, Alejo Carpentier, 27',
      map: 'https://g.page/ColegioAlborada',
    },
    web: 'https://fbm.es/equipo-807696-7022/basket-alborada-rsda',
  },
  paracuellos: {
    name: 'BALONCESTO PARACUELLOS',
    logo: 'img/logos/paracuellos.jpg',
    stadium: {
      address: 'Sala Escolar Virgen de la Rivera, camino Radar, 1',
      map: 'https://goo.gl/maps/dWtvodFmdJmFjirY9',
    },
    web: 'https://fbm.es/equipo-806354-7022/baloncesto-paracuellos',
  },
  boadilla: {
    name: 'BOADILLA MONSTERS',
    logo: 'img/logos/boadilla.jpg',
    stadium: {
      address: 'Pabellon Felipe VI, Miguel Angel Cantero Oliva, 4',
      map: 'https://goo.gl/maps/6qyeGE4hgFcUGVQJA',
    },
    web: 'https://fbm.es/equipo-806731-7022/boadilla-monsters',
  },
  osuna: {
    name: 'ALAMEDA DE OSUNA B',
    logo: 'img/logos/osuna.jpg',
    stadium: {
      address: 'IES Alameda de Osuna, Antonio Sancha, 11, entrada por Brezos 2',
      map: 'https://goo.gl/maps/Ht9kjnXKyDLQPBnW8',
    },
    web: 'https://fbm.es/equipo-808579-7022/alameda-de-osuna-b',
  },
  alcobendas: {
    short: 'VAL',
    name: 'VALCUDE ALCOBENDAS B',
    logo: 'img/logos/alcobendas.jpg',
    stadium: {
      address: 'Pabellón Amaya Valdemoro, crta Alcobendas-Barajas, km 1,200',
      map: 'https://goo.gl/maps/QYrq9cDTn8rAvjMb7',
    },
    web: 'https://fbm.es/equipo-807910-7022/valcude-alcobendas-b',
  },
  isaac: {
    short: 'CIN',
    name: 'ISAAC NEWTON',
    logo: 'img/logos/isaac.jpg',
    stadium: {
      address: 'IES Isaac Newton, Isla Malaita, 9',
      map: 'https://goo.gl/maps/uR4WhYqrgTxsBXNs6',
    },
    web: 'https://fbm.es/equipo-808272-7022/isaac-newton',
  },
  paz: {
    name: 'LA PAZ C.D. VERDE',
    logo: 'img/logos/paz.jpg',
    stadium: {
      address: 'CP Miguel Delibes, Felipe II, 15',
      map: 'https://goo.gl/maps/WSisfE2BLgYrtMSC6',
    },
    web: 'https://fbm.es/equipo-808571-7022/la-paz-cd-verde',
  },
  fenixSenior: {
    name: 'FENIX BASKET CLUB',
    logo: 'img/logos/fenixSenior.jpg',
    stadium: {
      address: 'Deportivo Municipal Ángel Nieto, crta Pozuelo-Boadilla Km 4',
      map: 'https://goo.gl/maps/vnhE3HPEKKE7SVFt7',
    },
    web: 'https://fbm.es/equipo-808406-7022/fenix-basket-club',
  },
  salesianos: {
    name: 'SALESIANOS SOTO PIRATAS',
    logo: 'img/logos/salesianos.jpg',
    stadium: {
      address: 'Pabellón Soto del Real, El Egidillo, s/n',
      map: 'https://goo.gl/maps/DWsrqvpp4UXYsrXN8',
    },
    web: 'https://fbm.es/equipo-808308-7022/salesianos-soto-piratas-',
  },
  revolution: {
    name: 'REVOLUTION',
    logo: 'img/logos/revolution.jpg',
    stadium: {
      address: 'Av de los Poblados, 72',
      map: 'https://g.page/CDMLasCruces',
    },
    web: 'https://fbm.es/equipo-807993-7022/revolution-',
  },
  veritas: {
    name: 'VERITAS POZUELO NEGRO',
    logo: 'img/logos/veritas.jpg',
    stadium: {
      address: 'Instituto Veritas, Av Radio Televisión, 2',
      map: 'https://goo.gl/maps/WjbKLd3JSmByM2yF6',
    },
    web: 'https://fbm.es/equipo-808509-7022/veritas-pozuelo-negro',
  },
  alboradaJunior: {
    name: 'BASKET ALBORADA RSDA',
    logo: 'img/logos/alborada.jpg',
    stadium: {
      address: 'Colegio Alborada, Alejo Carpentier, 27',
      map: 'https://g.page/ColegioAlborada',
    },
    web: 'https://fbm.es/equipo-807697-7085/basket-alborada-rsda',
  },
  valle: {
    short: 'EVC',
    name: 'EL VALLE C.D. A',
    logo: 'img/logos/valle.jpg',
    stadium: {
      address: 'EL VALLE SANCHINARRO, COLEGIO ANA DE AUSTRIA, 60 (Entrada Vicente Blasco Ibañez), Madrid',
      map: 'https://goo.gl/maps/Ga6iavEyxoYJBedh7',
    },
    web: 'https://fbm.es/equipo-806284-7085/el-valle-cd-a',
  },
  pilaristas: {
    short: 'PIL',
    name: 'PILARISTAS',
    logo: 'img/logos/pilaristas.jpg',
    stadium: {
      address: 'PILARISTAS, COLEGIO, CASTELLO, 56',
      map: 'https://g.page/ElPilarMadrid',
    },
    web: 'https://fbm.es/equipo-807202-7085/pilaristas',
  },
  spinola: {
    short: 'SCH',
    name: 'SPÍNOLA CHAMARTÍN',
    logo: 'img/logos/spinola.jpg',
    stadium: {
      address: 'SPINOLA CHAMARTIN, COLEGIO, CARDENAL MARCELO SPINOLA, 34',
      map: 'https://goo.gl/maps/4DRmdMgs8Pd2Axyo7',
    },
    web: 'https://fbm.es/equipo-808435-7085/spinola-chamartin',
  },
  aranjuez: {
    short: 'OAR',
    name: 'OLÍMPICO ARANJUEZ',
    logo: 'img/logos/aranjuez.jpg',
    stadium: {
      address: 'LAS OLIVAS, CIUDAD DEPORTIVA, ISIDRO GONZALEZ VELAZQUEZ, S/N',
      map: 'https://goo.gl/maps/6NvGmfct3S24kQmL9',
    },
    web: 'https://fbm.es/equipo-807103-7085/olimpico-aranjuez',
  },
  saltium: {
    short: 'SAB',
    name: 'SALTIUM ALCORCON BASKET B',
    logo: 'img/logos/saltium.jpg',
    stadium: {
      address: 'LOS CANTOS, PABELLON PISTA 4, LOS CANTOS, 28',
      map: 'https://goo.gl/maps/hRtzhKYSx5dvuTaYA',
    },
    web: 'https://fbm.es/equipo-806314-7085/saltium-alcorc%c3%b3n-basket-b',
  },
  fenixJunior: {
    short: 'FBC',
    name: 'FENIX BASKET CLUB',
    logo: 'img/logos/fenixJunior.jpg',
    stadium: {
      address: 'Deportivo Municipal Ángel Nieto, crta Pozuelo-Boadilla Km 4',
      map: 'https://goo.gl/maps/vnhE3HPEKKE7SVFt7',
    },
    web: 'https://fbm.es/equipo-808751-7085/fenix-basket-club',
  },
  sanfernando: {
    short: 'HAS',
    name: 'CLUB BALONCESTO SAN FERNANDO',
    logo: 'img/logos/sanfernando.jpg',
    stadium: {
      address: 'PARQUE HENARES, PABELLON, calle VITORIA, S/N',
      map: 'https://goo.gl/maps/tfCdjBdjmWpdoZTr8',
    },
    web: 'https://fbm.es/equipo-808438-7085/hyundai-almoauto-san-fernando-2011',
  },
  maravillas: {
    short: 'MLL',
    name: 'LA SALLE MARAVILLAS 11',
    logo: 'img/logos/maravillas.jpg',
    stadium: {
      address: 'LA SALLE MARAVILLAS, COLEGIO, GUADALQUIVIR, 9',
      map: 'https://goo.gl/maps/YFw5XALS4qkhVFdA6',
    },
    web: 'https://fbm.es/equipo-808538-7085/maravillas-11',
  },
  fuenlabrada: {
    short: 'BFU',
    name: 'BALONCESTO FUENLABRADA',
    logo: 'img/logos/fuenlabrada.jpg',
    stadium: {
      address: 'EL ARROYO, PABELLON, FUENTESAUCO, 1',
      map: 'https://goo.gl/maps/4jHQkBhDBQ4G9H3c8',
    },
    web: 'https://fbm.es/equipo-805705-7085/baloncesto-fuenlabrada',
  },
  estudiantesAlderete: {
    short: 'MEA',
    name: 'MOVISTAR ESTUDIANTES ALDERETE',
    logo: 'img/logos/estudiantes.jpg',
    stadium: {
      address: 'Pabellon Colegio Pintor Rosales',
      map: 'https://goo.gl/maps/gp2cP5eiy17d5g9L8',
    },
    web: 'https://fbm.es/equipo-808335-8018/movistar-estudiantes-alderete',
  },
  nextHoops: {
    short: 'NHB',
    name: 'Next Hoops Badalona',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  teamBarea: {
    short: 'TBP',
    name: 'Team Barea Puerto Rico',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  tripleThreat: {
    short: 'TTT',
    name: 'Triple Threat',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  roda: {
    short: 'CLR',
    name: 'CP La Roda',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  travelTeam: {
    short: 'TTL',
    name: 'Travel Team Lituania',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  leganes: {
    short: 'ILE',
    name: 'Innova-TSN Leganes',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  rozas: {
    short: 'CBR',
    name: 'Las Rozas B',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  torrelodones: {
    short: 'BTR',
    name: 'BT Torrelodones B',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  sanAgustin: {
    short: 'SAM',
    name: 'San Agustin Madrid',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  torrejon: {
    short: 'BTO',
    name: 'B. Torrejón',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Pabellón Javi Limones',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  juande: {
    short: 'RFA',
    name: 'Ricopia Funbal Juan de Austria Alcala',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'El Val',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  alcala: {
    short: 'BAL',
    name: 'B. Alcala',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Espartales',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  estudio: {
    short: 'EST',
    name: 'Estudio',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Estudio pabellon',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  estudiantes: {
    short: 'ME-',
    name: 'Movistar Estudiantes',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Magariños',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
}
