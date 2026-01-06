import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between">
        <Label>Volume</Label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Label>Price Range</Label>
      <Slider defaultValue={[25, 75]} max={100} step={1} />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>$25</span>
        <span>$75</span>
      </div>
    </div>
  ),
};

export const Steps: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <Label>Step: 1</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <Label>Step: 10</Label>
        <Slider defaultValue={[50]} max={100} step={10} />
      </div>
      <div className="space-y-2">
        <Label>Step: 25</Label>
        <Slider defaultValue={[50]} max={100} step={25} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
    className: "w-[300px]",
  },
};
