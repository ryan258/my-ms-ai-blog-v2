import type { Metadata } from 'next';
import Link from 'next/link';

// Metadata for the Contact page
export const metadata: Metadata = {
  title: "Contact Ryan - My MS & AI Journey",
  description: "Get in touch with Ryan for general inquiries or to discuss personalized consultations on AI, accessibility, and automation for living with MS.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl prose lg:prose-lg xl:prose-xl dark:prose-invert">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
        Get In Touch
      </h1>

      <p className="mb-4">
        I&apos;m always open to connecting with readers, fellow individuals navigating life with disabilities, and anyone interested in the intersection of AI and accessibility. Whether you have a question, a suggestion, or just want to share your own experiences, I&apos;d love to hear from you.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">General Inquiries</h2>
      <p className="mb-4">
        For general questions, feedback, or collaborations, the best way to reach me is via email:
      </p>
      <p className="mb-6">
        <a
          href="mailto:ryanleejwebdev@gmail.com" // IMPORTANT: Replace with your actual email address
          className="text-blue-600 hover:underline font-medium text-lg dark:text-blue-400"
        >
          Send me an Email
        </a>
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Personalized Consultations</h2>
      <p className="mb-4">
        If you&apos;re looking for dedicated, one-on-one attention to explore how AI and automation could specifically help you or someone you care for, I offer limited personal consultations. This is an opportunity to dive deep into your unique challenges and brainstorm tailored &quot;smart way&quot; solutions. {/* Fixed: "smart way" -> &quot;smart way&quot; */}
      </p>
      <p className="mb-6">
        To inquire about booking a consultation, please send me an email with a brief outline of what you&apos;d like to discuss. I&apos;ll get back to you to explore the possibilities.
      </p>
      <p>
        <a
          href="mailto:consultation.email@example.com?subject=Consultation Inquiry from My MS & AI Journey Blog" // IMPORTANT: Replace with your actual email address
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300 shadow-lg"
        >
          Inquire About a Consultation
        </a>
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Connect on Social Media</h2>
      <p className="mb-4">
        For public discussions, quick tips, and broader engagement, you can also find me on:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <Link href="https://www.linkedin.com/in/ryanleejohnson/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
            LinkedIn
          </Link> (Remember to replace with your actual profile URL!)
        </li>
        <li>
          <Link href="https://x.com/ryandotdev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
            X (Twitter)
          </Link> (Remember to replace with your actual handle!)
        </li>
        <li>
          Participate in <Link href="https://www.reddit.com/r/MultipleSclerosis/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">MS Reddit groups</Link> and web accessibility discussions.
        </li>
      </ul>
    </div>
  );
}
