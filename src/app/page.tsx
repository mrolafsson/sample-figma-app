"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  Settings,
  Bell,
  Search,
  Plus,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  LogOut,
  User,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Sample data
const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    contact: "John Smith",
    email: "john@acme.com",
    retainerHours: 40,
    usedHours: 28,
    status: "active",
  },
  {
    id: 2,
    name: "TechStart Inc",
    contact: "Sarah Johnson",
    email: "sarah@techstart.io",
    retainerHours: 20,
    usedHours: 18,
    status: "active",
  },
  {
    id: 3,
    name: "Global Media",
    contact: "Mike Davis",
    email: "mike@globalmedia.com",
    retainerHours: 60,
    usedHours: 45,
    status: "active",
  },
  {
    id: 4,
    name: "Design Studio",
    contact: "Emma Wilson",
    email: "emma@designstudio.co",
    retainerHours: 30,
    usedHours: 30,
    status: "exceeded",
  },
  {
    id: 5,
    name: "CloudSoft",
    contact: "David Brown",
    email: "david@cloudsoft.net",
    retainerHours: 25,
    usedHours: 10,
    status: "active",
  },
];

const recentActivity = [
  {
    id: 1,
    action: "Project update submitted",
    client: "Acme Corporation",
    time: "2 hours ago",
    type: "success",
  },
  {
    id: 2,
    action: "Hours limit warning",
    client: "Design Studio",
    time: "4 hours ago",
    type: "warning",
  },
  {
    id: 3,
    action: "New retainer signed",
    client: "CloudSoft",
    time: "1 day ago",
    type: "info",
  },
  {
    id: 4,
    action: "Invoice generated",
    client: "TechStart Inc",
    time: "2 days ago",
    type: "default",
  },
];

