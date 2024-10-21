export interface WebsiteVisit {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  signupDate: string;
  lastActivity: string;
}
