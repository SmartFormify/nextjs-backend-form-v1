export default function ComplaintForm() {
    return (
        <main className="complaint-page">
            <section className="complaint-card">

                <div className="complaint-header">
                    <div className="complaint-icon">!</div>

                    <div>
                        <span className="eyebrow">Customer Care</span>
                        <h1>Submit a complaint</h1>
                        <p>
                            Tell us about your experience or concern.
                            Our team will review your complaint and get back to you.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="complaint-form"
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
                        <h2>Complaint details</h2>
                        <p>Help us understand what happened.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="complaint_type">
                            Complaint Type <span>*</span>
                        </label>
                        <select
                            id="complaint_type"
                            name="complaint_type"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select complaint type
                            </option>
                            <option value="product">Product</option>
                            <option value="service">Service</option>
                            <option value="staff">Staff / Support</option>
                            <option value="billing">Billing</option>
                            <option value="delivery">Delivery</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="order_reference">
                                Order / Reference Number
                            </label>
                            <input
                                type="text"
                                id="order_reference"
                                name="order_reference"
                                placeholder="Order or reference number"
                            />
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
                                <option value="low">Low</option>
                                <option value="normal">Normal</option>
                                <option value="high">High</option>
                                <option value="urgent">Urgent</option>
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
                            placeholder="Briefly describe your complaint"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Complaint <span>*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Please provide details about your complaint..."
                            required
                        ></textarea>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Expected resolution</h2>
                        <p>Tell us how you would like us to address your concern.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="resolution">
                            Preferred Resolution
                        </label>
                        <select
                            id="resolution"
                            name="resolution"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            <option value="refund">Refund</option>
                            <option value="replacement">Replacement</option>
                            <option value="correction">Correction</option>
                            <option value="explanation">Explanation</option>
                            <option value="contact">Contact Me</option>
                            <option value="other">Other</option>
                        </select>
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
                            and agree to be contacted regarding this complaint.
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit Complaint
                    </button>
                </form>
            </section>
        </main>
    );
}
