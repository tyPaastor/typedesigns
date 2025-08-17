import Container from "@/app/_components/container";
import Header from "../_components/header";
import BackButton from "@/app/_components/back-button";
import JobRequestForm from "@/app/_components/contact-form";

export default function JobRequestPage() {
  return (
    <main>
      <Container>
        <Header />
        <article className="px-4 py-16">
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-md">
              <h1 className="text-4xl mb-6">
                Send in your job request,
                <br />
                get a fast reply.
              </h1>

              {/* short intro to keep parity with contact page tone/spacing */}
              <div className="text-sm/6 tracking-tight mb-6">
                <p className="mb-4">
                  Got a job in mind? We'd love to hear about it. Fill out the form below and we'll get back to you as soon as we can.
                </p>
              </div>

              {/* form styled to match the contact page scale */}
              <JobRequestForm />

              <p className="underline mt-8">
                <BackButton className="block hover:underline text-left" />
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
