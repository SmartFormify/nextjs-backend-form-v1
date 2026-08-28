export default function LeadGenerationForm() {
    return (
        <main className="lead-page">

            <section className="lead-card">

                {/* Header */}
                <div className="lead-header">

                    <div className="lead-icon">
                        →
                    </div>

                    <div>
                        <span className="eyebrow">
                            Let's Connect
                        </span>

                        <h1>Let's talk about your goals</h1>

                        <p>
                            Tell us a little about yourself and what you're looking for.
                            Our team will get in touch with you shortly.
                        </p>
                    </div>

                </div>

                {/* Lead Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="lead-form"
                >

                    {/* Contact Information */}
                    <div className="section-header">
                        <h2>Contact information</h2>
                        <p>We'll use these details to contact you.</p>
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
                                Work Email <span>*</span>
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@company.com"
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

                    {/* Company Details */}
                    <div className="section-header section-spacing">
                        <h2>About your business</h2>
                        <p>
                            Help us understand your business and requirements.
                        </p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="company">
                            Company Name <span>*</span>
                        </label>

                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your company"
                            autoComplete="organization"
                            required
                        />

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="company_size">
                                Company Size
                            </label>

                            <select
                                id="company_size"
                                name="company_size"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select company size
                                </option>

                                <option value="1-10">
                                    1–10 employees
                                </option>

                                <option value="11-50">
                                    11–50 employees
                                </option>

                                <option value="51-200">
                                    51–200 employees
                                </option>

                                <option value="201-500">
                                    201–500 employees
                                </option>

                                <option value="501-plus">
                                    501+ employees
                                </option>
                            </select>

                        </div>

                        <div className="form-group">

                            <label htmlFor="industry">
                                Industry
                            </label>

                            <select
                                id="industry"
                                name="industry"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select industry
                                </option>

                                <option value="technology">
                                    Technology
                                </option>

                                <option value="healthcare">
                                    Healthcare
                                </option>

                                <option value="finance">
                                    Finance
                                </option>

                                <option value="education">
                                    Education
                                </option>

                                <option value="real-estate">
                                    Real Estate
                                </option>

                                <option value="retail">
                                    Retail
                                </option>

                                <option value="professional-services">
                                    Professional Services
                                </option>

                                <option value="other">
                                    Other
                                </option>
                            </select>

                        </div>

                    </div>

                    {/* Interest */}
                    <div className="section-header section-spacing">
                        <h2>What are you looking for?</h2>
                        <p>Tell us what you are interested in.</p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="interest">
                            Primary Interest <span>*</span>
                        </label>

                        <select
                            id="interest"
                            name="interest"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select an option
                            </option>

                            <option value="product-demo">
                                Product Demo
                            </option>

                            <option value="pricing">
                                Pricing Information
                            </option>

                            <option value="consultation">
                                Consultation
                            </option>

                            <option value="partnership">
                                Partnership
                            </option>

                            <option value="more-information">
                                More Information
                            </option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label htmlFor="message">
                            Tell us more
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your goals, challenges, or what you'd like to discuss..."
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
                            I agree to be contacted regarding my inquiry
                            and understand that my information will be used
                            to respond to my request.
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Get Started
                    </button>

                </form>

            </section>

        </main>
    );
}