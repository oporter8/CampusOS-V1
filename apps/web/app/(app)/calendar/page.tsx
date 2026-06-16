export default function CalendarPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Calendar</h2>
        <p className="mt-2 text-slate-600">Manage your academic schedule.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Monthly Calendar Placeholder */}
        <div className="lg:col-span-2 rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">June 2026</h3>
          <div className="grid grid-cols-7 gap-2">
            {[
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
            ].map((day) => (
              <div key={day} className="text-center font-semibold text-slate-600 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square flex items-center justify-center rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
              >
                <span className="text-sm text-slate-700">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            <p className="text-slate-500 text-sm">No upcoming events.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
