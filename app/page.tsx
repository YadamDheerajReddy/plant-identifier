'use client'

import { useState } from 'react'
import ImageUpload from './components/ImageUpload'
import PlantInfo from './components/PlantInfo'
import ImagePreview from './components/ImagePreview'

interface PlantData {
  name: string;
  details: Array<{key: string, value: string}>;
}

export default function Home() {
  const [plantInfo, setPlantInfo] = useState<PlantData | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow moving-gradient flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl text-center bg-black bg-opacity-50 p-8 rounded-lg flex flex-col items-center mb-8">
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
          <p className="text-black text-lg mb-2">Scroll down to see how it works</p>
          <div className="animate-bounce text-white text-3xl">
            ⬇️
          </div>
        </div>

        {/* Enhanced How to Use Section */}
        <section className="w-full max-w-5xl text-center p-8 bg-gray-900 bg-opacity-80 rounded-xl shadow-xl">
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
      </main>

      {/* Sticky Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
        <p>Elegantly coded by Yadam Dheeraj Reddy</p>
      </footer>
    </div>
  )
}
