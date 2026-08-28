export default function RestaurantReservationForm() {
    return (
        <main className="reservation-page">

            <section className="reservation-card">

                {/* Header */}
                <div className="reservation-header">

                    <div className="reservation-icon">
                        🍽
                    </div>

                    <div>
                        <span className="eyebrow">
                            Restaurant Reservation
                        </span>

                        <h1>Reserve your table</h1>

                        <p>
                            Choose your preferred date, time, and number of guests.
                            We'll confirm your reservation shortly.
                        </p>
                    </div>

                </div>

                {/* Reservation Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="reservation-form"
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

                    {/* Reservation Details */}
                    <div className="section-header section-spacing">
                        <h2>Reservation details</h2>
                        <p>
                            Select your preferred date, time, and table size.
                        </p>
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="reservation_date">
                                Date <span>*</span>
                            </label>

                            <input
                                type="date"
                                id="reservation_date"
                                name="reservation_date"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="reservation_time">
                                Preferred Time <span>*</span>
                            </label>

                            <select
                                id="reservation_time"
                                name="reservation_time"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select a time
                                </option>

                                <option value="17:00">5:00 PM</option>
                                <option value="17:30">5:30 PM</option>
                                <option value="18:00">6:00 PM</option>
                                <option value="18:30">6:30 PM</option>
                                <option value="19:00">7:00 PM</option>
                                <option value="19:30">7:30 PM</option>
                                <option value="20:00">8:00 PM</option>
                                <option value="20:30">8:30 PM</option>
                                <option value="21:00">9:00 PM</option>
                            </select>
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="guests">
                                Number of Guests <span>*</span>
                            </label>

                            <select
                                id="guests"
                                name="guests"
                                defaultValue="2"
                                required
                            >
                                <option value="1">1 guest</option>
                                <option value="2">2 guests</option>
                                <option value="3">3 guests</option>
                                <option value="4">4 guests</option>
                                <option value="5">5 guests</option>
                                <option value="6">6 guests</option>
                                <option value="7">7 guests</option>
                                <option value="8">8 guests</option>
                                <option value="9-plus">9+ guests</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="seating_preference">
                                Seating Preference
                            </label>

                            <select
                                id="seating_preference"
                                name="seating_preference"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select preference
                                </option>

                                <option value="indoor">
                                    Indoor
                                </option>

                                <option value="outdoor">
                                    Outdoor
                                </option>

                                <option value="bar">
                                    Bar Seating
                                </option>

                                <option value="no-preference">
                                    No Preference
                                </option>
                            </select>
                        </div>

                    </div>

                    {/* Additional Information */}
                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>
                            Let us know about any special requests.
                        </p>
                    </div>

                    <div className="form-group">

                        <label htmlFor="occasion">
                            Special Occasion
                        </label>

                        <select
                            id="occasion"
                            name="occasion"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select an occasion
                            </option>

                            <option value="birthday">
                                Birthday
                            </option>

                            <option value="anniversary">
                                Anniversary
                            </option>

                            <option value="business">
                                Business Meal
                            </option>

                            <option value="date">
                                Date Night
                            </option>

                            <option value="celebration">
                                Celebration
                            </option>

                            <option value="none">
                                No Special Occasion
                            </option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label htmlFor="message">
                            Special Requests
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about dietary requirements, accessibility needs, or any other requests..."
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
                            and agree to be contacted regarding this reservation.
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Request Reservation
                    </button>

                </form>

            </section>

        </main>
    );
}