import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <main className="container mx-auto">
      <section className="mx-4">
        <h1 className="text-5xl font-black my-6">So, you want to chat? ☕️</h1>
        <p className="text-sm font-normal text-gray-400 mb-4">
          I'm excited about what you have to say – and I promise I'll get back
          to you within 3 business days.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
