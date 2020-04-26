import { WorkCategory } from "../enums/work-category.enum";
import { WorkTechnicalDetails } from "./work-technical-details.type";
import { WorkContent } from "./work-content.type";
import { Review } from "../../Review/definitions/types/review.type";

export type Work = {
    id: number;
    name: string;
    title: string;
    content?: WorkContent;
    category: WorkCategory;
    technicalDetails: Partial<WorkTechnicalDetails>;
    illustration?: string;
    slug: string;
    review?: Review;
    featured?: boolean;
    keywords?: Array<string>;
};
