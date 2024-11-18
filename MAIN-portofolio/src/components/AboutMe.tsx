import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {/* Write 1-2 sentences about yourself */}
                    I am a software engineer with a passion for building scalable and efficient web applications. I different languages
                </p>
            </CardContent>
        </Card>
    )
}
