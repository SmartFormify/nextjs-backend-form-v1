export default function SurveyForm() {
    return (
        <main className="survey-page">

            <section className="survey-card">

                {/* Header */}
                <div className="survey-header">

                    <div className="survey-icon">
                        ✓
                    </div>

                    <div>
                        <span className="eyebrow">
                            Customer Survey
                        </span>

                        <h1>We'd love your feedback</h1>

                        <p>
                            Take a few minutes to share your experience.
                            Your feedback helps us improve our products and services.
                        </p>
                    </div>

                </div>

                {/* Survey Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="survey-form"
                >

                    {/* Basic Information */}
                    <div className="section-header">
                        <h2>About you</h2>
                        <p>
                            Optional information to help us understand your response.
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

                    {/* Overall Experience */}
                    <div className="section-header section-spacing">
                        <h2>Overall experience</h2>
                        <p>
                            Tell us how you feel about your overall experience.
                        </p>
                    </div>

                    <div className="form-group">

                        <label>
                            How satisfied are you with our service? <span>*</span>
                        </label>

                        <div className="rating-options">

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="satisfaction"
                                    value="very-dissatisfied"
                                    required
                                />
                                <span>1</span>
                                <small>Very dissatisfied</small>
                            </label>

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="satisfaction"
                                    value="dissatisfied"
                                />
                                <span>2</span>
                                <small>Dissatisfied</small>
                            </label>

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="satisfaction"
                                    value="neutral"
                                />
                                <span>3</span>
                                <small>Neutral</small>
                            </label>

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="satisfaction"
                                    value="satisfied"
                                />
                                <span>4</span>
                                <small>Satisfied</small>
                            </label>

                            <label className="rating-option">
                                <input
                                    type="radio"
                                    name="satisfaction"
                                    value="very-satisfied"
                                />
                                <span>5</span>
                                <small>Very satisfied</small>
                            </label>

                        </div>

                    </div>

                    {/* Product Experience */}
                    <div className="form-group">

                        <label htmlFor="product_usage">
                            How often do you use our product? <span>*</span>
                        </label>

                        <select
                            id="product_usage"
                            name="product_usage"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select an option
                            </option>

                            <option value="daily">
                                Daily
                            </option>

                            <option value="weekly">
                                Several times a week
                            </option>

                            <option value="monthly">
                                Several times a month
                            </option>

                            <option value="rarely">
                                Rarely
                            </option>

                            <option value="first-time">
                                This is my first time
                            </option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label>
                            How easy was it to use our product? <span>*</span>
                        </label>

                        <div className="radio-list">

                            <label className="radio-item">
                                <input
                                    type="radio"
                                    name="ease_of_use"
                                    value="very-easy"
                                    required
                                />
                                <span>Very easy</span>
                            </label>

                            <label className="radio-item">
                                <input
                                    type="radio"
                                    name="ease_of_use"
                                    value="easy"
                                />
                                <span>Easy</span>
                            </label>

                            <label className="radio-item">
                                <input
                                    type="radio"
                                    name="ease_of_use"
                                    value="neutral"
                                />
                                <span>Neither easy nor difficult</span>
                            </label>

                            <label className="radio-item">
                                <input
                                    type="radio"
                                    name="ease_of_use"
                                    value="difficult"
                                />
                                <span>Difficult</span>
                            </label>

                            <label className="radio-item">
                                <input
                                    type="radio"
                                    name="ease_of_use"
                                    value="very-difficult"
                                />
                                <span>Very difficult</span>
                            </label>

                        </div>

                    </div>

                    {/* Improvement */}
                    <div className="section-header section-spacing">
                        <h2>Your thoughts</h2>
                        <p>
                            Help us understand what we can do better.
                        </p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="best_part">
                            What do you like most about our product?
                        </label>

                        <textarea
                            id="best_part"
                            name="best_part"
                            placeholder="Tell us what you enjoy most..."
                        ></textarea>

                    </div>

                    <div className="form-group">

                        <label htmlFor="improvement">
                            What could we improve?
                        </label>

                        <textarea
                            id="improvement"
                            name="improvement"
                            placeholder="Share any suggestions or areas for improvement..."
                        ></textarea>

                    </div>

                    <div className="form-group">

                        <label htmlFor="recommend">
                            How likely are you to recommend us? <span>*</span>
                        </label>

                        <select
                            id="recommend"
                            name="recommend"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select a score
                            </option>

                            <option value="10">
                                10 - Extremely likely
                            </option>

                            <option value="9">9</option>
                            <option value="8">8</option>
                            <option value="7">7</option>
                            <option value="6">6</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>

                            <option value="0">
                                0 - Not at all likely
                            </option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label htmlFor="additional_comments">
                            Additional Comments
                        </label>

                        <textarea
                            id="additional_comments"
                            name="additional_comments"
                            placeholder="Anything else you'd like to share?"
                        ></textarea>

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
                            You may contact me about my survey response
                            if additional information is needed.
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Submit Survey
                    </button>

                </form>

            </section>

        </main>
    );
}