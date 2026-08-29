export default function BugReportForm() {
    return (
        <main className="bug-page">
            <section className="bug-card">

                <div className="bug-header">
                    <div className="bug-icon">!</div>

                    <div>
                        <span className="eyebrow">Bug Report</span>
                        <h1>Report a bug</h1>
                        <p>
                            Help us improve by telling us about the problem you
                            encountered. Our team will review your report.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="bug-form"
                >
                    <div className="section-header">
                        <h2>Your information</h2>
                        <p>Optional details so we can contact you about the issue.</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                autoComplete="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                autoComplete="email"
                            />
                        </div>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Bug details</h2>
                        <p>Provide information that will help us reproduce the problem.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">
                            Bug Title <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Briefly describe the bug"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="severity">
                                Severity <span>*</span>
                            </label>
                            <select
                                id="severity"
                                name="severity"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select severity
                                </option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">
                                Category <span>*</span>
                            </label>
                            <select
                                id="category"
                                name="category"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select category
                                </option>
                                <option value="ui">User Interface</option>
                                <option value="functionality">Functionality</option>
                                <option value="performance">Performance</option>
                                <option value="login">Login / Account</option>
                                <option value="payment">Payment / Billing</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="page_url">
                            Page / URL
                        </label>
                        <input
                            type="url"
                            id="page_url"
                            name="page_url"
                            placeholder="https://example.com/page"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="browser">
                            Browser / Device
                        </label>
                        <input
                            type="text"
                            id="browser"
                            name="browser"
                            placeholder="Chrome on Windows"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="steps">
                            Steps to Reproduce <span>*</span>
                        </label>
                        <textarea
                            id="steps"
                            name="steps"
                            placeholder="List the steps required to reproduce the problem..."
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">
                            Bug Description <span>*</span>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Describe what happened and what you expected to happen..."
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="additional_info">
                            Additional Information
                        </label>
                        <textarea
                            id="additional_info"
                            name="additional_info"
                            placeholder="Add any other information that may help our team..."
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
                            and agree to be contacted regarding this bug report.
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit Bug Report
                    </button>
                </form>
            </section>
        </main>
    );
}
