export default function TestimonialForm() {
    return (
        <main className="testimonial-page">
            <section className="testimonial-card">

                <div className="testimonial-header">
                    <div className="testimonial-icon">★</div>

                    <div>
                        <span className="eyebrow">Customer Stories</span>
                        <h1>Share your experience</h1>
                        <p>
                            Tell us about your experience with our product or service.
                            Your testimonial may help others learn more about us.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="testimonial-form"
                >
                    <div className="section-header">
                        <h2>Your information</h2>
                        <p>Tell us a little about yourself.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">
                                Full Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                autoComplete="name"
                                required
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

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="company">
                                Company / Organization
                            </label>

                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Your company"
                                autoComplete="organization"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">
                                Job Title / Role
                            </label>

                            <input
                                type="text"
                                id="role"
                                name="role"
                                placeholder="Your role"
                            />
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Your experience</h2>
                        <p>Help us understand your experience.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">
                            Overall Rating <span>*</span>
                        </label>

                        <select
                            id="rating"
                            name="rating"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select a rating
                            </option>

                            <option value="5">5 - Excellent</option>
                            <option value="4">4 - Great</option>
                            <option value="3">3 - Good</option>
                            <option value="2">2 - Fair</option>
                            <option value="1">1 - Poor</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="testimonial">
                            Your Testimonial <span>*</span>
                        </label>

                        <textarea
                            id="testimonial"
                            name="testimonial"
                            placeholder="Tell us what you liked about our product or service and how it helped you..."
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="highlight">
                            What did you like most?
                        </label>

                        <input
                            type="text"
                            id="highlight"
                            name="highlight"
                            placeholder="What stood out to you?"
                        />
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Permission</h2>
                        <p>Let us know how we may use your testimonial.</p>
                    </div>

                    <div className="consent-group">
                        <input
                            type="checkbox"
                            id="permission"
                            name="permission"
                            value="accepted"
                            required
                        />

                        <label htmlFor="permission">
                            I give permission for my testimonial to be used
                            on the website and other marketing materials.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Submit Testimonial
                    </button>
                </form>
            </section>
        </main>
    );
}
