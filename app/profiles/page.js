'use client';

import { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import ProfileTable from '../../components/ProfileTable';

export default function ProfilesPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await api.get('/profiles');
        setData(res.data.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Profiles</h2>
      <ProfileTable data={data} />
    </div>
  );
}