/**
 * The launch announcement, in ONE place: the banner, the /thothfood/launch page and the hero link all read this.
 *
 *   phase "prelaunch"  Test version open ("Try it now"); ordering for real opens on `liveLabel`.
 *   phase "live"       Ordering is open: the page says so and the test version becomes a footnote.
 *
 * To go live: set `phase` to "live" (and, when the news is old, set `announce` to false to take the banner down).
 */
export type LaunchPhase = "prelaunch" | "live";

export const LAUNCH = {
  phase: "prelaunch" as LaunchPhase,
  announce: true,
  place: "TF Hostel",
  /** The short way the banner and the hero link say when ("coming to TF Hostel this Friday"). Empty = no date said. */
  when: "this Friday",
  /** Said where the page says when ordering for real opens, e.g. "Monday 17 November". Keep it vague until the date is certain. */
  liveLabel: "Friday 20 November",
  /** The last day of the test week, when there is one (shown as "Test version open until ..."). Leave empty for none. */
  testUntilLabel: "Friday 20 November",
};

/** The vendors on first, by name as customers see them. Only vendors that have agreed to be named belong here. */
export const LAUNCH_VENDORS = [
  { name: "Ama Waakye", what: "Waakye", emoji: "🍛" },
  { name: "Mash Allah Koko", what: "Koko", emoji: "🥣" },
  { name: "Severin Plus", what: "Local Ghanaian", emoji: "🍲" },
  { name: "Simply Mahkies", what: "Groceries", emoji: "🛒" },
] as const;

/** Where the rest are coming. */
export const COMING_NEXT = ["Night Market", "Bush Canteen"] as const;
