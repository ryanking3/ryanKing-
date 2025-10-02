"use client"
import { useState } from "react"

export default function ChaosEncryptor() {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [r, setR] = useState(3.99)
  const [x0, setX0] = useState(0.5)
  const [encrypted, setEncrypted] = useState<string | null>(null)
  const [decrypted, setDecrypted] = useState<string | null>(null)

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
    setEncrypted(null)
    setDecrypted(null)
  }

  function logisticSequence(length: number, r: number, x0: number): Uint8Array {
    let x = x0
    const seq = new Uint8Array(length)
    for (let i = 0; i < length; i++) {
      x = r * x * (1 - x)
      seq[i] = Math.floor(x * 256) % 256
    }
    return seq
  }

  function processImage(url: string, mode: "encrypt" | "decrypt") {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext("2d")!
      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, img.width, img.height)
      const data = imageData.data
      const key = logisticSequence(data.length, r, x0)
      for (let i = 0; i < data.length; i++) data[i] ^= key[i]
      ctx.putImageData(imageData, 0, 0)

      canvas.toBlob((blob) => {
        if (!blob) return
        const newUrl = URL.createObjectURL(blob)
        if (mode === "encrypt") setEncrypted(newUrl)
        else setDecrypted(newUrl)
      }, "image/png")
    }
    img.src = url
  }

  function handleClear() {
    setImageFile(null)
    setImagePreview(null)
    setEncrypted(null)
    setDecrypted(null)
  }

  return (
    <div className="mt-6 p-4 border border-blue-600 rounded">
      <h3 className="font-bold mb-2">Chaos Encryptor Demo</h3>

      <div className="mb-4 mt-4">
        <label className="inline-block border border-blue-600 px-2 py-1 rounded cursor-pointer hover:border-blue-400 transition">
          Input image
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
        </label>
      </div>

      {imagePreview && (
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => processImage(imagePreview, "encrypt")}
            className="border border-blue-600 px-3 py-1 hover:border-blue-400 transition"
          >
            Encrypt
          </button>
          <button
            onClick={() => processImage(imagePreview, "decrypt")}
            className="border border-blue-600 px-3 py-1 hover:border-blue-400 transition"
          >
            Decrypt
          </button>
          <button
            onClick={handleClear}
            className="border border-blue-600 px-3 py-1 hover:border-blue-400 transition"
          >
            Clear
          </button>
        </div>
      )}

      <div className="flex gap-2 mb-4">
        <label>r:</label>
        <input
          type="number"
          step="0.01"
          value={r}
          onChange={(e) => setR(parseFloat(e.target.value))}
          className="w-24 bg-black border border-blue-600 px-2"
        />
        <label>x₀:</label>
        <input
          type="number"
          step="0.01"
          value={x0}
          onChange={(e) => setX0(parseFloat(e.target.value))}
          className="w-24 bg-black border border-blue-600 px-2"
        />
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {imagePreview && (
          <div>
            <div className="subtle mb-1">Original</div>
            <img src={imagePreview} alt="original" className="max-w-xs border border-blue-600" />
          </div>
        )}

        {encrypted && (
          <div>
            <div className="subtle mb-1 flex items-center justify-between">
              <span>Encrypted</span>
              <a
                href={encrypted}
                download="encrypted.png"
                className="text-sm text-blue-400 underline hover:text-blue-200"
              >
                Download
              </a>
            </div>
            <img src={encrypted} alt="encrypted" className="max-w-xs border border-blue-600" />
          </div>
        )}

        {decrypted && (
          <div>
            <div className="subtle mb-1 flex items-center justify-between">
              <span>Decrypted</span>
              <a
                href={decrypted}
                download="decrypted.png"
                className="text-sm text-blue-400 underline hover:text-blue-200"
              >
                Download
              </a>
            </div>
            <img src={decrypted} alt="decrypted" className="max-w-xs border border-blue-600" />
          </div>
        )}
      </div>
    </div>
  )
}
