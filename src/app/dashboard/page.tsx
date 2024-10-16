import { Button } from "@/components/ui/button";
import CalendarDateRangePicker from "@/components/ui/date-range-picker";
import { generateMeta } from "@/lib/utils";

export async function generateMetadata() {
    return generateMeta({
        title: "Dashboard - Shadcn UI Kit Free",
        description:
            "The default dashboard template, built with React and Tailwind CSS, offers a sleek and efficient interface for monitoring key data and user interactions.",
        canonical: "/default"
    });
}

export default function Page() {
    return (
        <>
            <div className="mb-4 flex items-center justify-between space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <div className="flex items-center space-x-2">
                    <CalendarDateRangePicker />
                    <Button>Download</Button>
                </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
                <div className="lg:col-span-2">
                </div>
                <div className="lg:col-span-2">
                </div>
            </div>
        </>
    );
}
