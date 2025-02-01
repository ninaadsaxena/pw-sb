"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Tech Corp",
    date: "Jun 2023 - Aug 2023",
    description: "Developed and maintained web applications using React and Node.js. Implemented new features and improved application performance.",
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "University Lab",
    date: "Jan 2023 - May 2023",
    description: "Conducted research on machine learning algorithms and published findings in academic journals.",
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "StartUp Inc",
    date: "May 2022 - Aug 2022",
    description: "Built responsive websites and implemented UI/UX designs using modern web technologies.",
  },
]

export default function ExperiencePage() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">Experience</h1>
      <div className="relative">
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border" />
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={cn(
                "relative flex items-center",
                index % 2 === 0 ? "justify-start" : "justify-end"
              )}
              onMouseEnter={() => setActiveId(exp.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div
                className={cn(
                  "absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border bg-background transition-all",
                  activeId === exp.id && "scale-150 border-primary"
                )}
              />
              <Card
                className={cn(
                  "w-[calc(50%-2rem)] transition-all",
                  activeId === exp.id && "scale-105"
                )}
              >
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.date}</p>
                  <p className="mt-2 text-muted-foreground">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}