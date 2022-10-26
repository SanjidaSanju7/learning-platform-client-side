import React from 'react';

const FrequentlyAskedQuestions = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 bg-rose-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 ">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase title">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl ">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details >
                        <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">How long does my subscription last?</summary>
                        <div className="px-4 pb-4">
                            <p>Treehouse subscriptions are monthly, with the option to cancel your subscription at any time.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">Do you have a free trial?</summary>
                        <div className="px-4 pb-4">
                            <p>Yes! We offer everyone a seven-day free trial. You can take advantage of it by visiting our sign-up page.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">What can I do if I'm stuck on a learning task?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Our Community is a great resource if you're stuck! It's also a great place to practice code reviews. If you're unable to get a satisfactory response from our Community, you can send an email for help from our Support team.</p>
                            <p></p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">Do you offer a Group Membership at a discounted rate?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>We do offer group membership discounts. Please fill out the form here and someone from our Organizations team will follow up with you.</p>

                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">How do I recommend new content/new suggestions?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>At this time you can email us at academia with the subject line "Content Suggestion". We review all emails and make note each month of what our students are wanting to see. This helps shape our decisions about content and features in the near future!</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">What can I do if I’m stuck on a Code Challenge task?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>We advise that you first utilize our Community if you’re stuck on a task. Please be sure to include a link to the Code Challenge and confirm which task number you’re stuck on.</p>
                            <p>Also, include a screenshot of your code within the Code Challenge text editor or a code sample in markdown. Feel free to send us an email to academia with a link to your post if you haven’t received a response within 24 business hours.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">I have a great idea for an application or website, but need help on where to begin. Can you guys help me?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>We advise posting personal requests in our Community where our teachers and other students can provide you with some pointers on where to begin!</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">I found a bug. Where can I report that?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>In the unlikely situation you stumble across a bug, go ahead and shoot us an email at our email address.com with a link and a screenshot. If this bug hasn’t been reported before, we’ll award you with a special Exterminator badge as a thank you!</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions;