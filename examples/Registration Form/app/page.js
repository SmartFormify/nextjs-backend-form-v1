export default function RegistrationForm() {
    return (
        <main className="registration-page">
            <h1>Registration Form</h1>
            <div className="registration-card">

                <div className="form-header">

                    <div className="brand-mark">S</div>

                    <h1>Create your account</h1>

                    <p>
                        Sign up to get started with your account.
                    </p>

                </div>

                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="registration-form"
                >

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
                                required
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            Email Address <span>*</span>
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

                    <div className="form-group">
                        <label htmlFor="account_type">
                            Account Type <span>*</span>
                        </label>

                        <select
                            id="account_type"
                            name="account_type"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select account type
                            </option>

                            <option value="personal">
                                Personal
                            </option>

                            <option value="business">
                                Business
                            </option>

                            <option value="organization">
                                Organization
                            </option>
                        </select>
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="password">
                                Password <span>*</span>
                            </label>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a password"
                                minLength="8"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm_password">
                                Confirm Password <span>*</span>
                            </label>

                            <input
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                placeholder="Confirm password"
                                minLength="8"
                                required
                            />
                        </div>

                    </div>

                    <p className="password-hint">
                        Use at least 8 characters for your password.
                    </p>

                    <div className="terms-group">

                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            value="accepted"
                            required
                        />

                        <label htmlFor="terms">
                            I agree to the{" "}
                            <a href="#">Terms of Service</a>
                            {" "}and{" "}
                            <a href="#">Privacy Policy</a>.
                        </label>

                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Create Account
                    </button>

                </form>

                <div className="form-footer">
                    Already have an account?{" "}
                    <a href="#">Sign in</a>
                </div>

            </div>

        </main>
    );
}