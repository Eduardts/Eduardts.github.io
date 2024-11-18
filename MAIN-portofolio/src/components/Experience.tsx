import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Entry-Level Full-Stack Developer", // TODO: Replace with actual role
        company: "Nepot Smart", // TODO: Replace with actual company name
        logo: "/company.svg", // TODO: Replace with actual logo
        duration: "2024 - Present",
        description:
            "Lead developer for multiple high-impact projects, mentoring junior developers, and implementing best practices.",
        link: "https://techinnovators.com",
        images: [],
    },
    {
        role: "Entry-Level Full-Stack Developer", // TODO: Replace with actual role
        company: "Tech Innovators Inc.", // TODO: Replace with actual company name
        logo: "/company.svg", // TODO: Replace with actual logo
        duration: "2023 - 2024",
        description:
            "Developed and maintained various client projects, focusing on responsive design and performance optimization.",
        link: "https://websolutions.com",
        images: [
            "/devvault.png",
            "/devvault.png",
        ],
    },
    {
        role: "Entry-Level Full-Stack Developer", // TODO: Replace with actual role
        company: "Traderium", // TODO: Replace with actual company name
        logo: "/company.svg", // TODO: Replace with actual logo
        duration: "2023 - 2024",
        description:
            "Assisted in the development of web applications, gained experience in agile methodologies and version control.",
        link: "https://startupventures.com",
        images: [
            "/devvault.png",
            "/devvault.png",
        ],
    },
]

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2">{j.description}</p>
                                {/* Job Images */}
                                <JobImages 
                                    role={j.role} 
                                    link={j.link}
                                    images={j.images} 
                                    duration={j.duration} 
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}
