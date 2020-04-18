import { BioItem } from "./bio-item.type";

export type BioItems = {
    [key: string]: Partial<BioItem>;
}