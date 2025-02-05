import React, { useState } from 'react';
import "../css_files/Results.css";

const MatrixRubric = ({ initialSelections = {} }) => {
  const [selections, setSelections] = useState(initialSelections);
  
  const columns = [
    "Poor",
    "Fair",
    "Good",
    "Excellent"
  ];

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
    formatAndStyle: {
      "Poor": "Multiple formatting issues, inconsistent spacing, poor organization, and numerous typos/errors. Length is inappropriate for experience level.",
      "Fair": "Basic formatting with some inconsistencies. Contains a few typos or grammatical errors. Layout could be more professional. Some sections may be too lengthy or brief.",
      "Good": "Clean, professional formatting with consistent spacing and organization. Minor formatting issues. Appropriate length with clear section headings.",
      "Excellent": "Exceptional formatting with perfect consistency. No errors. Outstanding use of white space and organization. Highly professional appearance with strategic emphasis on key information."
    },
    experience: {
      "Poor": "Work history is unclear or poorly described. Lacks quantifiable achievements. Job descriptions are vague or missing. No clear career progression.",
      "Fair": "Basic job descriptions present but lacks strong achievement metrics. Some career progression shown. Descriptions could be more specific and impactful.",
      "Good": "Clear work history with specific responsibilities and some quantifiable achievements. Shows career progression. Action verbs used effectively.",
      "Excellent": "Outstanding achievement descriptions with strong metrics. Clear progression and growth. Excellent use of action verbs and industry-specific language. Highly relevant experience highlighted strategically."
    },
    skills: {
      "Poor": "Skills section is missing or severely lacking. Skills mentioned don't align with job requirements. No evidence of technical or soft skills.",
      "Fair": "Basic skills listed but lacks organization. Some relevant skills included but missing key industry-specific skills. Limited demonstration of skill proficiency.",
      "Good": "Well-organized skills section with good mix of technical and soft skills. Most relevant skills included. Clear indication of proficiency levels.",
      "Excellent": "Comprehensive skills section perfectly aligned with industry requirements. Excellent balance of technical and soft skills. Clear expertise levels. Skills strategically placed and demonstrated throughout resume."
    },
    education: {
      "Poor": "Education section is incomplete or missing key information. Lacks relevant certifications or coursework. Dates missing or unclear.",
      "Fair": "Basic education information included but could be better organized. Some relevant certifications listed. Minimal detail about coursework or achievements.",
      "Good": "Clear education history with relevant details. Includes pertinent certifications and training. Academic achievements noted where relevant.",
      "Excellent": "Outstanding presentation of educational background. Highly relevant certifications and training highlighted. Strategic inclusion of academic honors and relevant coursework. Education section perfectly tailored to target role."
    }
  };

  const handleSelection = (rowValue, column) => {
    setSelections(prev => ({
      ...prev,
      [rowValue]: column
    }));
  };

  const getCellStyle = (rowValue, column) => {
    const isSelected = selections[rowValue] === column;
    return `p-4 border cursor-pointer ${
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
                <th className="p-4 border bg-gray-50 w-1/5"></th>
                {columns.map(column => (
                  <th key={column} className="p-4 border bg-gray-50 w-1/5">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={row.value} className={rowIndex % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="p-4 border font-medium">
                    {row.text}
                  </td>
                  {columns.map(column => (
                    <td
                      key={`${row.value}-${column}`}
                      className={getCellStyle(row.value, column)}
                    >
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: cells[row.value]?.[column] || '' 
                        }} 
                      />
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