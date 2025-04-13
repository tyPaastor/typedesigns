import { ReactNode } from "react";

export type Project = {
    /** URL Identifier, must match the filename (without the dot or extension). */
    slug: string;

    title: string;

    /** Project date, used for sorting. */
    date: string;

    coverImage: string;

    excerpt: string;

    ogImage: {
        url: string;
    };

    preview?: boolean;

    /** The content to render for this project. */
    content: string;
};
