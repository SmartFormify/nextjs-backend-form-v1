export default function BookingForm() {
    return (
        <main className="booking-page">

            <section className="booking-card">

                {/* Header */}
                <div className="booking-header">

                    <div className="booking-icon">
                        ✓
                    </div>

                    <div>
                        <span className="eyebrow">
                            Appointments
                        </span>

                        <h1>Book an appointment</h1>

                        <p>
                            Choose a service and preferred time.
                            We'll confirm your appointment shortly.
                        </p>
                    </div>

                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="booking-form"
                >

                    {/* Personal Information */}
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
                                Phone Number <span>*</span>
                            </label>

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

                    {/* Appointment Details */}
                    <div className="section-header section-spacing">
                        <h2>Appointment details</h2>
                        <p>
                            Select your preferred service, date, and time.
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

                            <option value="consultation">
                                Consultation
                            </option>

                            <option value="general-appointment">
                                General Appointment
                            </option>

                            <option value="follow-up">
                                Follow-up
                            </option>

                            <option value="support">
                                Support Session
                            </option>
                        </select>

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="appointment_date">
                                Preferred Date <span>*</span>
                            </label>

                            <input
                                type="date"
                                id="appointment_date"
                                name="appointment_date"
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="appointment_time">
                                Preferred Time <span>*</span>
                            </label>

                            <select
                                id="appointment_time"
                                name="appointment_time"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select a time
                                </option>

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

                        <label htmlFor="guests">
                            Number of People
                        </label>

                        <select
                            id="guests"
                            name="guests"
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

                    {/* Additional Information */}
                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>
                            Let us know if there is anything else we should know.
                        </p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="message">
                            Notes
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Add any special requests or additional information..."
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
                            and agree to be contacted regarding this appointment.
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Request Appointment
                    </button>

                </form>

            </section>

        </main>
    );
}