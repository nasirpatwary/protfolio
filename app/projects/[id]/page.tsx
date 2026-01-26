import { notFound } from "next/navigation"
import { getProjectById, getAllProjectIds } from "@/lib/projects"
import { ProjectDetail } from "@/components/project-detail"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const ids = getAllProjectIds()
  return ids.map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | John Doe Portfolio`,
    description: project.shortDescription,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
