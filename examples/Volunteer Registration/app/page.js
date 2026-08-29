export default function VolunteerRegistrationForm() {
    return (
        <main className="volunteer-page">
            <section className="volunteer-card">
                <div className="volunteer-header">
                    <div className="volunteer-icon">♥</div>
                    <div>
                        <span className="eyebrow">Volunteer Registration</span>
                        <h1>Join our volunteer team</h1>
                        <p>Tell us about yourself, your interests, and how you would like to contribute.</p>
                    </div>
                </div>

                <form action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT} method="POST" className="volunteer-form">
                    <div className="section-header">
                        <h2>Personal information</h2>
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
                            <label htmlFor="phone">Phone Number <span>*</span></label>
                            <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" autoComplete="tel" required />
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Volunteer details</h2>
                        <p>Tell us how you would like to help.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="interest">Area of Interest <span>*</span></label>
                        <select id="interest" name="interest" defaultValue="" required>
                            <option value="" disabled>Select an area</option>
                            <option value="community-outreach">Community Outreach</option>
                            <option value="events">Events & Activities</option>
                            <option value="fundraising">Fundraising</option>
                            <option value="education">Education & Training</option>
                            <option value="administration">Administration</option>
                            <option value="marketing">Marketing & Communications</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="availability">Availability <span>*</span></label>
                            <select id="availability" name="availability" defaultValue="" required>
                                <option value="" disabled>Select availability</option>
                                <option value="weekdays">Weekdays</option>
                                <option value="weekends">Weekends</option>
                                <option value="evenings">Evenings</option>
                                <option value="flexible">Flexible</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hours">Preferred Hours</label>
                            <select id="hours" name="hours" defaultValue="">
                                <option value="" disabled>Select hours</option>
                                <option value="1-5">1–5 hours per week</option>
                                <option value="6-10">6–10 hours per week</option>
                                <option value="11-20">11–20 hours per week</option>
                                <option value="20-plus">20+ hours per week</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="experience">Previous Volunteer Experience</label>
                        <textarea id="experience" name="experience" placeholder="Tell us about any previous volunteer work or relevant experience..."></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="skills">Skills / Interests</label>
                        <textarea id="skills" name="skills" placeholder="Tell us about your skills, interests, or anything you would like to contribute..."></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Additional Notes</label>
                        <textarea id="message" name="message" placeholder="Add any questions, requirements, or additional information..."></textarea>
                    </div>

                    <div className="consent-group">
                        <input type="checkbox" id="consent" name="consent" value="accepted" required />
                        <label htmlFor="consent">I confirm that the information provided is accurate and agree to be contacted regarding volunteer opportunities.</label>
                    </div>

                    <button type="submit" className="submit-button">Register as a Volunteer</button>
                </form>
            </section>
        </main>
    );
}
