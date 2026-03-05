"use client"

import React from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function VenueFilters() {
  return (
    <div className="absolute top-6 right-6 z-30">
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline"
            className="h-12 px-6 rounded-full shadow-lg flex items-center gap-3"
          >
            <Search className="text-primary" />
            <span className="font-bold">Search & Filters</span>
            <div className="h-4 w-px bg-border mx-1" />
            <SlidersHorizontal className="text-muted-foreground" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">Find Your Venue</DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col gap-6 py-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground">Location or Name</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Where are you planning?" 
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-muted-foreground">Quick Filters</label>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start font-semibold">
                  Price Range
                </Button>
                <Button variant="outline" className="justify-start font-semibold">
                  Capacity
                </Button>
                <Button variant="outline" className="justify-start font-semibold">
                  Venue Type
                </Button>
                <Button variant="outline" className="justify-start font-semibold">
                  Availability
                </Button>
              </div>
            </div>

            <Button className="w-full h-12 font-bold">
              Search Venues
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
