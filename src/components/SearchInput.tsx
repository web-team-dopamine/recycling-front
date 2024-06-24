import { IoIosSearch } from 'react-icons/io';
import useInput from '../hooks/useInput';

const SearchInput = () => {
  const searchInput = useInput({ initialValue: '' });

  return (
    <form className="max-w-md flex items-center justify-end">
      <div className="relative w-full">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="검색어를 입력하세요"
          value={searchInput.value}
          onChange={searchInput.onChange}
          className="p-2.5 w-full z-20 text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
          required
        />
        <button
          type="submit"
          className="absolute right-0 top-0 p-2.5 text-sm font-medium h-full text-white rounded-lg border-l-none"
        >
          <IoIosSearch className="text-gray-700 w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
