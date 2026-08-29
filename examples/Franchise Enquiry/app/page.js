export default function FranchiseEnquiryForm() {
    return (
        <main className="franchise-page">
            <section className="franchise-card">
                <div className="franchise-header">
                    <div className="franchise-icon">F</div>
                    <div>
                        <span className="eyebrow">Franchise Enquiry</span>
                        <h1>Explore a franchise opportunity</h1>
                        <p>
                            Tell us about yourself and your franchise interests.
                            Our team will review your enquiry and get in touch with you.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="franchise-form"
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
                        <h2>Franchise details</h2>
                        <p>Tell us what kind of franchise opportunity you are looking for.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="franchise_interest">
                            Franchise Interest <span>*</span>
                        </label>
                        <select
                            id="franchise_interest"
                            name="franchise_interest"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="new-franchise">New Franchise</option>
                            <option value="existing-franchise">Existing Franchise</option>
                            <option value="multi-unit">Multi-Unit Franchise</option>
                            <option value="master-franchise">Master Franchise</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="preferred_location">
                                Preferred Location <span>*</span>
                            </label>
                            <input
                                type="text"
                                id="preferred_location"
                                name="preferred_location"
                                placeholder="City, State / Country"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="investment_range">
                                Investment Range
                            </label>
                            <select
                                id="investment_range"
                                name="investment_range"
                                defaultValue=""
                            >
                                <option value="" disabled>Select investment range</option>
                                <option value="under-50000">Under $50,000</option>
                                <option value="50000-100000">$50,000 – $100,000</option>
                                <option value="100000-250000">$100,000 – $250,000</option>
                                <option value="250000-500000">$250,000 – $500,000</option>
                                <option value="500000-plus">$500,000+</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="business_experience">
                            Business Experience
                        </label>
                        <select
                            id="business_experience"
                            name="business_experience"
                            defaultValue=""
                        >
                            <option value="" disabled>Select experience</option>
                            <option value="none">No Previous Business Experience</option>
                            <option value="1-3">1–3 Years</option>
                            <option value="4-7">4–7 Years</option>
                            <option value="8-10">8–10 Years</option>
                            <option value="10-plus">10+ Years</option>
                        </select>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>About you</h2>
                        <p>Share additional information about your franchise plans.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="occupation">Current Occupation</label>
                        <input
                            type="text"
                            id="occupation"
                            name="occupation"
                            placeholder="Your current occupation"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Tell us more <span>*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your goals, experience, preferred location, or any questions you have about the franchise opportunity..."
                            required
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
                            and agree to be contacted regarding my franchise enquiry.
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit Enquiry
                    </button>
                </form>
            </section>
        </main>
    );
}
