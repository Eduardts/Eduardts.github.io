import Link from 'next/link';
import type { Metadata } from "next";

import { ArrowLeft } from 'lucide-react';

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: '404 - Page Not Found',
}

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">404</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
