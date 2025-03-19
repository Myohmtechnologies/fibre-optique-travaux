import React from 'react';

interface StepDetail {
  letter?: string;
  title?: string;
  content: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
  details?: StepDetail[];
}

interface MethodStepsProps {
  steps: Step[];
}

const MethodSteps: React.FC<MethodStepsProps> = ({ steps }) => {
  return (
    <div className="my-8 bg-white rounded-xl shadow-lg overflow-hidden">
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`border-b border-gray-100 ${index === steps.length - 1 ? 'border-b-0' : ''}`}
        >
          <div className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-construction-orange text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-neutral-dark">{step.title}</h3>
                <p className="mt-1 text-gray-600">{step.description}</p>
                
                {step.details && step.details.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="pl-4 border-l-2 border-gray-200">
                        {detail.letter && detail.title ? (
                          <div className="flex items-start">
                            <span className="font-semibold text-construction-orange">{detail.letter}) </span>
                            <div className="ml-1">
                              <span className="font-semibold text-neutral-dark">{detail.title}</span>
                              <p className="mt-1 text-gray-600">{detail.content}</p>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-600">{detail.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MethodSteps;
