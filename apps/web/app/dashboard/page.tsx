export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Classes</h2>
          <p className="mt-2 text-slate-400">
            No classes added yet.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Assignments</h2>
          <p className="mt-2 text-slate-400">
            No assignments yet.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">AI Assistant</h2>
          <p className="mt-2 text-slate-400">
            Coming soon.
          </p>
        </div>
      </div>
    </main>
  );
}
