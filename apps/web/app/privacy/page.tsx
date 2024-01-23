"use client";

import { InlineSnippet } from "@dub/ui";
import { STAGGER_CHILD_VARIANTS } from "@dub/utils";
import Spline from "@splinetool/react-spline";
import va from "@vercel/analytics";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Background } from "@dub/ui";

export default async function Home() {
  return (
    <Background />
<div className="bg-gray-50">
  <div className="bg-white py-20 sm:py-40">
    <h1 className="mt-5 text-center font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
      Privacy Policy
    </h1>
  </div>
  <div className="mx-auto w-full lg:px-20 flex max-w-screen-md flex-col items-center p-10 sm:pt-20">
    <article
      className="prose prose-gray max-w-none transition-all prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-bold"
      data-mdx-container="true"
    >
      <p>
        Welcome to{' '}
        <a
          className="font-medium text-gray-500 underline-offset-4 hover:text-black"
          href="/"
        >
          Vercl.co
        </a>
        {' '}(the "Site"), hosted by Vercl ("Vercl", "we", "us", and/or "our"). Vercl provides a platform for creating and managing short links (the "Services")​1​. We value your privacy and are dedicated to protecting your personal data. This Privacy Policy covers how we collect, handle, and disclose personal data on our Platform.
      </p>
      <p>
        If you have any questions, comments, or concerns regarding this Privacy Policy, our data practices, or would like to exercise your rights, do not hesitate to contact us.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="to-whom-does-this-policy-apply"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#to-whom-does-this-policy-apply"
        >
          <span className="icon icon-link" />
        </a>
        To Whom Does This Policy Apply
      </h2>
      <p>
        This Privacy Policy applies to customers and site visitors. Each customer is responsible for posting its own terms, conditions, and privacy policies, and ensuring compliance with all applicable laws and regulations.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="changes-to-this-privacy-policy"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#changes-to-this-privacy-policy"
        >
          <span className="icon icon-link" />
        </a>
        Changes To This Privacy Policy
      </h2>
      <p>
        This Privacy Policy may change from time to time, as our Platform and our business may change. Your continued use of the Platform after any changes to this Privacy Policy indicates your agreement with the terms of the revised Privacy Policy.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="what-information-do-we-collect"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#what-information-do-we-collect"
        >
          <span className="icon icon-link" />
        </a>
        What Information Do We Collect
      </h2>
      <p>
        We collect information directly from you when you provide it to us explicitly on our Site. We do not use third-party cookies on our Site.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="what-we-use-your-information-for"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#what-we-use-your-information-for"
        >
          <span className="icon icon-link" />
        </a>
        What We Use Your Information For
      </h2>
      <p>
        We use your information to provide our Services, to improve our Platform, to understand how you use our Platform, and to communicate with you.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="how-to-contact-us"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#how-to-contact-us"
        >
          <span className="icon icon-link" />
        </a>
        How To Contact Us
      </h2>
      <p>
        For privacy-related questions, please contact us at{' '}
        <a
          className="font-medium text-gray-500 underline-offset-4 hover:text-black"
          href="mailto:privacy@Vercl.co"
          rel="noopener noreferrer"
          target="_blank"
        >
          privacy@Vercl.co
        </a>
        .
      </p>
    </article>
    <div className="mt-10 w-full border-t border-gray-200 pt-10 text-center">
      <p className="text-gray-500">
        Last updated: January 22, 2024
      </p>
    </div>
  </div>
</div>
  );
}
