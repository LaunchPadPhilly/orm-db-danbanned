// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Optional: clear table first
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        title: "Philly.us — Community Safety App (Prototype)",
        description:
          "Designed an interactive Figma prototype focused on improving safety outcomes in Philadelphia. Included user research, wireframes, UI systems, and accessibility-focused components.",
        imageUrl: "/phillyus.png",
        projectUrl: "https://sites.google.com/launchpadphilly.org/phillyus/philly-community",
        githubUrl: "https://github.com/danbanned",
        featured: true,
        technologies: ["Figma", "HTML", "CSS", "JavaScript"]
      },
      {
        title: "Launchpad Training Portfolio",
        description:
          "Completed 200+ hours building responsive apps, REST APIs, debugging workflows, and UI components across Python, JavaScript, and React.",
        imageUrl: "/launchpad.webp",
        projectUrl: "#",
        githubUrl: "https://github.com/danbanned",
        technologies: ["React", "Python", "REST APIs"]
      },
      {
        title: "Visual Storytelling Learning Platform",
        description:
          "Developed a visual-based storytelling app for learners who benefit from imagery, transitions, and scene-based layouts.",
        imageUrl: "/storytelling.png",
        projectUrl: "https://html-app-brown.vercel.app/",
        githubUrl: "https://github.com/danbanned",
        technologies: ["React", "Next.js", "Tailwind"]
      },
      {
        title: "Short Films & Video Editing",
        description:
          "I create short films, cinematic edits, and motion-graphics content using Adobe After Effects and Premiere Pro.",
        imageUrl: "/filmmaking.avif",
        projectUrl: "#",
        githubUrl: "#",
        technologies: ["After Effects", "Premiere Pro", "Cinematography"],
        animation: true
      }
    ]
  });

  console.log('Seeding finished.');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
