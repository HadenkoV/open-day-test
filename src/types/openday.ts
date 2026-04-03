export interface Programme {
    title: string
    start_time?: string
    end_time?: string
    room?: string
}

export interface Topic {
    name: string
    description?: string
    cover_image?: string
    programs?: Programme[]
}

export interface OpenDayData {
    topics: Topic[]
}

