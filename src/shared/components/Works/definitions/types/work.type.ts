import { WorkCategory } from "../enums/work-category.enum";
import { WorkTechnicalDetails } from "./work-technical-details.type";
import { WorkContent } from "./work-content.type";

export type Work = {
    id: number;
    name: string;
    title: string;
    content?: WorkContent;
    category: WorkCategory;
    technicalDetails: Partial<WorkTechnicalDetails>;
    illustration?: string;
    slug: string;
    featured?: boolean;
    keywords?: Array<string>;
};
