import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <main className="container mx-auto flex flex-col tablet:w-96 tablet:justify-center tablet:items-center">
      <section className="mx-12 tablet:mx-0">
        <h1 className="text-5xl font-black my-6">So, you want to chat? ☕️</h1>
        <p className="text-sm font-normal text-gray-400 mb-4">
          I'm excited about what you have to say – and I promise I'll get back
          to you within 3 business days.
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
