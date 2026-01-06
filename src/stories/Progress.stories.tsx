import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/components/ui/progress";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    className: "w-[300px]",
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    className: "w-[300px]",
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: "w-[300px]",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-1">
        <span className="text-sm">Small</span>
        <Progress value={60} className="h-1" />
      </div>
      <div className="space-y-1">
        <span className="text-sm">Default</span>
        <Progress value={60} className="h-2" />
      </div>
      <div className="space-y-1">
        <span className="text-sm">Medium</span>
        <Progress value={60} className="h-3" />
      </div>
      <div className="space-y-1">
        <span className="text-sm">Large</span>
        <Progress value={60} className="h-4" />
      </div>
    </div>
  ),
};

export const MultipleSteps: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 1: Account</span>
          <span className="text-green-500">Complete</span>
        </div>
        <Progress value={100} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 2: Profile</span>
          <span className="text-green-500">Complete</span>
        </div>
        <Progress value={100} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 3: Verification</span>
          <span className="text-primary">In Progress</span>
        </div>
        <Progress value={45} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 4: Complete</span>
          <span className="text-muted-foreground">Pending</span>
        </div>
        <Progress value={0} />
      </div>
    </div>
  ),
};
