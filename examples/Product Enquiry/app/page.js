export default function ProductEnquiryForm() {
    return (
        <main className="product-page">
            <section className="product-card">

                <div className="product-header">
                    <div className="product-icon">?</div>

                    <div>
                        <span className="eyebrow">Product Enquiry</span>
                        <h1>Tell us about the product you need</h1>
                        <p>
                            Have a question about a product? Send us your requirements
                            and our team will get back to you shortly.
                        </p>
                    </div>
                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="product-form"
                >
                    <div className="section-header">
                        <h2>Your information</h2>
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
                        <h2>Product details</h2>
                        <p>Tell us which product you are interested in.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="product_name">
                            Product Name <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="product_name"
                            name="product_name"
                            placeholder="Enter product name"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="product_category">
                                Product Category <span>*</span>
                            </label>
                            <select
                                id="product_category"
                                name="product_category"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select category
                                </option>
                                <option value="electronics">Electronics</option>
                                <option value="software">Software</option>
                                <option value="furniture">Furniture</option>
                                <option value="equipment">Equipment</option>
                                <option value="services">Services</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">
                                Quantity
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                placeholder="1"
                                min="1"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="budget">
                            Estimated Budget
                        </label>
                        <select
                            id="budget"
                            name="budget"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select budget range
                            </option>
                            <option value="under-500">Under $500</option>
                            <option value="500-1000">$500 – $1,000</option>
                            <option value="1000-5000">$1,000 – $5,000</option>
                            <option value="5000-10000">$5,000 – $10,000</option>
                            <option value="10000-plus">$10,000+</option>
                        </select>
                    </div>

                    <div className="section-header section-spacing">
                        <h2>Your enquiry</h2>
                        <p>Share your questions or requirements.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">
                            Subject <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="What would you like to know?"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Message <span>*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your product requirements, questions, or specifications..."
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
                            I confirm that the information provided is accurate
                            and agree to be contacted regarding my product enquiry.
                        </label>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit Enquiry
                    </button>
                </form>
            </section>
        </main>
    );
}
