"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

import { ExternalLink } from "lucide-react";

import {
    Dialog,
    DialogTitle,
    DialogHeader,
    DialogTrigger,
    DialogContent,
    DialogDescription
} from "@/components/ui/dialog";


interface JobImagesProps {
    role: string;
    link: string;
    images: string[];
    duration: string;
}

export const JobImages = ({
    role,
    link,
    images,
    duration
}: JobImagesProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2 w-full">
            {images.map((img, idx) => (
                <Dialog key={idx}>
                    <DialogTrigger asChild>
                        <Image 
                            src={img}
                            width={100}
                            height={100}
                            alt={`Project Image for ${role}`}
                            onClick={() => setSelectedImage(img)}
                            className="cursor-pointer rounded-md border h-full w-auto shadow-md object-cover"
                        />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{role}</DialogTitle>
                            <DialogDescription>
                                {duration}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 mx-auto space-y-2">
                            <Image 
                                width={400}
                                height={400}
                                src={selectedImage || ""}
                                alt={`Project Image for ${role}`}
                                className="rounded-md border shadow-md object-cover"
                            />
                            <Link href={link} target="_blank" className="text-sm flex items-center justify-center text-blue-600 hover:underline mt-2">
                                Visit Company Site
                                <ExternalLink className="size-4 ml-2" />
                            </Link>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    )
}