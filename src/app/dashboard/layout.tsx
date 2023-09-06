export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        <p>this is layout</p>
        {children}
        <p>this is layout under children</p>
      </section>
    )
  }