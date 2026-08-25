export default function ContactForm() {
    return (
        <main className="form-container">

            <h1>Contact Us</h1>

            <form
                action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                method="POST"
            >
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>

                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>

                    <textarea
                        id="message"
                        name="message"
                        required
                    ></textarea>
                </div>

                <button type="submit">
                    Send Message
                </button>
            </form>

        </main>
    );
}