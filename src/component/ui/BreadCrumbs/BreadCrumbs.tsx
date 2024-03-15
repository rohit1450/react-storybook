export interface BreadCrumbsProps {
  BreadCrumbsStructure: ({
    pathSegments,
  }: {
    pathSegments: string[];
  }) => JSX.Element;
}

const BreadCrumbs = ({ BreadCrumbsStructure }: BreadCrumbsProps) => {
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return <BreadCrumbsStructure pathSegments={pathSegments} />;
};

export default BreadCrumbs;
