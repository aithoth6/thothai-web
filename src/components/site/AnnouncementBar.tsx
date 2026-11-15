import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { X, ArrowRight } from "lucide-react";
import { LAUNCH } from "@/data/launch";

const KEY = `launch-bar-dismissed:${LAUNCH.phase}`;

/**
 * The launch announcement across the top of every page: one line and a "Learn more" to /thothfood/launch.
 * Dismissible (remembered in this browser, per phase, so going live shows it again). Not shown on the launch page itself.
 * Server and first paint show the bar; it hides after hydration only when this visitor already dismissed it.
 */
export function AnnouncementBar() {
  const { location } = useRouterState();
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    try { setDismissed(window.localStorage.getItem(KEY) === "1"); } catch { /* storage blocked: the bar simply stays */ }
  }, []);
  if (!LAUNCH.announce || dismissed || location.pathname.startsWith("/thothfood/launch")) return null;
  const live = LAUNCH.phase === "live";
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-page flex items-center justify-center gap-3 py-2 text-center text-sm font-semibold">
        <span>
          {live ? `🍽️ Thoth Chop is now open at ${LAUNCH.place}.` : `🍽️ Thoth Chop is coming to ${LAUNCH.place}.`}
        </span>
        <Link to="/thothfood/launch" className="inline-flex items-center gap-1 underline underline-offset-4 hover:opacity-80">
          {live ? "Order now" : "Learn more"} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => { setDismissed(true); try { window.localStorage.setItem(KEY, "1"); } catch { /* not remembered */ } }}
          className="ml-1 rounded-full p-1 hover:bg-black/10"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
