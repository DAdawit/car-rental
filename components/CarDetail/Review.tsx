import React from "react";

const Review = () => {
  return (
    <>
      <div className="container mx-auto px-5 sm:px-0">
        <h1 className="text-xl font-medium font-serif">Leave a Reply</h1>
        <p className="text-sm font-gray-700 mt-2">
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="grid gap-3 mt-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="h-11 px-3 w-full border-2 "
          />
          <input
            type="email"
            name="name"
            placeholder="Email"
            className="h-11 px-3 w-full border-2 "
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="comment"
            className=" px-3 w-full border-2 "
          ></textarea>

          <button className="text-white bg-red-700 px-5 py-3 w-max">
            POST COMMENT
          </button>
        </form>
      </div>
    </>
  );
};

export default Review;
