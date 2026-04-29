'use client';

export default function LoginPage() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/api/v1/auth/github/start';
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <button onClick={handleLogin}>
        Login with GitHub
      </button>
    </div>
  );
}