import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 6,
      text: 'This is the feedback item 1.',
    },
    {
      id: 2,
      rating: 8,
      text: 'This is the feedback item 2.',
    },
    {
      id: 3,
      rating: 9,
      text: 'This is the feedback item 3.',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  function handleAdd(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  // Delete Feedback
  function deleteItem(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  // Set item to be updated
  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  // Update feedback
  function updateFeedback(id, updItem) {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updItem } : { ...item }
      )
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        handleAdd,
        deleteItem,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
