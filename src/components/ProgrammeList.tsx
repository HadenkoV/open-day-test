import React from "react"
import type {Programme} from '../types/openday'

interface ProgrammeListProps {
    programs: Programme[]
}

function formatTime(value?: string) {
    if (!value) return null

    return new Date(value).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })
}

function ProgrammeList({programs}: ProgrammeListProps) {
    if (!programs || programs.length === 0) {
        return <p className="text-gray-600">No programme information available yet.</p>
    }

    return (
        <div className="space-y-4">
            {programs.map((programme, index) => (
                <div
                    key={`${programme.title}-${index}`}
                    className="border border-gray-200 p-4 bg-gray-50"
                >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {programme.title}
                    </h3>

                    <p className="text-sm text-gray-700">
                        <strong>Time:</strong>{" "}
                        {programme.start_time && programme.end_time
                            ? `${formatTime(programme.start_time)} - ${formatTime(programme.end_time)}`
                            : "Time to be confirmed"}
                    </p>

                    <p className="text-sm text-gray-700 mt-1">
                        <strong>Room:</strong> {programme.room || "Room to be confirmed"}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ProgrammeList
