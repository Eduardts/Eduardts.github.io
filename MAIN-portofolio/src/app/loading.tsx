import type { Metadata } from 'next';

import { 
    Card, 
    CardHeader, 
    CardContent 
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
    title: 'Loading...',
}

export default function Loading() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Section Skeleton */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Skeleton className="h-[200px] w-[200px] rounded-full" />
                  <Skeleton className="h-8 w-[180px] mt-4" />
                  <Skeleton className="h-4 w-[150px] mt-2" />
                  <Skeleton className="h-16 w-full mt-2" />
                  <Skeleton className="h-4 w-[120px] mt-4" />
                  <div className="mt-4 flex space-x-2">
                    <Skeleton className="h-10 w-10 rounded-md" />
                    <Skeleton className="h-10 w-10 rounded-md" />
                    <Skeleton className="h-10 w-10 rounded-md" />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Skills Section Skeleton */}
            <Card className="mt-6">
              <CardHeader>
                <Skeleton className="h-6 w-[100px]" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Array(8)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton key={index} className="h-6 w-20 rounded-full" />
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Main Content Section Skeleton */}
          <div className="md:col-span-2">
            {/* About Me Skeleton */}
            <Card className="mb-6">
              <CardHeader>
                <Skeleton className="h-6 w-[120px]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
            {/* Featured Projects Skeleton */}
            <Skeleton className="h-8 w-[180px] mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <Skeleton className="h-6 w-[150px] mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-[100px]" />
                        <Skeleton className="h-4 w-[80px]" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            {/* Work Experience Skeleton */}
            <Skeleton className="h-8 w-[180px] mb-4" />
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-8">
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <li
                        key={index}
                        className="border-b last:border-b-0 pb-8 last:pb-0"
                      >
                        <div className="flex items-center space-x-4">
                          <Skeleton className="h-10 w-10 rounded" />
                          <div>
                            <Skeleton className="h-6 w-[150px]" />
                            <Skeleton className="h-4 w-[120px] mt-1" />
                          </div>
                        </div>
                        <Skeleton className="h-4 w-[100px] mt-2" />
                        <Skeleton className="h-16 w-full mt-2" />
                        <Skeleton className="h-4 w-[150px] mt-2" />
                        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
                          <Skeleton className="h-[100px] w-[150px] rounded" />
                          <Skeleton className="h-[100px] w-[150px] rounded" />
                        </div>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
