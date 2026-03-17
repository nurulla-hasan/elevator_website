import React from "react";
import { CheckCircle2, Clock, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/ui/custom/page-layout";

export const VendorStatus: React.FC = () => {
    return (
        <PageLayout className="max-w-2xl min-h-[60vh] flex flex-col justify-center">
            <div className="space-y-8 text-center">
                {/* Icon & Status */}
                <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-25" />
                    <div className="relative bg-primary/5 rounded-full p-6 border border-primary/20">
                        <Clock className="w-12 h-12 text-primary" />
                    </div>
                </div>

                <div className="space-y-3">
                    <h1 className="text-3xl text-primary font-semibold tracking-tight">
                        Account Pending Approval
                    </h1>
                    <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
                        Thank you for your application! Our team is currently reviewing your profile and business details. 
                        This usually takes <span className="text-primary">24-48 hours</span>.
                    </p>
                </div>

                {/* Info Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                    <div className="bg-muted/30 border border-border/50 rounded-2xl p-4 flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Step 1</p>
                            <p className="text-sm">Form Submitted</p>
                        </div>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                            <Search className="w-4 h-4 text-primary animate-pulse" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] uppercase tracking-wider text-primary">Step 2</p>
                            <p className="text-sm">Under Review</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="bg-muted/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-border/50">
                        <div className="space-y-1 text-center sm:text-left">
                            <h4 className="text-primary flex items-center gap-2 justify-center sm:justify-start">
                                <Mail className="w-4 h-4" /> Need Help?
                            </h4>
                            <p className="text-xs text-muted-foreground">
                                Contact our support team for any queries.
                            </p>
                        </div>
                        <a href="mailto:support@weplan.com" className="w-full sm:w-auto">
                            <Button variant="outline" className="rounded-full px-8 w-full">
                                Contact Support
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
