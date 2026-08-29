export default function ConsultationForm() {
    return (
        <main className="consultation-page">
            <section className="consultation-card">

                <div className="consultation-header">
                    <div className="consultation-icon">?</div>

                    <div>
                        <span className="eyebrow">Consultation</span>
                        <h1>Book a consultation</h1>
                        <p>
                            Tell us about your needs and preferred consultation.
                            Our team will get in touch with you shortly.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="consultation-form"
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
                        <h2>Consultation details</h2>
                        <p>Tell us what you would like to discuss.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="consultation_type">
                            Consultation Type <span>*</span>
                        </label>
                        <select
                            id="consultation_type"
                            name="consultation_type"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select consultation type
                            </option>
                            <option value="general">General Consultation</option>
                            <option value="business">Business Consultation</option>
                            <option value="product">Product Consultation</option>
                            <option value="technical">Technical Consultation</option>
                            <option value="strategy">Strategy Consultation</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="preferred_date">
                                Preferred Date
                            </label>
                            <input
                                type="date"
                                id="preferred_date"
                                name="preferred_date"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="preferred_time">
                                Preferred Time
                            </label>
                            <select
                                id="preferred_time"
                                name="preferred_time"
                                defaultValue=""
                            >
                                <option value="" disabled>Select a time</option>
                                <option value="09:00">9:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="13:00">1:00 PM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="16:00">4:00 PM</option>
                                <option value="17:00">5:00 PM</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">
                            Subject <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="What would you like to discuss?"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Tell us more <span>*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Describe your goals, questions, or requirements..."
                            required
                        ></textarea>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>Optional details to help us prepare.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">
                            Company / Organization
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your company or organization"
                            autoComplete="organization"
                        />
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
                            and agree to be contacted regarding my consultation request.
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        Request Consultation
                    </button>
                </form>
            </section>
        </main>
    );
}
