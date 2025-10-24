export type Stat = {
  num: number;
  text: string;
  isDynamic?: boolean;
};

export const staticStats: Stat[] = [
  { num: 9, text: "Years of IT experience" },
  { num: 6, text: "Months of Freelance experience" },
  { num: 26, text: "Projects completed" },
];
