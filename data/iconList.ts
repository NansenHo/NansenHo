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
      "nodejs",
      "javascript",
      "html5",
      "css3",
      "sass",
      "python",
    ],
  },
  {
    namespace: "frameworks",
    icons: ["react", "vue"],
  },
  {
    namespace: "tools",
    icons: ["macos", "visual-studio-code", "git", "vim"],
  },
  {
    namespace: "interested",
    icons: ["aws", "rust", "threejs"],
  },
];
