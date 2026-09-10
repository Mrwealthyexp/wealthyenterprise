import { DashboardNav } from '@/components/dashboard-nav';

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="shell">
      <aside className="sidebar">
        <h2>Workspace</h2>
        <DashboardNav />
      </aside>
      <section className="content">{children}</section>
    </main>
  );
}
