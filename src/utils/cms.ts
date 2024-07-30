// src/utils/cms.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const eventsDirectory = path.join(process.cwd(), 'src/content/events');

export function getUpcomingEvents(limit: number) {
  const files = fs.readdirSync(eventsDirectory);
  const events = files.map(fileName => {
    const fullPath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data;
  });

  // Sort events by date and filter upcoming events
  const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date()) // Filter out past events
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) // Sort by date
    .slice(0, limit); // Limit to the specified number of events

  return upcomingEvents;
}
