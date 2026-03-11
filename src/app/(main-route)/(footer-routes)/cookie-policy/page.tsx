import React from "react"
import PageHeader from "@/components/ui/custom/page-header"
import PageLayout from "@/components/ui/custom/page-layout"
import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb"

export default function CookiePolicyPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Cookie Policy", href: "/cookie-policy", isCurrent: true },
        ]}
      />
      <PageHeader 
        title="Cookie Policy" 
        description="Information about our use of cookies to improve your experience."
      />
      <div className="mt-12 max-w-4xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">What are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device to help us provide a better user 
            experience. They are used to retain user preferences and provide anonymized tracking data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">How We Use Cookies</h2>
          <p>
            We use cookies to keep you logged in, remember your preferences, and understand how 
            you interact with our marketplace. This helps us improve our service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">Types of Cookies</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential:</strong> Necessary for the website to function.</li>
              <li><strong>Analytical:</strong> Help us understand visitor behavior.</li>
              <li><strong>Functional:</strong> Remember choices you make.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4 italic">Managing Cookies</h2>
          <p>
            You can disable cookies in your browser settings. However, some features of 
            our platform may not function properly without them.
          </p>
        </section>
      </div>
    </PageLayout>
  )
}
