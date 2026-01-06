import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Mail, Loader2, ChevronRight, Sparkles, Download, Share2, Pencil, Palette, Play, ChevronDown, Bold } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "warning", "success", "outline", "secondary", "ghost", "link", "accent"],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "xl", "icon", "icon-sm", "icon-xs", "icon-lg"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary variants
export const Default: Story = {
  args: {
    children: "Button",
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

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "Accent",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: "Extra Large",
  },
};

// With Icons
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail /> Login with Email
      </>
    ),
  },
};

export const WithSparkles: Story = {
  args: {
    children: (
      <>
        <Sparkles /> Generate with AI
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <ChevronRight />,
  },
};

export const IconSmall: Story = {
  args: {
    variant: "ghost",
    size: "icon-sm",
    children: <Download className="h-4 w-4" />,
  },
};

export const IconLarge: Story = {
  args: {
    variant: "secondary",
    size: "icon-lg",
    children: <Share2 className="h-5 w-5" />,
  },
};

// States
export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="animate-spin" />
        Please wait
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

// Showcase stories
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="success">Success</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const IconExtraSmall: Story = {
  args: {
    variant: "ghost",
    size: "icon-xs",
    children: <Bold className="h-4 w-4" />,
  },
};

export const TypesetButtons: Story = {
  name: "Typeset Design System",
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Present Button</p>
        <Button size="sm" className="gap-1.5">
          <Play className="h-4 w-4" />
          Present
          <ChevronDown className="h-3 w-3" />
        </Button>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Toolbar Buttons (icon-xs)</p>
        <div className="flex items-center gap-0.5 p-1 rounded-md bg-secondary/50">
          <Button variant="secondary" size="icon-xs" className="bg-foreground text-white">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
            <Mail className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Primary Actions</p>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Sparkles className="h-4 w-4" />
            Create with AI
          </Button>
          <Button variant="accent">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Secondary Actions</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary">Cancel</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="link">Learn more</Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Status Actions</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="success">Confirm</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>
    </div>
  ),
};
