export default function CustomerSupportForm() {
    return (
        <main className="support-page">

            <section className="support-card">

                {/* Header */}
                <div className="support-header">

                    <div className="support-icon">
                        ?
                    </div>

                    <div>
                        <span className="eyebrow">
                            Customer Support
                        </span>

                        <h1>How can we help?</h1>

                        <p>
                            Tell us about your question or issue.
                            Our support team will get back to you shortly.
                        </p>
                    </div>

                </div>

                {/* Support Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="support-form"
                >

                    {/* Contact Information */}
                    <div className="section-header">
                        <h2>Your information</h2>
                        <p>Tell us how we can contact you.</p>
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

                    {/* Support Details */}
                    <div className="section-header section-spacing">
                        <h2>Support details</h2>
                        <p>
                            Help us understand your question or issue.
                        </p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="category">
                            Support Category <span>*</span>
                        </label>

                        <select
                            id="category"
                            name="category"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select a category
                            </option>

                            <option value="account">
                                Account
                            </option>

                            <option value="billing">
                                Billing
                            </option>

                            <option value="technical">
                                Technical Support
                            </option>

                            <option value="product">
                                Product Support
                            </option>

                            <option value="general">
                                General Question
                            </option>

                            <option value="other">
                                Other
                            </option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label htmlFor="priority">
                            Priority <span>*</span>
                        </label>

                        <select
                            id="priority"
                            name="priority"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select priority
                            </option>

                            <option value="low">
                                Low
                            </option>

                            <option value="normal">
                                Normal
                            </option>

                            <option value="high">
                                High
                            </option>

                            <option value="urgent">
                                Urgent
                            </option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label htmlFor="subject">
                            Subject <span>*</span>
                        </label>

                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Briefly describe your issue"
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="message">
                            Message <span>*</span>
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Describe your question or issue in detail..."
                            required
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
                            and agree to be contacted regarding my support request.
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Submit Support Request
                    </button>

                </form>

            </section>

        </main>
    );
}