'use client'

import { useState } from 'react'
import ImageUpload from './components/ImageUpload'
import PlantInfo from './components/PlantInfo'
import ImagePreview from './components/ImagePreview'

interface PlantData {
  name: string;
  details: Array<{ key: string, value: string }>;
}

export default function Home() {
  const [plantInfo, setPlantInfo] = useState<PlantData | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow moving-gradient flex flex-col items-center justify-center p-4">
        <div id="home" className="w-full max-w-2xl text-center bg-black bg-opacity-50 p-8 rounded-lg flex flex-col items-center mb-8">
          <h1 className="text-6xl font-extrabold text-white mb-4 animate-fade-in text-shadow-lg">
            Discover the World of Plants
          </h1>
          <p className="text-xl text-white mb-6 animate-fade-in delay-1s text-shadow-lg">
            Upload an image to identify plants instantly using our advanced AI technology.
          </p>
          <ImageUpload setPlantInfo={setPlantInfo} setImageUrl={setImageUrl} />
          {imageUrl && (
            <div className="mt-8">
              <ImagePreview src={imageUrl} />
            </div>
          )}
          {plantInfo && (
            <div className="mt-8">
              <PlantInfo info={plantInfo} />
            </div>
          )}
        </div>

        {/* Scroll Down Indicator */}
        <div className="text-center mb-16">
          <p className="text-white text-lg mb-2">Scroll down to see how it works</p>
          <div className="animate-bounce text-white text-3xl">
            ⬇️
          </div>
        </div>

        {/* Enhanced How to Use Section */}
        <section id="how-to-use" className="w-full max-w-5xl text-center p-8 bg-gray-900 bg-opacity-80 rounded-xl shadow-xl">
          <h2 className="text-5xl font-bold text-white mb-12 text-shadow-xl">How to Use the App</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 border border-green-200">
              <div className="text-7xl text-white mb-4">
                📷
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Step 1</h3>
              <p className="text-white">Click 'Upload Image' or 'Take a Photo' to start.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 border border-blue-200 mt-8 lg:mt-0">
              <div className="text-7xl text-white mb-4">
                🤖
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Step 2</h3>
              <p className="text-white">Our AI analyzes the image and identifies the plant.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 border border-purple-200">
              <div className="text-7xl text-white mb-4">
                🌿
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Step 3</h3>
              <p className="text-white">View detailed information about the identified plant.</p>
            </div>
          </div>
        </section>

        {/* Redesigned About the Developer Section in First Person */}
        <section id="about" className="w-full max-w-5xl p-8 bg-white rounded-xl shadow-xl mt-16 flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <img
              src="/about.jpg"  // Adjust the path if necessary
              alt="Yadam Dheeraj Reddy"
              className="w-48 h-48 rounded-full shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
            <p className="text-lg mb-4 text-gray-700">
              Hi, I'm <span className="font-semibold">Yadam Dheeraj Reddy</span>. I'm a passionate developer. I created this website to make it easier for everyone to discover and learn about the plants around them.
            </p>
            <p className="text-lg text-gray-700">
              With my experience in AI and web development, I've developed this tool to help you identify plants effortlessly and expand your knowledge of the natural world.
            </p>
          </div>
        </section>

        {/* Contact Section without Form */}
        <section id="contact" className="w-full max-w-5xl p-8 bg-gray-100 rounded-xl shadow-xl mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            I'd love to hear from you! Whether you have a question about the app, need support, or just want to say hello, feel free to reach out.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong> <a href="mailto:dheerajr205@gmail.com" className="text-green-600 hover:underline">dheerajr205@gmail.com</a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> <a href="tel:+91 93467 49376" className="text-green-600 hover:underline">+91 93467 49376</a>
          </p>
          <p className="text-lg text-gray-700">
            <strong>Follow Me:</strong>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/ydheeraj/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
              LinkedIn
            </a>
            <a href="https://github.com/YadamDheerajReddy" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
              GitHub
            </a>
            <a href="https://www.instagram.com/_.x.bittu.x._/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
              Instagram
            </a>
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
        <p>Elegantly coded by Yadam Dheeraj Reddy</p>
      </footer>
    </div>
  )
}
