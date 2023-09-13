export type FoodOption = {
  name: string;
  price: number;
};

export type FoodOrigin = {
  name: string;
  country: string;
};

export type FoodItem = {
  name: string;
  price: number;
  image: string;
  bannerImage: string;
  menu_intro: string;
  isBest: boolean;
  foodId: number;
  addOption: FoodOption[];
  origin: FoodOrigin[];
  hotLevel?: number; // hotLevel이 모든 항목에 있는 것이 아니므로 optional로 선언합니다.
};

export type Menu = {
  BURGER: FoodItem[];
  SANDWICH: FoodItem[];
};

// 사용 예

export type Order = {
  dish: string;
  quantity: number;
  price: number;
};

export type Table = {
  table_number: number;
  orders: Order[];
};

export type Tables = Table[];

export interface CartItem {
  user_id: string;
  table_number: string;
  product_id: string;
  product_price: number;
  product_count: number;
  product_option: { [key: string]: number } | null;
  product_image: string[];
}
