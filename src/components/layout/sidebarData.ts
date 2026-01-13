import {
    LayoutDashboard,
    User,
    Package,
    Plus,
    AlertTriangle,
    Layers,
    Tag,
    Box,
    Scale,
    Sliders,
    Package as Packagepath,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface SidebarItem {
    name: string;
    icon: LucideIcon;
    active?: boolean;
    path?: string;
}

export interface SidebarSection {
    title: string;
    items: SidebarItem[];
}
export const sidebarData: SidebarSection[] = [
    {
        title: "Main",
        items: [
            {
                name: "Dashboard",
                icon: LayoutDashboard,
                path: "/dashboard",
            },
            {
                name: "Super Admin ",
                icon: User,
                path: "/super-admin",
            },
        ],
    },
    {
        title: "Inventory",
        items: [
            {
                name: "Products",
                icon: Package,
                path: "/products",
            },
            {
                name: "Create Product",
                icon: Plus,
                path: "/create-product",
            },
            {
                name: "Expired Products",
                icon: AlertTriangle,
                path: "/expired-products",
            },
            {
                name: "Low stocks",
                icon: Layers,
                path: "/low-stocks",
            },
            {
                name: "Categories",
                icon: Tag,
                path: "/categories",
            },
            {
                name: "Sub Category",
                icon: Box,
                path: "/sub-categories",
            },
            {
                name: "Brands",
                icon: Packagepath,
                path: "/brands",
            },
            {
                name: "Units",
                icon: Scale,
                path: "/units",
            },
            {
                name: "Variant Attributes",
                icon: Sliders,
                path: "/variant-attributes",
            },
        ],
    },
    {
        title: "Stock",
        items: [
            {
                name: "Manage Stock",
                icon: Scale,
                path: "/manage-stock",
            },
            {
                name: "Stock Adjustment",
                icon: Sliders,
                path: "/stock-adjustment",
            },
            {
                name: "Stock Transfer",
                icon: Packagepath,
                path: "/stock-transfer",
            }
        ]
    }
];
