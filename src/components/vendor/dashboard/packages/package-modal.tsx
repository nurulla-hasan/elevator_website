"use client";

import { useState } from "react";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import PackageForm from "./package-form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PackageModalProps {
  trigger?: React.ReactNode;
  initialType?: string;
  mode?: "add" | "edit";
}

export function PackageModal({ 
  trigger, 
  initialType = "Basic",
  mode = "add" 
}: PackageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(initialType);

  return (
    <ModalWrapper
      open={isOpen}
      onOpenChange={setIsOpen}
      title={mode === "add" ? "Create New Package" : `Edit ${selectedType} Package`}
      description={mode === "add" ? "Fill in the details below to create a new service package." : "Update your service package details below."}
      actionTrigger={trigger || (
        <Button>
          <Plus />
          Add Package
        </Button>
      )}
    >
      <div className="p-6">
        <Tabs 
          value={selectedType} 
          onValueChange={setSelectedType} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="Basic">Basic</TabsTrigger>
            <TabsTrigger value="Standard">Standard</TabsTrigger>
            <TabsTrigger value="Premium">Premium</TabsTrigger>
          </TabsList>
          
          <div className="overflow-y-auto max-h-[70vh]">
            <TabsContent value="Basic">
              <PackageForm type="Basic" />
            </TabsContent>
            <TabsContent value="Standard">
              <PackageForm type="Standard" />
            </TabsContent>
            <TabsContent value="Premium">
              <PackageForm type="Premium" />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </ModalWrapper>
  );
}
