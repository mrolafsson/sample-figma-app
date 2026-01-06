import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Monitor,
  Tablet,
  Smartphone,
  Pencil,
  Palette,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";

const meta: Meta<typeof ToggleGroup> = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "outline", "contained"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const TypesetCreateDesignToggle: Story = {
  name: "Typeset Create/Design Toggle",
  render: () => (
    <ToggleGroup type="single" variant="primary" defaultValue="create">
      <ToggleGroupItem value="create" className="px-4 h-7 gap-2">
        <Pencil className="h-4 w-4" />
        Create
      </ToggleGroupItem>
      <ToggleGroupItem value="design" className="px-4 h-7 gap-2">
        <Palette className="h-4 w-4" />
        Design
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const TypesetViewportToggle: Story = {
  name: "Typeset Viewport Toggle",
  render: () => (
    <div className="flex items-center gap-2">
      <ToggleGroup type="single" variant="contained" defaultValue="desktop" size="icon">
        <ToggleGroupItem value="desktop" aria-label="Desktop view">
          <Monitor className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="tablet" aria-label="Tablet view">
          <Tablet className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="mobile" aria-label="Mobile view">
          <Smartphone className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <span className="text-sm text-muted-foreground">&lt;&gt; 1400px</span>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Small: Story = {
  render: () => (
    <ToggleGroup type="single" size="sm" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-3 w-3" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-3 w-3" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-3 w-3" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Large: Story = {
  render: () => (
    <ToggleGroup type="single" size="lg" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-5 w-5" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-5 w-5" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-5 w-5" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left">
        <AlignLeft className="h-4 w-4" />
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter className="h-4 w-4" />
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight className="h-4 w-4" />
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="single" disabled defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
