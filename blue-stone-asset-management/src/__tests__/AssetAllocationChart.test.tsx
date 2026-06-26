import { render, screen } from "@testing-library/react";
import AssetAllocationChart from "@/components/AssetAllocationChart";

const sampleData = [
  { title: "Gold", holding: "$190,300", change: "+2.3%", percentage: 15 },
];

describe("AssetAllocationChart", () => {
  it("renders asset labels and percentages", () => {
    render(<AssetAllocationChart data={sampleData} />);

    expect(screen.getByText("Gold")).toBeInTheDocument();
    expect(screen.getByText("15%"));
  });
});
