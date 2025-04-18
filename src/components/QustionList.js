import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => {
        setQuestions(questions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  function handleDeleteClick(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to delete question");
        }
        return r.json();
      })
      .then(() => {
        setQuestions((prevQuestions) =>
          prevQuestions.filter((q) => q.id !== id)
        );
      })
      .catch((error) => console.error("Error:", error));
  }

  function handleAnswerChange(id, correctIndex) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => {
        setQuestions((prevQuestions) =>
          prevQuestions.map((q) =>
            q.id === updatedQuestion.id ? updatedQuestion : q
          )
        );
      })
      .catch((error) => console.error("Error:", error));
  }

  const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      onDeleteClick={handleDeleteClick}
      onAnswerChange={handleAnswerChange}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      {loading ? (
        <p>Loading questions...</p>
      ) : (
        <ul>{questionItems}</ul>
      )}
    </section>
  );
}

export default QuestionList;
