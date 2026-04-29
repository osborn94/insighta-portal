'use client';

export default function ProfileTable({ data = [] }) {
  return (
    <table border="1" cellPadding="8" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.gender}</td>
            <td>{p.age}</td>
            <td>{p.country_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}