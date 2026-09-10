import Link from 'next/link';

const items = [
  { href: '/chat', label: 'Chat' },
  { href: '/agents', label: 'Agents' },
  { href: '/docs', label: 'Docs' },
  { href: '/settings', label: 'Settings' },
] as const;

export function DashboardNav() {
  return (
    <nav>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
