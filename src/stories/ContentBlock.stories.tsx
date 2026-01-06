import type { Meta, StoryObj } from "@storybook/react";
import {
  ContentBlock,
  ContentBlockInput,
  ContentBlockText,
} from "@/components/ui/content-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Type, Image, Link, Sparkles, Copy, Trash2 } from "lucide-react";

const meta: Meta<typeof ContentBlock> = {
  title: "UI/ContentBlock",
  component: ContentBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "selected", "dragging"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContentBlock className="w-[400px]" icon={<Type className="h-4 w-4 text-muted-foreground" />}>
      <ContentBlockInput defaultValue="Unleash Your Team's Full Potential" />
    </ContentBlock>
  ),
};

export const Selected: Story = {
  render: () => (
    <ContentBlock
      variant="selected"
      className="w-[400px]"
      icon={<Type className="h-4 w-4 text-muted-foreground" />}
    >
      <ContentBlockInput defaultValue="Unleash Your Team's Full Potential" />
    </ContentBlock>
  ),
};

export const TextContent: Story = {
  render: () => (
    <ContentBlock className="w-[400px]" icon={<Type className="h-4 w-4 text-muted-foreground" />}>
      <ContentBlockText>
        Streamline your workflow, boost productivity, and collaborate effortlessly
        with Taskly—your all-in-one project management solution.
      </ContentBlockText>
    </ContentBlock>
  ),
};

export const ImageBlock: Story = {
  render: () => (
    <ContentBlock className="w-[400px]" icon={<Image className="h-4 w-4 text-muted-foreground" />}>
      <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <Image className="h-8 w-8 text-muted-foreground/50" />
      </div>
    </ContentBlock>
  ),
};

export const LinkBlock: Story = {
  render: () => (
    <ContentBlock className="w-[400px]" icon={<Link className="h-4 w-4 text-muted-foreground" />}>
      <div className="flex items-center gap-2 px-3 py-2 rounded-full border bg-white w-fit">
        <Sparkles className="h-4 w-4 text-accent" />
        <span className="text-sm font-medium">Start Your Free Trial</span>
        <Button variant="ghost" size="icon-sm" className="h-5 w-5">
          <span className="text-xs">&times;</span>
        </Button>
      </div>
    </ContentBlock>
  ),
};

export const WithoutControls: Story = {
  render: () => (
    <ContentBlock
      className="w-[400px]"
      showControls={false}
    >
      <ContentBlockText>
        A simple content block without drag controls or action buttons.
      </ContentBlockText>
    </ContentBlock>
  ),
};

export const TypesetEditorPanel: Story = {
  name: "Typeset Editor Panel",
  render: () => (
    <div className="w-[420px] bg-white rounded-xl border shadow-sm">
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-2">
          <Badge className="bg-accent text-accent-foreground">Hero</Badge>
          <Button variant="ghost" size="icon-sm" className="h-7 w-7 text-muted-foreground">
            <Copy className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon-sm" className="h-7 w-7 text-muted-foreground">
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
        <Button
          size="icon-sm"
          className="rounded-lg bg-gradient-to-br from-pink-400 to-purple-500 text-white"
        >
          <Sparkles className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4 space-y-4">
        <ContentBlock icon={<Type className="h-4 w-4 text-muted-foreground" />}>
          <ContentBlockInput defaultValue="Unleash Your Team's Full Potential" />
        </ContentBlock>

        <div className="flex items-start gap-3">
          <div className="p-1.5 rounded bg-secondary shrink-0 mt-1">
            <Type className="h-4 w-4 text-muted-foreground" />
          </div>
          <ContentBlockText>
            Streamline your workflow, boost productivity, and collaborate
            effortlessly with Taskly—your all-in-one project management solution.
          </ContentBlockText>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded bg-secondary shrink-0">
            <Link className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full border bg-white">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Start Your Free Trial</span>
            </div>
            <Button variant="ghost" size="icon-sm" className="h-7 w-7 text-muted-foreground rounded-full border-2 border-dashed border-primary">
              <span className="text-xs text-primary">+</span>
            </Button>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-1.5 rounded bg-secondary shrink-0">
            <Image className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="w-28 h-20 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
        </div>
      </div>
    </div>
  ),
};

export const MultipleBlocks: Story = {
  render: () => (
    <div className="w-[400px] space-y-3">
      <ContentBlock icon={<Type className="h-4 w-4 text-muted-foreground" />}>
        <ContentBlockInput defaultValue="Main Heading" />
      </ContentBlock>
      <ContentBlock variant="selected" icon={<Type className="h-4 w-4 text-muted-foreground" />}>
        <ContentBlockText>
          This is the selected block with some descriptive text content.
        </ContentBlockText>
      </ContentBlock>
      <ContentBlock icon={<Image className="h-4 w-4 text-muted-foreground" />}>
        <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
      </ContentBlock>
    </div>
  ),
};
