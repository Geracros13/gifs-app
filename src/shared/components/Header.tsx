interface HeaderProps {
  title: string;
  description?: string;
}

export const Header = ({ description, title }: HeaderProps) => {
  return (
    <div className="content-center" role="header">
      <h1 aria-label="Title of page">{title || "Search..."}</h1>
      <p>{description || "Find all!"}</p>
    </div>
  );
};
