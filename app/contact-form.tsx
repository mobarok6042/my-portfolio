"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

const EMAILJS_SERVICE_ID = "service_6t6thys";
const EMAILJS_TEMPLATE_ID = "template_llepcdc";
const EMAILJS_PUBLIC_KEY = "WPWFKNXHUDpN0Khhg";
const RECIPIENT_EMAIL = "mhossen0102@gmail.com";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    setIsSending(true);
    setStatus("");
    setHasError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: RECIPIENT_EMAIL,
          from_name: name,
          reply_to: email,
          message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("Thanks! Your message has been sent.");
      form.reset();
    } catch (error) {
      console.error("EmailJS could not send the portfolio message.", error);
      setHasError(true);
      setStatus(
        "Your message could not be sent. Please try again or email me directly.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Your email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <button type="submit" disabled={isSending}>
        {isSending ? "Sending…" : "Send message"}
      </button>
      {status && (
        <p className={hasError ? "form-status error" : "form-status"} role={hasError ? "alert" : "status"}>
          {status}
        </p>
      )}
    </form>
  );
}
