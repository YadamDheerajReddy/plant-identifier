'use client'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center bg-gray-800 text-white py-20">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">
            Welcome to our Plant Identifier project. Our mission is to help you discover and learn about the plants around you with the power of AI.
          </p>
        </section>

        {/* Details Section */}
        <section className="p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our goal is to make plant identification easy and accessible to everyone. Whether you are a botanist, a gardener, or just curious about the natural world, our AI-powered tool will provide you with the information you need to understand and appreciate the flora around you.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We are committed to continually improving our algorithms and expanding our database to include more plant species and provide more detailed information.
          </p>
        </section>

        {/* Team Section */}
        <section className="p-8 bg-gray-100 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img src="/path-to-image" alt="Team Member" className="w-32 h-32 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Yadam Dheeraj Reddy</h3>
              <p className="text-gray-600">Developer & Founder</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
        <p>Developed with ❤️ by Yadam Dheeraj Reddy</p>
      </footer>
    </div>
  )
}
