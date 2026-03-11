"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChangePasswordModal } from "./change-password-modal";
import { EditProfileModal } from "./edit-profile-modal";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  Lock,
  UserCircle,
  Bell,
  MapPin,
  User,
} from "lucide-react";

export function SettingsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <UserCircle className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl font-semibold">
              Account Settings
            </CardTitle>
          </div>
          <CardDescription>
            Manage your personal profile and account credentials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            {/* Full Name */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 border-b border-border/50">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                  <User className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Full Name
                  </span>
                  <span className="text-base font-medium text-foreground">
                    Nurulla Hasan
                  </span>
                </div>
              </div>
              <EditProfileModal
                defaultValues={{
                  firstName: "Nurulla",
                  lastName: "Hasan",
                  phone: "+123 456 7890",
                }}
              />
            </div>

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

      {/* Preferences Section */}
      <div>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl font-semibold">
                App Preferences
              </CardTitle>
            </div>
            <CardDescription>
              Control your notifications and location permissions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-1">
              {/* Push Notifications */}
              <div className="flex items-center justify-between py-4 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <Label
                      htmlFor="notifications"
                      className="text-base font-medium text-foreground cursor-pointer"
                    >
                      Notifications
                    </Label>
                    <span className="text-sm text-muted-foreground">
                      Receive alerts about new quotes and bookings.
                    </span>
                  </div>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>

              {/* Location Access */}
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <Label
                      htmlFor="location"
                      className="text-base font-medium text-foreground cursor-pointer"
                    >
                      Location Services
                    </Label>
                    <span className="text-sm text-muted-foreground">
                      Enable location for better vendor suggestions.
                    </span>
                  </div>
                </div>
                <Switch id="location" defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
