import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">About Me</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            alt="Profile"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Background</h2>
              <p className="text-muted-foreground">
                I am a final year Computer Science & Engineering student at [University Name],
                passionate about solving complex problems through technology. My journey in
                tech began with simple HTML websites and has evolved into building full-stack
                applications and exploring cutting-edge technologies.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Interests</h2>
              <p className="text-muted-foreground">
                Beyond coding, I am deeply interested in artificial intelligence,
                cybersecurity, and cloud computing. I enjoy participating in hackathons,
                contributing to open-source projects, and staying updated with the latest
                tech trends.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Goals</h2>
              <p className="text-muted-foreground">
                My goal is to leverage technology to create meaningful impact. I aim to
                work on projects that challenge me to learn and grow while contributing
                to solutions that make a difference in people's lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}