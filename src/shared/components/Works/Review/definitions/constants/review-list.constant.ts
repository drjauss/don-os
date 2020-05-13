import { Reviews } from "../types/reviews.type";

import * as BlondinetteReviewTemplate from '../templates/blondinette-review.template';
import * as RataplanReviewTemplate from '../templates/rataplan-review.template';
import * as TimonelReviewTemplate from '../templates/timonel-review.template';
import * as CargadorDeSalReviewTemplate from '../templates/el-cargador-de-sal-review.template';
import * as AspectoDeLaLiteraturaReviewTemplate from '../templates/aspecto-de-la-literatura-infantil-review.template';
import * as JuegosDeAntanoReviewTemplate from '../templates/juegos-de-antano-review.template';
import * as RompeloTodoReviewTemplate from '../templates/rompelo-todo-review.template';
import * as MatildeAnarayReviewTemplate from '../templates/matilde-anaray-review.template';
import * as ElPaisDeLilacReviewTemplate from '../templates/el-pais-de-lilac-review.template';
import * as RayosYCentellasReviewTemplate from '../templates/rayos-y-centellas-review.template';
import * as DiccionarioDeLasHadasReviewTemplate from '../templates/diccionario-de-las-hadas.template';
// christianAndersenTemplate
// rafaelPombo
// descubrimientoDeAmerica
// zuhe
// pomarrosa
// la laguna encantada
// diario de un gorrion

export const reviews: Reviews = {
    'blondinette': {
        ...BlondinetteReviewTemplate
    },
    'diccionario-de-las-hadas': {
        ...DiccionarioDeLasHadasReviewTemplate
    },
    'rataplan': {
        ...RataplanReviewTemplate
    },
    'como-era-christian-andersen': {
        ...RataplanReviewTemplate
    },
    'timonel': {
        ...TimonelReviewTemplate
    },
    'poesias-infantiles-rafael-pombo': {
        ...RataplanReviewTemplate
    },
    'el-cargador-de-sal': {
        ...CargadorDeSalReviewTemplate
    },
    'descubrimiento-de-america': {
        ...RataplanReviewTemplate
    },
    'aspecto-de-la-literatura-infantil': {
        ...AspectoDeLaLiteraturaReviewTemplate
    },
    'zuhe': {
        ...RataplanReviewTemplate
    },
    'juegos-de-antano': {
        ...JuegosDeAntanoReviewTemplate
    },
    'pomarrosa-en-el-parque': {
        ...RataplanReviewTemplate
    },
    'rompelo-todo': {
        ...RompeloTodoReviewTemplate
    },
    'la-laguna-encantada': {
        ...RataplanReviewTemplate
    },
    'matilde-anaray': {
        ...MatildeAnarayReviewTemplate
    },
    'diario-de-un-gorrion': {
        ...RataplanReviewTemplate
    },
    'el-pais-de-lilac': {
        ...ElPaisDeLilacReviewTemplate
    },
    'cambam-bali': {
        ...RataplanReviewTemplate
    },
    'rayos-y-centellas': {
        ...RayosYCentellasReviewTemplate
    }
};