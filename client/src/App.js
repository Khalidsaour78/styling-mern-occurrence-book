import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import OccurrenceForm from './components/OccurrenceForm';
import OccurrenceList from './components/OccurrenceList';

const App = () => {
  const [occurrences, setOccurrences] = useState([]);

  useEffect(() => {
    axios.get('/api/occurrences')
      .then(response => setOccurrences(response.data))
      .catch(error => console.error(error));
  }, []);

  const addOccurrence = (occurrence) => {
    setOccurrences([...occurrences, occurrence]);
  };

  return (
    <div className="app">
      <h1>Occurrence Book</h1>
      <OccurrenceForm addOccurrence={addOccurrence} />
      <OccurrenceList occurrences={occurrences} />
    </div>
  );
};

export default App;
