import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          title: "SS Studio 44 | Interior Design Studio",
        },

        {
          name: "description",
          content:
            "SS Studio 44 is an interior design studio creating distinctive residential, hospitality, café, bar, gym, hotel and event spaces.",
        },

        {
          name: "author",
          content: "SS Studio 44",
        },

        {
          name: "robots",
          content: "index, follow",
        },

        // OPEN GRAPH
        {
          property: "og:title",
          content: "SS Studio 44 | Interior Design Studio",
        },

        {
          property: "og:description",
          content:
            "Thoughtful interiors for residential, hospitality, cafés, bars, gyms, hotels and event spaces.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:url",
          content: "https://ssstudio44.com/",
        },

        {
          property: "og:site_name",
          content: "SS Studio 44",
        },

        {
          property: "og:image",
          content: "https://ssstudio44.com/44logo.png",
        },

        // TWITTER / SOCIAL PREVIEW
        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content: "SS Studio 44 | Interior Design Studio",
        },

        {
          name: "twitter:description",
          content:
            "Thoughtful interiors for residential, hospitality, cafés, bars, gyms, hotels and event spaces.",
        },

        {
          name: "twitter:image",
          content: "https://ssstudio44.com/44logo.png",
        },
      ],

      links: [
        // MAIN WEBSITE CSS
        {
          rel: "stylesheet",
          href: appCss,
        },

        // YOUR SAME SS STUDIO 44 LOGO AS FAVICON
        {
          rel: "icon",
          type: "image/png",
          href: "/44logo.png",
        },

        {
          rel: "shortcut icon",
          type: "image/png",
          href: "/44logo.png",
        },

        {
          rel: "apple-touch-icon",
          href: "/44logo.png",
        },

        // CANONICAL WEBSITE URL
        {
          rel: "canonical",
          href: "https://ssstudio44.com/",
        },

        // GOOGLE FONTS
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap",
        },
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
      {/* Required: nested routes render here. */}
      <Outlet />
    </QueryClientProvider>
  );
}
