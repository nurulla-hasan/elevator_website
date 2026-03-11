import React from "react"
import PageHeader from "@/components/ui/custom/page-header"
import PageLayout from "@/components/ui/custom/page-layout"
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb"

export default function PrivacyPolicyPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy", isCurrent: true },
        ]}
      />
      <PageHeader 
        title="Privacy Policy" 
        description="Learn how we protect and handle your personal information."
      />
      <div className="mt-12 max-w-4xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">1. Introduction</h2>
          <p>
            Welcome to WePlan. We are committed to protecting your personal data and your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our marketplace.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">2. Information We Collect</h2>
          <div className="space-y-4">
            <p>We collect information that you provide directly to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create an account or profile</li>
              <li>Book a service or make a purchase</li>
              <li>Sign up as a vendor</li>
              <li>Contact our support team</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">3. How We Use Your Information</h2>
          <p>
            We use your information to facilitate bookings, process payments, provide customer support, 
            and send you important updates about your account or our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information at any time 
            through your account settings or by contacting us.
          </p>
        </section>
      </div>
    </PageLayout>
  )
}
