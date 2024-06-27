export type ContactFormState = { message?: string; error?: string };

export namespace Modals {
  type ProjectImage = { name: string; url: string; blurUrl?: string };
  type Project = {
    name: string;
    live: string;
    github: string;
    image: ProjectImage;
    description: string;
    technologies: string[];
  };
}
