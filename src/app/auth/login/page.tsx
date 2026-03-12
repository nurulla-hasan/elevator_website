/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Check } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const countries = [
  { label: "Pakistan", value: "+92", code: "PK" },
  { label: "United States", value: "+1", code: "US" },
  { label: "United Kingdom", value: "+44", code: "GB" },
  { label: "United Arab Emirates", value: "+971", code: "AE" },
  { label: "Saudi Arabia", value: "+966", code: "SA" },
  { label: "Canada", value: "+1", code: "CA" },
  { label: "Australia", value: "+61", code: "AU" },
  { label: "India", value: "+91", code: "IN" },
  { label: "Bangladesh", value: "+880", code: "BD" },
]

const phoneSchema = z.object({
  countryCode: z.string().min(1),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
})

const emailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false)

  const phoneForm = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema as any),
    defaultValues: {
      countryCode: "+92",
      phone: "",
    },
  })

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema as any),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onPhoneSubmit(values: z.infer<typeof phoneSchema>) {
    setIsLoading(true)
    console.log(values)
    setTimeout(() => setIsLoading(false), 2000)
  }

  function onEmailSubmit(values: z.infer<typeof emailSchema>) {
    setIsLoading(true)
    console.log(values)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-112.5 p-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full shadow-lg border-4 border-white dark:border-zinc-900">
            <Image
              src="/auth-logo.png"
              alt="Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to continue planning your perfect wedding
            </p>
          </div>
        </div>

        <div className="grid gap-6 rounded-2xl border bg-card p-6 shadow-sm">
          <Tabs defaultValue="phone" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 p-1">
              <TabsTrigger value="phone">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </div>
              </TabsTrigger>
              <TabsTrigger value="email">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="phone">
              <Form {...phoneForm}>
                <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="grid gap-4">
                  <div className="flex gap-2">
                    <FormField
                      control={phoneForm.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="flex items-center gap-2">
                            Code
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "w-16 justify-between px-3",
                                    !field.value && "text-muted-foreground"
                                  )}
                                  disabled={isLoading}
                                >
                                  {field.value
                                    ? countries.find(
                                        (country) => country.value === field.value
                                      )?.value
                                    : "+92"}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-50 p-0" align="start">
                              <Command>
                                <CommandInput placeholder="Search country..." />
                                <CommandList>
                                  <CommandEmpty>No country found.</CommandEmpty>
                                  <CommandGroup>
                                    {countries.map((country) => (
                                      <CommandItem
                                        value={country.label}
                                        key={country.label}
                                        onSelect={() => {
                                          phoneForm.setValue("countryCode", country.value)
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            country.value === field.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        <span className="flex-1">{country.label}</span>
                                        <span className="text-muted-foreground">{country.value}</span>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={phoneForm.control}
                      name="phone"
                      render={({ field, fieldState }) => (
                        <FormItem className="flex-1" data-invalid={fieldState.invalid}>
                          <FormLabel>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              Phone Number
                            </div>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="345-678-9000" 
                              {...field} 
                              disabled={isLoading} 
                              aria-invalid={fieldState.invalid}
                              autoComplete="tel"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} size="lg">
                    {isLoading ? "Sending OTP..." : "Send OTP"}
                  </Button>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="email">
              <Form {...emailForm}>
                <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="grid gap-4">
                  <FormField
                    control={emailForm.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <FormItem data-invalid={fieldState.invalid}>
                        <FormLabel>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Email Address
                          </div>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="name@example.com" 
                            {...field} 
                            disabled={isLoading} 
                            aria-invalid={fieldState.invalid}
                            autoComplete="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={emailForm.control}
                    name="password"
                    render={({ field, fieldState }) => (
                      <FormItem data-invalid={fieldState.invalid}>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            {...field} 
                            disabled={isLoading} 
                            placeholder="Enter your password" 
                            aria-invalid={fieldState.invalid}
                            autoComplete="current-password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} size="lg">
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="font-semibold text-primary hover:underline underline-offset-4"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
