"use client";
import { useState } from "react";

const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

export default function YtConvertPage() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setDownloadUrl(null);

        try {
            const res = await fetch(`${backendUrl}/api/convert`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, apiKey: "my_super_secret_key_123" }),
            });

            if (!res.ok) throw new Error("Conversion failed");

            const data = await res.json();
            setDownloadUrl(data.download_url);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-white p-6">
            <h1 className="text-3xl font-bold mb-4 text-[#267CB6]">YouTube → MP3 Converter</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <input
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter YouTube video URL"
                    className="w-full p-3 rounded bg-black border border-[#267CB6] focus:outline-none mb-3"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#267CB6] text-black font-semibold py-2 rounded hover:bg-[#125C8C] transition"
                >
                    {loading ? "Converting..." : "Convert to MP3"}
                </button>
            </form>

            {error && <p className="text-red-400 mt-4">{error}</p>}
            {downloadUrl && (
                <a
                    href={downloadUrl}
                    className="mt-4 text-[#267CB6] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download MP3
                </a>
            )}
        </main>
    );
}
