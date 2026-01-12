import React from "react";

const ParallelDashedLines = ({
  width = 200,
  dash = 10,
  gap = 8,
  thickness = 4,
  opacity = 0.32,
  lineGap = 12,
}) => {
  const lineStyle = {
    height: thickness,
    backgroundImage: `repeating-linear-gradient(
      to right,
      rgba(255,255,255,${opacity}) 0 ${dash}px,
      transparent ${dash}px ${dash + gap}px
    )`,
  };

  return (
    <div
      className="flex flex-col"
      style={{ gap: lineGap, width }}
    >
      <div style={lineStyle} />
      <div style={lineStyle} />
    </div>
  );
};

export default ParallelDashedLines;
