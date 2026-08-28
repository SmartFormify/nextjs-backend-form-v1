export default function EventRegistrationForm() {
    return (
        <main className="event-page">

            <section className="event-card">

                {/* Header */}
                <div className="event-header">

                    <div className="event-icon">
                        ✓
                    </div>

                    <div>
                        <span className="eyebrow">
                            Event Registration
                        </span>

                        <h1>Register for the event</h1>

                        <p>
                            Reserve your spot by completing the registration form below.
                            We look forward to seeing you at the event.
                        </p>
                    </div>

                </div>

                {/* Registration Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="event-form"
                >

                    {/* Personal Information */}
                    <div className="section-header">
                        <h2>Personal information</h2>
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

                    {/* Event Details */}
                    <div className="section-header section-spacing">
                        <h2>Event details</h2>
                        <p>Select the event and registration options.</p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="event">
                            Event <span>*</span>
                        </label>

                        <select
                            id="event"
                            name="event"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select an event
                            </option>

                            <option value="annual-conference">
                                Annual Conference
                            </option>

                            <option value="business-workshop">
                                Business Workshop
                            </option>

                            <option value="networking-event">
                                Networking Event
                            </option>

                            <option value="training-session">
                                Training Session
                            </option>

                            <option value="webinar">
                                Webinar
                            </option>
                        </select>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="registration_type">
                                Registration Type <span>*</span>
                            </label>

                            <select
                                id="registration_type"
                                name="registration_type"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select registration type
                                </option>

                                <option value="individual">
                                    Individual
                                </option>

                                <option value="student">
                                    Student
                                </option>

                                <option value="professional">
                                    Professional
                                </option>

                                <option value="vip">
                                    VIP
                                </option>
                            </select>

                        </div>

                        <div className="form-group">

                            <label htmlFor="attendees">
                                Number of Attendees
                            </label>

                            <select
                                id="attendees"
                                name="attendees"
                                defaultValue="1"
                            >
                                <option value="1">1 person</option>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6+ people</option>
                            </select>

                        </div>

                    </div>

                    {/* Additional Information */}
                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>Share any additional information with us.</p>
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

                    <div className="form-group">

                        <label htmlFor="message">
                            Notes
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Add any questions, dietary requirements, accessibility needs, or additional information..."
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
                            and agree to receive information regarding this event.
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Register for Event
                    </button>

                </form>

            </section>

        </main>
    );
}