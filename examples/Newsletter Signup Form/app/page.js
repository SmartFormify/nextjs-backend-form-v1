export default function NewsletterSignup() {
    return (
        <main className="newsletter-page">

            <section className="newsletter-card">

                <div className="newsletter-icon">
                    ✉
                </div>

                <div className="newsletter-content">

                    <span className="eyebrow">
                        Stay in the loop
                    </span>

                    <h1>
                        Get the latest updates
                    </h1>

                    <p>
                        Subscribe to our newsletter for product updates,
                        useful insights, and news delivered straight to your inbox.
                    </p>

                    <form
                        action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                        method="POST"
                        className="newsletter-form"
                    >

                        <div className="form-group">

                            <label htmlFor="email">
                                Email Address <span>*</span>
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                autoComplete="name"
                            />

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
                                I agree to receive newsletters and updates.
                            </label>

                        </div>

                        <button
                            type="submit"
                            className="subscribe-button"
                        >
                            Subscribe to Newsletter
                        </button>

                    </form>

                    <p className="privacy-note">
                        You can unsubscribe at any time. We respect your privacy.
                    </p>

                </div>

            </section>

        </main>
    );
}