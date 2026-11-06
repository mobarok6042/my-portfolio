"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

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
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const recipientEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL;

    if (!serviceId || !templateId || !publicKey || !recipientEmail) {
      setHasError(true);
      setStatus(
        "Email is not configured yet. Please email me directly instead.",
      );
      return;
    }

    setIsSending(true);
    setStatus("");
    setHasError(false);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: recipientEmail,
          from_name: name,
          reply_to: email,
          message,
        },
        publicKey,
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
