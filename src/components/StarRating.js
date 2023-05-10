import { FaStar } from "react-icons/fa";

const SR_TOTAL = 5;
const SR_SELECTED = 1;

const createArray = (length) => [...Array(length)];

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
);

export default function StarRating({
  totalStars = SR_TOTAL,
  selectedStars = SR_SELECTED,
  onRate = (f) => f
}) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
