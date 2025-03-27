import React, { useState } from 'react';

const MatrixRubric = ({ initialSelections }) => {
  const [selections, setSelections] = useState(initialSelections);
  
  const rows = [
    {
      value: "formatAndStyle",
      text: "Resume Format & Style"
    },
    {
      value: "experience",
      text: "Work Experience & Achievements"
    },
    {
      value: "skills",
      text: "Skills & Qualifications"
    },
    {
      value: "education",
      text: "Education & Certifications"
    }
  ];

  const cells = {
    formatAndStyle: ["Poor", "Fair", "Good", "Excellent"],
    experience: ["Poor", "Fair", "Good", "Excellent"],
    skills: ["Poor", "Fair", "Good", "Excellent"],
    education: ["Poor", "Fair", "Good", "Excellent"]
  };

  const handleSelection = (rowValue, rating) => {
    setSelections(prev => ({
      ...prev,
      [rowValue]: rating
    }));
  };

  const getCellStyle = (rowValue, rating) => {
    const isSelected = selections[rowValue] === rating;
    return `p-4 border cursor-pointer text-center ${
      isSelected 
        ? 'bg-blue-100 border-blue-500' 
        : 'hover:bg-gray-50 border-gray-200'
    }`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-4 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold">
            Resume Evaluation Rubric
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-4 border bg-gray-50 w-1/5">Criteria</th>
                <th className="p-4 border bg-gray-50" colSpan={4}>Ratings</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={row.value} className={rowIndex % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="p-4 border font-medium">
                    {row.text}
                  </td>
                  {cells[row.value].map(rating => (
                    <td
                      key={`${row.value}-${rating}`}
                      className={getCellStyle(row.value, rating)}
                      onClick={() => handleSelection(row.value, rating)}
                    >
                      {rating}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MatrixRubric;