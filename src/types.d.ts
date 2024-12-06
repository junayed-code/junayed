export type ContactFormState = { message?: string; error?: string };

export namespace Modals {
  type Project = {
    name: string;
    live: string;
    github: string;
    image: string;
    description: string;
    technologies: string[];
  };
}
