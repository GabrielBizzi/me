import { mock } from "./projects-mock";

export const getProjects = () => {
  return mock;
};

export default (req, res) => {
  const projects = getProjects();
  res.json(projects);
};
