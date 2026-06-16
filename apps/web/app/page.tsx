export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-72 border-r border-white/30 bg-white/60 backdrop-blur-xl">
          <div className="p-8">
            <h1 className="text-3xl font-bold">CampusOS</h1>
            <p className="text-sm text-slate-500 mt-1">
              Student Operating System
            </p>
          </div>

          <nav className="px-4 space-y-2">
            {[
              "Dashboard",
              "Classes",
              "Assignments",
              "Calendar",
              "Notes",
              "AI Assistant",
              "Settings",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl px-4 py-3 text-left transition hover:bg-white/70"
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold">
              Welcome to CampusOS
            </h2>

            <p className="mt-2 text-slate-600">
              Your academic life, organized in one place.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold">
                Upcoming Assignments
              </h3>

              <div className="mt-4 text-slate-500">
                No assignments yet.
              </div>
            </div>

            <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold">
                Today's Schedule
              </h3>

              <div className="mt-4 text-slate-500">
                No classes scheduled.
              </div>
            </div>

            <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold">
                GPA Overview
              </h3>

              <div className="mt-4 text-5xl font-bold">
                0.00
              </div>
            </div>

            <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg lg:col-span-2">
              <h3 className="text-xl font-semibold">
                Recent Notes
              </h3>

              <div className="mt-4 text-slate-500">
                No notes created.
              </div>
            </div>

            <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold">
                AI Assistant
              </h3>

              <div className="mt-4 text-slate-500">
                AI integration coming soon.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}