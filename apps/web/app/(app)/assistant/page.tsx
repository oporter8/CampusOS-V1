export default function AssistantPage() {
  return (
    <div className="p-8 flex flex-col h-[calc(100vh-2rem)]">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">AI Assistant</h2>
        <p className="mt-2 text-slate-600">
          Get help with your academic questions.
        </p>
      </div>

      {/* Chat Interface Layout */}
      <div className="flex-1 rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg overflow-hidden flex flex-col">
        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <div className="inline-block rounded-full bg-gradient-to-r from-blue-100 to-purple-100 p-4 mb-4">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mt-4">
                How can I help?
              </h3>
              <p className="text-slate-500 mt-2">Ask me anything about your classes.</p>
            </div>
          </div>
        </div>

        {/* Input Box */}
        <div className="border-t border-white/20 p-4 bg-white/30">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 rounded-full bg-white/60 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white transition-colors"
            />
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white font-medium hover:shadow-lg transition-shadow">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
