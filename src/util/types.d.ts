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
