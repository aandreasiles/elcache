
export interface Service {
  name: string;
}

export interface PriceItem {
  name: string;
  price: string;
}

export interface PriceCategory {
  category: string;
  items: PriceItem[];
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  avatarUrl: string;
}
