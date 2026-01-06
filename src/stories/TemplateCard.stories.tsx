import type { Meta, StoryObj } from "@storybook/react";
import {
  TemplateCard,
  TemplateCardImage,
  TemplateCardContent,
  TemplateCardTitle,
  TemplateCardDescription,
  TemplateCardIcon,
} from "@/components/ui/template-card";
import { FileText, Sparkles, Layout, Grid3X3, Link2 } from "lucide-react";

const meta: Meta<typeof TemplateCard> = {
  title: "UI/TemplateCard",
  component: TemplateCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "selected", "option"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TemplateCard className="w-[200px]">
      <TemplateCardImage>
        <div className="h-full w-full bg-gradient-to-br from-primary/10 to-accent/10" />
      </TemplateCardImage>
      <TemplateCardContent>
        <TemplateCardTitle>VSL Template</TemplateCardTitle>
        <TemplateCardDescription>Video sales letter</TemplateCardDescription>
      </TemplateCardContent>
    </TemplateCard>
  ),
};

export const Selected: Story = {
  render: () => (
    <TemplateCard className="w-[200px]" selected>
      <TemplateCardImage>
        <div className="h-full w-full bg-gradient-to-br from-primary/10 to-accent/10" />
      </TemplateCardImage>
      <TemplateCardContent>
        <TemplateCardTitle>VSL Template</TemplateCardTitle>
        <TemplateCardDescription>Video sales letter</TemplateCardDescription>
      </TemplateCardContent>
    </TemplateCard>
  ),
};

export const Option: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <TemplateCard variant="option" className="w-[200px] h-[140px]">
        <TemplateCardIcon>
          <FileText className="h-6 w-6" />
        </TemplateCardIcon>
        <TemplateCardTitle>Start from scratch</TemplateCardTitle>
      </TemplateCard>
      <TemplateCard variant="option" className="w-[200px] h-[140px]">
        <TemplateCardIcon className="text-pink-500">
          <Sparkles className="h-6 w-6" />
        </TemplateCardIcon>
        <TemplateCardTitle>Create with AI</TemplateCardTitle>
      </TemplateCard>
    </div>
  ),
};

export const TypesetTemplateGrid: Story = {
  name: "Typeset Template Grid",
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <h2 className="text-lg font-semibold">Choose Deck Template</h2>

      <div className="grid grid-cols-2 gap-4">
        <TemplateCard variant="option" className="h-[120px]">
          <TemplateCardIcon>
            <FileText className="h-6 w-6" />
          </TemplateCardIcon>
          <TemplateCardTitle>Start from scratch</TemplateCardTitle>
        </TemplateCard>
        <TemplateCard variant="option" className="h-[120px]">
          <TemplateCardIcon className="text-pink-500">
            <Sparkles className="h-6 w-6" />
          </TemplateCardIcon>
          <TemplateCardTitle>Create with AI</TemplateCardTitle>
        </TemplateCard>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Templates</h3>
        <div className="flex gap-2 mb-4">
          {[
            { icon: Grid3X3, label: "All Layouts", active: true },
            { icon: Layout, label: "Landing pages", active: false },
            { icon: FileText, label: "Checkout", active: false },
            { icon: Link2, label: "Link in bio", active: false },
          ].map((tab) => (
            <button
              key={tab.label}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                tab.active
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {["VSL Template", "Social Media", "Webinar", "Lead Magnet"].map(
            (name, i) => (
              <TemplateCard key={name} className="w-full" selected={i === 1}>
                <TemplateCardImage>
                  <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
                </TemplateCardImage>
                <TemplateCardContent>
                  <TemplateCardTitle>{name}</TemplateCardTitle>
                </TemplateCardContent>
              </TemplateCard>
            )
          )}
        </div>
      </div>
    </div>
  ),
};

export const TemplateGallery: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {["Marketing Site", "Portfolio", "Blog", "E-commerce", "Landing Page", "Dashboard"].map(
        (name) => (
          <TemplateCard key={name} className="w-[180px]">
            <TemplateCardImage>
              <div className="h-full w-full bg-gradient-to-br from-primary/5 to-accent/10" />
            </TemplateCardImage>
            <TemplateCardContent>
              <TemplateCardTitle>{name}</TemplateCardTitle>
            </TemplateCardContent>
          </TemplateCard>
        )
      )}
    </div>
  ),
};
