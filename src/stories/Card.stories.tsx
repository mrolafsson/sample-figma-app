import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Layout, Image, Type, Grid3X3 } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Notification: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { title: "Your call has been confirmed.", time: "1 hour ago" },
            { title: "You have a new message!", time: "1 hour ago" },
            { title: "Your subscription is expiring soon!", time: "2 hours ago" },
          ].map((notification, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 rounded-md p-2 transition-colors hover:bg-secondary"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Mark all as read</Button>
      </CardFooter>
    </Card>
  ),
};

export const Stats: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <Badge>+20.1%</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <Badge variant="secondary">+180.1%</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Badge variant="outline">+19%</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const TypesetFeatureCards: Story = {
  name: "Typeset Feature Cards",
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
            <Sparkles className="h-5 w-5" />
          </div>
          <CardTitle className="text-base">AI-Powered</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Generate layouts and content instantly with our AI tools.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-2">
            <Layout className="h-5 w-5" />
          </div>
          <CardTitle className="text-base">Responsive</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Create designs that work perfectly on all devices.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success mb-2">
            <Grid3X3 className="h-5 w-5" />
          </div>
          <CardTitle className="text-base">Fast</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Optimized for speed and performance.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const TypesetProjectCard: Story = {
  name: "Typeset Project Card",
  render: () => (
    <Card className="w-[300px] overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20" />
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Marketing Website</CardTitle>
          <Badge variant="muted">12 pages</Badge>
        </div>
        <CardDescription>Last edited 2 hours ago</CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        <Button size="sm" className="flex-1">
          Open
        </Button>
        <Button size="sm" variant="outline">
          Settings
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const TypesetSidebarCard: Story = {
  name: "Typeset Sidebar Panel",
  render: () => (
    <Card className="w-[280px]">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Spacing
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Padding</span>
            <span className="text-muted-foreground">20px</span>
          </div>
          <Progress value={40} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Margin</span>
            <span className="text-muted-foreground">16px</span>
          </div>
          <Progress value={32} variant="info" className="h-2" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Gap</span>
            <span className="text-muted-foreground">12px</span>
          </div>
          <Progress value={24} variant="success" className="h-2" />
        </div>
      </CardContent>
    </Card>
  ),
};

export const TypesetLayoutPresets: Story = {
  name: "Typeset Layout Presets",
  render: () => (
    <Card className="w-[280px]">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Layout Presets
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "Hero Section", icon: Layout },
            { name: "Feature Grid", icon: Grid3X3 },
            { name: "Text Block", icon: Type },
            { name: "Image Gallery", icon: Image },
          ].map((preset) => (
            <Button
              key={preset.name}
              variant="outline"
              className="h-auto py-3 flex-col gap-2"
            >
              <preset.icon className="h-5 w-5" />
              <span className="text-xs">{preset.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
};
