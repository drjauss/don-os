import { Work } from "../types/work.type";
import { WorkCategory } from "../enums/work-category.enum";
import imgBlondinette from "../../../../../images/illustrations/Blondinette-min.png";
import imgRataplan from "../../../../../images/illustrations/Rataplan-min.png";
import imgTimonel from "../../../../../images/illustrations/Timonel-min.png";
import imgElCargadorDeSal from "../../../../../images/illustrations/el-cargador-de-sal-min.png";
import imgAspectoDeLaLiteraturaInfantil from "../../../../../images/illustrations/aspecto-de-la-literatura-min.png";
import imgJuegosDeAntano from "../../../../../images/illustrations/juegos-de-antano-min.png";
import imgRompeloTodo from "../../../../../images/illustrations/rompelo-todo-min.png";
import imgMatildeAnaray from "../../../../../images/illustrations/Matilde-min.png";
import imgElPaisDeLilac from "../../../../../images/illustrations/el-pais-de-lilac-min.png";
import imgZuhe from "../../../../../images/illustrations/Zuhe-min.png";
import imgPoesiasRafaelPombo from "../../../../../images/illustrations/Las-poesias-de-Rafael-Pombo-min.png";
import imgRayosYCentellas from "../../../../../images/illustrations/Rayos-min.png";
import imgCambamBali from "../../../../../images/illustrations/Cambam-bali-min.png";
import imgNaba from "../../../../../images/illustrations/naba-min.png";
import imgNinaSieteTrojes from "../../../../../images/illustrations/nina-de-siete-trojes-min.png";
import imgLaGranCampana from "../../../../../images/illustrations/la-gran-campana-min.png";
import { blondinettePublishedAt } from "../templates/teatro/blondinette/technical-details";
import { diccionarioDeLasHadasPublishedAt } from "../templates/no-ficcion/others/diccionario-de-las-hadas/technical-details";
import { rataplanPublishedAT } from "../templates/cuento/rataplan/technical-details";
import { comoEraHansPublishedAt } from "../templates/no-ficcion/others/como-era-hans/technical-details";
import { timonelPublishedAt } from "../templates/radioteatro/timonel/technical-details";
import { poesiasInfantilesPomboPublishedAt } from "../templates/no-ficcion/others/poesias-infantiles-pombo/technical-details";
import { cargadorDeSalPublishedAt } from "../templates/radioteatro/cargador-de-sal/techincal-details";
import { animalesAlmirantePublishedAt } from "../templates/no-ficcion/others/animales-que-ayudaron-almirante/technical-details";
import { aspectoDeLaLiteraturaPublishedAt } from "../templates/no-ficcion/aspecto-literatura-infantil/technical-details";
import { zuhePublishedAt } from "../templates/cuento/others/zuhe/technical-details";
import { juegosPublishedAt } from "../templates/no-ficcion/juegos-de-antano/technical-details";
import { pomarrosaPublishedAt } from "../templates/cuento/others/pomarrosa/technical-details";
import { rompeloTodoPublishedAt } from "../templates/cuento/rompelo-todo/technical-details";
import { laLagunaEncantadaPublishedAT } from "../templates/cuento/others/la-laguna-encantada/technical-details";
import { matildeAnarayPublishedAt } from "../templates/cuento/matilde-anaray/technical-details";
import { diarioDeUnGorrionPublishedAt } from "../templates/cuento/others/diario-de-un-gorrion/technical-details";
import { paisDeLilacPublishedAt } from "../templates/cuento/el-pais-de-lilac/technical-details";
import { cambamBaliPublishedAt } from "../templates/cuento/others/cambam-bali/technical-details";
import { rayosYCentellasPublishedAt } from "../templates/cuento/rayos-y-centellas/technical-details";

