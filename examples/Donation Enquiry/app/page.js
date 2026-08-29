export default function DonationEnquiryForm() {
    return (
        <main className="donation-page">
            <section className="donation-card">
                <div className="donation-header">
                    <div className="donation-icon">$</div>
                    <div>
                        <span className="eyebrow">Support Us</span>
                        <h1>Donation enquiry</h1>
                        <p>
                            Interested in supporting our work? Tell us about your
                            donation enquiry and our team will get in touch with you.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="donation-form"
                >
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
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+1 (555) 123-4567"
                                autoComplete="tel"
                            />
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Donation details</h2>
                        <p>Tell us about the support you are interested in providing.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="donation_type">
                                Donation Type <span>*</span>
                            </label>
                            <select
                                id="donation_type"
                                name="donation_type"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select donation type
                                </option>
                                <option value="one-time">One-Time Donation</option>
                                <option value="recurring">Recurring Donation</option>
                                <option value="in-kind">In-Kind Donation</option>
                                <option value="corporate">Corporate Donation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="amount">
                                Estimated Donation Amount
                            </label>
                            <select id="amount" name="amount" defaultValue="">
                                <option value="" disabled>
                                    Select amount
                                </option>
                                <option value="under-100">Under $100</option>
                                <option value="100-500">$100 – $500</option>
                                <option value="500-1000">$500 – $1,000</option>
                                <option value="1000-5000">$1,000 – $5,000</option>
                                <option value="5000-plus">$5,000+</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="purpose">
                            Donation Purpose <span>*</span>
                        </label>
                        <select
                            id="purpose"
                            name="purpose"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select a purpose
                            </option>
                            <option value="general-support">General Support</option>
                            <option value="specific-program">Specific Program</option>
                            <option value="community">Community Support</option>
                            <option value="education">Education</option>
                            <option value="emergency-relief">Emergency Relief</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Donation Enquiry <span>*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your donation enquiry, preferences, or any questions you have..."
                            required
                        ></textarea>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>Share any other details that may help us assist you.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="organization">
                            Organization / Company
                        </label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            placeholder="Your organization or company"
                            autoComplete="organization"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes">Additional Notes</label>
                        <textarea
                            id="notes"
                            name="notes"
                            placeholder="Add any additional information or questions..."
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
                            and agree to be contacted regarding my donation enquiry.
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit Donation Enquiry
                    </button>
                </form>
            </section>
        </main>
    );
}
