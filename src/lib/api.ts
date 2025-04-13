import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const projectsDirectory = join(process.cwd(), "_projects");

export function getProjectSlugs() {
    return fs.readdirSync(projectsDirectory).filter(f => f.endsWith('.mdx'));
}

export function getProjectBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(projectsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const project = { ...data, slug: realSlug, content } as Project;
    return project;
}

export function getAllProjects(): Project[] {
    const slugs = getProjectSlugs();
    const projects = slugs
        .map((slug) => getProjectBySlug(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));  // sort projects by date in descending order
    return projects;
}
