export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        <p>this is nested layout</p>
        {children}
        <p>this is nested layout under children</p>
      </section>
    )
  }