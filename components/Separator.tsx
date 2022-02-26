import React from "react";

export interface SeparatorProps {
  id?: string;
}

const Seperator: React.FC<SeparatorProps> = ({ id }) => {
  return (
    <div className="flex justify-center py-14" id={id}>
      <div className="bg-sky-600 xl:w-4 xl:h-4  w-3 h-3 rounded-full"></div>
    </div>
  );
};

export default Seperator;
