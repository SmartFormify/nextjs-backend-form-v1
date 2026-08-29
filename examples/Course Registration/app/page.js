export default function CourseRegistrationForm() {
    return (
        <main className="course-page">
            <section className="course-card">

                <div className="course-header">
                    <div className="course-icon">✓</div>

                    <div>
                        <span className="eyebrow">Course Registration</span>

                        <h1>Register for a course</h1>

                        <p>
                            Choose your course and provide your details.
                            We&apos;ll confirm your registration shortly.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="course-form"
                >
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
                        <h2>Course details</h2>
                        <p>Select the course and preferred learning option.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="course">
                            Course <span>*</span>
                        </label>

                        <select
                            id="course"
                            name="course"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select a course
                            </option>

                            <option value="web-development">
                                Web Development
                            </option>

                            <option value="data-science">
                                Data Science
                            </option>

                            <option value="digital-marketing">
                                Digital Marketing
                            </option>

                            <option value="ui-ux-design">
                                UI/UX Design
                            </option>

                            <option value="business-management">
                                Business Management
                            </option>

                            <option value="other">
                                Other
                            </option>
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="learning_mode">
                                Learning Mode <span>*</span>
                            </label>

                            <select
                                id="learning_mode"
                                name="learning_mode"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select learning mode
                                </option>

                                <option value="online">Online</option>
                                <option value="in-person">In Person</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="start_date">
                                Preferred Start Date
                            </label>

                            <input
                                type="date"
                                id="start_date"
                                name="start_date"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="experience">
                            Experience Level <span>*</span>
                        </label>

                        <select
                            id="experience"
                            name="experience"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select experience level
                            </option>

                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Additional information</h2>
                        <p>Share anything that will help us process your registration.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="organization">
                            Company / Organization
                        </label>

                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            placeholder="Your company or organization"
                            autoComplete="organization"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Notes</label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Add any questions or additional information..."
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
                            and agree to be contacted regarding this course registration.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Register for Course
                    </button>
                </form>
            </section>
        </main>
    );
}
