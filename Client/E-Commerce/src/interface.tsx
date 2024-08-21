interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
export interface Product {
  data: any;
  _id: string;
  title: string;
  price: number;
  description: string;
  images: string;
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export interface Products {
  Products: {
    status: string;
    result: number;
    data: Product[];
  };
}

export interface onlyProducts {
  status: string;
  result: number;
  data: Product;
}

export interface Reviews {
  Review: {
    data: {
      _id: string;
      Name: string;
      Title: string;
      Review: string;
      Date: Number;
    }[];
  };
}
