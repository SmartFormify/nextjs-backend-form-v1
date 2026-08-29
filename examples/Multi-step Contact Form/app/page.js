"use client";

import { useState } from "react";

export default function MultiStepContactForm() {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const previousStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <main className="contact-page">
            <section className="contact-card">
                <div className="contact-header">
                    <div className="contact-icon">S</div>
                    <div>
                        <span className="eyebrow">Get In Touch</span>
                        <h1>Let's start a conversation</h1>
                        <p>
                            Complete the steps below and send us your enquiry.
                            Our team will get back to you shortly.
                        </p>
                    </div>
                </div>

                <div className="progress">
                    <div className={step >= 1 ? "progress-step active" : "progress-step"}>
                        <span>1</span>
                        <small>Contact</small>
                    </div>
                    <div className={step >= 2 ? "progress-line active" : "progress-line"} />
                    <div className={step >= 2 ? "progress-step active" : "progress-step"}>
                        <span>2</span>
                        <small>Details</small>
                    </div>
                    <div className={step >= 3 ? "progress-line active" : "progress-line"} />
                    <div className={step >= 3 ? "progress-step active" : "progress-step"}>
                        <span>3</span>
                        <small>Message</small>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="contact-form"
                >
                    {step === 1 && (
                        <div>
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

                            <button type="button" className="submit-button" onClick={nextStep}>
                                Continue
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <div className="section-header">
                                <h2>Contact details</h2>
                                <p>Tell us more about your enquiry.</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company / Organization</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Your company"
                                    autoComplete="organization"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">
                                    Subject <span>*</span>
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
                                <label htmlFor="contact_reason">
                                    Reason for Contact <span>*</span>
                                </label>
                                <select
                                    id="contact_reason"
                                    name="contact_reason"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>
                                        Select a reason
                                    </option>
                                    <option value="general">General Enquiry</option>
                                    <option value="sales">Sales</option>
                                    <option value="support">Support</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="button-row">
                                <button type="button" className="secondary-button" onClick={previousStep}>
                                    Back
                                </button>
                                <button type="button" className="submit-button" onClick={nextStep}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <div className="section-header">
                                <h2>Your message</h2>
                                <p>Share the details of your enquiry.</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    Message <span>*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us a little more about your request..."
                                    required
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
                                    I agree to the processing of my information
                                    for the purpose of responding to my request.
                                </label>
                            </div>

                            <div className="button-row">
                                <button type="button" className="secondary-button" onClick={previousStep}>
                                    Back
                                </button>
                                <button type="submit" className="submit-button">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </section>
        </main>
    );
}
