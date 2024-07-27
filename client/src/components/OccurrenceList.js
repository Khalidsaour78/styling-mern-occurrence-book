import React from 'react';

const OccurrenceList = ({ occurrences }) => (
  <div>
    {occurrences.map((occurrence) => (
      <div key={occurrence._id} className="occurrence">
        <h2>{occurrence.title}</h2>
        <p>{occurrence.description}</p>
        <span>{new Date(occurrence.date).toLocaleString()}</span>
      </div>
    ))}
  </div>
);

export default OccurrenceList;
