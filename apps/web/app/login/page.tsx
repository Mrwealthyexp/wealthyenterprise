import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="content">
      <div className="panel">
        <h1>Connect your wallet</h1>
        <p>Sign in with Ethereum entry point for the WealthyExpress workspace.</p>
        <p>The SIWE nonce and verification APIs are scaffolded under /api/auth/siwe.</p>
        <Link className="button" href="/chat">
          Continue to workspace
        </Link>
      </div>
    </main>
  );
}
