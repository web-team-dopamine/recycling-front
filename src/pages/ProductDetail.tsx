import { DetailContent, MainContent } from '../components/ProductDetail';

const ProductDetail = () => {
  return (
    <div>
      {/* 제품 설명 */}
      <div>
        <MainContent />
      </div>

      {/* 제품 상세 설명 (상세 정보/리뷰/업체 다른 상품) */}
      <div className="mb-6">
        <DetailContent />
      </div>
    </div>
  );
};

export default ProductDetail;
