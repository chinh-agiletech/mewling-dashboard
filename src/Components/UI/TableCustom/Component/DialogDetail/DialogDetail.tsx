import React from "react";
import { useState } from "react";

const DialogDetail: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <table className="border-collapse border border-gray-400 ...">
        <thead>
          <tr>
            <th className="border border-gray-300 ...">Field</th>
            <th className="border border-gray-300 ...">New Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 ...">Indiana</td>
            <td className="border border-gray-300 ...">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-gray-300 ...">Ohio</td>
            <td className="border border-gray-300 ...">Columbus</td>
          </tr>
          <tr>
            <td className="border border-gray-300 ...">Michigan</td>
            <td className="border border-gray-300 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DialogDetail;
