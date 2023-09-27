import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import HeroNotificationCard from "@/components/notificationHero";
import LandingPageCards from "@/components/LandingPageCards";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<>
			<div className="flex items-center justify-center mb-10">
				<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
					<div className="inline-block max-w-lg text-center justify-center">
						<h1 className={title()}>Get&nbsp;</h1>
						<h1 className={title({ color: "violet" })}>notified&nbsp;</h1>
						<br />
						<h1 className={title()}>
							regardless of your location about all
						</h1>
						<h1>
							<span className={title({ color: "blue" })}>earthquakes&nbsp;</span>
						</h1>
						<h1>
							<span className={title({ color: "blue" })}>happening&nbsp;</span>
						</h1>
						<h1 className={title()}>
							all around the world.
						</h1>
						<h2 className={subtitle({ class: "mt-4" })}>
							Beautiful, fast and modern earthquake data app.
						</h2>
					</div>

					<div className="flex gap-3">
						<Link
							isExternal
							as={NextLink}
							href={siteConfig.links.docs}
							className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
						>
							Install now!
						</Link>
						<Link
							isExternal
							as={NextLink}
							className={buttonStyles({ variant: "bordered", radius: "full" })}
							href={siteConfig.links.github}
						>
							<GithubIcon size={20} />
							GitHub
						</Link>
					</div>

					<div className="mt-4">
						<Snippet hideSymbol hideCopyButton variant="flat">
							<span>
								Get started by editing <Code color="primary">app/page.tsx</Code>
							</span>
						</Snippet>
					</div>
				</section>
				<HeroNotificationCard className="ml-20" />
			</div>
			<div className="container items-center justify-center !w-full !h-400 justify-center mb-20 mt-20">
					<LandingPageCards />
			</div>
			<Footer />
		</>
	);
}
