import { Work } from "../types/work.type";
import { WorkCategory } from "../enums/work-category.enum";

export const workList: Array<Work> = [
    {
        id: 1,
        name: 'La segunda guerra mundial en el país de juguetes',
        title: 'Blondinette',
        technicalDetails: {
            title: 'Blondinette',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'Teatro V1 (1963) y Blondinette (1973)',
            publishingLocation: 'Bogotá',
            genre: WorkCategory.TEATRO,
            availableAt: 'Biblioteca Nacional de Colombia'
        },
        category: WorkCategory.TEATRO,
        slug: 'blondinette',
    },
    {
        id: 2,
        name: 'Rataplán: un repicar febril',
        title: 'Rataplán',
        technicalDetails: {
            title: 'Rataplán',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'El país de Lilac (1938), Cuentos tricolores (1967) y Retorno a Lilac (1967)',
            publishingLocation: 'Bogotá',
            genre: WorkCategory.CUENTO,
            availableAt: 'Biblioteca Nacional de Colombia, Biblioteca Pontificia Universidad Javeriana y Biblioteca Luis Ángel Arango '
        },
        category: WorkCategory.RADIOTEATRO,
        slug: 'rataplan'

    },
    {
        id: 3,
        name: 'Timonel: el papagayo que descubrió España',
        title: 'Timonel',
        technicalDetails: {
            title: 'Timonel (cuento y radioteatro)',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'Cambam Bali (1942) y Otra vez en Lilac (1973)',
            publishingLocation: 'Bogotá',
            genre: [WorkCategory.RADIOTEATRO, WorkCategory.CUENTO],
            availableAt: 'Biblioteca Nacional de Colombia'
        },
        category: WorkCategory.RADIOTEATRO,
        slug: 'timonel'
    },
    {
        id: 4,
        name: 'La sal de la vida: un cuento indígena',
        title: 'El cargador de sal',
        technicalDetails: {
            title: 'El cargador de sal (cuento)',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'El país de Lilac (1938), Cuentos tricolores (1967) y Retorno a Lilac (1987)',
            publishingLocation: 'Bogotá',
            genre: [WorkCategory.RADIOTEATRO, WorkCategory.CUENTO],
            availableAt: 'Biblioteca Nacional de Colombia, Biblioteca Luis Ángel Arango, Biblioteca Universidad Javeriana'
        },
        category: WorkCategory.RADIOTEATRO,
        slug: 'el-cargador-de-sal'
    },
    {
        id: 5,
        name: 'Los buenos libros para niños',
        title: 'Aspecto de la literatura infantil',
        technicalDetails: {
            title: 'Aspecto de la literatura infantil (ensayo)',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'Revista de Indias, Bogotá Vol.8 no.26 (Feb.1941)',
            publishingLocation: 'Bogotá',
            availableAt: 'Biblioteca Nacional de Colombia, Biblioteca Luis Ángel Arango'
        },
        category: WorkCategory.NO_FICCION,
        slug: 'aspecto-de-la-literatura-infantil'
    },
    {
        id: 6,
        name: 'Diversiones para niños, los juegos de antaño',
        title: 'Juegos de antaño',
        technicalDetails: {
            title: 'Juegos de antaño (no ficción)',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'Revista Vida¸No. 32-33, 1949',
            publishingLocation: 'Bogotá',
            availableAt: 'Biblioteca Nacional de Colombia, Biblioteca Luis Ángel Arango'
        },
        category: WorkCategory.NO_FICCION,
        slug: 'juegos-de-antano'
    },
    {
        id: 7,
        name: 'Rómpelo-Todo y la magia angelical',
        title: 'Rómpelo-Todo',
        technicalDetails: {
            title: 'Rómpelo-Todo',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'Otra vez en Lilac (1942), Cambam Bali (1973) y Retorno a Lilac  (1987)',
            publishingLocation: 'Bogotá',
            genre: WorkCategory.CUENTO,
            availableAt: 'Biblioteca Pontificia Universidad Javeriana, Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango'
        },
        category: WorkCategory.CUENTO,
        slug: 'rompelo-todo'
    },
    {
        id: 8,
        name: 'Olor a vellón y romero',
        title: 'Matilde Anaray',
        technicalDetails: {
            title: 'Matilde Anaray, la pastorcita de Socha (cuento)',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'Revista Vida No. 39, 1950. Cuentos Tricolores, 1967',
            availableAt: 'Biblioteca Nacional de Colombia, Biblioteca Luis Ángel Arango, Biblioteca Universidad Javeriana'
        },
        category: WorkCategory.CUENTO,
        slug: 'matilde-anaray'
    },
    {
        id: 9,
        name: 'El país de Lilac, el país de la infancia',
        title: 'El país de Lilac',
        technicalDetails: {
            title: 'El país de Lilac',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'El país de Lilac (1938) y Retorno a Lilac (1987)',
            publishingLocation: 'Bogotá',
            genre: WorkCategory.CUENTO,
            availableAt: 'Biblioteca Nacional de Colombia y Biblioteca Luis Ángel Arango'
        },
        category: WorkCategory.CUENTO,
        slug: 'el-pais-de-lilac'
    },
    {
        id: 10,
        name: 'Piratas, canillas y cofres',
        title: 'Rayos y centellas',
        technicalDetails: {
            title: 'Rayos y centellas (cuento)',
            author: 'Oswaldo Díaz Díaz',
            publishedAt: 'El país de Lilac (1938)',
            publishingLocation: 'Bogotá',
            genre: WorkCategory.CUENTO,
            availableAt: 'Biblioteca Nacional de Colombia'
        },
        category: WorkCategory.CUENTO,
        slug: 'rayos-y-centellas'
    }
];
