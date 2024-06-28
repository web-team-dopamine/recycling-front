declare interface JoinForm {
  userType: 'user' | 'seller';
  nickname: string;
  email: string;
  password: string;
  address: string;
}

declare interface AddressData {
  zonecode: string;
  address: string;
}

declare type DataItem = any; // item 오류 사전 방지

declare interface PaginationResult {
  currentPage: number;
  currentItems: DataItem[];
  totalPages: number;
  paginate: (pageNumber: number) => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
}

declare interface ProductItemProps {
  image: string;
  title: string;
  company: string;
  price: string;
}

declare interface ProtectionItemProps {
  image: string;
  title: string;
  nickname: string;
  likes: number;
  date: Date;
}

declare type HeaderProps = {
  isLoggedIn: boolean;
  userType: 'admin' | 'seller' | 'user';
};

export interface AddressData {
  zonecode: string;
  address: string;
}
export interface Product {
  id: number;
  companyName: string;
  productImage: string;
  productName: string;
  price: number;
  options: string;
}

export interface Order {
  id: number;
  products: Product[];
}

export interface OrderHistoryProps {
  orders: Order[];
}

export interface OrderedItemProps {
  companyName: string;
  productImage: string;
  productName: string;
  price: number;
  options: string;
  onReviewClick: () => void;
  onTrackClick: () => void;
}
