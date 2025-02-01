import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Book, Code, Trophy } from "lucide-react"

const technical = [
  {
    title: "Hackathon Winner",
    description: "First place at National Coding Championship 2023",
    icon: Trophy,
  },
  {
    title: "Research Paper",
    description: "Published paper on ML algorithms in IEEE conference",
    icon: Book,
  },
  {
    title: "Open Source",
    description: "Major contributor to popular React library",
    icon: Code,
  },
]

const nonTechnical = [
  {
    title: "Leadership",
    description: "President of University Tech Club",
    icon: Award,
  },
  {
    title: "Volunteering",
    description: "Taught coding to underprivileged students",
    icon: Award,
  },
  {
    title: "Public Speaking",
    description: "Won Best Speaker award at Tech Conference",
    icon: Award,
  },
]

export default function AchievementsPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">Achievements</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Technical Achievements</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technical.map((achievement, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <achievement.icon className="h-8 w-8" />
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Non-Technical Achievements</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nonTechnical.map((achievement, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <achievement.icon className="h-8 w-8" />
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}