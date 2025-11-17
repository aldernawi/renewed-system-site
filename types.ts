
import type { LucideIcon } from 'lucide-react';

export interface CardInfo {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  icon: LucideIcon;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}
