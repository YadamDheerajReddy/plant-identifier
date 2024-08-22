import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const image = formData.get('image') as File

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY
    if (!apiKey) {
      throw new Error('GOOGLE_GEMINI_API_KEY is not set')
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const imageData = await fileToGenerativePart(image)

    const result = await model.generateContent([
      'Identify this plant and provide its name and other important information. Format the response as follows:\n\nPlant Name: [name]\nScientific Name: [scientific name]\nFamily: [family]\nOrigin: [origin]\nCharacteristics: [brief description]\nUses: [common uses]',
      imageData,
    ])

    const response = await result.response
    const text = response.text()

    // Parse the text response
    const lines = text.split('\n')
    const plantInfo = {
      name: '',
      details: [] as Array<{key: string, value: string}>
    }

    lines.forEach(line => {
      const [key, ...valueParts] = line.split(': ')
      const value = valueParts.join(': ').trim()
      if (key === 'Plant Name') {
        plantInfo.name = value
      } else if (key && value) {
        plantInfo.details.push({ key, value })
      }
    })

    return NextResponse.json(plantInfo)
  } catch (error) {
    console.error('Error identifying plant:', error)
    return NextResponse.json({ error: 'Error identifying plant: ' + (error as Error).message }, { status: 500 })
  }
}

async function fileToGenerativePart(file: File) {
  const data = await file.arrayBuffer()
  return {
    inlineData: {
      data: Buffer.from(data).toString('base64'),
      mimeType: file.type,
    },
  }
}