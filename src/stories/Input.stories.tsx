import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

/**
 * The Input component is a styled text input for collecting user data in forms.
 *
 * ## Features
 * - **All native input types** supported (text, email, password, file, search, etc.)
 * - **Error state** for validation feedback
 * - **Disabled state** for non-editable fields
 * - **File input styling** with custom appearance
 * - **Focus ring** for accessibility
 *
 * ## Usage Guidelines
 *
 * ### Input Types
 * | Type | Use Case |
 * |------|----------|
 * | `text` | General text input (default) |
 * | `email` | Email addresses with validation |
 * | `password` | Secure password entry |
 * | `search` | Search fields with clear button |
 * | `file` | File uploads |
 * | `number` | Numeric values |
 *
 * ### Best Practices
 * - Always pair with a `<Label>` for accessibility
 * - Use `error` prop with validation messages below
 * - Set appropriate `type` for mobile keyboard optimization
 * - Use `placeholder` for hints, not labels
 */
const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A styled text input component supporting all native input types with error and disabled states.

\`\`\`tsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Enter your email" />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url", "file"],
      description: "The native HTML input type",
      table: {
        defaultValue: { summary: "text" },
      },
    },
    error: {
      control: "boolean",
      description: "Apply error styling (red border) for validation feedback",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable the input and show a not-allowed cursor",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when the input is empty",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="error-email" className="text-destructive">
        Email
      </Label>
      <Input
        type="email"
        id="error-email"
        placeholder="Email"
        error
        defaultValue="invalid-email"
      />
      <p className="text-sm text-destructive">Please enter a valid email address</p>
    </div>
  ),
};

export const File: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
    className: "w-[300px]",
  },
};
