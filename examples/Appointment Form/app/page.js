export default function AppointmentForm() {
    return (
        <main className="appointment-page">

            <section className="appointment-card">

                {/* Header */}
                <div className="appointment-header">

                    <div className="appointment-icon">
                        📅
                    </div>

                    <div>
                        <span className="eyebrow">
                            Appointments
                        </span>

                        <h1>Schedule an appointment</h1>

                        <p>
                            Choose your preferred date and time.
                            We'll confirm your appointment shortly.
                        </p>
                    </div>

                </div>

                {/* Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="appointment-form"
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
                            Select the service and your preferred schedule.
                        </p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="appointment_type">
                            Appointment Type <span>*</span>
                        </label>

                        <select
                            id="appointment_type"
                            name="appointment_type"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select appointment type
                            </option>

                            <option value="consultation">
                                Consultation
                            </option>

                            <option value="meeting">
                                Business Meeting
                            </option>

                            <option value="demo">
                                Product Demo
                            </option>

                            <option value="support">
                                Support Session
                            </option>

                            <option value="follow-up">
                                Follow-up Appointment
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

                    {/* Preferred Contact Method */}
                    <div className="form-group">

                        <label htmlFor="contact_method">
                            Preferred Contact Method <span>*</span>
                        </label>

                        <select
                            id="contact_method"
                            name="contact_method"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select contact method
                            </option>

                            <option value="email">
                                Email
                            </option>

                            <option value="phone">
                                Phone
                            </option>

                            <option value="video-call">
                                Video Call
                            </option>
                        </select>

                    </div>

                    {/* Additional Information */}
                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>
                            Share anything that will help us prepare.
                        </p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="message">
                            Notes
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Add any questions, requirements, or additional details..."
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
                        Schedule Appointment
                    </button>

                </form>

            </section>

        </main>
    );
}