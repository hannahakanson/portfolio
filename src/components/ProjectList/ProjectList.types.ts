export type Project = {
  title: string;
  img_src: string;
  desc: string;
  link: string;
  id: number;
  color: string;
  src_code: string;
};

export interface ProjectListProps {
  projects: Project[];
}
