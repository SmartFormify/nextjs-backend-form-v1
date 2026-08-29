export default function SchoolAdmissionForm() {
    return (
        <main className="admission-page">
            <section className="admission-card">
                <div className="admission-header">
                    <div className="admission-icon">S</div>
                    <div>
                        <span className="eyebrow">School Admissions</span>
                        <h1>Apply for admission</h1>
                        <p>Complete the form below to submit a student admission enquiry.</p>
                    </div>
                </div>

                <form action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT} method="POST" className="admission-form">
                    <div className="section-header">
                        <h2>Student information</h2>
                        <p>Provide the student&apos;s basic information.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name <span>*</span></label>
                            <input type="text" id="first_name" name="first_name" placeholder="John" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name <span>*</span></label>
                            <input type="text" id="last_name" name="last_name" placeholder="Doe" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="date_of_birth">Date of Birth <span>*</span></label>
                            <input type="date" id="date_of_birth" name="date_of_birth" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender" name="gender" defaultValue="">
                                <option value="" disabled>Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Admission details</h2>
                        <p>Select the class and academic year.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="grade">Grade / Class <span>*</span></label>
                            <select id="grade" name="grade" defaultValue="" required>
                                <option value="" disabled>Select grade / class</option>
                                <option value="pre-primary">Pre-Primary</option>
                                <option value="kindergarten">Kindergarten</option>
                                <option value="grade-1">Grade 1</option>
                                <option value="grade-2">Grade 2</option>
                                <option value="grade-3">Grade 3</option>
                                <option value="grade-4">Grade 4</option>
                                <option value="grade-5">Grade 5</option>
                                <option value="grade-6">Grade 6</option>
                                <option value="grade-7">Grade 7</option>
                                <option value="grade-8">Grade 8</option>
                                <option value="grade-9">Grade 9</option>
                                <option value="grade-10">Grade 10</option>
                                <option value="grade-11">Grade 11</option>
                                <option value="grade-12">Grade 12</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="academic_year">Academic Year <span>*</span></label>
                            <select id="academic_year" name="academic_year" defaultValue="" required>
                                <option value="" disabled>Select academic year</option>
                                <option value="2026-27">2026–27</option>
                                <option value="2027-28">2027–28</option>
                                <option value="2028-29">2028–29</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="previous_school">Previous School</label>
                        <input type="text" id="previous_school" name="previous_school" placeholder="Name of previous school" />
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Parent / guardian information</h2>
                        <p>Provide the primary contact details.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="parent_name">Parent / Guardian Name <span>*</span></label>
                            <input type="text" id="parent_name" name="parent_name" placeholder="Jane Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="relationship">Relationship <span>*</span></label>
                            <select id="relationship" name="relationship" defaultValue="" required>
                                <option value="" disabled>Select relationship</option>
                                <option value="parent">Parent</option>
                                <option value="guardian">Guardian</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email Address <span>*</span></label>
                            <input type="email" id="email" name="email" placeholder="parent@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number <span>*</span></label>
                            <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea id="address" name="address" placeholder="Enter your residential address..."></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Additional Information</label>
                        <textarea id="message" name="message" placeholder="Share any questions or additional information..."></textarea>
                    </div>

                    <div className="consent-group">
                        <input type="checkbox" id="consent" name="consent" value="accepted" required />
                        <label htmlFor="consent">I confirm that the information provided is accurate and agree to be contacted regarding this admission enquiry.</label>
                    </div>

                    <button type="submit" className="submit-button">Submit Admission Enquiry</button>
                </form>
            </section>
        </main>
    );
}
