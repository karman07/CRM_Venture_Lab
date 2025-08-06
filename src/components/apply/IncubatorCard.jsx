import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import ProgramDetailsModal from './ProgramDetailsModal';
import ApplyModal from './ApplyModal';

const IncubatorCard = ({ incubator }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showApply, setShowApply] = useState(false);

  return (
    <div className="border rounded-lg shadow-sm bg-white">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-semibold text-gray-800">{incubator.name}</h3>
        {expanded ? (
          <HiOutlineChevronUp className="w-5 h-5" />
        ) : (
          <HiOutlineChevronDown className="w-5 h-5" />
        )}
      </div>

      {expanded && (
        <div className="divide-y border-t">
          {incubator.programs.length > 0 ? (
            incubator.programs.map((program) => (
              <div
                key={program.id}
                className="flex justify-between items-center px-4 py-3"
              >
                <div>
                  <div className="font-medium">{program.title}</div>
                  <div className="text-sm text-gray-500">
                    Last Date: {program.lastDate}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedProgram(program);
                      setShowDetails(true);
                    }}
                    className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProgram(program);
                      setShowApply(true);
                    }}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              No programs available.
            </div>
          )}
        </div>
      )}

      <ProgramDetailsModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        program={selectedProgram}
      />
      <ApplyModal
        isOpen={showApply}
        onClose={() => setShowApply(false)}
        program={selectedProgram}
      />
    </div>
  );
};

export default IncubatorCard;
