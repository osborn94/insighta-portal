'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/profiles">Profiles</Link> |{' '}
      <Link href="/search">Search</Link> |{' '}
      <Link href="/login">Login</Link>
    </nav>
  );
}