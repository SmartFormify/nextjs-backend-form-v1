export default function ContactForm() {
    return (
        <main className="page-container">
             <h1>Contact Us</h1>
            <div className="contact-container">

                {/* Contact Information */}
                <div className="contact-info">
                    <div>
                        <h1>Let's start a conversation.</h1>

                        <p>
                            Have a question, project idea, or need assistance?
                            Send us a message and our team will get back to you.
                        </p>

                        <div className="contact-details">

                            <div className="contact-detail">
                                <div className="contact-icon">✉</div>

                                <div>
                                    <strong>Email</strong>
                                    <span>hello@example.com</span>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-icon">☎</div>

                                <div>
                                    <strong>Phone</strong>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                            </div>

                            <div className="contact-detail">
                                <div className="contact-icon">⌖</div>

                                <div>
                                    <strong>Office</strong>
                                    <span>123 Business Street, New York</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form">

                    <div className="form-header">
                        <h2>Send us a message</h2>

                        <p>
                            Fill in the details below and we'll be in touch shortly.
                        </p>
                    </div>

                    <form
                        action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                        method="POST"
                        encType="multipart/form-data"
                    >

                        <div className="form-row">

                            <div className="form-group">
                                <label htmlFor="first_name">
                                    First Name <span className="required">*</span>
                                </label>

                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    placeholder="John"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">
                                    Last Name <span className="required">*</span>
                                </label>

                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    placeholder="Doe"
                                    required
                                />
                            </div>

                        </div>

                        <div className="form-row">

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email Address <span className="required">*</span>
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
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
                                />
                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">
                                Subject <span className="required">*</span>
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="How can we help?"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                Message <span className="required">*</span>
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us a little more about your request..."
                                required
                            ></textarea>
                        </div>

                        {/* File Upload */}
                        <div className="form-group">
                            <label htmlFor="attachment">
                                Attachment
                            </label>

                            <div className="file-upload">

                                <input
                                    type="file"
                                    id="attachment"
                                    name="attachment"
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                />

                                <div className="upload-icon">↑</div>

                                <div className="upload-title">
                                    Click to upload a file
                                </div>

                                <div className="upload-text">
                                    PDF, DOC, DOCX, JPG or PNG · Max 10 MB
                                </div>

                            </div>
                        </div>

                        <div className="checkbox-group">

                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                value="yes"
                                required
                            />

                            <label htmlFor="consent">
                                I agree to the processing of my information
                                for the purpose of responding to my request.
                            </label>

                        </div>

                        <button
                            type="submit"
                            className="submit-button"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
        </main>
    );
}