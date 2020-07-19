export type Navigation = {
  next: string;
  previous: string;
};

export type BioItem = {
  title: any;
  subtitle: any;
  content: any;
  bannerImage: string;
  imageAlt: string;
  navigation: Navigation;
};
