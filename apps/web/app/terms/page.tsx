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
<div className="bg-gray-50">
  <div className="bg-white py-20 sm:py-40">
    <h1 className="mt-5 text-center font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
      Terms of Service
    </h1>
  </div>
  <div className="mx-auto w-full lg:px-20 flex max-w-screen-md flex-col items-center p-10 sm:pt-20">
    <article
      className="prose prose-gray max-w-none transition-all prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-bold"
      data-mdx-container="true"
    >
      <p>
        Subject to these Terms of Service (this "Agreement"),{' '}
        <a
          className="font-medium text-gray-500 underline-offset-4 hover:text-black"
          href="/"
        >
          Vercl.co
        </a>
        {' '}("Vercl", "we", "us" and/or "our") provides access to Vercl's cloud platform as a service (collectively, the "Services"). By using or accessing the Services, you acknowledge that you have read, understand, and agree to be bound by this Agreement.
      </p>
      <p>
        If you are entering into this Agreement on behalf of a company, business or other legal entity, you represent that you have the authority to bind such entity to this Agreement, in which case the term "you" shall refer to such entity. If you do not have such authority, or if you do not agree with this Agreement, you must not accept this Agreement and may not use the Services.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="1-acceptance-of-terms"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#1-acceptance-of-terms"
        >
          <span className="icon icon-link" />
        </a>
        1. Acceptance of Terms
      </h2>
      <p>
        By signing up and using the services provided by Vercl (referred to as the "Service"), you are agreeing to be bound by the following terms and conditions ("Terms of Service"). The Service is owned and operated by Vercl ("Us", "We", or "Our").
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="2-description-of-service"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#2-description-of-service"
        >
          <span className="icon icon-link" />
        </a>
        2. Description of Service
      </h2>
      <p>
        Vercl provides an open-source link management tool for modern marketing teams to create, share, and track short links ("the Product"). The Product is accessible at Vercl.co and other domains and subdomains controlled by Us (collectively, "the Website").
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="3-fair-use"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#3-fair-use"
        >
          <span className="icon icon-link" />
        </a>
        3. Fair Use
      </h2>
      <p>
        You are responsible for your use of the Service and for any content that you post or transmit through the Service. You may not use the Service for any malicious purpose, including but not limited to:
      </p>
      <ul>
        <li>
          Phishing or scam websites
        </li>
        <li>
          Pornography or adult content
        </li>
        <li>
          Betting or gambling
        </li>
        <li>
          Copyright infringement
        </li>
      </ul>
      <p>
        We reserve the right to suspend or terminate your access to the Service if we determine, in our sole discretion, that you have violated these Terms of Service.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="4-intellectual-property-rights"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#4-intellectual-property-rights"
        >
          <span className="icon icon-link" />
        </a>
        4. Intellectual Property Rights
      </h2>
      <p>
        You acknowledge and agree that the Service and its entire contents, features, and functionality, including but not limited to all information, software, code, text, displays, graphics, photographs, video, audio, design, presentation, selection, and arrangement, are owned by Us, our licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="5-shortlink-ownership"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#5-shortlink-ownership"
        >
          <span className="icon icon-link" />
        </a>
        5. Shortlink Ownership
      </h2>
      <p>
        If you're using a default{' '}
        <code>
          Vercl.sh
        </code>
        {' '}link, we reserve the right to reclaim the shortlink if needed, particularly if it is necessary for brand compliance, to prevent confusion among users, or to maintain the integrity and reputation of our Service.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="6-changes-to-these-terms"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#6-changes-to-these-terms"
        >
          <span className="icon icon-link" />
        </a>
        6. Changes to these Terms
      </h2>
      <p>
        We reserve the right to revise and update these Terms of Service from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter. Your continued use of the Website following the posting of revised Terms of Service means that you accept and agree to the changes.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="7-contact-information"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#7-contact-information"
        >
          <span className="icon icon-link" />
        </a>
        7. Contact Information
      </h2>
      <p>
        Questions or comments about the Website or these Terms of Service may be directed to our support team at{' '}
        <a
          className="font-medium text-gray-500 underline-offset-4 hover:text-black"
          href="mailto:support@Vercl.co"
          rel="noopener noreferrer"
          target="_blank"
        >
          support@Vercl.co
        </a>
        .
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="8-disclaimer-of-warranties"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#8-disclaimer-of-warranties"
        >
          <span className="icon icon-link" />
        </a>
        8. Disclaimer of Warranties
      </h2>
      <p>
        THE SERVICE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE WARRANTY OF TITLE, MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES’ RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="9-limitation-of-liability"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#9-limitation-of-liability"
        >
          <span className="icon icon-link" />
        </a>
        9. Limitation of Liability
      </h2>
      <p>
        IN NO EVENT WILL WE, OUR AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, THE SERVICE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
      </p>
      <h2
        className="text-2xl underline-offset-4 hover:underline"
        id="10-governing-law-and-jurisdiction"
      >
        <a
          className="anchor"
          data-mdx-heading=""
          href="#10-governing-law-and-jurisdiction"
        >
          <span className="icon icon-link" />
        </a>
        10. Governing Law and Jurisdiction
      </h2>
      <p>
        These Terms of Service and any dispute or claim arising out of or related to them, their subject matter or their formation (in each case, including non-contractual disputes or claims) shall be governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of, or related to, these Terms of Service or the Website shall be instituted exclusively in the federal courts of the United States or the courts of the State of California.
      </p>
      <hr />
      <p>
        By using Vercl, you acknowledge that you have read these Terms of Service, understood them, and agree to be bound by them. If you do not agree to these Terms of Service, you are not authorized to use the Service. We reserve the right to change these Terms of Service at any time, so please review them frequently.
      </p>
      <p>
        Thank you for using Vercl!
      </p>
    </article>
    <div className="mt-10 w-full border-t border-gray-200 pt-10 text-center">
      <p className="text-gray-500">
        Last updated: January, 2024
      </p>
    </div>
  </div>
</div>
  );
}
