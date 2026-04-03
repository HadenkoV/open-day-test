import React, {useMemo, useState} from "react"
import TopicCard from "../components/TopicCard"
import type {Topic} from "../types/openday"
import HeroSection from "../components/HeroSection"

type HomePageProps = {
    topics: Topic[]
}

function Home({topics}: HomePageProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [sortOrder, setSortOrder] = useState("a-z")

    const filteredTopics = useMemo(() => {
        const filtered = topics.filter((topic) => {
            const matchesSearch =
                topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                topic.description?.toLowerCase().includes(searchTerm.toLowerCase())

            return matchesSearch
        })

        return [...filtered].sort((a, b) => {
            if (sortOrder === "a-z") return a.name.localeCompare(b.name)
            if (sortOrder === "z-a") return b.name.localeCompare(a.name)
            return 0
        })
    }, [topics, searchTerm, sortOrder])

    return (
        <>
            <HeroSection/>

            <main className="w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <section className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                            <div className="md:col-span-4 min-w-0">
                                <label
                                    htmlFor="topic-search"
                                    className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                    Search topics
                                </label>
                                <input
                                    id="topic-search"
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search by subject name..."
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 "
                                />
                            </div>

                            <div className="md:col-span-1 min-w-0">
                                <label
                                    htmlFor="sort-order"
                                    className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                    Sort by
                                </label>

                                <div className="relative">
                                    <select
                                        id="sort-order"
                                        value={sortOrder}
                                        onChange={(e) => setSortOrder(e.target.value)}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm bg-white appearance-none focus:outline-none focus:ring-1"
                                    >
                                        <option value="a-z">Name: A to Z</option>
                                        <option value="z-a">Name: Z to A</option>
                                    </select>

                                    <svg
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-gray-600">
                            Showing {filteredTopics.length} topic{filteredTopics.length === 1 ? "" : "s"}
                        </p>
                    </section>

                    <section
                        className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        aria-label="Open Day topics"
                    >
                        {filteredTopics.length > 0 ? (
                            filteredTopics.map((topic) => (
                                <TopicCard key={topic.name} topic={topic}/>
                            ))
                        ) : (
                            <p className="text-gray-600 col-span-full">
                                No topics match your search.
                            </p>
                        )}
                    </section>
                </div>
            </main>
        </>
    )
}

export default Home