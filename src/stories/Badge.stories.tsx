import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";

/**
 * The Badge component displays labels for status, categories, or counts.
 *
 * ## Features
 * - **10 color variants** for different semantic meanings
 * - **4 size options** including pill style
 * - **Inline element** - Works in text flow
 *
 * ## Variant Guidelines
 * | Variant | Use Case |
 * |---------|----------|
 * | `default` | Primary/new items |
 * | `secondary` | Neutral labels |
 * | `destructive` | Errors, archived |
 * | `success` | Active, published |
 * | `warning` | Pending, review |
 * | `info` | In progress |
 * | `muted` | Draft, disabled |
 * | `outline` | Subtle labeling |
 * | `pro` | Premium features |
 * | `accent` | Highlighted sections |
 */
const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A small label component for displaying status, categories, or counts.

\`\`\`tsx
import { Badge } from "@/components/ui/badge"

<Badge variant="success">Active</Badge>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "success", "warning", "info", "muted", "pro", "accent"],
      description: "The visual style variant of the badge",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "pill"],
      description: "The size of the badge. Use `pill` for rounded ends.",
      table: {
        defaultValue: { summary: "default" },
      },
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
