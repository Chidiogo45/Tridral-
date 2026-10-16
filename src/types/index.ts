export type PageId =
  | 'home'
  | 'platform'
  | 'how-it-works'
  | 'architecture'
  | 'capabilities'
  | 'roadmap'
  | 'pricing'
  | 'about'
  | 'quote'
  | 'compliance'
  | 'integrations'
  | 'graph-detection'
  | 'trust'
  | 'status';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
  category?: 'core' | 'product' | 'company' | 'resources';
}

export interface QuoteFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  companySize: string;
  primaryRequirement: string;
  deploymentTimeline: string;
  environmentDetails: string;
}

export interface FormErrors {
  fullName?: string;
  workEmail?: string;
  companyName?: string;
  companySize?: string;
  primaryRequirement?: string;
  deploymentTimeline?: string;
  environmentDetails?: string;
}

export interface GraphNode {
  id: string;
  label: string;
  type: 'account' | 'device' | 'ip' | 'merchant' | 'card';
  x: number;
  y: number;
  isFlagged?: boolean;
  statusText?: string;
}

export interface GraphEdge {
  from: string;
  to: string;
  label?: string;
  amount?: string;
  isFlagged?: boolean;
}

export interface SystemServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'maintenance';
  latencyMs: number;
  uptime30d: string;
  region: string;
}
