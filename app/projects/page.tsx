import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    github: "https://github.com",
    demo: "https://example.com",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and natural language processing.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a",
    github: "https://github.com",
    demo: "https://example.com",
    tags: ["React", "Node.js", "Socket.io", "OpenAI"],
  },
  {
    title: "Task Management System",
    description: "Collaborative task management system with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    github: "https://github.com",
    demo: "https://example.com",
    tags: ["React", "Firebase", "Material-UI", "Redux"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="h-48 w-full object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.github} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={project.demo} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}