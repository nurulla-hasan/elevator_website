"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChangePasswordModal } from "./change-password-modal";
import { Mail, Phone, Lock, UserCircle } from "lucide-react";

export function SettingsList() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <UserCircle className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl font-bold">Account Settings</CardTitle>
          </div>
          <CardDescription>
            Manage your account credentials and contact information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            {/* Email Address */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 border-b border-border/50">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Email Address
                  </span>
                  <span className="text-base font-medium text-foreground">
                    user@example.com
                  </span>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 border-b border-border/50">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Phone Number
                  </span>
                  <span className="text-base font-medium text-foreground">
                    +123 456 7890
                  </span>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                  <Lock className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Password
                  </span>
                  <span className="text-base font-medium text-foreground">
                    ••••••••••••
                  </span>
                </div>
              </div>
              <ChangePasswordModal />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
