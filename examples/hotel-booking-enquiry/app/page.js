export default function HotelBookingEnquiryForm() {
    return (
        <main className="hotel-page">
            <section className="hotel-card">

                <div className="hotel-header">
                    <div className="hotel-icon">⌂</div>
                    <div>
                        <span className="eyebrow">Hotel Booking Enquiry</span>
                        <h1>Plan your stay</h1>
                        <p>
                            Tell us about your preferred stay and requirements.
                            Our team will get back to you with availability and details.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="hotel-form"
                >
                    <div className="section-header">
                        <h2>Your information</h2>
                        <p>Tell us how we can contact you.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name <span>*</span></label>
                            <input type="text" id="first_name" name="first_name"
                                placeholder="John" autoComplete="given-name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name <span>*</span></label>
                            <input type="text" id="last_name" name="last_name"
                                placeholder="Doe" autoComplete="family-name" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email Address <span>*</span></label>
                            <input type="email" id="email" name="email"
                                placeholder="john@example.com" autoComplete="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number <span>*</span></label>
                            <input type="tel" id="phone" name="phone"
                                placeholder="+1 (555) 123-4567" autoComplete="tel" required />
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Stay details</h2>
                        <p>Select your preferred dates and room requirements.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="check_in">Check-in Date <span>*</span></label>
                            <input type="date" id="check_in" name="check_in" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="check_out">Check-out Date <span>*</span></label>
                            <input type="date" id="check_out" name="check_out" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="guests">Number of Guests <span>*</span></label>
                            <select id="guests" name="guests" defaultValue="1" required>
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
                            <label htmlFor="rooms">Number of Rooms</label>
                            <select id="rooms" name="rooms" defaultValue="1">
                                <option value="1">1 room</option>
                                <option value="2">2 rooms</option>
                                <option value="3">3 rooms</option>
                                <option value="4">4 rooms</option>
                                <option value="5">5 rooms</option>
                                <option value="6-plus">6+ rooms</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="room_type">Preferred Room Type</label>
                        <select id="room_type" name="room_type" defaultValue="">
                            <option value="" disabled>Select room type</option>
                            <option value="standard">Standard Room</option>
                            <option value="deluxe">Deluxe Room</option>
                            <option value="suite">Suite</option>
                            <option value="family">Family Room</option>
                            <option value="no-preference">No Preference</option>
                        </select>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>Share any special requirements for your stay.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Special Requests</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about dietary requirements, accessibility needs, preferred room location, or any other requests..."
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
                            and agree to be contacted regarding this booking enquiry.
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        Send Booking Enquiry
                    </button>
                </form>
            </section>
        </main>
    );
}
