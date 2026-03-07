import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import PageHeader from "@/components/ui/custom/page-header";
import PageLayout from "@/components/ui/custom/page-layout";
import { PostRequestForm } from "@/components/main-route/post-request/post-request-form";

export default function PostRequestPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">
      <div className="max-w-4xl mx-auto space-y-8">
        <CustomBreadcrumb
          links={[
            { name: "Home", href: "/" },
            { name: "Post Request", href: "/post-request", isCurrent: true },
          ]}
        />
        <PageHeader
          title="Post Your Wedding Requirement"
          description="Submit your wedding requirements and get tailored proposals from top vendors."
        />
        <PostRequestForm />
      </div>
    </PageLayout>
  );
}
