import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: 'Freshly Dashboard',
    description: 'Freshly dashboard'
};

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="w-full lg:ps-[--sidebar-width]">
                <Header />
                <main className={cn("min-h-full p-4")}>{children}</main>
            </div>
        </div>
    );
}