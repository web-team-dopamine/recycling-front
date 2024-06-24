import { Banner, ItemList, PostButton } from '../components/ProductMain';
import SearchInput from '../hooks/useSearch';

interface ProductsProps {
  isLoggedIn: boolean;
  userType: 'user' | 'seller' | 'admin';
}

const Products: React.FC<ProductsProps> = ({ isLoggedIn, userType }) => {
  // Dummy data
  const items = [
    {
      id: 1,
      image: '/asset/main-1-1.png',
      title: '[누깍] FRODO 프로도 M 메신저백',
      company: '누깍',
      price: '30,000원',
      mark: 120,
      date: new Date('2024-06-24'),
    },
    {
      id: 2,
      image: '/asset/main-1-2.png',
      title: '[니올] 하늘풍선 니올링 업사이클링 키링',
      company: '니올',
      price: '10,000원',
      mark: 20,
      date: new Date('2024-06-01'),
    },
    {
      id: 3,
      image: '/asset/main-1-3.png',
      title: '[프라이탁] FREITAG F14 DEXTER 메신저 크로스백',
      company: '프라이탁',
      price: '50,000원',
      mark: 290,
      date: new Date('2024-05-04'),
    },
    {
      id: 4,
      image: '/asset/main-1-4.png',
      title: '[플리츠마마] 숄더백 서울에디션 미드나잇',
      company: '플리츠마마',
      price: '30,000원',
      mark: 160,
      date: new Date('2024-05-02'),
    },
    {
      id: 5,
      image: '/asset/p-5.png',
      title: '[팩커블코] Waist Bag Medium',
      company: '팩커블코',
      price: '30,000원',
      mark: 440,
      date: new Date('2023-04-22'),
    },
    {
      id: 6,
      image: '/asset/p-6.png',
      title: '[플리츠마마] 투웨이쇼퍼백 핑크그린',
      company: '플리츠마마',
      price: '30,000원',
      mark: 12,
      date: new Date('2024-03-30'),
    },
    {
      id: 7,
      image: '/asset/p-7.png',
      title: '[리버드] Reversible Gym Sack #10',
      company: '리버드',
      price: '30,000원',
      mark: 40,
      date: new Date('2024-03-22'),
    },
    {
      id: 8,
      image: '/asset/p-8.png',
      title: '[기시히] 백팩 5',
      company: '기시히',
      price: '30,000원',
      mark: 150,
      date: new Date('2024-01-22'),
    },
    {
      id: 9,
      image: '/asset/com-2.png',
      title: '[플리츠마마] 숄더백 서울에디션 미드나잇',
      company: '플리츠마마',
      price: '30,000원',
      mark: 9,
      date: new Date('2024-01-12'),
    },
    {
      id: 10,
      image: '/asset/com-3.png',
      title: '[플리츠마마] 숄더백 서울에디션 미드나잇',
      company: '플리츠마마',
      price: '30,000원',
      mark: 88,
      date: new Date('2023-12-22'),
    },
    {
      id: 11,
      image: '/asset/com-4.png',
      title: '[플리츠마마] 숄더백 서울에디션 미드나잇',
      company: '플리츠마마',
      price: '30,000원',
      mark: 5,
      date: new Date('2023-11-22'),
    },
    {
      id: 12,
      image: '/asset/com-5.png',
      title: '[플리츠마마] 숄더백 서울에디션 미드나잇',
      company: '플리츠마마',
      price: '30,000원',
      mark: 70,
      date: new Date('2023-05-29'),
    },
    {
      id: 13,
      image: '/asset/main-1-3.png',
      title: '[플리츠마마] 숄더백 서울에디션 미드나잇',
      company: '플리츠마마',
      price: '30,000원',
      mark: 18,
      date: new Date('2023-01-02'),
    },
    {
      id: 14,
      image: '/asset/main-1-2.png',
      title: '[플리츠마마] 숄더백 서울에디션 미드나잇',
      company: '플리츠마마',
      price: '30,000원',
      mark: 255,
      date: new Date('2022-01-02'),
    },
  ];

  return (
    <div>
      {/* banner */}
      <div className="mb-16">
        <Banner />
      </div>

      {/* search */}
      <div className="mb-6 justify-end flex ml-4 mr-20">
        {userType === 'seller' && <PostButton />}
        <SearchInput />
      </div>

      {/* 제품 리스트 */}
      <div className="mb-6">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Products;
