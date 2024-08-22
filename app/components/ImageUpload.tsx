'use client'

import { useState } from 'react'

interface PlantData {
  name: string;
  details: Array<{ key: string, value: string }>;
}

interface ImageUploadProps {
  setPlantInfo: (info: PlantData) => void;
  setImageUrl: (url: string) => void;
}

export default function ImageUpload({ setPlantInfo, setImageUrl }: ImageUploadProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsLoading(true)

    // Create and set the image URL
    const imageUrl = URL.createObjectURL(file)
    setImageUrl(imageUrl)

    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch('/api/generate-plant-info', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to identify plant')
      }

      setPlantInfo(data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Button for Uploading an Image */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        id="upload-button"
      />
      <label htmlFor="upload-button" className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 cursor-pointer">
        {isLoading ? 'Uploading...' : 'Upload Image'}
      </label>

      {/* Button for Taking a Photo */}
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleImageUpload}
        className="hidden"
        id="camera-button"
      />
      <label htmlFor="camera-button" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 cursor-pointer">
        {isLoading ? 'Opening Camera...' : 'Take a Photo'}
      </label>
    </div>
  )
}
