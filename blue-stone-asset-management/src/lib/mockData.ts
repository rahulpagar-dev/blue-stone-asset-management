export type AssetProduct = {
  title: string;
  holding: string;
  change: string;
  percentage: number;
};

export const productData: AssetProduct[] = [
  { title: "Gold", holding: "$190,300", change: "+2.3%", percentage: 15 },
  { title: "Silver", holding: "$95,800", change: "+1.8%", percentage: 10 },
  { title: "ETF", holding: "$520,700", change: "+0.9%", percentage: 42 },
  { title: "Crypto", holding: "$136,600", change: "-1.2%", percentage: 18 },
];

export const allocationData = [
  { label: "Equities & ETFs", value: 42 },
  { label: "Crypto", value: 18 },
  { label: "Gold", value: 15 },
  { label: "Silver", value: 10 },
  { label: "Cash", value: 15 },
];
