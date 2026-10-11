import { ArrowUpRight, FolderCode } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-icon"><FolderCode size={23} /></div>
      <div className="project-topline"><span>PROJECT</span>{project.link && <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={18} /></a>}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {!!project.tags?.length && <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
    </article>
  );
}
