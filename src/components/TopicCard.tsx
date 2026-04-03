import React from "react"
import {Link} from "react-router-dom"
import cuLogo from "/cu-logo.svg"
import type {Topic} from "../types/openday"

type TopicCardProps = {
    topic: Topic
}

function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, "-")
}

function formatDate(value?: string) {
    if (!value) return null

    return new Date(value).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    })
}


function TopicCard({topic}: TopicCardProps) {
    const topicSlug = slugify(topic.name)

    const firstProgram = topic.programs?.[0]
    const openDayDate = firstProgram?.start_time
    const sessionCount = topic.programs?.length || 0

    return (
        <Link
            to={`/topic/${topicSlug}`}
            className="block focus:outline-none focus:ring-4 focus:ring-red-200 rounded"
        >
            <article
                id="subjects"
                className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col h-full rounded-lg"
            >
                <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                        src={topic.cover_image || cuLogo}
                        alt={topic.name || "Topic image"}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6 flex flex-col flex-1">
                    {openDayDate && (
                        <div className="mb-3 flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded ">
                                {formatDate(openDayDate)}
                            </span>
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-cardiff-red mb-3">
                        {topic.name}
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
                        {topic.description || "Explore talks, tours and activities for this subject area."}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                            {sessionCount} {sessionCount === 1 ? "session" : "sessions"}
                        </span>

                        <span className="text-sm font-semibold text-cardiff-red">
                            View topic details →
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default TopicCard