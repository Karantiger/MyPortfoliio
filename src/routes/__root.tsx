
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

// Structured data connecting your portfolio with your public profiles.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://karankumarbind.vercel.app/#person",
  name: "Karan Kumar Bind",
  url: "https://karankumarbind.vercel.app/",
  jobTitle: "Java Developer",
  description:
    "Official portfolio of Karan Kumar Bind, featuring software development projects, technical skills, and professional experience.",
  sameAs: [
    "https://github.com/karantiger",
    "https://www.linkedin.com/in/karantiger/",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: unknown;
  reset: () => void;
}) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative w-full max-w-lg rounded-3xl border border-border bg-surface p-8 text-center shadow-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <AlertTriangle className="h-10 w-10 text-primary" />
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight">
          This page didn't load
        </h1>

        <p className="mt-4 leading-7 text-muted-foreground">
          Something went wrong while loading this page. You can try again or
          return to the homepage.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => {
              reset();
              router.invalidate();
            }}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Go Home
          </a>
        </div>

        <div className="mt-8 border-t border-border pt-5">
          <p className="text-xs text-muted-foreground">
            If this problem persists, please refresh the page or try again
            later.
          </p>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        {
          name: "google-site-verification",
          content: "google17a3a71c88d24f59",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title:
            "Karan Kumar Bind | Java Developer & Software Developer Portfolio",
        },
        {
          name: "description",
          content:
            "Official portfolio of Karan Kumar Bind. Explore software development projects, Java development skills, experience, education, and professional profiles.",
        },
        {
          property: "og:title",
          content: "Karan Kumar Bind | Developer Portfolio",
        },
        {
          property: "og:description",
          content:
            "Explore Karan Kumar Bind's portfolio, software projects, technical skills, and experience.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://karankumarbind.vercel.app/",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap",
        },
        { rel: "icon", href: "/logokkb.png", type: "image/png" },
        { rel: "shortcut icon", href: "/logokkb.png", type: "image/png" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
