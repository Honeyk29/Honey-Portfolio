import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
export const ContactSection = () => {
    const form = useRef();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                "service_i5unqff",       // e.g., "service_123abc"
                "template_didr8kq",      // e.g., "template_xyz"
                form.current,
                "TKn2W-4ExHqHg8DTi"        // e.g., "E5Hsdf7lAsP_LxZ0T"
            )
            .then(
                () => {
                    toast({
                        title: "Message sent!",
                        description: "Thank you for your message. I'll get back to you soon.",
                    });
                    setIsSubmitting(false);
                    form.current.reset(); // optional: clears the form
                },
                (error) => {
                    toast({
                        title: "Failed to send message",
                        description: "Please try again later.",
                        variant: "destructive",
                    });
                    setIsSubmitting(false);
                    console.error(error.text);
                }
            );
        // e.preventDefault();

        // setIsSubmitting(true);

        // setTimeout(() => {
        //     toast({
        //         title: "Message sent!",
        //         description: "Thank you for your message. I'll get back to you soon.",
        //     });
        //     setIsSubmitting(false);
        // }, 1500);
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 text-left">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium "> Email</h4>
                                    <a
                                        href="mailto:honeyk.parashar@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        honeyk.parashar@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+917870528707"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 7870528707
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Patna, Bihar
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/honeykumarparashar" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://x.com/HoneyK29" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="https://www.instagram.com/honeykr110" target="_blank">
                                    <Instagram />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Email"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="cosmic-button w-full flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4l4-4-4-4v4a12 12 0 00-8 12h4z"
                                            ></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};