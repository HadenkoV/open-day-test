import React from "react"
import { Link, useParams } from "react-router-dom"
import cuLogo from "/cu-logo.svg"
import type { Topic } from "../types/openday.ts"
import ProgrammeList from "../components/ProgrammeList"


type TopicDetailProps = {
    topics: Topic[]
}

function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, "-")
}

function TopicDetail({ topics }: TopicDetailProps) {
    const { slug } = useParams()

    const topic = topics.find((item) => slugify(item.name) === slug)

    if (!topic) {
        return (
            <main className="min-h-screen bg-cardiff-white px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <p className="text-red-600 text-lg font-medium mb-4">Topic not found.</p>
                    <Link to="/" className="text-cardiff-red font-semibold underline">
                        Back to all topics
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-cardiff-white px-4 py-8">
            <div className="max-w-5xl mx-auto">


                <article className="bg-white shadow-md overflow-hidden border border-gray-200">
                    <div className="h-72 w-full bg-gray-100 overflow-hidden">
                        <img
                            src={topic.cover_image || cuLogo}
                            alt={topic.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-cardiff-red mb-4">
                            {topic.name}
                        </h1>

                        <p className="text-gray-700 text-base leading-relaxed mb-8">
                            {topic.description || "Explore talks, tours and activities for this subject area."}
                        </p>

                        <section aria-labelledby="programme-heading">
                            <h2
                                id="programme-heading"
                                className="text-2xl font-semibold text-gray-900 mb-4"
                            >
                                Programme
                            </h2>


                            {topic.programs && topic.programs.length > 0 ? (
                                <ProgrammeList programs={topic.programs} />
                            ) : (
                                <p className="text-gray-600">No programme information available yet.</p>
                            )}
                        </section>
                    </div>

                </article>
                <Link to="/" className="inline-block mt-6 text-cardiff-red font-semibold underline">
                    ← Back to all topics
                </Link>
            </div>
        </main>
    )
}

export default TopicDetail