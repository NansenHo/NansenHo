type Icons = string[];

export type IconList = {
  namespace: string;
  icons: Icons;
}[];

export const iconList: IconList = [
  {
    namespace: "languages",
    icons: [
      "typescript",
      "javascript",
      "nodejs",
      "python",
      "html5",
      "css3",
      "sass",
    ],
  },
  {
    namespace: "frameworks",
    icons: ["react", "vue", "nextjs", "nuxtjs"],
  },
  {
    namespace: "tools",
    icons: ["aws", "git", "vim", "hhkb", "visual-studio-code", "macos"],
  },
  {
    namespace: "interested",
    icons: ["ruby", "rust", "go"],
  },
];
