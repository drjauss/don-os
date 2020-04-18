export type Navigation = {
    next: string;
    previous: string;
}

export type BioItem = {
    title: string;
    subtitle: string;
    content: any;
    bannerImage: string;
    imageAlt: string;
    navigation: Navigation
}