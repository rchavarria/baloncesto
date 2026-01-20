/**
 * Logos de los clubes
 *
 * Conseguir imágenes de logos para carteles de la temporada
 * Igual que CD Estudio, Alcobendas tiene los de Clupik
 * (de echo, parece la misma web)
 *
 * [Club Baloncesto Alcobendas | Baloncesto Alcobendas](https://www.cbalcobendas.es/es/games?show=all&from=2025-04-30T22:00:00.000Z&to=2025-05-31T21:59:59.999Z)
 *
 * FBM TV también tiene algunos
 * [fbmTV - La televisión/OTT de la Federación de Baloncesto de Madrid](https://fbmtv.fbm.es/es/archivo)
 *
 * CD Estudio tiene unos buenos, transparentes, de Clupik
 * [Club Deportivo Estudio - C.D. Estudio](https://www.cdestudio.com/es/games?show=all&from=2025-04-30T22:00:00.000Z&to=2025-05-31T21:59:59.999Z)
 *
 */
const teams = {
  alcobendas: {
    short: 'ALC',
    name: 'Fundal Alcobendas',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  alcorcon: {
    short: 'ALC',
    name: 'Alcorcón',
    logo: 'img/new-logos/alcorcon-transparent.png',
    stadium: {
      address: 'La Canaleja',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  alicante: {
    short: 'ALI',
    name: 'Alicante',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'n/a',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbcv.es/',
  },
  aragon: {
    short: 'ARA',
    name: 'Aragón',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Aragón',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fabasket.com',
  },
  baleares: {
    short: 'BAL',
    name: 'Baleares',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Baleares',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://federacion-baloncesto-baleares.es/',
  },
  barcelona: {
    short: 'BAR',
    name: 'Barça',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Barcelona',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  betis: {
    short: '87S',
    name: 'Caja 87 Sevilla',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Sevilla',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://andaluza-de-baloncesto.es/',
  },
  canarias: {
    short: 'CAN',
    name: 'Canarias',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Canarias',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fcbaloncesto.es/',
  },
  canoe: {
    short: 'RCN',
    name: 'Real Canoe N.C.',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Pez Volador',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  catalunya: {
    short: 'CAT',
    name: 'Cataluña',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Cataluña',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://www.basquetcatala.cat',
  },
  coslada: {
    short: 'COS',
    name: 'C.B. Coslada',
    logo: 'img/new-logos/coslada-transparent.png',
    stadium: {
      address: 'El Plantío',
      map: 'https://maps.app.goo.gl/fxf4qD9A851t9SHMA',
    },
    web: 'https://fbm.es',
  },
  descansa: {
    name: '** DESCANSA **',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'n/a',
      map: 'https://maps.google.com',
    },
    web: 'https://web.com',
  },
  distrito: {
    short: 'DOL',
    name: 'Distrito Olímpico',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'xxx',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  elche: {
    short: 'ELC',
    name: 'Elche',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'xxx',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fgb.ga/',
  },
  estudiantes: {
    short: 'ME-',
    name: 'M. Estudiantes',
    logo: 'img/new-logos/estudiantes.png',
    stadium: {
      address: 'Magariños',
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
  fuenlabrada: {
    short: 'BFU',
    name: 'B. Fuenlabrada',
    logo: 'img/new-logos/fuenlabrada.jpg',
    stadium: {
      address: 'EL ARROYO, PABELLON, FUENTESAUCO, 1',
      map: 'https://goo.gl/maps/4jHQkBhDBQ4G9H3c8',
    },
    web: 'https://fbm.es/equipo-805705-7085/baloncesto-fuenlabrada',
  },
  galicia: {
    short: 'GAL',
    name: 'Galicia',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Galicia',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://federacion-baloncesto-galicia.es/',
  },
  getafe: {
    short: 'GET',
    name: 'Getafe',
    logo: 'img/new-logos/getafe-transparent.png',
    stadium: {
      address: 'Getafe',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://www.cbgetafe.es',
  },
  godella: {
    short: 'GOD',
    name: 'LHorta Godella',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Valencia',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://federacion-baloncesto-valencia.es/',
  },
  joventut: {
    short: 'CJB',
    name: 'Joventut de Badalona',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'xxx',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fgb.ga/',
  },
  juande: {
    short: 'CBJA',
    name: 'Juan de Austria',
    logo: 'img/new-logos/juande-transparent.png',
    stadium: {
      address: 'xxx',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  laso: {
    short: 'LAS',
    name: 'Pablo Laso Academy',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'n/a',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  lleida: {
    short: 'LLE',
    name: 'Lleida',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Lleida',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fed-cat-bal.cat',
  },
  malaga: {
    short: 'UMA',
    name: 'Unicaja Málaga',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Málaga',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://federacion-baloncesto-andalucia.es/',
  },
  melilla: {
    short: 'MEL',
    name: 'Melilla',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Melilla',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://federacion-baloncesto-melilla.es/',
  },
  murcia: {
    short: 'MUR',
    name: 'UCAM Murcia',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Murcia',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  obradoiro: {
    short: 'OBR',
    name: 'Obradoiro',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'xxx',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fgb.ga/',
  },
  olivar: {
    short: 'OLV',
    name: 'El Olivar',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Zaragoza',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://federacion-baloncesto-aragonesa.ga/',
  },
  oporto: {
    short: 'OPO',
    name: 'Oporto',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Oporto',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://federacion-baloncesto-portugal.pt/',
  },
  patrocinio: {
    short: 'PSJ',
    name: 'Patrocinio San José',
    logo: 'img/new-logos/patrocinio-transparent.png',
    stadium: {
      address: 'xxx',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  realMadrid: {
    short: 'RM-',
    name: 'Real Madrid',
    logo: 'img/new-logos/real-madrid-transparent.png',
    stadium: {
      address: 'Ciudad Deportiva Real Madrid',
      map: 'https://maps.app.goo.gl/fFvrcjJjE7FvPuMq8',
    },
    web: 'https://fbm.es/',
  },
  rozas: {
    short: 'CBR',
    name: 'Las Rozas',
    logo: 'img/new-logos/rozas-transparent.png',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  sanJorge: {
    short: 'SJO',
    name: 'San Jorge',
    logo: 'img/new-logos/san-jorge.jpg',
    stadium: {
      address: 'SBA Arena',
      map: 'https://maps.app.goo.gl/VuXT5q4kwEMsbGQL9',
    },
    web: 'https://fbm.es/',
  },
  sba: {
    short: 'SBA',
    name: 'Spanish Basketball Academy',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'SBA Arena',
      map: 'https://maps.app.goo.gl/VuXT5q4kwEMsbGQL9',
    },
    web: 'https://fbm.es/',
  },
  seleccionMadrid: {
    name: 'Seleccion 2011 C. Madrid',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'n/a',
      map: 'https://maps.google.com',
    },
    web: 'https://web.com',
  },
  tarragona: {
    name: 'Tarragona',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'n/a',
      map: 'https://maps.google.com',
    },
    web: 'https://fed-cat-bal.cat',
  },
  template: {
    name: 'name',
    short: 'short name used in the app',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'address',
      map: 'https://maps.google.com',
    },
    web: 'https://web.com',
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
  torrent: {
    short: 'NBT',
    name: 'NB Torrent',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'No Stadium',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbcv.es/',
  },
  tresCantos: {
    short: 'TRC',
    name: 'Tres Cantos',
    logo: 'img/new-logos/tres-cantos-transparent.png',
    stadium: {
      address: 'Tres Cantos',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  urosRivas: {
    short: 'URO',
    name: 'Uros de Rivas',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Rivas-Vaciamadrid',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
  valcude: {
    short: 'VAL',
    name: 'Valcude Alcobendas',
    logo: 'img/new-logos/valcude-transparent.png',
    stadium: {
      address: 'Valencia',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbcv.es/',
  },
  valencia: {
    short: 'VLC',
    name: 'Valencia',
    logo: 'img/logos/none.jpg',
    stadium: {
      address: 'Valencia',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbcv.es/',
  },
  zentro: {
    short: 'ZBK',
    name: 'Zentro Basket',
    logo: 'img/new-logos/zentro-transparent.png',
    stadium: {
      address: 'xxx',
      map: 'https://goo.gl/maps/xxx',
    },
    web: 'https://fbm.es/',
  },
}
