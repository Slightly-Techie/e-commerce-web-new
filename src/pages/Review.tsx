import logo from "@/assets/logo.svg";
import ReviewProducts from "@/components/reviews/ReviewProducts";
import ReviewStar from "@/components/reviews/ReviewStar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Review() {
  const [review, setReview] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function submitReview() {
    setIsLoading(true);

    //   api call
    console.log({
      review,
      reviewText,
    });
    setIsLoading(false);
  }

  return (
    <main className="flex min-h-screen w-full flex-col bg-gray75">
      <div className="fixed top-0 z-50 flex h-[77px] w-full items-center justify-center bg-white shadow-sm">
        <img src={logo} />
      </div>
      <section className="mb-20 mt-[77px] flex h-full w-full items-center justify-center pt-4">
        <article className="shadow-order flex w-[95%] flex-col items-center justify-center rounded-[14px] border border-gray100 bg-white p-4 md:w-[514px] md:p-8">
          <div className="flex flex-col items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/9e04/5516/061099a50255a5978c77df6b624c67f1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J2v478ppB~btMjQhkRXd6hpbHNwZbOBXx4AS~jyita9j4RGl6IUmtfsm3OGEYFsubSvekKzuJfvgA-9Bs6Ryk6lAd8zclmk2f9ZvS9NoEB~UCsx0S3~Qs4KlIa0Zk~8CLs1ij8kG8hKxm5q5JfIi2NjJjfAg7QSaKuX3bnFrnbenMdWOwqnZQsx-tp8etcOxkMFKURGwgzuhW-iDYPY3fHbmsXkqD7qxpVKRYFgLlwUz~-JpQ-cdftJ57Hoy2nfMFkjoqdw8Hj7gD~~EaBy2YYf-rJIMuJrM1pYkcNeVpDthLo73b0eEFQ9Jq3VPeh0-3ajA2F4w24CTe6TqmabQFg__"
              alt="name"
              className="size-20 rounded-full"
            />
            <h1 className="mb-0.5 mt-3 text-[28px] font-bold text-darkPrimary md:mb-1.5">
              Mensah Michael
            </h1>
            <p className="text-gray500">Rate and review your product</p>
          </div>

          <div className="w-full">
            {/* products - accordion */}
            <ReviewProducts />

            <div className="my-6 w-full border border-gray100 md:my-8"></div>

            {/* stars */}
            <div className="flex justify-between">
              {[1, 2, 3, 4, 5].map((item) => (
                <ReviewStar
                  key={item}
                  item={item}
                  review={review}
                  setReview={setReview}
                />
              ))}
            </div>

            <div className="mt-6 md:mt-8">
              <label htmlFor="review" className="text-sm font-semibold">
                Leave a review
              </label>
              <Textarea
                id="review"
                placeholder="Type something"
                className="mt-1 text-gray400 focus:ring-offset-0"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </div>
          </div>

          <Button
            className="mt-6 w-full md:mt-12"
            disabled={isLoading}
            onClick={submitReview}
          >
            Submit review
          </Button>
        </article>
      </section>
    </main>
  );
}
