export default function AssignmentsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Assignments</h2>
        <p className="mt-2 text-slate-600">Track your homework and deadlines.</p>
      </div>

      <div className="space-y-4">
        {/* Empty State */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-12 shadow-lg text-center">
          <div className="inline-block rounded-full bg-slate-100 p-4 mb-4">
            <svg
              className="w-12 h-12 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 mt-4">
            No assignments
          </h3>
          <p className="text-slate-500 mt-2">
            You don't have any assignments yet. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}
