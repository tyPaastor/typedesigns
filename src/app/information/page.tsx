import Container from "@/app/_components/container";
import Header from "../_components/header";
import BackButton from "@/app/_components/back-button"

export default function Index() {
  return (
    <main>
      <Container>
        <Header />
        <article className="px-4 py-16">
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-md">
              <h1 className="text-4xl mb-6">
                We're a small studio,
                <br />
                producing big outcomes.
              </h1>
              <div className="text-sm/6 tracking-tight">
                <p className="mb-4">
                    Typedesign is a creative design practice based in New Norfolk in the Derwent Valley of Tasmania, we work with clients across Tasmania, specialising in brand development, print media, signage, and more.
                </p>
                <p className="mb-4">
                    Our aim is simple: to produce memorable and meaningful work that, in turn, delivers big impacts.
                </p>
                <p className="mb-6">
                    Got an idea or a project in mind? Let's chat.
                </p>

              <p className="underline">
                <a href="mailto:tyler@typedesigns.com.au" className="block hover:underline">tyler@typedesigns.com.au</a>
                <a href="tel:+61448640563" className="block hover:underline">+61 448 640 563</a>
                <a href="https://www.facebook.com/typedesigns.au/" className="block hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/_typedesigns_/" className="block hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>              
              </p>
              
              <p className="underline mt-8">
                <BackButton className="block hover:underline text-left" />
              </p>    
            </div>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
