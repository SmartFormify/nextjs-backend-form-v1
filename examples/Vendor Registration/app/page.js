export default function VendorRegistrationForm() {
    return (
        <main className="vendor-page">
            <section className="vendor-card">
                <div className="vendor-header">
                    <div className="vendor-icon">V</div>
                    <div>
                        <span className="eyebrow">Vendor Registration</span>
                        <h1>Register your business</h1>
                        <p>
                            Tell us about your business and the products or services
                            you provide. Our team will review your registration.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="vendor-form"
                >
                    <div className="section-header">
                        <h2>Contact information</h2>
                        <p>Tell us how we can reach you.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name <span>*</span></label>
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
                            <label htmlFor="last_name">Last Name <span>*</span></label>
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
                            <label htmlFor="email">Email Address <span>*</span></label>
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
                            <label htmlFor="phone">Phone Number <span>*</span></label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+1 (555) 123-4567"
                                autoComplete="tel"
                                required
                            />
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Business information</h2>
                        <p>Provide details about your company or organization.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="company_name">Company / Business Name <span>*</span></label>
                        <input
                            type="text"
                            id="company_name"
                            name="company_name"
                            placeholder="Your company name"
                            autoComplete="organization"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="business_type">Business Type <span>*</span></label>
                            <select id="business_type" name="business_type" defaultValue="" required>
                                <option value="" disabled>Select business type</option>
                                <option value="sole-proprietorship">Sole Proprietorship</option>
                                <option value="partnership">Partnership</option>
                                <option value="llc">LLC</option>
                                <option value="corporation">Corporation</option>
                                <option value="nonprofit">Nonprofit</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="industry">Industry <span>*</span></label>
                            <select id="industry" name="industry" defaultValue="" required>
                                <option value="" disabled>Select industry</option>
                                <option value="technology">Technology</option>
                                <option value="manufacturing">Manufacturing</option>
                                <option value="retail">Retail</option>
                                <option value="wholesale">Wholesale</option>
                                <option value="professional-services">Professional Services</option>
                                <option value="construction">Construction</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                placeholder="https://example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tax_id">Business / Tax ID</label>
                            <input
                                type="text"
                                id="tax_id"
                                name="tax_id"
                                placeholder="Business identification number"
                            />
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Products and services</h2>
                        <p>Tell us what your business provides.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="products_services">
                            Products / Services <span>*</span>
                        </label>
                        <textarea
                            id="products_services"
                            name="products_services"
                            placeholder="Describe the products or services you provide..."
                            required
                        ></textarea>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="years_in_business">Years in Business</label>
                            <select id="years_in_business" name="years_in_business" defaultValue="">
                                <option value="" disabled>Select years</option>
                                <option value="less-than-1">Less than 1 year</option>
                                <option value="1-3">1–3 years</option>
                                <option value="4-7">4–7 years</option>
                                <option value="8-10">8–10 years</option>
                                <option value="10-plus">10+ years</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="employees">Number of Employees</label>
                            <select id="employees" name="employees" defaultValue="">
                                <option value="" disabled>Select company size</option>
                                <option value="1-10">1–10</option>
                                <option value="11-50">11–50</option>
                                <option value="51-200">51–200</option>
                                <option value="201-500">201–500</option>
                                <option value="501-plus">501+</option>
                            </select>
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>Share anything else we should know about your business.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Additional Notes</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Add any additional information, requirements, or questions..."
                        ></textarea>
                    </div>

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
                            and agree to be contacted regarding vendor registration.
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit Registration
                    </button>
                </form>
            </section>
        </main>
    );
}
