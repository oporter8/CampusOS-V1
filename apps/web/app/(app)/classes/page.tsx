export default function ClassesPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Classes</h2>
        <p className="mt-2 text-slate-600">View and manage your courses.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Empty State */}
        <div className="col-span-full rounded-3xl bg-white/70 backdrop-blur-xl p-12 shadow-lg text-center">
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
                d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 mt-4">
            No classes yet
          </h3>
          <p className="text-slate-500 mt-2">
            Add your courses to get started with CampusOS.
          </p>
          <button className="mt-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-white font-medium hover:shadow-lg transition-shadow">
            Add Class
          </button>
        </div>
      </div>
    </div>
  );
}
