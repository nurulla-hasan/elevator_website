"use client";

import React, { useState } from "react";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  MapPin, 
  DollarSign,
  CheckCircle2,
  XCircle,
  Eye
} from "lucide-react";
import { Job } from "./job-columns";
import { ScrollArea } from "@/components/ui/scroll-area";

interface JobDetailsModalProps {
  job: Job;
}

export function JobDetailsModal({ job }: JobDetailsModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title={`Job Details - #${job.id}`}
      description={`Requested on ${job.requestedAt}`}
      actionTrigger={
        <Button variant="ghost" size="sm">
          <Eye />
          View
        </Button>
      }
      showClose
    >
      <ScrollArea className="max-h-[70vh]">
        <div className="p-6 space-y-6">
          {/* Status Section */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground">Current Status</h4>
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant={
                  job.status === "new" ? "info" : 
                  job.status === "accepted" ? "accepted" : 
                  job.status === "in-progress" ? "progress" : 
                  job.status === "completed" ? "success" : 
                  "rejected"
                }
                className="px-4 py-1.5 font-medium flex items-center gap-2 capitalize"
              >
                {job.status === "new" || job.status === "in-progress" ? (
                  <Clock className="h-4 w-4" />
                ) : job.status === "rejected" ? (
                  <XCircle className="h-4 w-4" />
                ) : (
                  <CheckCircle2 className="h-4 w-4" />
                )}
                {job.status === "in-progress" ? "In Progress" : job.status}
              </Badge>
              
              {job.status === "new" && (
                <>
                  <Button size="sm" variant="success">
                    Accept Job
                  </Button>
                  <Button size="sm" variant="destructive">
                    Reject Job
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Client Information */}
          <Card>
            <CardContent className="grid gap-6">
              <div className="flex items-center gap-2 text-primary font-medium">
                <User className="h-5 w-5" />
                <span>Client Information</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{job.clientName}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <p className="font-medium">{job.clientEmail}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <p className="font-medium">{job.clientPhone}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Details */}
          <Card>
            <CardContent className="grid gap-6">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Calendar className="h-5 w-5" />
                <span>Event Details</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Event Type</p>
                  <p className="font-medium">{job.eventType}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Event Date</p>
                  <p className="font-medium">{job.eventDate}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Preferred Time</p>
                  <p className="font-medium">{job.preferredTime}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Guest Count</p>
                  <p className="font-medium">{job.guestCount}</p>
                </div>
                <div className="col-span-full space-y-1">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <p className="font-medium">{job.location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Package & Budget */}
          <Card>
            <CardContent className="grid gap-6">
              <div className="flex items-center gap-2 text-primary font-medium">
                <DollarSign className="h-5 w-5" />
                <span>Package & Budget</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Selected Package</p>
                  <p className="font-medium">{job.packageName}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Budget</p>
                  <p className="font-medium text-lg text-primary">{job.budget}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </ModalWrapper>
  );
}
