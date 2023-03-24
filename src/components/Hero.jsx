import Image from 'next/image'
import jcircle from '../images/gallery/jCircle.png'
import { Container } from './Container'

import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}
export function Hero() {
  return (
    <Container className="mt-10 sm:mt-12" id="about">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={jcircle}
              width={512}
              height={512}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="hidden object-cover lg:block aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
          Joe&apos;s Corner
          </h1>
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vehicula felis faucibus dapibus egestas. Vestibulum
              ante ipsum primis in faucibus orciluctus et ultrices posuere cubilia curae; Proin interdum vulputate augue,
          ullamcorper scelerisque massa consequat et.
        </p>
        <p>
          Duis dictum tortor id leo accumsan, at pulvinar arcu
          ultricies. Donec blandit nulla ipsum, eu congue orci
          venenatis sollicitudin. Sed id pharetra magna. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In hac habitasse platea dictumst.
          Maecenas faucibus id ante ac varius. Sed eget dolor
          rhoncus, pretium enim in, pharetra enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed vehicula felis faucibus dapibus egestas. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin interdum vulputate augue,
          ullamcorper scelerisque massa consequat et. Aenean
          hendrerit convallis quam. Maecenas ut tristique lacus.
          Donec a odio pretium nibh tincidunt euismod. Quisque
          interdum, eros ac volutpat dictum, turpis massa lacinia
          ex, ut tristique erat tortor non turpis.
        </p>
      </div>
    </div>
    <div className="flex justify-center lg:block lg:pl-20">
      <ul className="flex flex-wrap justify-center " role="list">
        <SocialLink href="#" icon={TwitterIcon} className="mt-4 mr-4" />
        <SocialLink href="#" icon={InstagramIcon} className="mt-4 mr-4" />
        <SocialLink href="#" icon={GitHubIcon} className="mt-4 mr-4" />
        <SocialLink href="#" icon={LinkedInIcon} className="mt-4 mr-4" />
        <SocialLink
          href="mailto:spencer@planetaria.tech"
          icon={MailIcon}
          className="mt-4 border-zinc-100 dark:border-zinc-700/40"
        />
      </ul>
    </div>
  </div>
</Container>
);
}