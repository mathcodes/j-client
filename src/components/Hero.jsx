import Image from 'next/image'
import jcircle from '@/images/logos/jcircle.png'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
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
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
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
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={jcircle}
              width={512}
              height={512}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Spencer Sharp. I live in New York City, where I design the
            future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vehicula felis faucibus dapibus egestas. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin interdum vulputate augue,
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
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
