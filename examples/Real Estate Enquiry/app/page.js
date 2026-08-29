export default function RealEstateEnquiryForm() {
    return (
        <main className="real-estate-page">
            <section className="real-estate-card">
                <div className="real-estate-header">
                    <div className="real-estate-icon">⌂</div>
                    <div>
                        <span className="eyebrow">Real Estate</span>
                        <h1>Find your next property</h1>
                        <p>Tell us what you are looking for and our team will get in touch with you shortly.</p>
                    </div>
                </div>

                <form action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT} method="POST" className="real-estate-form">
                    <div className="section-header">
                        <h2>Your information</h2>
                        <p>Tell us how we can contact you.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name <span>*</span></label>
                            <input type="text" id="first_name" name="first_name" placeholder="John" autoComplete="given-name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name <span>*</span></label>
                            <input type="text" id="last_name" name="last_name" placeholder="Doe" autoComplete="family-name" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email Address <span>*</span></label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" autoComplete="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" autoComplete="tel" />
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Property requirements</h2>
                        <p>Tell us about the property you are interested in.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="property_type">Property Type <span>*</span></label>
                            <select id="property_type" name="property_type" defaultValue="" required>
                                <option value="" disabled>Select property type</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="villa">Villa</option>
                                <option value="condo">Condo</option>
                                <option value="townhouse">Townhouse</option>
                                <option value="commercial">Commercial Property</option>
                                <option value="land">Land</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="listing_type">Looking For <span>*</span></label>
                            <select id="listing_type" name="listing_type" defaultValue="" required>
                                <option value="" disabled>Select an option</option>
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>
                                <option value="lease">Lease</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Preferred Location <span>*</span></label>
                        <input type="text" id="location" name="location" placeholder="City, neighborhood, or area" required />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="budget">Budget Range</label>
                            <select id="budget" name="budget" defaultValue="">
                                <option value="" disabled>Select budget range</option>
                                <option value="under-250k">Under $250,000</option>
                                <option value="250k-500k">$250,000 – $500,000</option>
                                <option value="500k-1m">$500,000 – $1,000,000</option>
                                <option value="1m-2m">$1,000,000 – $2,000,000</option>
                                <option value="2m-plus">$2,000,000+</option>
                                <option value="not-sure">Not sure yet</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bedrooms">Bedrooms</label>
                            <select id="bedrooms" name="bedrooms" defaultValue="">
                                <option value="" disabled>Select bedrooms</option>
                                <option value="studio">Studio</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5-plus">5+</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="timeline">Preferred Move-in / Purchase Timeline</label>
                        <select id="timeline" name="timeline" defaultValue="">
                            <option value="" disabled>Select timeline</option>
                            <option value="asap">As soon as possible</option>
                            <option value="1-3-months">Within 1–3 months</option>
                            <option value="3-6-months">Within 3–6 months</option>
                            <option value="6-plus-months">6+ months</option>
                            <option value="flexible">Flexible</option>
                        </select>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>Share anything else that will help us find the right property.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message / Requirements</label>
                        <textarea id="message" name="message" placeholder="Tell us about your requirements, preferred features, or any questions..."></textarea>
                    </div>

                    <div className="consent-group">
                        <input type="checkbox" id="consent" name="consent" value="accepted" required />
                        <label htmlFor="consent">I agree to be contacted regarding my real estate enquiry and understand that my information will be used to respond to my request.</label>
                    </div>

                    <button type="submit" className="submit-button">Submit Enquiry</button>
                </form>
            </section>
        </main>
    );
}
