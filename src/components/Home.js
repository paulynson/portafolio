import React from 'react'

function Home() {
  return (
      <div>
          <main class="flex-1 lg:ml-80">
              <h1>Home</h1>
            <div class="h-96 bg-amber-400 p-10">
                <h1 class="text-4xl">Top Content</h1>
            </div>
            <div class="h-96 bg-white p-10">
                <h1 class="text-4xl">Middle Content</h1>
            </div>
            <div class="h-96 bg-green-400 p-10">
                <h1 class="text-4xl">Middle Content</h1>
            </div>
            <div class="h-96 bg-indigo-400 p-10">
                <h1 class="text-4xl">Last Content</h1>
            </div>
        </main>
    </div>
  )
}

export default Home