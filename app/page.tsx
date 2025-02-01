import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center space-y-8 px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          John Doe
        </h1>
        <h2 className="text-lg text-muted-foreground sm:text-xl">
          Computer Science & Engineering Student
        </h2>
      </div>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Passionate about building innovative solutions and exploring new technologies.
        Currently focused on web development, machine learning, and cloud computing.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/projects">View projects</Link>
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://github.com" target="_blank">
            <GithubIcon className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://linkedin.com" target="_blank">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="mailto:john@example.com">
            <MailIcon className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}