import React from 'react'

const Chatollama : React.FC = () => {
  return (
    <>
        <main className="flex-1 flex flex-col bg-gray-100 h-[calc(100vh-5rem)]">
            <div className="flex-1 overflow-y-auto p-4 space-y-6">

                <div className="flex gap-4 max-w-2xl ml-auto">
                    <div className="flex-1">
                        <div className="flex items-center justify-end gap-2 mb-1">
                            <span className="font-semibold">You</span>
                            <span className="text-xs text-gray-400">09:27</span>
                        </div>
                        <div className="bg-primary bg-opacity-20 rounded-xl p-4">
                            <p>Abhi, my congratulations! I will be glad to work with you on a new project 😊</p>
                        </div>
                    </div>
                    <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="You" className="w-10 h-10 rounded-xl"/>
                </div>
            </div>

            <footer className="p-4 border border-gray-300">
                <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-2">
                    <button className="p-2 hover:bg-gray-700 rounded-lg text-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                        </svg>
                    </button>
                    <input
                    type="text"
                    placeholder="Your message"
                    className="flex-1 px-2 py-1 bg-transparent focus:outline-none focus:border-blue-400 text-gray-800 placeholder-gray-400"
                    />

                    <button className="p-2 hover:bg-gray-700 rounded-lg text-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-700 rounded-lg text-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                        </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-700 rounded-lg text-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        </svg>
                    </button>
                </div>
            </footer>
        </main>
    </>
  )
}

export default Chatollama
