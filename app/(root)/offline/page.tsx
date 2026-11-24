import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { SavedPages } from "@/components/common/saved-pages";

export const metadata: Metadata = {
  title: "Offline",
  description: "You're offline.",
  robots: { index: false, follow: false },
};

// Shown by the service worker when a page that was never visited is opened
// without an internet connection.
export default function OfflinePage() {
  return (
    <PageContainer
      title="You're offline"
      description="This page hasn't been saved on your device yet. Reconnect to load it, or open one of the pages you've already visited."
    >
      <SavedPages />
    </PageContainer>
  );
}
