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
import imgRayosYCentellas from "../../../../../images/illustrations/Rayos-min.png";
import imgCambamBali from "../../../../../images/illustrations/Cambam-bali-min.png";
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

export const workList: Array<Work> = [
  {
    id: 1,
    name: "La segunda guerra mundial en el país de juguetes",
    title: "Blondinette",
    technicalDetails: {
      title: '"Blondinette"',
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
    id: 11,
    name: "Tipos de hadas y seres fantásticos: un diccionario sin alfabeto",
    title: "Diccionario de las hadas",
    technicalDetails: {
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
    id: 2,
    name: "Rataplán: un repicar febril",
    title: "Rataplán",
    technicalDetails: {
      title: "Rataplán",
      author: "Oswaldo Díaz Díaz",
      publishedAt: rataplanPublishedAT,
      publishingLocation: "Bogotá",
      genre: `${WorkCategory.CUENTO} y ${WorkCategory.RADIOTEATRO}`,
      availableAt:
        "Biblioteca Nacional de Colombia, Biblioteca Pontificia Universidad Javeriana y Biblioteca Luis Ángel Arango ",
      reviewedBy: "María Camila Monroy S.",
    },
    illustration: imgRataplan,
    category: WorkCategory.RADIOTEATRO,
    slug: "rataplan",
  },
  {
    id: 12,
    name: "Hans Christian Andersen: el cisne danés",
    title: "Cómo era Hans Christian Andersen",
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
    name: "Timonel: el papagayo que descubrió España",
    title: "Timonel",
    technicalDetails: {
      title: "Timonel (radioteatro) y Los papagayos de don Cristóforo (cuento)",
      author: "Oswaldo Díaz Díaz",
      publishedAt: timonelPublishedAt,
      publishingLocation: "Bogotá",
      genre: `${WorkCategory.RADIOTEATRO} y ${WorkCategory.CUENTO}`,
      availableAt: "Biblioteca Nacional de Colombia",
      reviewedBy: "Zully Pardo",
    },
    illustration: imgTimonel,
    category: WorkCategory.RADIOTEATRO,
    slug: "timonel",
  },
  {
    id: 13,
    name: "Análisis literario de Rafael Pombo",
    title: "Las poesías infantiles de Rafael Pombo",
    technicalDetails: {
      author: "Oswaldo Díaz Díaz",
      publishedAt: poesiasInfantilesPomboPublishedAt,
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Luis Ángel Arango",
      genre: WorkCategory.NO_FICCION,
      reviewedBy: "María Camila Monroy S.",
    },
    category: WorkCategory.NO_FICCION,
    slug: "poesias-infantiles-rafael-pombo",
  },
  {
    id: 4,
    name: "La sal de la vida: un cuento indígena",
    title: "El cargador de sal",
    technicalDetails: {
      title: "El cargador de sal",
      author: "Oswaldo Díaz Díaz",
      publishedAt: cargadorDeSalPublishedAt,
      publishingLocation: "Bogotá",
      genre: `${WorkCategory.RADIOTEATRO} y ${WorkCategory.CUENTO}`,
      availableAt: "Biblioteca Nacional de Colombia, Biblioteca Luis Ángel Arango y Biblioteca Universidad Javeriana",
      reviewedBy: "Zully Pardo",
    },
    featured: true,
    illustration: imgElCargadorDeSal,
    category: WorkCategory.RADIOTEATRO,
    slug: "el-cargador-de-sal",
  },
  {
    id: 14,
    name: "El descubrimiento de América para niños: Los animales que ayudaron al almirante",
    title: "Los animales que ayudaron al almirante",
    technicalDetails: {
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
    id: 5,
    name: "Los buenos libros para niños",
    title: "Aspecto de la literatura infantil",
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
    category: WorkCategory.CUENTO,
    slug: "zuhe",
  },
  {
    id: 6,
    name: "Diversiones para niños, los juegos de antaño",
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
    id: 16,
    name: "La fantasía de la indigencia en “Pomarrosa en el parque”",
    title: "Pomarrosa en el parque",
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
    id: 7,
    name: "Rómpelo-Todo y la magia angelical",
    title: "Rómpelo-Todo",
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
    id: 17,
    name: "Entre la oralidad chibcha y los cuentos de hadas",
    title: "La laguna encantada",
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
    id: 8,
    name: "Olor a vellón y romero",
    title: "Matilde Anaray",
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
    id: 18,
    name: "La vida en el diario de un gorrión",
    title: "Diario de un gorrión",
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
    id: 9,
    name: "El país de Lilac, el país de la infancia",
    title: "El país de Lilac",
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
    id: 19,
    name: `“Cambam bali, cambam balicó”: el abracadabra de Don Os`,
    title: "Cambam Bali",
    technicalDetails: {
      author: "Oswaldo Díaz Díaz",
      publishedAt: "El país de Lilac (1938) y Retorno a Lilac (1987)",
      publishingLocation: "Bogotá",
      availableAt: "Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango",
    },
    illustration: imgCambamBali,
    category: WorkCategory.CUENTO,
    slug: "cambam-bali",
  },
  {
    id: 10,
    name: "Piratas, canillas y cofres",
    title: "Rayos y centellas",
    technicalDetails: {
      title: "Rayos y centellas (cuento)",
      author: "Oswaldo Díaz Díaz",
      publishedAt: "El país de Lilac (1938)",
      publishingLocation: "Bogotá",
      genre: WorkCategory.CUENTO,
      availableAt: "Biblioteca Nacional de Colombia",
    },
    featured: true,
    illustration: imgRayosYCentellas,
    category: WorkCategory.CUENTO,
    slug: "rayos-y-centellas",
  },
];
