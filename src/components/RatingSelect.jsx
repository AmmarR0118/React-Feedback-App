import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ ratingSelect }) {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  function handleSelect(e) {
    setSelected(+e.currentTarget.value);
    ratingSelect(+e.currentTarget.value);
  }

  return (
    <ul className="rating">
      <li>
        <input
          value="1"
          type="radio"
          name="rating"
          id="num1"
          onChange={handleSelect}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>

      <li>
        <input
          value="2"
          type="radio"
          name="rating"
          id="num2"
          onChange={handleSelect}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          value="3"
          type="radio"
          name="rating"
          id="num3"
          onChange={handleSelect}
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>

      <li>
        <input
          value="4"
          type="radio"
          name="rating"
          id="num4"
          onChange={handleSelect}
          checked={selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>

      <li>
        <input
          value="5"
          type="radio"
          name="rating"
          id="num5"
          onChange={handleSelect}
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>

      <li>
        <input
          value="6"
          type="radio"
          name="rating"
          id="num6"
          onChange={handleSelect}
          checked={selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>

      <li>
        <input
          value="7"
          type="radio"
          name="rating"
          id="num7"
          onChange={handleSelect}
          checked={selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>

      <li>
        <input
          value="8"
          type="radio"
          name="rating"
          id="num8"
          onChange={handleSelect}
          checked={selected === 8}
        />
        <label htmlFor="num8">8</label>
      </li>

      <li>
        <input
          value="9"
          type="radio"
          name="rating"
          id="num9"
          onChange={handleSelect}
          checked={selected === 9}
        />
        <label htmlFor="num9">9</label>
      </li>

      <li>
        <input
          value="10"
          type="radio"
          name="rating"
          id="num10"
          onChange={handleSelect}
          checked={selected === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
