export default function NewsletterContent() {
  return (
    <>
      <div className="pt-8 pb-35">
        <h1 className="tp-2 pb-4 text-neutral-700">Newsletter</h1>
        <div className="flex flex-col gap-6">
          <p className="tp-7 text-neutral-600">
            Want to stay updated on my latest articles, coding tutorials, and
            personal adventures? Sign up for my newsletter! It’s a simple way to
            keep track of new posts and occasional coding tips I discover. Just
            drop your email in the sign-up box, and I’ll send you updates
            whenever there’s something new to share.
          </p>
          <p className="tp-5 text-neutral-700">
            I’d love to have you along for the ride and also hear about your own
            journey!
          </p>
          <div className="form">
            <form action="">
              <div>
                <label
                  className="tp-7 text-neutral-700 pb-2 inline-block"
                  htmlFor="email"
                  id="email"
                >
                  {" "}
                  Email Address
                </label>
              </div>
              <div className="">
                <input
                  className="w-full border rounded-lg shadow border-neutral-300 py-4 px-4 placeholder:text-neutral-600"
                  type="text"
                  id="email"
                  placeholder="email@example.com"
                />
              </div>
              <button
                className="px-10 py-4 tp-6 text-neutral-900 bg-blue-500 mt-5 rounded-lg hover:bg-blue-700 transition-colors duration-200 hover:cursor-pointer"
                type="submit"
              >
                Stay updated
              </button>
            </form>
            <p className="tp-8 text-neutral-600 mt-2">
              Unsubscribe anytime. No spam, I promise 🙂
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
