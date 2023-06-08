import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onEditQuestion }) {
  let renderedQuestions = [];
  if (questions) {
    renderedQuestions = questions.map((question) => (
      <QuestionItem
        key={question.id}
        question={question}
        onDeleteQuestion={onDeleteQuestion}
        onEditQuestion={onEditQuestion}
      />
    ));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{renderedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
