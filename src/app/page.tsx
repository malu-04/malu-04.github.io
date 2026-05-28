import Link from 'next/link';
import {Container } from '../components/Container';
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from '../components/SocialIcons'


function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h4 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Senior Software Engineer
        </h4>

        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-justify">
          Senior  Software  Engineer  with  7+  years  of  experience  in  designing,  developing,  testing,  and maintaining application systems in regulated and large-scale environments. Strong background in translating system requirements into efficient, secure, and scalable program code.
        </p>

        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 text-justify">
          Experienced in full software development lifecycle including algorithm design, coding, testing (unit and  integration),  debugging,  deployment,  and  documentation.  Proven  ability  to  build  reliable systems, implement security best practices, and support users through training and troubleshooting.
        </p>

        <div className="mt-6 flex gap-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
      </div>
    </Container>

  )
}
