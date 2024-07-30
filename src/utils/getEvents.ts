import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const eventsDirectory = path.join(process.cwd(), 'content/events');

export function getEvents() {
  const files = fs.readdirSync(eventsDirectory);
  const events = files.map(fileName => {
    const fullPath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data;
  });

  return events;
}
