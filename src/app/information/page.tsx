import Container from "@/app/_components/container";
import Header from "../_components/header";

export default function Index() {
    return (
        <main>
            <Container>
                <Header />
                <article className="min-h-screen mb-32">
                    <div className="w-full bg-black text-white">
                        <div className="flex items-end h-full">
                            <div className="w-full max-w-xl text-justify">
                                <h1 className="text-4xl font-bold mb-6">
                                    We're a small studio
                                    <br />
                                    producing big outcomes
                                </h1>

                                <h3 className="mb-4">
                                    Typedesigns is a solo-run design practice operated by Tyler Hall (amateur film photography enjoyer, signage enthusiast, and lover of kitchen-crafted goodness).
                                </h3>
                                <h3 className="mb-4">
                                    Based in New Norfolk in the Derwent Valley of Tasmania, we work with clients across Tasmania, specialising in brand development, print media, and signage.
                                </h3>
                                <h3 className="mb-4">
                                    Our aim is simple: to produce memorable and meaningful work that, in turn, delivers big impacts.
                                </h3>
                                <h3 className="mb-6">
                                    Got an idea or a project in mind? Let's chat.
                                </h3>

                                <h3>
                                    <a href="mailto:tyler@typedesigns.com.au" className="block hover:underline">tyler@typedesigns.com.au</a>
                                    <a href="tel:+61448640563" className="block hover:underline">+61 448 640 563</a>
                                    <a href="https://www.facebook.com/typedesigns.au/" className="block hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    <a href="https://www.instagram.com/_typedesigns_/" className="block hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </article>
            </Container>
        </main>
    );
}