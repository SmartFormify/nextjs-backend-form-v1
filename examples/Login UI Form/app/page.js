export default function LoginForm() {
    return (
        <main className="login-page">
             <h1>Login Form</h1>
            <div className="login-card">

                {/* Header */}
                <div className="login-header">

                    <div className="brand-mark">
                        S
                    </div>

                    <h1>Welcome back</h1>

                    <p>
                        Sign in to continue to your account.
                    </p>

                </div>

                {/* Login Form */}
                <form
                    action={process.env.NEXT_PUBLIC_SMARTFORMIFY_ENDPOINT}
                    method="POST"
                    className="login-form"
                >

                    {/* Email */}
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

                    {/* Password */}
                    <div className="form-group">

                        <div className="password-label">

                            <label htmlFor="password">
                                Password <span>*</span>
                            </label>

                            <a href="#">
                                Forgot password?
                            </a>

                        </div>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            required
                        />

                    </div>

                    {/* Remember Me */}
                    <div className="remember-group">

                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            value="yes"
                        />

                        <label htmlFor="remember">
                            Remember me
                        </label>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="login-button"
                    >
                        Sign In
                    </button>

                </form>

                {/* Register */}
                <div className="login-footer">

                    <span>Don't have an account?</span>

                    <a href="#">
                        Create an account
                    </a>

                </div>

            </div>

        </main>
    );
}