'use client'

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const disableLayoutRoutes = ['/blog'];
    const showNavAndFooter = !disableLayoutRoutes.includes(pathname);

    return (
        <>
            <NavBar />
            {children}
            {showNavAndFooter && <Footer />}
        </>
    );
}