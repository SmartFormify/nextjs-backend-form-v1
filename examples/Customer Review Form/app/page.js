export default function CustomerReviewForm() {
    return (
        <main className="review-page">
            <section className="review-card">
                <div className="review-header">
                    <div className="review-icon">★</div>
                    <div>
                        <span className="eyebrow">Customer Review</span>
                        <h1>Tell us about your experience</h1>
                        <p>We value your feedback. Share your experience with our product or service and help us improve.</p>
                    </div>
                </div>

                <form action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT} method="POST" className="review-form">
                    <div className="section-header">
                        <h2>Your information</h2>
                        <p>Optional details so we can follow up with you.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" autoComplete="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" autoComplete="email" />
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Your review</h2>
                        <p>Tell us about your experience.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">Overall Rating <span>*</span></label>
                        <select id="rating" name="rating" defaultValue="" required>
                            <option value="" disabled>Select your rating</option>
                            <option value="5">5 - Excellent</option>
                            <option value="4">4 - Very Good</option>
                            <option value="3">3 - Good</option>
                            <option value="2">2 - Fair</option>
                            <option value="1">1 - Poor</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="review_title">Review Title</label>
                        <input type="text" id="review_title" name="review_title" placeholder="Summarize your experience" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="review">Your Review <span>*</span></label>
                        <textarea id="review" name="review" placeholder="Tell us what you liked, what could be improved, or anything else you'd like to share..." required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="recommendation">Would you recommend us?</label>
                        <select id="recommendation" name="recommendation" defaultValue="">
                            <option value="" disabled>Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="maybe">Maybe</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="consent-group">
                        <input type="checkbox" id="permission" name="permission" value="accepted" required />
                        <label htmlFor="permission">I confirm that this review is based on my genuine experience and agree to its use for feedback and review purposes.</label>
                    </div>

                    <button type="submit" className="submit-button">Submit Review</button>
                </form>
            </section>
        </main>
    );
}
