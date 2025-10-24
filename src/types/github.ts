export interface Repo {
  name: string;
}

export interface Contributor {
  login: string;
  contributions: number;
}

export interface Cache {
  totalCommits: number;
  timestamp: number;
}
