export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Dashboard</h2>
        <p className="mt-2 text-slate-600">
          Welcome back! Here's an overview of your academic life.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upcoming Assignments Card */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold">Upcoming Assignments</h3>
          <div className="mt-4 space-y-3">
            <p className="text-slate-500">No assignments yet.</p>
          </div>
        </div>

        {/* Today's Schedule Card */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold">Today's Schedule</h3>
          <div className="mt-4 space-y-3">
            <p className="text-slate-500">No classes scheduled.</p>
          </div>
        </div>

        {/* GPA Card */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold">GPA Overview</h3>
          <div className="mt-4">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              0.00
            </div>
            <p className="text-sm text-slate-500 mt-2">No grades yet</p>
          </div>
        </div>

        {/* Recent Notes Card */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg lg:col-span-2">
          <h3 className="text-xl font-semibold">Recent Notes</h3>
          <div className="mt-4 space-y-3">
            <p className="text-slate-500">No notes created yet.</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold">Quick Stats</h3>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-slate-600">Classes: 0</p>
            <p className="text-sm text-slate-600">Assignments: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
