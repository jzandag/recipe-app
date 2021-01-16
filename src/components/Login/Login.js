
import React, { Component } from 'react'

class Login extends Component {

    render() {
        return (
        <div className="container mt-3">
            <h2 class="text-center">Register</h2>
            <div>
                <div class="mb-2 input-group">
                    <div class="icon">
                        <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-envelope"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                        />
                        </svg>
                    </div>
                    <input 
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="name@example.com"
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div class="mb-3">
                    <label for="bio" class="form-label">
                        Tell us about you
                    </label>
                    <textarea class="form-control" id="bio" rows="3"></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">
                        Register
                    </button>
                </div>
            </div>
           
        </div>
        )
    }

}

export default Login