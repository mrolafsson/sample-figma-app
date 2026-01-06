import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "success", "warning", "info", "muted", "pro", "accent"],
      description: "The visual style variant of the badge",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "pill"],
      description: "The size of the badge",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Muted",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="muted">Muted</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="destructive">Inactive</Badge>
      <Badge variant="secondary">Draft</Badge>
      <Badge variant="info">In Progress</Badge>
    </div>
  ),
};

export const Pro: Story = {
  args: {
    variant: "pro",
    size: "sm",
    children: "PRO",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "Accent",
  },
};

export const PillSize: Story = {
  args: {
    variant: "accent",
    size: "pill",
    children: "Hero",
  },
};

export const SmallSize: Story = {
  args: {
    variant: "pro",
    size: "sm",
    children: "PRO",
  },
};

export const TypesetBadges: Story = {
  name: "Typeset Design System",
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Pro Badge (Logo area)</p>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
            t
          </div>
          <Badge variant="pro" size="sm">PRO</Badge>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Section Labels (Pills)</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="accent" size="pill">Hero</Badge>
          <Badge variant="accent" size="pill">Features</Badge>
          <Badge variant="accent" size="pill">Testimonials</Badge>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Feature Labels</p>
        <div className="flex flex-wrap gap-2">
          <Badge>New</Badge>
          <Badge variant="secondary">Beta</Badge>
          <Badge variant="pro" size="sm">PRO</Badge>
          <Badge variant="muted">Coming Soon</Badge>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Status Indicators</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success">Published</Badge>
          <Badge variant="warning">Review</Badge>
          <Badge variant="muted">Draft</Badge>
          <Badge variant="destructive">Archived</Badge>
        </div>
      </div>
    </div>
  ),
};
