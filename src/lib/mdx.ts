import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content/projects");

export async function getProjectBySlug(slug: string) {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
        meta: data,
        content,
    };
}

export async function getAllProjectsMeta() {
    if (!fs.existsSync(contentDirectory)) return [];

    const files = fs.readdirSync(contentDirectory);

    const projects = files.map((file) => {
        const filePath = path.join(contentDirectory, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);
        return {
            ...data,
            slug: file.replace(".mdx", ""),
        };
    });

    return projects;
}
