export default function RequestQuoteForm() {
    return (
        <main className="quote-page">

            <section className="quote-card">

                {/* Header */}
                <div className="quote-header">

                    <div className="quote-icon">
                        $
                    </div>

                    <div>
                        <span className="eyebrow">
                            Get a Quote
                        </span>

                        <h1>Request a quote</h1>

                        <p>
                            Tell us about your project and requirements.
                            We'll review your request and get back to you with a quote.
                        </p>
                    </div>

                </div>

                {/* Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="quote-form"
                >

                    {/* Contact Information */}
                    <div className="section-header">
                        <h2>Contact information</h2>
                        <p>Tell us how we can reach you.</p>
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="first_name">
                                First Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                placeholder="John"
                                autoComplete="given-name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="last_name">
                                Last Name <span>*</span>
                            </label>

                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                placeholder="Doe"
                                autoComplete="family-name"
                                required
                            />
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="email">
                                Email Address <span>*</span>
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+1 (555) 123-4567"
                                autoComplete="tel"
                            />
                        </div>

                    </div>

                    {/* Project Details */}
                    <div className="section-header section-spacing">
                        <h2>Project details</h2>
                        <p>
                            Give us some information about what you need.
                        </p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="service">
                            Service <span>*</span>
                        </label>

                        <select
                            id="service"
                            name="service"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select a service
                            </option>

                            <option value="web-design">
                                Web Design
                            </option>

                            <option value="web-development">
                                Web Development
                            </option>

                            <option value="mobile-app">
                                Mobile App Development
                            </option>

                            <option value="ui-ux-design">
                                UI/UX Design
                            </option>

                            <option value="consulting">
                                Consulting
                            </option>

                            <option value="other">
                                Other
                            </option>
                        </select>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="budget">
                                Estimated Budget
                            </label>

                            <select
                                id="budget"
                                name="budget"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select a budget range
                                </option>

                                <option value="under-1000">
                                    Under $1,000
                                </option>

                                <option value="1000-5000">
                                    $1,000 – $5,000
                                </option>

                                <option value="5000-10000">
                                    $5,000 – $10,000
                                </option>

                                <option value="10000-25000">
                                    $10,000 – $25,000
                                </option>

                                <option value="25000-plus">
                                    $25,000+
                                </option>

                                <option value="not-sure">
                                    Not sure yet
                                </option>
                            </select>

                        </div>

                        <div className="form-group">

                            <label htmlFor="timeline">
                                Expected Timeline
                            </label>

                            <select
                                id="timeline"
                                name="timeline"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select a timeline
                                </option>

                                <option value="asap">
                                    As soon as possible
                                </option>

                                <option value="1-month">
                                    Within 1 month
                                </option>

                                <option value="1-3-months">
                                    1–3 months
                                </option>

                                <option value="3-6-months">
                                    3–6 months
                                </option>

                                <option value="flexible">
                                    Flexible
                                </option>
                            </select>

                        </div>

                    </div>

                    <div className="form-group">

                        <label htmlFor="project_name">
                            Project Name
                        </label>

                        <input
                            type="text"
                            id="project_name"
                            name="project_name"
                            placeholder="e.g. Company Website Redesign"
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="description">
                            Project Description <span>*</span>
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            placeholder="Tell us about your project, goals, requirements, and any important details..."
                            required
                        ></textarea>

                    </div>

                    {/* Additional Information */}
                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>Anything else we should know?</p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="additional_notes">
                            Additional Notes
                        </label>

                        <textarea
                            id="additional_notes"
                            name="additional_notes"
                            placeholder="Add any additional requirements or questions..."
                        ></textarea>

                    </div>

                    {/* Consent */}
                    <div className="consent-group">

                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            value="accepted"
                            required
                        />

                        <label htmlFor="consent">
                            I confirm that the information provided is accurate
                            and agree to be contacted regarding this quote request.
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Request a Quote
                    </button>

                </form>

            </section>

        </main>
    );
}