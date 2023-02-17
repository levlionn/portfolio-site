import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <main className="container h-screen mx-auto flex flex-col justify-center items-center">
      <section className="mx-12 tablet:mx-32 laptop:mx-80 desktop:w-96">
        <h1 className="text-5xl font-black mb-4">So, you want to chat? ☕️</h1>
        <p className="text-sm font-normal text-gray-400 mb-6">
          I'm excited about what you have to say – and I promise I'll get back
          to you within 3 business days.
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
