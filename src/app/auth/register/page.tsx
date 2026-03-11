/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Lock } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const registerSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export default function RegisterPage() {
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema as any),
    defaultValues: {
      email: "",
      phone: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof registerSchema>) {
    setIsLoading(true)
    console.log(values)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0 py-4">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-112.5 px-4">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="relative h-16 w-16 overflow-hidden rounded-full shadow-md border-2 border-white dark:border-zinc-900">
            <Image
              src="/auth-logo.png"
              alt="Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">Create Your Account</h1>
            <p className="text-xs text-muted-foreground">
              Join WeddingHub and start planning your perfect wedding
            </p>
          </div>
        </div>

        <div className="grid gap-4 rounded-2xl border bg-card p-6 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
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
                        placeholder="you@example.com" 
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
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <FormItem data-invalid={fieldState.invalid}>
                    <FormLabel>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+1 (555) 123-4567" 
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

              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem data-invalid={fieldState.invalid}>
                    <FormLabel>
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Password
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Create password" 
                        {...field} 
                        disabled={isLoading} 
                        aria-invalid={fieldState.invalid}
                        autoComplete="new-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </Form>

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-primary hover:underline underline-offset-4"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* <div className="text-center">
          <Link
            href="/auth/vendor"
            className="group inline-flex items-center text-sm font-medium text-muted-foreground transition-colors"
          >
            Are you a vendor?{" "}
            <span className="ml-1 font-semibold text-primary group-hover:underline">
              Join as a vendor
            </span>
            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div> */}
      </div>
    </div>
  )
}
