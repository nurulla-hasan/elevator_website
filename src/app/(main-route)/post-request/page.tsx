import CustomBreadcrumb from "@/components/ui/custom/custom-breadcrumb";
import PageHeader from "@/components/ui/custom/page-header";
import PageLayout from "@/components/ui/custom/page-layout";
import { PostRequestForm } from "@/components/main-route/post-request/post-request-form";

export default function PostRequestPage() {
  return (
    <PageLayout paddingSize="small" className="screen-height">
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Post Request", href: "/post-request", isCurrent: true },
        ]}
      />
      <div className="flex flex-col gap-8 pb-12">
        <PageHeader
          title="Post Your Wedding Requirement"
          description="Submit your wedding requirements and get tailored proposals from top vendors."
        />
        <PostRequestForm />
      </div>
    </PageLayout>
  );
}
