export default function NotesPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">Notes</h2>
          <p className="mt-2 text-slate-600">Write and organize your notes.</p>
        </div>
        <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white font-medium hover:shadow-lg transition-shadow">
          + New Note
        </button>
      </div>

      {/* Notes List / Empty State */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 mt-4">
            No notes yet
          </h3>
          <p className="text-slate-500 mt-2">
            Create your first note to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
