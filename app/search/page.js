'use client';

import { useState } from 'react';
import { api } from '../../lib/api';
import ProfileTable from '../../components/ProfileTable';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    const res = await api.get('/profiles/search', {
      params: { q: query }
    });
    setData(res.data.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Search</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="young males from nigeria"
      />

      <button onClick={handleSearch}>
        Search
      </button>

      <ProfileTable data={data} />
    </div>
  );
}