export const workList: Array<Work> = [
  {
    id: 9,
    name: "El país de Lilac",
    title: "El país de Lilac, el país de la infancia",
    technicalDetails: {
      title: "El país de Lilac",
      author: "Oswaldo Díaz Díaz",
      publishedAt: paisDeLilacPublishedAt,
      publishingLocation: "Bogotá",
      genre: WorkCategory.CUENTO,
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango",
      reviewedBy: "María Camila Monroy S.",
    },
    featured: true,
    illustration: imgElPaisDeLilac,
    category: WorkCategory.CUENTO,
    slug: "el-pais-de-lilac",
  },
  {
    id: 11,
    name: "Diccionario de las hadas",
    title: "Tipos de hadas y seres fantásticos: un diccionario sin alfabeto",
    technicalDetails: {
      title: "Diccionario de las hadas",
      author: "Oswaldo Díaz Díaz",
      publishedAt: diccionarioDeLasHadasPublishedAt,
      publishingLocation: "Bogotá",
      genre: WorkCategory.NO_FICCION,
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango",
      reviewedBy: "Zully Pardo",
    },
    category: WorkCategory.NO_FICCION,
    slug: "diccionario-de-las-hadas",
  },
  {
    id: 1,
    name: "Blondinette",
    title: "La segunda guerra mundial en el país de juguetes",
    technicalDetails: {
      title: "Blondinette",
      author: "Oswaldo Díaz Díaz",
      publishedAt: blondinettePublishedAt,
      publishingLocation: "Bogotá",
      genre: WorkCategory.TEATRO,
      availableAt: "Biblioteca Nacional de Colombia",
      reviewedBy: "María Camila Monroy S.",
    },
    featured: true,
    illustration: imgBlondinette,
    category: WorkCategory.TEATRO,
    slug: "blondinette",
  },
  {
    id: 24,
    name: "Los dioses lo saben",
    title: "Una doncella y un caballito mágico",
    technicalDetails: {
      title: "Los dioses lo saben",
      script: "Oswaldo Díaz Díaz",
      series: "Leyendas",
      transmittedBy: "Radiodifusora Nacional de Colombia, 10 de noviembre de 1955.",
      playbackUrl:
        "https://catalogo.senalmemoria.co/cgi-bin/koha/opac-detail.pl?biblionumber=171853&query_desc=kw%2Cwrdl%3A%20RDNC_RMT_10_000003_01#html5media",
      reviewedBy: "Zully Pardo",
    },
    category: WorkCategory.RADIOTEATRO,
    slug: "los-dioses-lo-saben",
  },
  {
    id: 10,
    name: "Rayos y centellas",
    title: "Piratas, canillas y cofres",
    technicalDetails: {
      title: "Rayos y centellas (cuento)",
      author: "Oswaldo Díaz Díaz",
      publishedAt: rayosYCentellasPublishedAt,
      publishingLocation: "Bogotá",
      genre: WorkCategory.CUENTO,
      availableAt: "Biblioteca Nacional de Colombia",
      reviewedBy: "Zully Pardo",
    },
    featured: true,
    illustration: imgRayosYCentellas,
    category: WorkCategory.CUENTO,
    slug: "rayos-y-centellas",
  },
  {
    id: 12,
    name: "Cómo era Hans Christian Andersen",
    title: "Hans Christian Andersen: el cisne danés",
    technicalDetails: {
      title: "Cómo era Hans Christian Andersen",
      author: "Oswaldo Díaz Díaz",
      publishedAt: comoEraHansPublishedAt,
      genre: WorkCategory.NO_FICCION,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango",
      reviewedBy: "María Camila Monroy S.",
    },
    category: WorkCategory.NO_FICCION,
    slug: "como-era-christian-andersen",
  },
  {
    id: 3,
    name: "Timonel",
    title: "Timonel: el papagayo que descubrió España",
    technicalDetails: {
      title: "Timonel (radioteatro) y Los papagayos de don Cristóforo (cuento)",
      author: "Oswaldo Díaz Díaz",
      publishedAt: timonelPublishedAt,
      publishingLocation: "Bogotá",
      genre: `${WorkCategory.RADIOTEATRO} y cuento`,
      availableAt: "Biblioteca Nacional de Colombia",
      reviewedBy: "Zully Pardo",
      playbackUrl: "https://catalogo.senalmemoria.co/cgi-bin/koha/opac-detail.pl?biblionumber=171857#html5media",
    },
    illustration: imgTimonel,
    category: WorkCategory.RADIOTEATRO,
    slug: "timonel",
  },
  {
    id: 18,
    name: "Diario de un gorrión",
    title: "La vida en el diario de un gorrión",
    technicalDetails: {
      title: "Diario de un gorrión",
      author: "Oswaldo Díaz Díaz",
      publishedAt: diarioDeUnGorrionPublishedAt,
      publishingLocation: "Bogotá",
      availableAt:
        "Biblioteca de la Pontificia Universidad Javeriana, Biblioteca Nacional y Biblioteca Luis Ángel Arango",
      genre: WorkCategory.CUENTO,
      reviewedBy: "María Camila Monroy S.",
    },
    category: WorkCategory.CUENTO,
    slug: "diario-de-un-gorrion",
  },
  {
    id: 15,
    name: "Zuhé",
    title: "Zuhé, el caracol más ágil de los pascas",
    technicalDetails: {
      title: "Zuhé, el caracol más ágil de los pascas",
      publishedAt: zuhePublishedAt,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca de la Pontificia Universidad Javeriana",
      genre: WorkCategory.CUENTO,
      reviewedBy: "Zully Pardo",
    },
    illustration: imgZuhe,
    category: WorkCategory.CUENTO,
    slug: "zuhe",
  },
  {
    id: 8,
    name: "Matilde Anaray, la pastorcita de Socha",
    title: "Olor a vellón y romero",
    technicalDetails: {
      title: "Matilde Anaray, la pastorcita de Socha",
      author: "Oswaldo Díaz Díaz",
      publishedAt: matildeAnarayPublishedAt,
      availableAt: "Biblioteca Nacional de Colombia, Biblioteca Luis Ángel Arango y Biblioteca Universidad Javeriana",
      reviewedBy: "Zully Pardo",
      genre: WorkCategory.CUENTO,
    },
    illustration: imgMatildeAnaray,
    category: WorkCategory.CUENTO,
    slug: "matilde-anaray",
  },
  {
    id: 17,
    name: "La laguna encantada",
    title: "Entre la oralidad chibcha y los cuentos de hadas",
    technicalDetails: {
      title: "La laguna encantada",
      author: "Oswaldo Díaz Díaz",
      publishedAt: laLagunaEncantadaPublishedAT,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca de la Pontificia Universidad Javeriana",
      genre: WorkCategory.CUENTO,
      reviewedBy: "María Camila Monroy S.",
    },
    category: WorkCategory.CUENTO,
    slug: "la-laguna-encantada",
  },
  {
    id: 4,
    name: "El cargador de sal",
    title: "La sal de la vida: un cuento indígena",
    technicalDetails: {
      title: "El cargador de sal",
      author: "Oswaldo Díaz Díaz",
      publishedAt: cargadorDeSalPublishedAt,
      publishingLocation: "Bogotá",
      genre: `${WorkCategory.RADIOTEATRO} y cuento`,
      availableAt: "Biblioteca Nacional de Colombia, Biblioteca Luis Ángel Arango y Biblioteca Universidad Javeriana",
      reviewedBy: "Zully Pardo",
      playbackUrl: "https://catalogo.senalmemoria.co/cgi-bin/koha/opac-detail.pl?biblionumber=171860#html5media",
    },
    featured: true,
    illustration: imgElCargadorDeSal,
    category: WorkCategory.RADIOTEATRO,
    slug: "el-cargador-de-sal",
  },
  {
    id: 14,
    name: "Los animales que ayudaron al almirante",
    title: "El descubrimiento de América para niños: Los animales que ayudaron al almirante",
    technicalDetails: {
      title: "Los animales que ayudaron al almirante",
      author: "Oswaldo Díaz Díaz",
      publishedAt: animalesAlmirantePublishedAt,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango",
      genre: WorkCategory.CUENTO,
      reviewedBy: "Zully Pardo",
    },
    category: WorkCategory.CUENTO,
    slug: "descubrimiento-de-america",
  },
  {
    id: 2,
    name: "Rataplán",
    title: "Rataplán: un repicar febril",
    technicalDetails: {
      title: "Rataplán",
      author: "Oswaldo Díaz Díaz",
      publishedAt: rataplanPublishedAT,
      publishingLocation: "Bogotá",
      genre: `${WorkCategory.CUENTO} y radioteatro`,
      availableAt:
        "Biblioteca Nacional de Colombia, Biblioteca Pontificia Universidad Javeriana y Biblioteca Luis Ángel Arango ",
      reviewedBy: "María Camila Monroy S.",
      playbackUrl:
        "https://catalogo.senalmemoria.co/cgi-bin/koha/opac-detail.pl?biblionumber=171851&query_desc=kw%2Cwrdl%3A%20RDNC_RMT_02_000001_01",
    },
    illustration: imgRataplan,
    category: WorkCategory.RADIOTEATRO,
    slug: "rataplan",
  },
  {
    id: 16,
    name: "Pomarrosa en el parque",
    title: "La fantasía de la indigencia en “Pomarrosa en el parque”",
    technicalDetails: {
      title: "Pomarrosa en el parque",
      author: "Oswaldo Díaz Díaz",
      publishedAt: pomarrosaPublishedAt,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca de la Pontificia Universidad Javeriana",
      genre: WorkCategory.CUENTO,
      reviewedBy: "María Camila Monroy S.",
    },
    category: WorkCategory.CUENTO,
    slug: "pomarrosa-en-el-parque",
  },
  {
    id: 6,
    name: "Diversiones de antaño",
    title: "Juegos de antaño",
    technicalDetails: {
      title: "Juegos de antaño",
      author: "Oswaldo Díaz Díaz",
      publishedAt: juegosPublishedAt,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango",
      genre: WorkCategory.NO_FICCION,
      reviewedBy: "Zully Pardo",
    },
    featured: true,
    illustration: imgJuegosDeAntano,
    category: WorkCategory.NO_FICCION,
    slug: "juegos-de-antano",
  },
  {
    id: 23,
    name: "La sopa de piedra",
    title: "La sopa de piedra y la piedra de sopa",
    technicalDetails: {
      title: "La sopa de piedra",
      script: "Oswaldo Díaz Díaz",
      basedOn: "Una leyenda belga",
      series: "Leyendas",
      transmittedBy: "Radiodifusora Nacional de Colombia, 17 de abril de 1956.",
      reviewedBy: "María Camila Monroy S.",
      playbackUrl: "https://catalogo.senalmemoria.co/cgi-bin/koha/opac-detail.pl?biblionumber=171862#html5media",
    },
    category: WorkCategory.RADIOTEATRO,
    slug: "la-sopa-de-piedra",
  },
  {
    id: 13,
    name: "Las poesías infantiles de Rafael Pombo",
    title: "Análisis literario de Rafael Pombo",
    technicalDetails: {
      author: "Oswaldo Díaz Díaz",
      publishedAt: poesiasInfantilesPomboPublishedAt,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Luis Ángel Arango",
      genre: WorkCategory.NO_FICCION,
      reviewedBy: "María Camila Monroy S.",
    },
    illustration: imgPoesiasRafaelPombo,
    category: WorkCategory.NO_FICCION,
    slug: "poesias-infantiles-rafael-pombo",
  },
  {
    id: 25,
    name: "Mowgli",
    title: "Mowgli",
    technicalDetails: {
      title: "Mowgli",
      script: "Oswaldo Díaz Díaz",
      series: "Leyendas",
      transmittedBy: "Radiodifusora Nacional de Colombia, 10 de noviembre de 1955.",
      playbackUrl:
        "https://catalogo.senalmemoria.co/cgi-bin/koha/opac-detail.pl?biblionumber=171852&query_desc=kw%2Cwrdl%3A%20RDNC_RMT_01_000001_01#html5media",
      reviewedBy: "Zully Pardo",
    },
    category: WorkCategory.RADIOTEATRO,
    slug: "mowgli",
  },
  {
    id: 19,
    name: "Cambam Balí",
    title: `“Cambam balí, cambam balicó”: el abracadabra de Don Os`,
    technicalDetails: {
      title: "Cambam Balí",
      author: "Oswaldo Díaz Díaz",
      publishedAt: cambamBaliPublishedAt,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango",
      genre: WorkCategory.CUENTO,
      reviewedBy: "María Camila Monroy S.",
    },
    illustration: imgCambamBali,
    category: WorkCategory.CUENTO,
    slug: "cambam-bali",
  },
  {
    id: 20,
    name: "Nabá",
    title: "Nabá: un Romeo y Julieta indígena",
    technicalDetails: {
      title: "Nabá",
      script: '"Nabá", radioteatro de Oswaldo Díaz Díaz',
      series: "Leyendas",
      transmittedBy: "Radiodifusora Nacional de Colombia, 10 de noviembre de 1955",
      reviewedBy: "Zully Pardo",
      playbackUrl: "https://catalogo.senalmemoria.co/cgi-bin/koha/opac-detail.pl?biblionumber=171861",
    },
    category: WorkCategory.RADIOTEATRO,
    illustration: imgNaba,
    slug: "naba",
  },
  {
    id: 21,
    name: "Historia de la gran campana",
    title: "La gran campana y el amor filial",
    technicalDetails: {
      title: "Historia de la gran campana",
      script: "Oswaldo Díaz Díaz",
      basedOn: "Una leyenda de oriente",
      series: "Leyendas",
      transmittedBy: "Radiodifusora Nacional de Colombia, 1955",
      reviewedBy: "María Camila Monroy S.",
      playbackUrl:
        "https://catalogo.senalmemoria.co/cgi-bin/koha/opac-detail.pl?biblionumber=49496&query_desc=kw%2Cwrdl%3A%20RDNC_RMT_10_000002_01#html5media",
    },
    category: WorkCategory.RADIOTEATRO,
    illustration: imgLaGranCampana,
    slug: "la-gran-campana",
  },
  {
    id: 7,
    name: "Rómpelo-Todo",
    title: "Rómpelo-Todo y la magia angelical",
    technicalDetails: {
      title: "Rómpelo-Todo",
      author: "Oswaldo Díaz Díaz",
      publishedAt: rompeloTodoPublishedAt,
      publishingLocation: "Bogotá",
      genre: WorkCategory.CUENTO,
      availableAt:
        "Biblioteca Pontificia Universidad Javeriana, Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango",
      reviewedBy: "María Camila Monroy S.",
    },
    illustration: imgRompeloTodo,
    category: WorkCategory.CUENTO,
    slug: "rompelo-todo",
  },
  {
    id: 5,
    name: "Aspecto de la literatura infantil",
    title: "Los buenos libros para niños",
    technicalDetails: {
      title: "Aspecto de la literatura infantil",
      author: "Oswaldo Díaz Díaz",
      publishedAt: aspectoDeLaLiteraturaPublishedAt,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango",
      genre: WorkCategory.NO_FICCION,
      reviewedBy: "Zully Pardo",
    },
    featured: true,
    illustration: imgAspectoDeLaLiteraturaInfantil,
    category: WorkCategory.NO_FICCION,
    slug: "aspecto-de-la-literatura-infantil",
  },
  {
    id: 22,
    name: "La niña de siete trojes",
    title: "El camino de una niña y sus flores",
    technicalDetails: {
      title: "La niña de siete trojes",
      script: "José Agustín Pulido Téllez",
      basedOn: '"La niña de siete trojes", cuento de Oswaldo Díaz Díaz',
      series: "Teatro para niños",
      transmittedBy: "Radiodifusora Nacional de Colombia, 1954",
      reviewedBy: "María Camila Monroy S.",
      playbackUrl:
        "https://catalogo.senalmemoria.co/cgi-bin/koha/opac-detail.pl?biblionumber=151898&query_desc=kw%2Cwrdl%3A%20RDNC_RMT_10_000001_01",
    },
    category: WorkCategory.RADIOTEATRO,
    illustration: imgNinaSieteTrojes,
    slug: "la-nina-de-siete-trojes",
  },
];
