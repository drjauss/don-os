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

export const reviews: Reviews = {
    'blondinette': {
        ...BlondinetteReviewTemplate
    },
    'rataplan': {
        ...RataplanReviewTemplate
    },
    'timonel': {
        ...TimonelReviewTemplate
    },
    'el-cargador-de-sal': {
        ...CargadorDeSalReviewTemplate
    },
    'aspecto-de-la-literatura-infantil': {
        ...AspectoDeLaLiteraturaReviewTemplate
    },
    'juegos-de-antano': {
        ...JuegosDeAntanoReviewTemplate
    },
    'rompelo-todo': {
        ...RompeloTodoReviewTemplate
    },
    'matilde-anaray': {
        ...MatildeAnarayReviewTemplate
    },
    'el-pais-de-lilac': {
        ...ElPaisDeLilacReviewTemplate
    },
    'rayos-y-centellas': {
        ...RayosYCentellasReviewTemplate
    }
};