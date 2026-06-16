export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Settings</h2>
        <p className="mt-2 text-slate-600">Customize your CampusOS experience.</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Profile Section */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg bg-slate-50 px-4 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 transition-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-slate-50 px-4 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 transition-ring"
              />
            </div>
          </div>
        </div>

        {/* Appearance Section */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Appearance</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Theme
              </label>
              <div className="flex gap-2">
                {["Light", "Dark", "Auto"].map((theme) => (
                  <button
                    key={theme}
                    className="flex-1 rounded-lg bg-slate-100 px-4 py-2 text-slate-700 font-medium hover:bg-blue-100 transition-colors"
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-slate-700">Compact view</span>
              </label>
            </div>
          </div>
        </div>

        {/* Notification Section */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Notifications</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm text-slate-700">
                Assignment reminders
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm text-slate-700">Class notifications</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm text-slate-700">Grade updates</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-slate-700">Tips and updates</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
