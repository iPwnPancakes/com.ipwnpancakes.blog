import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { Navbar } from '../components/Nav';
import MarkdownComponents from '../markdown/MarkdownComponents';

export default function PostTemplate({ children }) {
    return (
        <>
            <main>
                <Navbar></Navbar>
                <div className="container mx-auto px-4 md:px-24 xl:px-72 pt-12">
                    <MDXProvider components={ MarkdownComponents }>
                        { children }
                    </MDXProvider>
                </div>
            </main>
        </>
    );
}

export const Head = ({ data: { mdx } }) => {
    return (
        <>
            <title>{ mdx.frontmatter.title }</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;700;900&display=swap"
                rel="stylesheet"
            />
            <meta
                content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=yes"
                name="viewport"
            />
        </>
    );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
