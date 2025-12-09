import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Helper: validate required fields
const validateProject = (data) => {
  if (!data.title || !data.description || !Array.isArray(data.technologies)) {
    return false;
  }
  return true;
};

// GET all projects / POST new project
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(projects, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    if (!validateProject(data)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newProject = await prisma.project.create({
      //pulls data from the model project in schema.prisma ansd creates a new database entry with the data sent in body
      data: {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl || null,
        projectUrl: data.projectUrl || null,
        githubUrl: data.githubUrl || null,
        technologies: data.technologies,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
