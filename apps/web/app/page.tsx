import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>WealthyExpress Hub</h1>
        <p>Wallet-authenticated AI workspace scaffolding for chat, agents, docs, and settings.</p>
        <Link className="button" href="/login">
          Open login
        </Link>
      </section>
    </main>
  );
}
