import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProjectDetail({ params }) {
  const { id } = params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/projects/${id}`, { cache: "no-store" });
  if (!response.ok) {
    if (response.status === 404) notFound();
    throw new Error("Failed to fetch project");
  }

  const project = await response.json();

  return (
    <div className="min-h-screen p-8">
      <Link href="/projects" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>

      {project.technologies?.length > 0 && (
        <div className="flex gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">{tech}</span>
          ))}
        </div>
      )}

      {project.imageUrl && (
        <Image src={project.imageUrl} alt={project.title} width={800} height={400} className="rounded-lg mb-8" />
      )}

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">About This Project</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{project.description}</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Project Links</h3>
            {project.projectUrl && <a href={project.projectUrl} target="_blank" className="block bg-green-600 text-white px-4 py-3 rounded mb-3">Live Project</a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" className="block bg-gray-800 text-white px-4 py-3 rounded">GitHub Repo</a>}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Project Info</h3>
            <p><strong>Created:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
            <p><strong>Updated:</strong> {new Date(project.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