const tasks = [
  {
    id: 1,
    title: "Review Q4 reports",
    client: "Acme Corporation",
    dueDate: "Today",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Update brand guidelines",
    client: "Global Media",
    dueDate: "Tomorrow",
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    title: "Send proposal draft",
    client: "TechStart Inc",
    dueDate: "Jan 10",
    priority: "low",
    completed: true,
  },
  {
    id: 4,
    title: "Schedule kickoff meeting",
    client: "CloudSoft",
    dueDate: "Jan 12",
    priority: "medium",
    completed: false,
  },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Clients", active: false },
  { icon: FileText, label: "Projects", active: false },
  { icon: CreditCard, label: "Billing", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } border-r bg-card transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b px-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            T
          </div>
          {sidebarOpen && (
            <span className="font-semibold text-lg">Typeset</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full ${
                    sidebarOpen ? "justify-start" : "justify-center"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-3">{item.label}</span>}
                </Button>
              </TooltipTrigger>
              {!sidebarOpen && (
                <TooltipContent side="right">{item.label}</TooltipContent>
              )}
            </Tooltip>
          ))}
        </nav>

        {/* Sidebar Toggle */}
        <div className="border-t p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-card px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="w-64 pl-10"
              />
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-white">
                    3
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Notifications</TooltipContent>
            </Tooltip>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      john@typeset.io
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Clients
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">+2</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Retainers
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">+1</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Hours Used
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">131 / 175</div>
                <Progress value={75} className="h-2 mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Monthly Revenue
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,500</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingDown className="h-3 w-3 text-red-500" />
                  <span className="text-red-500">-5%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-4">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="clients">Clients</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
              </TabsList>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Client
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Add New Client</DialogTitle>
                    <DialogDescription>
                      Fill in the details to add a new client retainer.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Enter company name" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="contact">Contact Person</Label>
                        <Input id="contact" placeholder="Contact name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Email address" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="hours">Retainer Hours</Label>
                        <Select>
                          <SelectTrigger id="hours">
                            <SelectValue placeholder="Select hours" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10">10 hours/month</SelectItem>
                            <SelectItem value="20">20 hours/month</SelectItem>
                            <SelectItem value="40">40 hours/month</SelectItem>
                            <SelectItem value="60">60 hours/month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="rate">Hourly Rate</Label>
                        <Input id="rate" type="number" placeholder="$0" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea id="notes" placeholder="Additional notes..." />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-renew" />
                      <Label htmlFor="auto-renew">Enable auto-renewal</Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Add Client</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Latest updates across all clients
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-center gap-4"
                        >
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              activity.type === "success"
                                ? "bg-green-100 text-green-600"
                                : activity.type === "warning"
                                ? "bg-yellow-100 text-yellow-600"
                                : activity.type === "info"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {activity.type === "success" ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : activity.type === "warning" ? (
                              <AlertCircle className="h-4 w-4" />
                            ) : (
                              <FileText className="h-4 w-4" />
                            )}
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">
                              {activity.action}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {activity.client}
                            </p>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {activity.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Tasks */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Tasks</CardTitle>
                    <CardDescription>
                      Tasks that need your attention
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center gap-4"
                        >
                          <Checkbox
                            id={`task-${task.id}`}
                            defaultChecked={task.completed}
                          />
                          <div className="flex-1 space-y-1">
                            <label
                              htmlFor={`task-${task.id}`}
                              className={`text-sm font-medium cursor-pointer ${
                                task.completed
                                  ? "line-through text-muted-foreground"
                                  : ""
                              }`}
                            >
                              {task.title}
                            </label>
                            <p className="text-xs text-muted-foreground">
                              {task.client}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                task.priority === "high"
                                  ? "destructive"
                                  : task.priority === "medium"
                                  ? "warning"
                                  : "secondary"
                              }
                            >
                              {task.priority}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {task.dueDate}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Help</CardTitle>
                  <CardDescription>
                    Frequently asked questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        How do I add a new client retainer?
                      </AccordionTrigger>
                      <AccordionContent>
                        Click the &quot;New Client&quot; button at the top of the dashboard.
                        Fill in the required information including company name,
                        contact details, and retainer hours.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        What happens when hours are exceeded?
                      </AccordionTrigger>
                      <AccordionContent>
                        When a client exceeds their retainer hours, they will be
                        marked with an &quot;exceeded&quot; status. You can either bill
                        for additional hours or roll them into the next month.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        How do I generate invoices?
                      </AccordionTrigger>
                      <AccordionContent>
                        Go to the Billing section and select the client you want
                        to invoice. You can generate monthly invoices
                        automatically or create custom invoices.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="clients" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Client Retainers</CardTitle>
                  <CardDescription>
                    Manage your client retainer agreements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Hours Used</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clients.map((client) => (
                        <TableRow key={client.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                  {client.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{client.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm">{client.contact}</p>
                              <p className="text-xs text-muted-foreground">
                                {client.email}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>
                                  {client.usedHours} / {client.retainerHours} hrs
                                </span>
                                <span className="text-muted-foreground">
                                  {Math.round(
                                    (client.usedHours / client.retainerHours) *
                                      100
                                  )}
                                  %
                                </span>
                              </div>
                              <Progress
                                value={
                                  (client.usedHours / client.retainerHours) *
                                  100
                                }
                                className="h-2"
                              />
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                client.status === "active"
                                  ? "success"
                                  : "destructive"
                              }
                            >
                              {client.status === "active" ? "Active" : "Exceeded"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Log Hours</DropdownMenuItem>
                                <DropdownMenuItem>Edit Retainer</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  End Retainer
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tasks" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>All Tasks</CardTitle>
                      <CardDescription>
                        Track and manage your project tasks
                      </CardDescription>
                    </div>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Task
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-4 rounded-lg border p-4"
                      >
                        <Checkbox
                          id={`all-task-${task.id}`}
                          defaultChecked={task.completed}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <label
                              htmlFor={`all-task-${task.id}`}
                              className={`font-medium cursor-pointer ${
                                task.completed
                                  ? "line-through text-muted-foreground"
                                  : ""
                              }`}
                            >
                              {task.title}
                            </label>
                            <Badge
                              variant={
                                task.priority === "high"
                                  ? "destructive"
                                  : task.priority === "medium"
                                  ? "warning"
                                  : "secondary"
                              }
                            >
                              {task.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {task.client}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {task.dueDate}
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
