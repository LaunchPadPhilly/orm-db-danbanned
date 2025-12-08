import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Prevent multiple instances in dev
const prisma = globalThis.__prisma || (globalThis.__prisma = new PrismaClient());

// GET project by ID
export async function GET(request, { params }) {
  try {

    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid project ID" }, { status: 400 });
    }

    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

// PUT update project
export async function PUT(request, { params }) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid project ID" }, { status: 400 });
  }

  try {
    const data = await request.json();

    const updated = await prisma.project.update({
      where: { id },
      data: {
        title: data.title ?? undefined,
        description: data.description ?? undefined,
        imageUrl: data.imageUrl ?? undefined,
        projectUrl: data.projectUrl ?? undefined,
        githubUrl: data.githubUrl ?? undefined,
        technologies: Array.isArray(data.technologies)
          ? data.technologies
          : data.technologies
          ? [data.technologies]
          : undefined,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    if (err.code === "P2025") {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    console.error("Update Project Error:", err);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

// DELETE project
export async function DELETE(request) {
  try {
    const { params } = await request.nextUrl; // ⚠️ actually, better pattern:

    // In App Router, dynamic params come from the function argument if you use [id]/route.js
    const id = parseInt(request.url.split("/").pop());

    if (isNaN(id)) return NextResponse.json({ error: 'Invalid project ID' }, { status: 400 });

    await prisma.project.delete({ where: { id } });

    return NextResponse.json({ message: 'Project deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 404 });
  }
}
