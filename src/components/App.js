// src/components/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-testid="app-container">
      <h1>Quiz App</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button>View Questions</button>
      )}
    </div>
  );
}

export default App;