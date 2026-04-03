import React from "react"

function HeroSection() {
    return (
        <section className="bg-cardiff-red text-white overflow-hidden shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
                <div className="max-w-4xl">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                        Cardiff University Open Day
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed mb-8">
                        Explore subject sessions, discover campus activities, and build
                        a clearer picture of student life at Cardiff University. Find the
                        information you need to make the most of your visit.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                    <div className="backdrop-blur-sm p-5 border border-white">
                        <h2 className="text-lg font-semibold mb-2">Explore subjects</h2>
                        <p className="text-sm text-white/85 leading-relaxed">
                            Browse academic topics and discover the sessions available for
                            each subject area.
                        </p>
                    </div>

                    <div className="backdrop-blur-sm p-5 border border-white">
                        <h2 className="text-lg font-semibold mb-2">View event details</h2>
                        <p className="text-sm text-white/85 leading-relaxed">
                            Check session times, locations, and useful information to help
                            organise your day.
                        </p>
                    </div>

                    <div className="backdrop-blur-sm p-5 border border-white">
                        <h2 className="text-lg font-semibold mb-2">Plan ahead</h2>
                        <p className="text-sm text-white/85 leading-relaxed">
                            Make better decisions before you arrive by comparing activities
                            and choosing what matters most to you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection