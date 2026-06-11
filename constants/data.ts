export interface IFeatureCardData {
  icon: string;
  title: string;
  description: string;
}

export const featuresData: IFeatureCardData[] = [
  {
    icon: "/icons/lightning.svg",
    title: "Native Live Betting",
    description:
      "Real-time betting with fast updates and smooth odds movement.",
  },
  {
    icon: "/icons/target.svg",
    title: "Same Game Parlays",
    description: "Combine multiple outcomes into a single, powerful bet.",
  },
  {
    icon: "/icons/progress.svg",
    title: "Parlay Enhancements",
    description: "Improved odds and smarter parlay options.",
  },
  {
    icon: "/icons/gamepad.svg",
    title: "Redesigned Casino",
    description: "Faster loading, cleaner navigation, top games upfront.",
  },
];

export const featureBullets = [
  {
    id: "secure",
    text: "Secure & Encrypted",
  },
  {
    id: "no-spam",
    text: "No Spam, Ever",
  },
  {
    id: "priority",
    text: "Priority Access",
  },
];

export const formTags = [
  "Sports Betting",
  "Casino",
  "Same Game Parlays",
  "One-Click Deposit Methods",
];

export const statsCards = [
  {
    id: "requests",
    icon: "/icons/user.svg",
    number: "2,847",
    text: "Requests Submitted",
  },
  {
    id: "approved",
    icon: "/icons/progress.svg",
    number: "1,203",
    text: "Access Approved",
  },
  {
    id: "active",
    icon: "/icons/clock.svg",
    number: "Wave 3",
    text: "Currently Active",
  },
];

export interface ITierCardData {
  title: string;
  text: string;
  buttonText: string;
}

export const tierData: ITierCardData[] = [
  {
    title: "TIER 1",
    text: "First 300 users get a $50 Welcome Bonus.",
    buttonText: "FIRST 300 ONLY",
  },
  {
    title: "TIER 2",
    text: "All additional entrants get a $25 Welcome Bonus.",
    buttonText: "LIMITED AVAILABILITY",
  },
];
