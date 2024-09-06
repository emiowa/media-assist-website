import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const artistsDirectory = path.join(process.cwd(), 'artists');

export function getAllArtistsData(){
    const fileNames = fs.readdirSync(artistsDirectory);
    const allArtistsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(artistsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const {data} = matter(fileContents);

        return {
            id,
            ...data,
        };
    });
    return allArtistsData;
}