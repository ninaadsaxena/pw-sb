"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Code2, Users } from "lucide-react"

const technical = [
  { name: "React/Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "AWS", level: 70 },
  { name: "Docker", level: 65 },
]

const soft = [
  { name: "Communication", level: 95 },
  { name: "Team Leadership", level: 85 },
  { name: "Problem Solving", level: 90 },
  { name: "Time Management", level: 85 },
  { name: "Adaptability", level: 90 },
  { name: "Critical Thinking", level: 85 },
]

export default function SkillsPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">Skills</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Code2 className="h-8 w-8" />
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {technical.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Brain className="h-8 w-8" />
            <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {soft.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}