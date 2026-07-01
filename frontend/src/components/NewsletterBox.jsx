import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., send email to backend)
    }
  return (
    <div className="text-center py-16">
        <p className="text-2xl font-semibold text-gray-800">
            Subscribe Now & Get 20% Off
        </p>

        <p className="mt-3 text-sm sm:text-base text-gray-500">
            Be the first to discover new arrivals, exclusive offers, and special discounts delivered straight to your inbox.
        </p>

        <form onSubmit={onSubmitHandler} className="mt-10 flex flex-col items-center gap-2">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-2/3 lg:w-1/2 px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-stone-700"
            />

            <button
                type="submit"
                className="bg-stone-700 text-white px-8 py-3 rounded-md hover:bg-stone-800 transition-colors duration-300"
            >
                SUBSCRIBE
            </button>
        </form>
    </div>
  )
}

export default NewsletterBox