export interface BannerType {
  preTitle: string;
  title: string;
}

export interface ProductType {
  length: number;
  id: string;
  price: string;
  title: string;
  gender: string;
  img: string;
  description: string;
}

export interface BlogType {
  id: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  img: string;
  title: string;
  first_content: string;
  second_content: string;
}

export interface AboutType {
  title: string;
  first_content: string;
  second_content: string;
  third_content: string;
  first_image: string;
  second_image: string;
  second_title: string;
  fourth_content: string;
  fifth_content: string;
  author: string;
}
