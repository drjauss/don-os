import { Reviews } from "../types/reviews.type";

import * as BlondinetteReviewTemplate from "../templates/blondinette-review.template";
import * as RataplanReviewTemplate from "../templates/rataplan-review.template";
import * as TimonelReviewTemplate from "../templates/timonel-review.template";
import * as CargadorDeSalReviewTemplate from "../templates/el-cargador-de-sal-review.template";
import * as AspectoDeLaLiteraturaReviewTemplate from "../templates/aspecto-de-la-literatura-infantil-review.template";
import * as JuegosDeAntanoReviewTemplate from "../templates/juegos-de-antano-review.template";
import * as RompeloTodoReviewTemplate from "../templates/rompelo-todo-review.template";
import * as MatildeAnarayReviewTemplate from "../templates/matilde-anaray-review.template";
import * as ElPaisDeLilacReviewTemplate from "../templates/el-pais-de-lilac-review.template";
import * as RayosYCentellasReviewTemplate from "../templates/rayos-y-centellas-review.template";
import * as DiccionarioDeLasHadasReviewTemplate from "../templates/diccionario-de-las-hadas.template";
import * as NabaReviewTemplate from "../templates/naba-review.template";
import * as LaGranCampanaReviewTemplate from "../templates/la-gran-campana-review.template";
import * as LaNinaDeSieteTrojesReviewTemplate from "../templates/la-nina-de-siete-trojes-review.template";
import * as ComoEraChristianReviewTemplate from "../templates/como-era-christian-andersen.template";
import * as PoesiasRafaelPomboReviewTemplate from "../templates/poesias-infantiles-rafael-pombo.template";
import * as descubrimientoDeAmericaReviewTemplate from "../templates/descubrimiento-de-america.template";
import * as zuheReviewTemplate from "../templates/zuhe.template";
import * as pomarrosaReviewTemplate from "../templates/pomarrosa-en-el-parque.template";
import * as lagunaEncantadaReviewTemplate from "../templates/la-laguna-encantada.template";
import * as diarioDeUnGorrionReviewTemplate from "../templates/diario-de-un-gorrion.template";
import * as cambamBaliReviewTemplate from "../templates/cambam-bali.template";
import * as laSopaDePiedraReviewTemplate from "../templates/la-sopa-de-piedra-review.template";
import * as losDiosesLoSabenReviewTemplate from "../templates/los-dioses-lo-saben-review.template";
import * as mowgliReviewTemplate from "../templates/mowgli-review.template";

export const reviews: Reviews = {
  blondinette: {
    ...BlondinetteReviewTemplate,
  },
  "diccionario-de-las-hadas": {
    ...DiccionarioDeLasHadasReviewTemplate,
  },
  rataplan: {
    ...RataplanReviewTemplate,
  },
  "como-era-christian-andersen": {
    ...ComoEraChristianReviewTemplate,
  },
  timonel: {
    ...TimonelReviewTemplate,
  },
  "poesias-infantiles-rafael-pombo": {
    ...PoesiasRafaelPomboReviewTemplate,
  },
  "el-cargador-de-sal": {
    ...CargadorDeSalReviewTemplate,
  },
  "descubrimiento-de-america": {
    ...descubrimientoDeAmericaReviewTemplate,
  },
  "aspecto-de-la-literatura-infantil": {
    ...AspectoDeLaLiteraturaReviewTemplate,
  },
  zuhe: {
    ...zuheReviewTemplate,
  },
  "juegos-de-antano": {
    ...JuegosDeAntanoReviewTemplate,
  },
  "pomarrosa-en-el-parque": {
    ...pomarrosaReviewTemplate,
  },
  "rompelo-todo": {
    ...RompeloTodoReviewTemplate,
  },
  "la-laguna-encantada": {
    ...lagunaEncantadaReviewTemplate,
  },
  "matilde-anaray": {
    ...MatildeAnarayReviewTemplate,
  },
  "diario-de-un-gorrion": {
    ...diarioDeUnGorrionReviewTemplate,
  },
  "el-pais-de-lilac": {
    ...ElPaisDeLilacReviewTemplate,
  },
  "cambam-bali": {
    ...cambamBaliReviewTemplate,
  },
  "rayos-y-centellas": {
    ...RayosYCentellasReviewTemplate,
  },
  naba: {
    ...NabaReviewTemplate,
  },
  "la-nina-de-siete-trojes": {
    ...LaNinaDeSieteTrojesReviewTemplate,
  },
  "la-gran-campana": {
    ...LaGranCampanaReviewTemplate,
  },
  "la-sopa-de-piedra": {
    ...laSopaDePiedraReviewTemplate,
  },
  "los-dioses-lo-saben": {
    ...losDiosesLoSabenReviewTemplate,
  },
  mowgli: {
    ...mowgliReviewTemplate,
  },
};
