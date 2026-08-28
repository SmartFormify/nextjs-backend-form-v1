"use client";

import { useState } from "react";

export default function JobApplicationForm() {
    const [fileName, setFileName] = useState("");
    const [fileError, setFileError] = useState("");

    const handleResumeChange = (event) => {
        const file = event.target.files?.[0];

        setFileError("");
        setFileName("");

        if (!file) {
            return;
        }

        const maxSize = 10 * 1024 * 1024;

        if (file.size > maxSize) {
            setFileError("File is larger than 10 MB.");
            event.target.value = "";
            return;
        }

        setFileName(`Selected: ${file.name}`);
    };

    return (
        <main className="application-page">

            <section className="application-card">

                {/* Header */}
                <div className="form-header">

                    <div className="brand-mark">
                        J
                    </div>

                    <div>
                        <span className="eyebrow">
                            Careers
                        </span>

                        <h1>
                            Join our team
                        </h1>

                        <p>
                            Tell us about yourself and the role you're interested in.
                            We'll review your application and get back to you.
                        </p>
                    </div>

                </div>

                {/* Application Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    encType="multipart/form-data"
                    className="application-form"
                >

                    {/* Personal Information */}
                    <div className="section-header">
                        <h2>Personal information</h2>
                        <p>Basic information about you.</p>
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

                    {/* Position */}
                    <div className="section-header section-spacing">
                        <h2>Position details</h2>
                        <p>Tell us which opportunity you're applying for.</p>
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="position">
                                Position <span>*</span>
                            </label>

                            <select
                                id="position"
                                name="position"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select a position
                                </option>

                                <option value="frontend-developer">
                                    Frontend Developer
                                </option>

                                <option value="backend-developer">
                                    Backend Developer
                                </option>

                                <option value="full-stack-developer">
                                    Full Stack Developer
                                </option>

                                <option value="ui-ux-designer">
                                    UI/UX Designer
                                </option>

                                <option value="project-manager">
                                    Project Manager
                                </option>

                                <option value="marketing-specialist">
                                    Marketing Specialist
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="experience">
                                Experience <span>*</span>
                            </label>

                            <select
                                id="experience"
                                name="experience"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select experience
                                </option>

                                <option value="0-1">
                                    0–1 years
                                </option>

                                <option value="2-3">
                                    2–3 years
                                </option>

                                <option value="4-6">
                                    4–6 years
                                </option>

                                <option value="7-10">
                                    7–10 years
                                </option>

                                <option value="10-plus">
                                    10+ years
                                </option>
                            </select>
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="portfolio">
                            Portfolio / LinkedIn URL
                        </label>

                        <input
                            type="url"
                            id="portfolio"
                            name="portfolio"
                            placeholder="https://linkedin.com/in/yourname"
                        />
                    </div>

                    {/* Cover Letter */}
                    <div className="section-header section-spacing">
                        <h2>About your application</h2>
                        <p>
                            Share a little more about your experience and interest.
                        </p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cover_letter">
                            Cover Letter <span>*</span>
                        </label>

                        <textarea
                            id="cover_letter"
                            name="cover_letter"
                            placeholder="Tell us why you're interested in this position..."
                            required
                        ></textarea>
                    </div>

                    {/* Resume */}
                    <div className="form-group">

                        <label htmlFor="resume">
                            Resume / CV <span>*</span>
                        </label>

                        <div className="file-upload">

                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleResumeChange}
                                required
                            />

                            <div className="upload-icon">
                                ↑
                            </div>

                            <div className="upload-title">
                                Upload your resume
                            </div>

                            <div className="upload-text">
                                PDF, DOC or DOCX · Maximum 10 MB
                            </div>

                            {fileName && (
                                <div id="file-name">
                                    {fileName}
                                </div>
                            )}

                            {fileError && (
                                <div id="file-name" className="file-error">
                                    {fileError}
                                </div>
                            )}

                        </div>

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
                            I confirm that the information provided in this
                            application is accurate and may be used for
                            recruitment purposes.
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Submit Application
                    </button>

                </form>

            </section>

        </main>
    );
}