const TitleHeader = ({ title, sub }) => {
  const words = title.split(" ");
  const highlightedWord = words.pop();
  const remainingTitle = words.join(" ");

  return (
    <div className="section-title-header">
      <span className="section-title-eyebrow">{sub}</span>

      <h2>
        {remainingTitle}{" "}
        <span className="gradient-text">{highlightedWord}</span>
      </h2>
    </div>
  );
};

export default TitleHeader;
