import React from "react"
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/Home"
import TopicDetailPage from "./pages/TopicDetail"
import Footer from "./components/Footer"
import type { OpenDayData } from "./types/openday"

async function loadOpenDay(): Promise<OpenDayData> {
    const base = import.meta.env.BASE_URL || "/"
    const response = await fetch(`${base}api/OpenDay.json`)

    if (!response.ok) {
        throw new Error("Failed to load Open Day data")
    }

    return response.json()
}

function App() {
    const [data, setData] = useState<OpenDayData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await loadOpenDay()
                setData(result)
            } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return <p className="p-6 text-center">Loading Open Day data...</p>
    }

    if (error) {
        return <p className="p-6 text-center text-red-600">{error}</p>
    }

    if (!data || !data.topics) {
        return <p className="p-6 text-center text-red-600">No Open Day data found.</p>
    }

    return (
        <main className="min-h-screen bg-cardiff-white font-sans pt-6">
            <div className="max-w-7xl mx-auto">
                <Header />

                <Routes>
                    <Route path="/" element={<HomePage topics={data.topics} />} />
                    <Route path="/topic/:slug" element={<TopicDetailPage topics={data.topics} />} />
                </Routes>
            </div>
            <Footer />
        </main>
    )
}

export default App