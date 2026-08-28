export default function FeedbackForm() {
    return (
        <main className="feedback-page">

            <section className="feedback-card">

                {/* Header */}
                <div className="feedback-header">

                    <div className="feedback-icon">
                        💬
                    </div>

                    <div>
                        <span className="eyebrow">
                            We value your opinion
                        </span>

                        <h1>Share your feedback</h1>

                        <p>
                            Tell us about your experience. Your feedback helps us
                            improve our products and services.
                        </p>
                    </div>

                </div>

                {/* Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="feedback-form"
                >

                    {/* Personal Information */}
                    <div className="section-header">
                        <h2>Your information</h2>
                        <p>
                            Optional details so we can follow up with you.
                        </p>
                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="name">
                                Full Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                autoComplete="name"
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="email">
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                autoComplete="email"
                            />

                        </div>

                    </div>

                    {/* Feedback Details */}
                    <div className="section-header section-spacing">
                        <h2>About your experience</h2>
                        <p>
                            Help us understand your experience.
                        </p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="feedback_type">
                            Feedback Type <span>*</span>
                        </label>

                        <select
                            id="feedback_type"
                            name="feedback_type"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select feedback type
                            </option>

                            <option value="general">
                                General Feedback
                            </option>

                            <option value="product">
                                Product Feedback
                            </option>

                            <option value="service">
                                Service Feedback
                            </option>

                            <option value="suggestion">
                                Suggestion
                            </option>

                            <option value="bug">
                                Report an Issue
                            </option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label>
                            How would you rate your experience? <span>*</span>
                        </label>

                        <div className="rating-options">

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="rating"
                                    value="1"
                                    required
                                />
                                <span>1</span>
                                <small>Poor</small>
                            </label>

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="rating"
                                    value="2"
                                />
                                <span>2</span>
                                <small>Fair</small>
                            </label>

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="rating"
                                    value="3"
                                />
                                <span>3</span>
                                <small>Good</small>
                            </label>

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="rating"
                                    value="4"
                                />
                                <span>4</span>
                                <small>Great</small>
                            </label>

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="rating"
                                    value="5"
                                />
                                <span>5</span>
                                <small>Excellent</small>
                            </label>

                        </div>

                    </div>

                    <div className="form-group">

                        <label htmlFor="message">
                            Your Feedback <span>*</span>
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us what you liked, what could be improved, or anything else you'd like to share..."
                            required
                        ></textarea>

                    </div>

                    <div className="form-group">

                        <label htmlFor="recommendation">
                            Would you recommend us?
                        </label>

                        <select
                            id="recommendation"
                            name="recommendation"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select an option
                            </option>

                            <option value="yes">
                                Yes
                            </option>

                            <option value="maybe">
                                Maybe
                            </option>

                            <option value="no">
                                No
                            </option>
                        </select>

                    </div>

                    {/* Consent */}
                    <div className="consent-group">

                        <input
                            type="checkbox"
                            id="contact_permission"
                            name="contact_permission"
                            value="yes"
                        />

                        <label htmlFor="contact_permission">
                            You may contact me about my feedback if further
                            information is needed.
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Submit Feedback
                    </button>

                </form>

            </section>

        </main>
    );
}