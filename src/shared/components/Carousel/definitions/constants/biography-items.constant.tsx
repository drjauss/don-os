import { BioItems } from "../types/bio-items.type";
import plumaImg from "../../../../../images/bio/1_Pluma-min.png";
import diasYHorasImg from "../../../../../images/bio/2_Dias_y_horas-min.png";
import revistaVueloImg from "../../../../../images/bio/3_revista_vuelo-min.png";
import caricaturaImg from "../../../../../images/bio/4_Caricatura-min.png";
import discoImg from "../../../../../images/bio/5_disco-min.png";
import revistaVidaImg from "../../../../../images/bio/6_Revista_Vida-min.png";
import teatrinoImg from "../../../../../images/bio/7_Teatrino-min.jpg";
import libroMydasImg from "../../../../../images/bio/8_libro-min.png";
import dedicatoriaImg from "../../../../../images/bio/9_dedicatoria-min.png";
import { BioRoutes } from "../enums/bio-routes.enum";
import { plumaContent } from "../templates/pluma.template";
import { diasYHorasContent } from "../templates/dias-y-horas.template";
import { revistaVueloContent, revistaVueloTitle } from "../templates/revista-vuelo.template";
import { caricaturaContent, caricaturaSubtitle } from "../templates/caricatura.template";
import { discoContent } from "../templates/disco.template";
import { revistaVidaContent, revistaVidaTitle } from "../templates/revista-vida.template";
import { teatrinoContent, teatrinoTitle } from "../templates/teatrino.template";
import { mydasContent, mydasTitle, mydasSubtitle } from "../templates/mydas.template";
import { dedicatoriaContent } from "../templates/dedicatoria.template";

export const BiographyItems: BioItems = {
  [BioRoutes.PLUMA]: {
    bannerImage: plumaImg,
    title: "La pluma",
    subtitle: "Con la que firmaba y tomaba sus notas personales",
    content: plumaContent,
    navigation: {
      next: BioRoutes.DIAS_Y_HORAS,
      previous: BioRoutes.DEDICATORIA,
    },
  },
  [BioRoutes.DIAS_Y_HORAS]: {
    bannerImage: diasYHorasImg,
    title: `"Los días y las horas"`,
    subtitle: "El primer cuento de más de 80 escritos para niños",
    content: diasYHorasContent,
    navigation: {
      next: BioRoutes.REVISTA_VUELO,
      previous: BioRoutes.PLUMA,
    },
  },
  [BioRoutes.REVISTA_VUELO]: {
    bannerImage: revistaVueloImg,
    title: revistaVueloTitle,
    subtitle: "Una revista aeronáutica creada y dirigida por Oswaldo Díaz Díaz",
    content: revistaVueloContent,
    navigation: {
      next: BioRoutes.CARICATURA,
      previous: BioRoutes.DIAS_Y_HORAS,
    },
  },
  [BioRoutes.CARICATURA]: {
    bannerImage: caricaturaImg,
    title: "Una caricatura",
    subtitle: caricaturaSubtitle,
    content: caricaturaContent,
    navigation: {
      next: BioRoutes.DISCO,
      previous: BioRoutes.REVISTA_VUELO,
    },
  },
  [BioRoutes.DISCO]: {
    bannerImage: discoImg,
    title: "El disco",
    subtitle: "Un escritor para muchos medios y públicos: cuento, teatro y radioteatro",
    content: discoContent,
    navigation: {
      next: BioRoutes.REVISTA_VIDA,
      previous: BioRoutes.CARICATURA,
    },
  },
  [BioRoutes.REVISTA_VIDA]: {
    bannerImage: revistaVidaImg,
    title: revistaVidaTitle,
    subtitle: "Una revista que publicó las obras de varios autores colombianos",
    content: revistaVidaContent,
    navigation: {
      next: BioRoutes.TEATRINO,
      previous: BioRoutes.DISCO,
    },
  },
  [BioRoutes.TEATRINO]: {
    bannerImage: teatrinoImg,
    title: teatrinoTitle,
    subtitle: '"El teatro es el hobby de la literatura colombiana", dijo Don Os en una entrevista en 1954',
    content: teatrinoContent,
    navigation: {
      next: BioRoutes.MYDAS,
      previous: BioRoutes.REVISTA_VIDA,
    },
  },
  [BioRoutes.MYDAS]: {
    bannerImage: libroMydasImg,
    title: mydasTitle,
    subtitle: mydasSubtitle,
    content: mydasContent,
    navigation: {
      next: BioRoutes.DEDICATORIA,
      previous: BioRoutes.TEATRINO,
    },
  },
  [BioRoutes.DEDICATORIA]: {
    bannerImage: dedicatoriaImg,
    title: "Una dedicatoria",
    subtitle: "Para Oswaldo Díaz Díaz, querido y admirado. Cordialmente, León de Greiff Enero 26/49",
    content: dedicatoriaContent,
    navigation: {
      next: BioRoutes.PLUMA,
      previous: BioRoutes.MYDAS,
    },
  },
};
