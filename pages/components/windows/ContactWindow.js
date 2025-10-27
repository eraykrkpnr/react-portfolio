// windows/ContactWindow.js
import React, { useState } from "react";

function ContactWindow() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label className="block text-sm font-semibold text-orange-300 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-orange-700/50 rounded text-white text-sm focus:outline-none focus:border-orange-500"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-orange-300 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-orange-700/50 rounded text-white text-sm focus:outline-none focus:border-orange-500"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-orange-300 mb-1">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-orange-700/50 rounded text-white text-sm focus:outline-none focus:border-orange-500 resize-none h-20"
                        placeholder="Your message"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded transition-all"
                >
                    Send Message
                </button>
            </form>

            <div className="pt-3 border-t border-gray-700 space-y-2">
                <p className="text-sm text-gray-400">
                    📧 contact@example.com
                </p>
                <p className="text-sm text-gray-400">
                    🔗 linkedin.com/in/yourprofile
                </p>
                <p className="text-sm text-gray-400">
                    💼 github.com/yourprofile
                </p>
            </div>
        </div>
    );
}

export default ContactWindow;
