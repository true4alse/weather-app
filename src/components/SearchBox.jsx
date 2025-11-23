// src/components/SearchBox.jsx
import { useState } from 'react';

function SearchBox({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();       // 페이지 새로고침 방지
    if (city.trim() === '') return;
    onSearch(city);           // 부모 컴포넌트로 도시명 전달
    setCity('');              // 입력창 비우기
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="도시명을 입력하세요 (예: Seoul)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">
        검색
      </button>
    </form>
  );
}

export default SearchBox;
