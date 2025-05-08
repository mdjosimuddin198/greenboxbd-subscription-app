import React, { useState } from "react";
import { toast } from "react-toastify";

const ReviewSection = () => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState([]);
  const [reviewError, setReviewError] = useState("");

  const handleSubmit = () => {
    if (!reviewText || !rating || rating < 1 || rating > 5) {
      // alert("Please enter a valid review and rating between 1-5");
      setReviewError("Please enter a valid review and rating between 1-5");
      toast.error(`Please enter a valid review and rating between 1-5`);
      return;
    }
    toast.success("review added");
    setReviewError("");
    const newReview = {
      id: Date.now(),
      text: reviewText,
      rating: parseInt(rating),
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setRating("");
  };

  return (
    <>
      <section className="flex items-center justify-center">
        <div className="mt-6 ">
          <h3 className="text-3xl font-medium mb-2">Customer Reviews</h3>
          {reviews.length === 0 ? (
            <p className="text-gray-500 text-xl">No reviews yet.</p>
          ) : (
            <ul className="space-y-3">
              {reviews.map((rev) => (
                <li
                  key={rev.id}
                  className="bg-gray-100 p-3 rounded shadow-sm border"
                >
                  <p className="text-gray-800 mb-1">{rev.text}</p>
                  <p className="text-yellow-600">⭐ {rev.rating} / 5</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section>
        <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>

          <textarea
            className="w-full p-2 border rounded mb-3"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          <input
            type="number"
            min="1"
            max="5"
            className="w-full p-2 border rounded mb-3"
            placeholder="Rating (1 to 5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          {reviewError && <p className="text-red-500">{reviewError}</p>}
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit Review
          </button>
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
