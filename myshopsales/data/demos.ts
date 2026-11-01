export type DemoStatus = "available" | "requires-setup" | "confirm-scope";

export type DemoScreenshot = {
    src: string;
    alt: string;
    title: string;
    caption: string;
};

export type Demo = {
    slug: string;
    title: string;
    description: string;
    href: string;
    category: string;
    statusKey: DemoStatus;
    status: string;
    thumbnailSrc: string;
    thumbnailAlt: string;
    videoSrc: string;
    posterSrc: string;
    screenshots: DemoScreenshot[];
};

export const demos: Demo[] = [
    {
        slug: "online-shop",
        title: "Online shop",
        description:
            "What your customers see: browse products, open a product to see its details, add items to a cart, and move on to checkout from a phone or laptop.",
        href: "/demos/online-shop",
        category: "Storefront",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/productlisting.png",
        thumbnailAlt:
            "RazeStore online shop storefront showing product listings and navigation.",
        videoSrc: "/videos/completestorefront.mp4",
        posterSrc: "/images/storefrontposter.png",
        screenshots: [
            {
                src: "/images/productlisting.png",
                alt: "RazeStore online shop product listing with sample product entries.",
                title: "Product listing",
                caption:
                    "A grid of products with names, images, and prices as customers browse them.",
            },
            {
                src: "/images/productdetails.png",
                alt: "RazeStore product detail page showing a single item's photos and price.",
                title: "Product details",
                caption:
                    "Individual product page with images, description, and the add-to-cart action.",
            },
            {
                src: "/images/shoppingcart.png",
                alt: "RazeStore shopping cart with items ready for checkout.",
                title: "Shopping cart",
                caption:
                    "Cart view showing selected items, quantities, and the proceed-to-checkout action.",
            },
        ],
    },
    {
        slug: "mpesa",
        title: "M-Pesa checkout",
        description:
            "The STK Push checkout flow: cart, checkout, phone prompt, and the resulting order status reflected in the admin. Requires your Daraja credentials and a live test before it is used in production.",
        href: "/demos/mpesa",
        category: "Payments",
        statusKey: "requires-setup",
        status: "Requires setup",
        thumbnailSrc: "/images/mpesacheckoutposter.png",
        thumbnailAlt:
            "RazeStore M-Pesa checkout screen requesting an STK Push from the customer.",
        videoSrc: "/videos/mpesacheckout.mp4",
        posterSrc: "/images/mpesacheckoutposter.png",
        screenshots: [
            {
                src: "/images/stkpush.jpeg",
                alt: "RazeStore checkout screen requesting an M-Pesa STK Push.",
                title: "Requesting STK Push",
                caption:
                    "The customer confirms their order and requests an M-Pesa STK Push from the checkout screen.",
            },
            {
                src: "/images/successfulpayment.png",
                alt: "RazeStore order status showing a successful M-Pesa payment.",
                title: "Successful payment",
                caption:
                    "When the payment succeeds, the order status updates in the admin. Only shown once a genuine capture is supplied.",
            },
            {
                src: "/images/cancelledpayment.png",
                alt: "RazeStore order status showing a cancelled M-Pesa payment.",
                title: "Cancelled payment",
                caption:
                    "When the payment is cancelled or fails, the order status reflects that outcome. Only shown once a genuine capture is supplied.",
            },
        ],
    },
    {
        slug: "shop-management",
        title: "Shop management",
        description:
            "The admin behind the shop: orders, products, categories, stock, and customer details in one place, with no code required.",
        href: "/demos/shop-management",
        category: "Admin",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/ordersadmin.png",
        thumbnailAlt:
            "RazeStore admin order list showing recent orders and their statuses.",
        videoSrc: "/videos/shopmanagement.mp4",
        posterSrc: "/images/ordersadmin.png",
        screenshots: [
            {
                src: "/images/ordersadmin.png",
                alt: "RazeStore admin order list showing recent orders and their statuses.",
                title: "Orders",
                caption:
                    "Review incoming orders, open an order to see its details, and update its status as you fulfil it.",
            },
            {
                src: "/images/productsadmin.png",
                alt: "RazeStore admin product list with names, prices, and stock levels.",
                title: "Products",
                caption:
                    "Add, edit, or remove products, upload images, and set prices without touching any code.",
            },
            {
                src: "/images/categorisadmin.png",
                alt: "RazeStore admin category management screen.",
                title: "Categories",
                caption:
                    "Organize products into categories so customers can find things quickly on the storefront.",
            },
            {
                src: "/images/inventoryadmin.png",
                alt: "RazeStore admin inventory view showing stock quantities.",
                title: "Stock and inventory",
                caption:
                    "See current stock levels and adjust quantities as items sell or get restocked.",
            },
            {
                src: "/images/customersadmin.png",
                alt: "RazeStore admin customer view showing customer details for recent orders.",
                title: "Customers",
                caption:
                    "See the customer details attached to orders, such as name, phone number, and delivery information.",
            },
        ],
    },
    {
        slug: "business-insights",
        title: "Business insights",
        description:
            "Reports drawn from your own shop data: sales summary, top products, and order status overview. An optional AI assistant is described on the demo page and requires a provider API key to run.",
        href: "/demos/business-insights",
        category: "Reports",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/sales.png",
        thumbnailAlt:
            "RazeStore business insights dashboard with sample order and sales summaries.",
        videoSrc: "/videos/businessinsights.mp4",
        posterSrc: "/images/sales.png",
        screenshots: [
            {
                src: "/images/sales.png",
                alt: "RazeStore sales summary report with sample figures.",
                title: "Sales summary",
                caption:
                    "Totals for a chosen period, showing sales value and order count. Figures shown are sample data, not real customer data.",
            },
            {
                src: "/images/topproducts.png",
                alt: "RazeStore top products report with sample figures.",
                title: "Top products",
                caption:
                    "Which products sold most in the selected period. Figures shown are sample data, not real customer data.",
            },
            {
                src: "/images/ordersstatusoverview.png",
                alt: "RazeStore order status summary with sample figures.",
                title: "Order status overview",
                caption:
                    "A breakdown of recent orders by status. Figures shown are sample data, not real customer data.",
            },
            {
                src: "/images/customerai.png",
                alt: "RazeStore AI assistant panel shown with sample prompts and replies.",
                title: "AI assistant",
                caption:
                    "The optional AI assistant panel. Requires a supported provider API key to run. Prompts and replies shown are sample data.",
            },
        ],
    },
    {
        slug: "integrations",
        title: "WhatsApp and social integrations",
        description:
            "Linking the shop to WhatsApp, email, AI providers, and social accounts you already use. Each integration requires its own account access, credentials, and live testing before it is presented as working.",
        href: "/demos/integrations",
        category: "Integrations",
        statusKey: "requires-setup",
        status: "Requires setup",
        thumbnailSrc: "/images/tiktokbusiness.png",
        thumbnailAlt:
            "RazeStore admin integration settings screen showing configuration fields.",
        videoSrc: "/videos/integrations.mp4",
        posterSrc: "/images/tiktokbusiness.png",
        screenshots: [
            {
                src: "/images/whatsapadmin.png",
                alt: "RazeStore admin WhatsApp integration settings screen showing configuration fields.",
                title: "WhatsApp integration",
                caption:
                    "Where the WhatsApp Business API credentials, phone number, and message templates are entered. Keys are stored on the server, not shown to customers.",
            },
            {
                src: "/images/tiktokbusiness.png",
                alt: "RazeStore admin social media management screen showing connected platforms and their status.",
                title: "Social media management",
                caption:
                    "Where the social accounts you use — Facebook, Instagram, and others — are linked. Each shows whether it is connected, unconfigured, or in error.",
            },
            {
                src: "/images/socialmanagement.png",
                alt: "RazeStore admin TikTok Business integration screen showing configuration fields.",
                title: "TikTok Business",
                caption:
                    "Where the TikTok Business account is authorised and its access token stored. Automated posting or content pull only works after this is configured and tested.",
            },
        ],
    },
    {
        slug: "discounts",
        title: "Discounts and promotions",
        description:
            "Create discount codes and promotions customers can apply at checkout. Set a percentage or fixed amount off, choose which products or categories it applies to, and set a start and end date.",
        href: "/demos/discounts",
        category: "Marketing",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/discountsposter.png",
        thumbnailAlt:
            "RazeStore admin discount list showing active and scheduled promotions.",
        videoSrc: "/videos/discount.mp4",
        posterSrc: "/images/discountsposter.png",
        screenshots: [
            {
                src: "/images/discountlist.png",
                alt: "RazeStore admin discount list showing active and scheduled promotions.",
                title: "Discount list",
                caption:
                    "All active, scheduled, and expired discounts in one place, with their code, type, and validity window.",
            },
            {
                src: "/images/discountcreate.png",
                alt: "RazeStore admin create-discount form with code, amount, and date fields.",
                title: "Create a discount",
                caption:
                    "Set the code, percentage or fixed amount, which products or categories it applies to, and when it starts and ends.",
            },
            {
                src: "/images/discountcheckout.png",
                alt: "RazeStore storefront checkout showing a discount code applied to the order.",
                title: "Applying at checkout",
                caption:
                    "Customers enter the code at checkout and the order total updates to reflect the discount, subject to the rules you set.",
            },
        ],
    },
    {
        slug: "reviews",
        title: "Reviews and ratings",
        description:
            "Let customers leave a star rating and written review on products they have bought. Moderate new reviews from the admin before they appear on the storefront.",
        href: "/demos/reviews",
        category: "Storefront",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/reviewsposter.png",
        thumbnailAlt:
            "RazeStore admin reviews moderation screen showing recent customer reviews.",
        videoSrc: "/videos/reviews.mp4",
        posterSrc: "/images/reviewsposter.png",
        screenshots: [
            {
                src: "/images/reviewsposter.png",
                alt: "RazeStore admin reviews moderation screen showing recent customer reviews.",
                title: "Review moderation",
                caption:
                    "See incoming reviews with their rating, product, and text, and approve or reject each one before it appears on the storefront.",
            },
            {
                src: "/images/productsreviews.png",
                alt: "RazeStore product page showing approved customer reviews and an average rating.",
                title: "Reviews on the product page",
                caption:
                    "Approved reviews appear on the product page with the average star rating, so shoppers can see what other customers said.",
            },
        ],
    },
    {
        slug: "shipping",
        title: "Shipping and delivery",
        description:
            "Set up delivery zones with their own rates, and choose which zones each product can ship to. At checkout, the delivery fee is added to the order based on the customer's location.",
        href: "/demos/shipping",
        category: "Fulfilment",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/shippingzones.png",
        thumbnailAlt:
            "RazeStore admin shipping zones screen showing delivery regions and rates.",
        videoSrc: "/videos/shipping.mp4",
        posterSrc: "/images/shippingzones.png",
        screenshots: [
            {
                src: "/images/shippingzones.png",
                alt: "RazeStore admin shipping zones screen showing delivery regions and rates.",
                title: "Shipping zones",
                caption:
                    "Define the zones you deliver to and the delivery fee for each one.",
            },
            {
                src: "/images/checkoutdelivary.png",
                alt: "RazeStore checkout screen showing the delivery fee for the selected zone.",
                title: "Delivery at checkout",
                caption:
                    "When the customer chooses their location, the matching delivery fee is added to the order total before payment.",
            },
        ],
    },
    {
        slug: "customers",
        title: "Customers",
        description:
            "See everyone who has ordered from your shop, with their contact details and full order history. Open a customer to review their past purchases and follow up about delivery or payment.",
        href: "/demos/customers",
        category: "Admin",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/customerlist.png",
        thumbnailAlt:
            "RazeStore admin customer list showing names, contact details, and order counts.",
        videoSrc: "/videos/customers.mp4",
        posterSrc: "/images/customerlist.png",
        screenshots: [
            {
                src: "/images/customerlist.png",
                alt: "RazeStore admin customer list showing names, contact details, and order counts.",
                title: "Customer list",
                caption:
                    "Every customer who has placed an order, with their contact details and how many orders they have made.",
            },
            {
                src: "/images/customerdetails.png",
                alt: "RazeStore admin customer detail view showing past orders and delivery addresses.",
                title: "Customer detail",
                caption:
                    "Open a customer to see their past orders, delivery addresses, and contact information in one place.",
            },
        ],
    },
    {
        slug: "returns",
        title: "Returns and refunds",
        description:
            "Record a return against an existing order, log the reason, and track the return through to resolution. Useful when a customer brings back a faulty item or changes their mind.",
        href: "/demos/returns",
        category: "Fulfilment",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/returnslist.png",
        thumbnailAlt:
            "RazeStore admin returns list showing return requests and their current status.",
        videoSrc: "/videos/returns.mp4",
        posterSrc: "/images/returnslist.png",
        screenshots: [
            {
                src: "/images/returnslist.png",
                alt: "RazeStore admin returns list showing return requests and their current status.",
                title: "Returns list",
                caption:
                    "All return requests with the order they belong to, the reason given, and where the return is in the resolution process.",
            },
            {
                src: "/images/returnsdetails.png",
                alt: "RazeStore admin return detail view showing the linked order and resolution fields.",
                title: "Return detail",
                caption:
                    "Open a return to see the linked order, record the resolution, and note whether the item was refunded, replaced, or declined.",
            },
        ],
    },
    {
        slug: "suppliers",
        title: "Suppliers",
        description:
            "Keep a record of the suppliers you buy stock from, with their contact details and the products they supply. Useful when you need to reorder quickly or compare sources.",
        href: "/demos/suppliers",
        category: "Admin",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/suplierlist.png",
        thumbnailAlt:
            "RazeStore admin supplier list showing supplier names and contact details.",
        videoSrc: "/videos/suppliers.mp4",
        posterSrc: "/images/suplierlist.png",
        screenshots: [
            {
                src: "/images/suplierlist.png",
                alt: "RazeStore admin supplier list showing supplier names and contact details.",
                title: "Supplier list",
                caption:
                    "Every supplier you work with, with their contact details and how many products they supply.",
            },
            {
                src: "/images/supplierdetail.png",
                alt: "RazeStore admin supplier detail view linking products to a supplier.",
                title: "Supplier detail",
                caption:
                    "Open a supplier to see the products linked to them, so you know exactly which items come from which source.",
            },
        ],
    },
    {
        slug: "newsletter",
        title: "Newsletter and campaigns",
        description:
            "Collect customer emails at checkout and send them newsletters from the admin. Sending campaigns requires an email provider connected to your shop — the list of subscribers is collected either way.",
        href: "/demos/newsletter",
        category: "Marketing",
        statusKey: "requires-setup",
        status: "Requires setup",
        thumbnailSrc: "/images/newsletter.png",
        thumbnailAlt:
            "RazeStore admin newsletter campaigns screen showing subscribers and draft campaigns.",
        videoSrc: "/videos/newsletter.mp4",
        posterSrc: "/images/newsletter.png",
        screenshots: [
            {
                src: "/images/newsletter.png",
                alt: "RazeStore admin subscriber list showing collected customer emails.",
                title: "Subscribers",
                caption:
                    "Every email address collected at checkout, with the date each one was added.",
            },
            {
                src: "/images/newslettercampaign.png",
                alt: "RazeStore admin newsletter campaign composer with subject and body fields.",
                title: "Compose a campaign",
                caption:
                    "Draft a campaign in the admin. Sending it requires an SMTP provider or transactional email service connected to your shop.",
            },
        ],
    },
    {
        slug: "banners",
        title: "Storefront banners",
        description:
            "Manage the banners and hero slides shown on your storefront. Upload an image, set the headline and link, and schedule when each banner appears.",
        href: "/demos/banners",
        category: "Storefront",
        statusKey: "available",
        status: "Available",
        thumbnailSrc: "/images/bannerlist.png",
        thumbnailAlt:
            "RazeStore admin banner management screen showing active storefront banners.",
        videoSrc: "/videos/banner.mp4",
        posterSrc: "/images/bannerlist.png",
        screenshots: [
            {
                src: "/images/bannerlist.png",
                alt: "RazeStore admin banner management screen showing active storefront banners.",
                title: "Banner list",
                caption:
                    "All banners with their image, headline, and schedule. Reorder them to control which appear first on the storefront.",
            },
            {
                src: "/images/bannerstorefront.png",
                alt: "RazeStore storefront hero with an active banner displayed.",
                title: "Banner on the storefront",
                caption:
                    "When a banner is active and within its schedule, it appears at the top of the storefront with the link you set.",
            },
        ],
    },
];

export const getDemoBySlug = (slug: string): Demo | undefined =>
    demos.find((demo) => demo.slug === slug);

export const getDemosByCategory = (category: string): Demo[] =>
    demos.filter((demo) => demo.category === category);

export const getDemosByStatus = (statusKey: DemoStatus): Demo[] =>
    demos.filter((demo) => demo.statusKey === statusKey);

export const demoCategories: string[] = Array.from(
    new Set(demos.map((demo) => demo.category)),
);

export default demos;