import Head from "next/head";
import { ReactNode } from "react";

interface PageProps {
    title: string;
    description: string;
    children: ReactNode;
}

export default function Page({ title, description, children }: PageProps) {
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>
            {children}
        </div>
    )
}
