export interface Article {
  tag: string;
  tagLabel: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  sub: string;
  note: string;
}

export interface Resource {
  emoji: string;
  badge: string;
  title: string;
  cta: string;
  href: string;
}

export interface PublishCard {
  icon: string;
  badge: string;
  title: string;
  desc: string;
  tags: string[];
  note?: string;
  cta: string;
  href: string;
}

export interface Audience {
  num: string;
  title: string;
  desc: string;
}