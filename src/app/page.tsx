"use client";

import { useState } from "react";
import {
  BookOpen,
  Cloud,
  Pencil,
  Palette,
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  Link,
  Type,
  ImageIcon,
  Zap,
  X,
  Copy,
  Trash2,
  Sparkles,
  Monitor,
  Tablet,
  Smartphone,
  Code,
  Share2,
  Download,
  ChevronDown,
  MoreHorizontal,
  GripVertical,
  ChevronUp,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Home() {
  const [activeView, setActiveView] = useState<"create" | "design">("create");
  const [activeDevice, setActiveDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  return (
    <div className="flex h-screen flex-col bg-[#f3f4f6]">
      {/* Top Navigation Bar */}
      <header className="flex h-14 items-center justify-between border-b bg-white px-4">
        {/* Left section */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/UFfWs8OKstTGqHK6sgAfYbb7zRo.png"
              alt="Typeset"
              className="h-7 w-7 rounded"
            />
            <Badge variant="pro" size="sm" className="h-4">
              PRO
            </Badge>
          </div>

          {/* Combined: Book dropdown | Project Name | Cloud icon */}
          <div className="flex items-center h-8 rounded-lg border bg-white shadow-sm overflow-hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-center h-full px-2.5 border-r hover:bg-secondary/50 transition-colors">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <ChevronDown className="h-3 w-3 text-muted-foreground ml-0.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem>Projects</DropdownMenuItem>
                <DropdownMenuItem>Templates</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-sm font-medium text-foreground px-3 border-r">Project Name</span>
            <button className="flex items-center justify-center h-full px-2.5 hover:bg-secondary/50 transition-colors">
              <Cloud className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Center section - View Toggle - Single contained toggle group */}
        <ToggleGroup
          type="single"
          variant="primary"
          value={activeView}
          onValueChange={(value) => value && setActiveView(value as "create" | "design")}
        >
          <ToggleGroupItem value="create" className="px-4 h-7 gap-2">
            <Pencil className="h-4 w-4" />
            Create
          </ToggleGroupItem>
          <ToggleGroupItem value="design" className="px-4 h-7 gap-2">
            <Palette className="h-4 w-4" />
            Design
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* User Avatars Stack */}
          <div className="flex -space-x-2">
            <Avatar className="h-7 w-7 border-2 border-white">
              <AvatarImage src="https://i.pravatar.cc/100?img=1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="h-7 w-7 border-2 border-white">
              <AvatarImage src="https://i.pravatar.cc/100?img=2" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="h-7 w-7 border-2 border-white">
              <AvatarImage src="https://i.pravatar.cc/100?img=3" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </div>

          {/* Add User */}
          <Button
            variant="ghost"
            className="h-6 w-6 rounded-full border-2 border-dashed border-primary text-primary p-0"
          >
            <Plus className="h-3 w-3" />
          </Button>

          {/* Notification */}
          <Button variant="ghost" size="icon-xs" className="relative text-muted-foreground">
            <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary" />
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </Button>

          <Separator orientation="vertical" className="h-5" />

          {/* Share */}
          <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground h-8">
            <Share2 className="h-4 w-4" />
            Share
          </Button>

          {/* Export */}
          <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground h-8">
            <Download className="h-4 w-4" />
            Export
          </Button>

          {/* Present Button */}
          <Button size="sm" className="gap-1.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Present
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>
      </header>

      {/* Secondary Toolbar */}
      <div className="flex h-11 items-center gap-0.5 border-b px-4 bg-white shadow-sm">
        {/* Undo/Redo */}
        <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
          <Undo2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
          <Redo2 className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-5 mx-2" />

        {/* Text Style Dropdown */}
        <Select defaultValue="title">
          <SelectTrigger className="w-20 h-7 border-0 bg-transparent text-xs gap-1">
            <Type className="h-3.5 w-3.5 text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="heading">Heading</SelectItem>
            <SelectItem value="body">Body</SelectItem>
          </SelectContent>
        </Select>

        <Separator orientation="vertical" className="h-5 mx-2" />

        {/* Formatting Buttons */}
        <Button variant="secondary" size="icon-xs" className="bg-foreground text-white">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
          <Underline className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-5 mx-2" />

        {/* List Buttons */}
        <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
          <AlignLeft className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-5 mx-2" />

        {/* Plus and Link */}
        <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
          <Link className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Content Editor */}
        <div className="w-[440px] border-r bg-[#f8f9fa] p-4 overflow-auto">
          {/* Content Block Card */}
          <div className="bg-white rounded-lg border shadow-sm">
            {/* Block Header */}
            <div className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center gap-2">
                <Badge variant="accent" className="h-8 px-3 flex items-center">
                  Hero
                </Badge>
                <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
                  <Copy className="h-3.5 w-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
              <Button
                size="icon-sm"
                className="rounded bg-[#8a38f5] text-white shadow-none hover:bg-[#7a2de5]"
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>

            {/* Content Fields */}
            <div className="p-4 space-y-3">
              {/* Heading Field */}
              <div className="flex items-start gap-3 p-3 rounded-md border bg-secondary/30">
                <div className="flex items-center gap-2 shrink-0">
                  <GripVertical className="h-4 w-4 text-muted-foreground/40 cursor-grab" />
                  <div className="p-1 rounded bg-secondary">
                    <Type className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <Input
                    className="border-0 bg-transparent p-0 h-auto text-base font-semibold placeholder:text-muted-foreground focus-visible:ring-0"
                    defaultValue="Unleash Your Team's Full Potential"
                  />
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                  <Button variant="ghost" className="h-5 w-5 p-0 text-muted-foreground">
                    <ChevronUp className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" className="h-5 w-5 p-0 text-muted-foreground">
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" className="h-5 w-5 p-0 text-muted-foreground">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Description Field */}
              <div className="flex items-start gap-3 px-3">
                <div className="p-1 rounded bg-secondary shrink-0 mt-0.5">
                  <Type className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Streamline your workflow, boost productivity, and collaborate
                  effortlessly with Taskly—your all-in-one project management solution.
                </p>
              </div>

              {/* CTA Button Field */}
              <div className="flex items-center gap-3 px-3">
                <div className="p-1 rounded bg-secondary shrink-0">
                  <Link className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white">
                    <Zap className="h-3.5 w-3.5 text-accent" />
                    <span className="text-sm font-medium">Start Your Free Trial</span>
                    <button className="h-4 w-4 text-muted-foreground hover:text-foreground">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                  <button className="h-6 w-6 rounded-full border-2 border-dashed border-accent text-accent flex items-center justify-center hover:bg-accent/10">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Image Field */}
              <div className="flex items-start gap-3 px-3">
                <div className="p-1 rounded bg-secondary shrink-0">
                  <ImageIcon className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="w-24 h-16 rounded-md overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <ImageIcon className="h-5 w-5 text-muted-foreground/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Live Preview */}
        <div className="flex-1 bg-[#e5e7eb] flex flex-col">
          {/* Preview Toolbar */}
          <div className="flex items-center justify-center gap-3 px-4 py-2 bg-white border-b">
            {/* Device Toggle */}
            <ToggleGroup
              type="single"
              variant="contained"
              size="icon"
              value={activeDevice}
              onValueChange={(value) => value && setActiveDevice(value as "desktop" | "tablet" | "mobile")}
            >
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

            {/* Width Indicator */}
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Code className="h-3.5 w-3.5" />
              <span>1400px</span>
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="bg-white rounded-xl shadow-lg border mx-auto max-w-4xl overflow-hidden">
              {/* Website Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-sm">STRAFE CREATIVE</span>
                </div>
                <nav className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span>Products</span>
                  <span>Resources</span>
                  <span>Pricing</span>
                </nav>
                <Button size="sm" className="bg-primary text-white rounded-full px-4 text-xs">
                  Call to action
                </Button>
              </div>

              {/* Hero Section */}
              <div className="px-12 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Unleash Your Team&apos;s
                  <br />
                  <span className="text-primary">Full Potential</span>
                </h1>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Streamline your workflow, boost productivity, and collaborate effortlessly
                  with Taskly—your all-in-one project management solution.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <Button className="bg-primary text-white rounded-full px-6">
                    Start Your Free Trial
                  </Button>
                  <Button variant="outline" className="rounded-full px-6">
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="px-12 pb-12">
                <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center border">
                  <div className="flex gap-8">
                    <div className="w-32 h-40 bg-white rounded-lg shadow-md" />
                    <div className="w-48 h-40 bg-white rounded-lg shadow-md" />
                  </div>
                </div>
              </div>

              {/* Company Logos */}
              <div className="bg-secondary/30 py-6 px-12">
                <p className="text-xs text-center text-muted-foreground mb-4">Trusted by these companies</p>
                <div className="flex items-center justify-center gap-8 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1"><span className="text-lg">●</span> Boltshift</span>
                  <span className="flex items-center gap-1"><span className="text-lg">◐</span> Lightbox</span>
                  <span className="flex items-center gap-1"><span className="text-lg">◆</span> FeatherDev</span>
                  <span className="flex items-center gap-1"><span className="text-lg">✦</span> Spherule</span>
                  <span className="flex items-center gap-1"><span className="text-lg">◎</span> GlobalBank</span>
                </div>
              </div>

              {/* Features Section */}
              <div className="px-12 py-12">
                <h2 className="text-2xl font-bold text-center mb-8">Our Features</h2>
                <div className="grid grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-xl overflow-hidden border">
                      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200" />
                      <div className="p-4">
                        <h3 className="font-semibold text-sm mb-1">UX review presentations</h3>
                        <p className="text-xs text-muted-foreground">
                          How do you create compelling presentations that wow your colleagues and impress your managers?
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Far Right Panel - Thumbnails (Dark) */}
        <div className="w-48 bg-slate-900 p-3 overflow-auto">
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-lg overflow-hidden border-2 ${
                  i === 1 ? "border-primary" : "border-transparent"
                }`}
              >
                <div className="bg-white p-2 h-28">
                  <div className="h-full rounded bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-[8px] text-muted-foreground">
                    Page {i}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
