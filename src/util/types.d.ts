declare interface JoinForm {
  userType: 'buyer' | 'seller';
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
