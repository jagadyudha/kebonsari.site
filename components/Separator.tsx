import React from "react";

export interface SeparatorProps {
  id?: string;
}

const Seperator: React.FC<SeparatorProps> = ({ id }) => {
  return (
    <div className="flex justify-center py-14" id={id}>
      <div className="bg-sky-600 xl:w-5 xl:h-5  w-4 h-4 rounded-full"></div>
    </div>
  );
};

export default Seperator;
