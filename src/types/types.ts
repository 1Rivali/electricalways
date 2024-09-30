export interface Category {
  id: number;
  category_name: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  description: string;
}

export interface Product {
  id: number;
  category_id: number;
  title: string;
  description: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  category: Category;
}

export interface ProductQuery {
  categoryId: number | string | null;
}

export interface FooterImage {
  id: number;
  image_path: string;
  alt_text: string;
  created_at: string;
  updated_at: string;
}
