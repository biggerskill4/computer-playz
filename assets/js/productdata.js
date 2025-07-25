const products = [
    {
        id: 1,
        name: "Gaming Build 1",
        slug: "gaming-build-1",
        price: 129999,
        shortDescription: "Entry-level gaming PC with Ryzen 5 and GTX 1660 Super.",
        longDescription: "A powerful starter gaming PC featuring Ryzen 5 3600, 16GB DDR4 RAM, 512GB SSD, and GTX 1660 Super – perfect for 1080p gaming.",
        image: "./assets/images/gamingpc.webp",
        category: "Builds",
        stock: 10,
        rating: 4.5
    },
    {
        id: 2,
        name: "Gaming Build 2",
        slug: "gaming-build-2",
        price: 159999,
        shortDescription: "Mid-range build with RTX 3060 and Intel i5 12th Gen.",
        longDescription: "Play AAA games smoothly with Intel i5 12400F, 16GB RAM, 1TB NVMe SSD, and RTX 3060 12GB GPU.",
        image: "assets/images/build-2.png",
        category: "Builds",
        stock: 8,
        rating: 4.7
    },
    {
        id: 3,
        name: "Gaming Build 3",
        slug: "gaming-build-3",
        price: 99999,
        shortDescription: "Budget-friendly build for eSports titles.",
        longDescription: "Built for CS:GO, Valorant, and Fortnite – includes Ryzen 3 4100, 8GB RAM, 256GB SSD, and GTX 1050 Ti.",
        image: "assets/images/build-3.png",
        category: "Builds",
        stock: 12,
        rating: 4.2
    },
    {
        id: 4,
        name: "Gaming Build 4",
        slug: "gaming-build-4",
        price: 189999,
        shortDescription: "High-end setup with RTX 4070 and i7 13700KF.",
        longDescription: "Dominate ultra settings with i7 13700KF, 32GB RAM, 1TB Gen4 SSD, RTX 4070 12GB, and 850W Gold PSU.",
        image: "assets/images/build-4.png",
        category: "Builds",
        stock: 5,
        rating: 4.9
    },
    {
        id: 5,
        name: "Gaming Build 5",
        slug: "gaming-build-5",
        price: 74999,
        shortDescription: "Compact mini-ITX build with AMD APU.",
        longDescription: "Space-saving mini build with Ryzen 5 5600G APU (with Vega graphics), 16GB RAM, and 512GB SSD – no GPU needed.",
        image: "assets/images/build-5.png",
        category: "Builds",
        stock: 14,
        rating: 4.3
    },
    {
        id: 6,
        name: "Gaming Build 6",
        slug: "gaming-build-6",
        price: 139999,
        shortDescription: "Balanced build for gaming and streaming.",
        longDescription: "Equipped with Ryzen 7 5800X, RTX 3060 Ti, 32GB RAM, and dual storage (1TB SSD + 2TB HDD) for creators and streamers.",
        image: "assets/images/build-6.png",
        category: "Builds",
        stock: 7,
        rating: 4.6
    },
    {
        id: 7,
        name: "Gaming Build 7",
        slug: "gaming-build-7",
        price: 219999,
        shortDescription: "Ultimate gaming beast with RTX 4080 Super.",
        longDescription: "Top-tier PC with Intel i9 13900K, 64GB DDR5 RAM, RTX 4080 Super, 2TB Gen4 SSD, and custom RGB cooling.",
        image: "assets/images/build-7.png",
        category: "Builds",
        stock: 3,
        rating: 5.0
    },
    {
        id: 8,
        name: "Gaming Build 8",
        slug: "gaming-build-8",
        price: 114999,
        shortDescription: "Silent gaming PC with clean cable management.",
        longDescription: "Built in a Fractal Define case with Ryzen 5 5600, RTX 3060, 16GB RAM, ultra-quiet fans, and noise-dampened case.",
        image: "assets/images/build-8.png",
        category: "Builds",
        stock: 9,
        rating: 4.4
    },
    {
        id: 9,
        name: "Gaming Build 9",
        slug: "gaming-build-9",
        price: 174999,
        shortDescription: "Streaming & gaming combo with dual display support.",
        longDescription: "Perfect for streamers: i7 12700KF, RTX 3070 Ti, 32GB RAM, Elgato capture card ready, with dual HDMI out support.",
        image: "assets/images/build-9.png",
        category: "Builds",
        stock: 6,
        rating: 4.8
    },
    {
        id: 10,
        name: "Gaming Build 10",
        slug: "gaming-build-10",
        price: 134999,
        shortDescription: "AMD-focused powerhouse for multitasking and gaming.",
        longDescription: "Ryzen 9 5900X paired with RX 6750 XT, 32GB RAM, 1TB SSD, and strong airflow case – excellent for multi-monitor setups.",
        image: "assets/images/build-10.png",
        category: "Builds",
        stock: 4,
        rating: 4.7
    },
    {
        id: 11,
        name: "ASUS ROG Strix B550-F Gaming",
        slug: "asus-rog-strix-b550-f",
        price: 34999,
        shortDescription: "High-performance ATX board for Ryzen 3000/5000 CPUs.",
        longDescription: "Features PCIe 4.0, dual M.2 slots, USB 3.2 Gen2, and robust power delivery for stable performance with AMD Ryzen processors.",
        image: "assets/images/motherboard-1.png",
        category: "Motherboards",
        stock: 15,
        rating: 4.6
    },
    {
        id: 12,
        name: "MSI MPG Z790 Edge WiFi",
        slug: "msi-mpg-z790-edge-wifi",
        price: 52999,
        shortDescription: "Premium Z790 board with DDR5 and WiFi 6E.",
        longDescription: "Supports Intel 13th/12th Gen CPUs, DDR5 up to 7200MHz, and features Gen5 PCIe x16 for future-proofing.",
        image: "assets/images/motherboard-2.png",
        category: "Motherboards",
        stock: 8,
        rating: 4.9
    },
    {
        id: 13,
        name: "Gigabyte B660M DS3H DDR4",
        slug: "gigabyte-b660m-ds3h",
        price: 21999,
        shortDescription: "Affordable Intel 12th Gen mATX board.",
        longDescription: "Supports 12th Gen Intel CPUs, DDR4 RAM, dual M.2 slots, and Realtek 8118 Gaming LAN for fast networking.",
        image: "assets/images/motherboard-3.png",
        category: "Motherboards",
        stock: 20,
        rating: 4.4
    },
    {
        id: 14,
        name: "ASRock B450M-HDV R4.0",
        slug: "asrock-b450m-hdv",
        price: 13499,
        shortDescription: "Entry-level AM4 motherboard for Ryzen builds.",
        longDescription: "Compact mATX form factor with HDMI, M.2 support, and stable performance for budget builds.",
        image: "assets/images/motherboard-4.png",
        category: "Motherboards",
        stock: 30,
        rating: 4.1
    },
    {
        id: 15,
        name: "ASUS TUF Gaming X570-Plus WiFi",
        slug: "asus-tuf-x570-plus-wifi",
        price: 39999,
        shortDescription: "Durable X570 board with military-grade components.",
        longDescription: "Full ATX motherboard with active chipset cooling, dual M.2, WiFi, and PCIe 4.0 – built to last.",
        image: "assets/images/motherboard-5.png",
        category: "Motherboards",
        stock: 10,
        rating: 4.8
    },
    {
        id: 16,
        name: "Gigabyte A520M S2H",
        slug: "gigabyte-a520m-s2h",
        price: 10999,
        shortDescription: "Basic AM4 board for budget Ryzen systems.",
        longDescription: "A cost-effective micro-ATX board with HDMI, USB 3.2 Gen1, and Realtek Audio – solid for everyday tasks.",
        image: "assets/images/motherboard-6.png",
        category: "Motherboards",
        stock: 25,
        rating: 4.0
    },
    {
        id: 17,
        name: "MSI MAG B650 Tomahawk WiFi",
        slug: "msi-b650-tomahawk-wifi",
        price: 42999,
        shortDescription: "Mid-range AM5 board for Ryzen 7000 series.",
        longDescription: "PCIe Gen5 support, DDR5 RAM compatibility, WiFi 6E, and top-tier VRMs for stable performance under load.",
        image: "assets/images/motherboard-7.png",
        category: "Motherboards",
        stock: 6,
        rating: 4.7
    },
    {
        id: 18,
        name: "ASRock Z690 Steel Legend DDR4",
        slug: "asrock-z690-steel-legend",
        price: 35999,
        shortDescription: "Z690 chipset with premium features and style.",
        longDescription: "Supports Intel 12th Gen CPUs, 2.5G LAN, USB-C, multiple RGB headers, and robust thermal design.",
        image: "assets/images/motherboard-8.png",
        category: "Motherboards",
        stock: 9,
        rating: 4.5
    },
    {
        id: 19,
        name: "Biostar B660GTN",
        slug: "biostar-b660gtn",
        price: 19999,
        shortDescription: "Compact Mini-ITX board for small form factor builds.",
        longDescription: "Supports Intel 12th Gen CPUs, 1x M.2, 2x DDR4 DIMMs, and onboard HDMI 2.0 for SFF systems.",
        image: "assets/images/motherboard-9.png",
        category: "Motherboards",
        stock: 12,
        rating: 4.2
    },
    {
        id: 20,
        name: "ASUS Prime H610M-E D4",
        slug: "asus-prime-h610m-e-d4",
        price: 14499,
        shortDescription: "Reliable entry-level board for 12th Gen builds.",
        longDescription: "H610 chipset motherboard with support for DDR4 memory, M.2 NVMe SSDs, and 10Gbps USB ports.",
        image: "assets/images/motherboard-10.png",
        category: "Motherboards",
        stock: 18,
        rating: 4.3
    },
    {
        id: 21,
        name: "Intel Core i5-12400F",
        slug: "intel-core-i5-12400f",
        price: 39999,
        shortDescription: "6-Core 12-Thread 12th Gen Alder Lake CPU.",
        longDescription: "Ideal for gaming and productivity with 6 performance cores, 4.4GHz boost clock, and LGA1700 socket support.",
        image: "assets/images/cpu-1.png",
        category: "Processors",
        stock: 20,
        rating: 4.6
    },
    {
        id: 22,
        name: "AMD Ryzen 5 5600X",
        slug: "amd-ryzen-5-5600x",
        price: 34999,
        shortDescription: "6-core unlocked AM4 processor with Wraith cooler.",
        longDescription: "Great all-rounder with 6 cores, 12 threads, 4.6GHz boost clock, and excellent gaming performance.",
        image: "assets/images/cpu-2.png",
        category: "Processors",
        stock: 18,
        rating: 4.7
    },
    {
        id: 23,
        name: "Intel Core i7-13700K",
        slug: "intel-core-i7-13700k",
        price: 84999,
        shortDescription: "16-core 24-thread hybrid CPU for enthusiasts.",
        longDescription: "Features 8 P-cores and 8 E-cores, DDR5/DDR4 support, PCIe Gen5, ideal for gaming and streaming workloads.",
        image: "assets/images/cpu-3.png",
        category: "Processors",
        stock: 7,
        rating: 4.9
    },
    {
        id: 24,
        name: "AMD Ryzen 9 7900X",
        slug: "amd-ryzen-9-7900x",
        price: 99999,
        shortDescription: "AM5 CPU with 12 cores and blazing fast performance.",
        longDescription: "Built on 5nm Zen 4 architecture with 12 cores, 24 threads, 5.6GHz boost, and PCIe 5.0 support.",
        image: "assets/images/cpu-4.png",
        category: "Processors",
        stock: 5,
        rating: 5.0
    },
    {
        id: 25,
        name: "Intel Core i3-12100F",
        slug: "intel-core-i3-12100f",
        price: 22999,
        shortDescription: "Budget quad-core CPU for everyday tasks and light gaming.",
        longDescription: "4 cores and 8 threads with strong single-core performance, compatible with LGA1700 motherboards.",
        image: "assets/images/cpu-5.png",
        category: "Processors",
        stock: 22,
        rating: 4.4
    },
    {
        id: 26,
        name: "AMD Ryzen 7 5800X",
        slug: "amd-ryzen-7-5800x",
        price: 44999,
        shortDescription: "8-core powerhouse for AM4 platform.",
        longDescription: "Offers great multi-threading with 8 cores, 16 threads, and a base clock of 3.8GHz, boost up to 4.7GHz.",
        image: "assets/images/cpu-6.png",
        category: "Processors",
        stock: 10,
        rating: 4.8
    },
    {
        id: 27,
        name: "Intel Core i9-13900K",
        slug: "intel-core-i9-13900k",
        price: 119999,
        shortDescription: "Top-tier CPU with 24 cores (8P + 16E) and 32 threads.",
        longDescription: "A beast for creators and gamers with 5.8GHz boost, DDR5/DDR4, Gen5 PCIe support, and high efficiency.",
        image: "assets/images/cpu-7.png",
        category: "Processors",
        stock: 3,
        rating: 5.0
    },
    {
        id: 28,
        name: "AMD Ryzen 3 4100",
        slug: "amd-ryzen-3-4100",
        price: 15999,
        shortDescription: "4-core budget processor for entry-level gaming.",
        longDescription: "Base clock of 3.8GHz with 6MB cache, bundled with Wraith cooler – a solid pick for tight budgets.",
        image: "assets/images/cpu-8.png",
        category: "Processors",
        stock: 25,
        rating: 4.1
    },
    {
        id: 29,
        name: "Intel Pentium Gold G7400",
        slug: "intel-pentium-g7400",
        price: 11999,
        shortDescription: "Dual-core Alder Lake CPU for basic systems.",
        longDescription: "Great for web browsing and office work – 2 cores, 4 threads, LGA1700 socket, and UHD graphics included.",
        image: "assets/images/cpu-9.png",
        category: "Processors",
        stock: 30,
        rating: 3.9
    },
    {
        id: 30,
        name: "AMD Ryzen 5 7600",
        slug: "amd-ryzen-5-7600",
        price: 49999,
        shortDescription: "AM5 6-core CPU with next-gen performance.",
        longDescription: "6 cores, 12 threads, 5.1GHz boost, PCIe 5.0, and DDR5 memory support – ready for modern gaming and creation.",
        image: "assets/images/cpu-10.png",
        category: "Processors",
        stock: 8,
        rating: 4.6
    },
    {
        id: 31,
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
        slug: "corsair-vengeance-16gb-ddr4-3200",
        price: 10499,
        shortDescription: "High-performance RAM for gaming and multitasking.",
        longDescription: "Dual-channel 16GB kit with aluminum heat spreader, optimized for high-speed overclocking and stable performance.",
        image: "assets/images/ram-1.png",
        category: "RAM",
        stock: 20,
        rating: 4.8
    },
    {
        id: 32,
        name: "G.SKILL Trident Z RGB 16GB (2x8GB) DDR4 3600MHz",
        slug: "gskill-tridentz-rgb-16gb-ddr4-3600",
        price: 12499,
        shortDescription: "RGB RAM with excellent speed and stability.",
        longDescription: "Ideal for gaming builds – fast 3600MHz modules with customizable RGB lighting and high-quality aluminum heat spreaders.",
        image: "assets/images/ram-2.png",
        category: "RAM",
        stock: 12,
        rating: 4.9
    },
    {
        id: 33,
        name: "Kingston Fury Beast 8GB DDR4 2666MHz",
        slug: "kingston-fury-beast-8gb-ddr4-2666",
        price: 4999,
        shortDescription: "Reliable and cost-effective DDR4 RAM.",
        longDescription: "Plug-and-play compatible memory ideal for budget builds, ensuring smooth multitasking and decent gaming performance.",
        image: "assets/images/ram-3.png",
        category: "RAM",
        stock: 30,
        rating: 4.5
    },
    {
        id: 34,
        name: "Team T-Force Delta RGB 16GB (2x8GB) DDR4 3200MHz",
        slug: "team-tforce-delta-rgb-16gb-ddr4-3200",
        price: 11499,
        shortDescription: "Stylish RGB RAM with aggressive heat spreader.",
        longDescription: "Built for gamers – delivers high speed, RGB aesthetics, and full compatibility with major motherboard lighting software.",
        image: "assets/images/ram-4.png",
        category: "RAM",
        stock: 10,
        rating: 4.6
    },
    {
        id: 35,
        name: "ADATA XPG GAMMIX D30 16GB (2x8GB) DDR4 3200MHz",
        slug: "adata-xpg-d30-16gb-ddr4-3200",
        price: 9899,
        shortDescription: "Performance RAM with sleek design.",
        longDescription: "XPG GAMMIX D30 series offers performance and style with 3200MHz speed and a low-profile red/black heatsink.",
        image: "assets/images/ram-5.png",
        category: "RAM",
        stock: 14,
        rating: 4.4
    },
    {
        id: 36,
        name: "Corsair Dominator Platinum RGB 32GB (2x16GB) DDR5 6000MHz",
        slug: "corsair-dominator-rgb-32gb-ddr5-6000",
        price: 32999,
        shortDescription: "Top-tier DDR5 RAM for enthusiasts.",
        longDescription: "Unmatched DDR5 performance with iCUE RGB control, high frequency, and stable power delivery for demanding builds.",
        image: "assets/images/ram-6.png",
        category: "RAM",
        stock: 5,
        rating: 5.0
    },
    {
        id: 37,
        name: "Patriot Viper Steel 16GB (2x8GB) DDR4 3000MHz",
        slug: "patriot-viper-steel-16gb-ddr4-3000",
        price: 8999,
        shortDescription: "Strong performance at a budget-friendly price.",
        longDescription: "Performance RAM with aluminum heat shield – delivers reliable speed for gamers and productivity users.",
        image: "assets/images/ram-7.png",
        category: "RAM",
        stock: 18,
        rating: 4.3
    },
    {
        id: 38,
        name: "G.SKILL Ripjaws V 32GB (2x16GB) DDR4 3200MHz",
        slug: "gskill-ripjaws-v-32gb-ddr4-3200",
        price: 17999,
        shortDescription: "Powerful 32GB kit for multitasking and streaming.",
        longDescription: "Ideal for power users and creators – offers stability, high-speed bandwidth, and wide compatibility.",
        image: "assets/images/ram-8.png",
        category: "RAM",
        stock: 9,
        rating: 4.7
    },
    {
        id: 39,
        name: "Crucial 8GB DDR4 2400MHz",
        slug: "crucial-8gb-ddr4-2400",
        price: 4199,
        shortDescription: "Standard RAM module for office or basic use.",
        longDescription: "Plug-and-play RAM from Crucial, ensuring reliability and energy efficiency for everyday computing.",
        image: "assets/images/ram-9.png",
        category: "RAM",
        stock: 25,
        rating: 4.2
    },
    {
        id: 40,
        name: "ADATA Lancer 32GB (2x16GB) DDR5 5200MHz",
        slug: "adata-lancer-32gb-ddr5-5200",
        price: 28999,
        shortDescription: "DDR5 RAM with futuristic performance.",
        longDescription: "High-speed DDR5 kit designed for next-gen motherboards with ECC, RGB, and up to 5200MHz frequency.",
        image: "assets/images/ram-10.png",
        category: "RAM",
        stock: 6,
        rating: 4.8
    },
    {
        id: 41,
        name: "Samsung 970 EVO Plus 500GB NVMe",
        slug: "samsung-970-evo-plus-500gb",
        price: 11499,
        shortDescription: "High-speed NVMe SSD for fast boot and load times.",
        longDescription: "Powered by Samsung V-NAND and PCIe Gen3 x4, this SSD offers up to 3500MB/s read speeds – ideal for gaming and content creation.",
        image: "assets/images/ssd-1.png",
        category: "SSD",
        stock: 20,
        rating: 4.9
    },
    {
        id: 42,
        name: "Western Digital Blue SN570 1TB NVMe",
        slug: "wd-blue-sn570-1tb",
        price: 13999,
        shortDescription: "Reliable 1TB NVMe SSD with strong performance.",
        longDescription: "Delivers up to 3500MB/s read speed for quick app loading and multitasking. Great for work and play.",
        image: "assets/images/ssd-2.png",
        category: "SSD",
        stock: 15,
        rating: 4.7
    },
    {
        id: 43,
        name: "Kingston A2000 500GB NVMe SSD",
        slug: "kingston-a2000-500gb",
        price: 9499,
        shortDescription: "Affordable and fast PCIe NVMe SSD.",
        longDescription: "Provides read/write speeds up to 2200/2000MB/s with end-to-end data protection and encryption support.",
        image: "assets/images/ssd-3.png",
        category: "SSD",
        stock: 22,
        rating: 4.6
    },
    {
        id: 44,
        name: "Crucial MX500 1TB SATA SSD",
        slug: "crucial-mx500-1tb",
        price: 12999,
        shortDescription: "SATA SSD with fast and consistent performance.",
        longDescription: "Features Micron 3D NAND, integrated power loss immunity, and 560MB/s read speed – great for upgrades.",
        image: "assets/images/ssd-4.png",
        category: "SSD",
        stock: 18,
        rating: 4.8
    },
    {
        id: 45,
        name: "ADATA SU800 512GB SATA SSD",
        slug: "adata-su800-512gb",
        price: 7999,
        shortDescription: "Reliable 2.5” SSD for faster load times.",
        longDescription: "Offers 3D NAND Flash, intelligent SLC caching, and LDPC ECC to ensure speed and data integrity.",
        image: "assets/images/ssd-5.png",
        category: "SSD",
        stock: 24,
        rating: 4.5
    },
    {
        id: 46,
        name: "Samsung 980 1TB PCIe 3.0 NVMe",
        slug: "samsung-980-1tb-nvme",
        price: 13999,
        shortDescription: "Efficient SSD with high endurance and reliability.",
        longDescription: "Delivers read speeds up to 3500MB/s, built with Samsung's in-house controller for stable performance.",
        image: "assets/images/ssd-6.png",
        category: "SSD",
        stock: 12,
        rating: 4.7
    },
    {
        id: 47,
        name: "WD Black SN770 1TB Gen4 NVMe",
        slug: "wd-black-sn770-1tb",
        price: 15999,
        shortDescription: "Next-gen Gen4 SSD with blazing speeds.",
        longDescription: "Enjoy up to 5150MB/s read speed and great thermal control for high-end gaming rigs and creators.",
        image: "assets/images/ssd-7.png",
        category: "SSD",
        stock: 9,
        rating: 4.9
    },
    {
        id: 48,
        name: "Gigabyte 256GB NVMe M.2 SSD",
        slug: "gigabyte-256gb-nvme",
        price: 4999,
        shortDescription: "Budget-friendly SSD for fast boot performance.",
        longDescription: "Basic NVMe SSD with good speed for entry-level systems or secondary storage.",
        image: "assets/images/ssd-8.png",
        category: "SSD",
        stock: 28,
        rating: 4.3
    },
    {
        id: 49,
        name: "Seagate Barracuda Q5 500GB NVMe",
        slug: "seagate-q5-500gb",
        price: 9499,
        shortDescription: "Reliable QLC NVMe for faster system responsiveness.",
        longDescription: "Sleek design with up to 2400MB/s read speed, good for gaming and content consumption.",
        image: "assets/images/ssd-9.png",
        category: "SSD",
        stock: 16,
        rating: 4.4
    },
    {
        id: 50,
        name: "Crucial P3 1TB PCIe Gen3 NVMe",
        slug: "crucial-p3-1tb",
        price: 13499,
        shortDescription: "1TB SSD with balanced speed and value.",
        longDescription: "Read speeds up to 3500MB/s, perfect for everyday computing and gaming workloads with minimal latency.",
        image: "assets/images/ssd-10.png",
        category: "SSD",
        stock: 14,
        rating: 4.6
    },
    {
        id: 51,
        name: "NVIDIA GeForce RTX 3060 12GB",
        slug: "nvidia-rtx-3060-12gb",
        price: 73999,
        shortDescription: "Great 1080p/1440p GPU for modern games.",
        longDescription: "Powered by Ampere architecture, it offers 12GB GDDR6, ray tracing, and DLSS for stunning graphics and smooth performance.",
        image: "assets/images/gpu-1.png",
        category: "Graphics Cards",
        stock: 10,
        rating: 4.8
    },
    {
        id: 52,
        name: "AMD Radeon RX 6600 XT 8GB",
        slug: "amd-rx-6600xt-8gb",
        price: 68999,
        shortDescription: "Excellent value for 1080p high settings.",
        longDescription: "RDNA2 architecture GPU with 8GB GDDR6, PCIe 4.0 support, and ideal for smooth 1080p gaming with lower power usage.",
        image: "assets/images/gpu-2.png",
        category: "Graphics Cards",
        stock: 8,
        rating: 4.6
    },
    {
        id: 53,
        name: "NVIDIA GeForce GTX 1650 4GB",
        slug: "nvidia-gtx-1650-4gb",
        price: 38999,
        shortDescription: "Budget GPU for entry-level gaming.",
        longDescription: "Runs games like CS:GO, Valorant, and Fortnite smoothly at 1080p, with low power consumption and compact design.",
        image: "assets/images/gpu-3.png",
        category: "Graphics Cards",
        stock: 20,
        rating: 4.2
    },
    {
        id: 54,
        name: "NVIDIA GeForce RTX 3070 Ti 8GB",
        slug: "nvidia-rtx-3070ti-8gb",
        price: 109999,
        shortDescription: "High-end GPU for ultra 1440p and 4K.",
        longDescription: "8GB GDDR6X, ray tracing, DLSS, and 6144 CUDA cores – built for max settings and content creation.",
        image: "assets/images/gpu-4.png",
        category: "Graphics Cards",
        stock: 6,
        rating: 4.9
    },
    {
        id: 55,
        name: "AMD Radeon RX 6500 XT 4GB",
        slug: "amd-rx-6500xt-4gb",
        price: 33999,
        shortDescription: "Entry-level 1080p card with PCIe 4.0 support.",
        longDescription: "Great for budget builds – 4GB GDDR6, decent gaming at medium settings, and low TDP for smaller power supplies.",
        image: "assets/images/gpu-5.png",
        category: "Graphics Cards",
        stock: 18,
        rating: 4.0
    },
    {
        id: 56,
        name: "NVIDIA GeForce RTX 4060 8GB",
        slug: "nvidia-rtx-4060-8gb",
        price: 84999,
        shortDescription: "Ada Lovelace GPU for efficient 1080p/1440p gaming.",
        longDescription: "8GB GDDR6, improved ray tracing and DLSS 3 support, delivering next-gen performance at lower power.",
        image: "assets/images/gpu-6.png",
        category: "Graphics Cards",
        stock: 7,
        rating: 4.7
    },
    {
        id: 57,
        name: "AMD Radeon RX 6750 XT 12GB",
        slug: "amd-rx-6750xt-12gb",
        price: 94999,
        shortDescription: "Powerful GPU for 1440p ultra gaming.",
        longDescription: "12GB GDDR6, 40 compute units, fast memory bandwidth and strong performance across AAA titles.",
        image: "assets/images/gpu-7.png",
        category: "Graphics Cards",
        stock: 5,
        rating: 4.6
    },
    {
        id: 58,
        name: "NVIDIA GeForce RTX 4080 Super 16GB",
        slug: "nvidia-rtx-4080-super-16gb",
        price: 199999,
        shortDescription: "Enthusiast-class 4K gaming and productivity GPU.",
        longDescription: "16GB GDDR6X, DLSS 3.5, full ray tracing support – excellent for creators, gamers, and AI applications.",
        image: "assets/images/gpu-8.png",
        category: "Graphics Cards",
        stock: 3,
        rating: 5.0
    },
    {
        id: 59,
        name: "ZOTAC GeForce GT 1030 2GB",
        slug: "zotac-gt-1030-2gb",
        price: 12999,
        shortDescription: "Basic GPU for video playback and light gaming.",
        longDescription: "2GB GDDR5, compact form factor, good for HTPC builds or old office PCs with GPU upgrade needs.",
        image: "assets/images/gpu-9.png",
        category: "Graphics Cards",
        stock: 25,
        rating: 3.8
    },
    {
        id: 60,
        name: "Intel Arc A750 8GB",
        slug: "intel-arc-a750-8gb",
        price: 62999,
        shortDescription: "Intel’s mid-range GPU for 1080p/1440p gaming.",
        longDescription: "Built on Intel’s Xe HPG architecture, this 8GB GDDR6 card competes with RTX 3060 and RX 6600 in performance.",
        image: "assets/images/gpu-10.png",
        category: "Graphics Cards",
        stock: 10,
        rating: 4.4
    },
    {
        id: 61,
        name: "Gaming Mouse Pad - XL RGB",
        slug: "gaming-mousepad-xl-rgb",
        price: 2499,
        shortDescription: "Large mousepad with RGB edge lighting.",
        longDescription: "An extended waterproof surface with anti-slip rubber base and 10-color RGB lighting modes for immersive gaming.",
        image: "assets/images/accessory-1.png",
        category: "Accessories",
        stock: 30,
        rating: 4.6
    },
    {
        id: 62,
        name: "Wireless Gaming Mouse 2.4GHz",
        slug: "wireless-gaming-mouse",
        price: 3999,
        shortDescription: "Ergonomic mouse with DPI control and backlight.",
        longDescription: "Rechargeable wireless mouse with silent click buttons, RGB lighting, and 4 adjustable DPI settings for smooth tracking.",
        image: "assets/images/accessory-2.png",
        category: "Accessories",
        stock: 15,
        rating: 4.4
    },
    {
        id: 63,
        name: "Mechanical Keyboard Wrist Rest",
        slug: "keyboard-wrist-rest",
        price: 1499,
        shortDescription: "Memory foam wrist support for keyboards.",
        longDescription: "Anti-slip rubber base with soft cushion top — reduces strain on wrist during long typing or gaming sessions.",
        image: "assets/images/accessory-3.png",
        category: "Accessories",
        stock: 20,
        rating: 4.5
    },
    {
        id: 64,
        name: "USB 3.0 Multiport Hub (4 Ports)",
        slug: "usb3-multiport-hub-4",
        price: 1999,
        shortDescription: "High-speed USB hub with 4 ports.",
        longDescription: "Plug-and-play hub with 5Gbps data transfer, ideal for expanding laptops or PC USB ports with no driver needed.",
        image: "assets/images/accessory-4.png",
        category: "Accessories",
        stock: 40,
        rating: 4.3
    },
    {
        id: 65,
        name: "Vertical Laptop Stand - Adjustable",
        slug: "vertical-laptop-stand",
        price: 2999,
        shortDescription: "Space-saving aluminum laptop stand.",
        longDescription: "Holds laptops vertically to save desk space, with adjustable width and silicone grip to prevent slipping.",
        image: "assets/images/accessory-5.png",
        category: "Accessories",
        stock: 18,
        rating: 4.7
    },
    {
        id: 66,
        name: "ARGB Fan Kit - 3 Fans + Controller",
        slug: "argb-fan-kit-3pack",
        price: 5499,
        shortDescription: "Cooling fan kit with RGB sync support.",
        longDescription: "Comes with 3 quiet 120mm fans, ARGB lighting, and a controller compatible with most cases and motherboards.",
        image: "assets/images/accessory-6.png",
        category: "Accessories",
        stock: 12,
        rating: 4.8
    },
    {
        id: 67,
        name: "Dust Filter Mesh Set (Magnetic)",
        slug: "dust-filter-mesh",
        price: 799,
        shortDescription: "Magnetic mesh filters for PC case airflow.",
        longDescription: "Keeps internal components clean with high airflow, easy to attach and remove for case maintenance.",
        image: "assets/images/accessory-7.png",
        category: "Accessories",
        stock: 25,
        rating: 4.2
    },
    {
        id: 68,
        name: "PC Cable Management Kit",
        slug: "pc-cable-kit",
        price: 999,
        shortDescription: "Velcro straps, zip ties, and cable sleeves.",
        longDescription: "Keep your build neat with a complete set of cable organizers — improves airflow and aesthetics.",
        image: "assets/images/accessory-8.png",
        category: "Accessories",
        stock: 35,
        rating: 4.6
    },
    {
        id: 69,
        name: "USB Microphone Stand - Boom Arm",
        slug: "usb-mic-boom-stand",
        price: 2199,
        shortDescription: "Adjustable desk mic arm for streamers.",
        longDescription: "360° rotation with shock mount, pop filter, and clamp for Yeti, Fifine, and other USB microphones.",
        image: "assets/images/accessory-9.png",
        category: "Accessories",
        stock: 10,
        rating: 4.5
    },
    {
        id: 70,
        name: "Dual Monitor Arm Mount",
        slug: "dual-monitor-arm",
        price: 6499,
        shortDescription: "Gas-spring adjustable monitor stand.",
        longDescription: "Fits up to 32\" screens, full motion swivel, tilt and rotation, reduces neck strain and frees desk space.",
        image: "assets/images/accessory-10.png",
        category: "Accessories",
        stock: 8,
        rating: 4.9
    }
];


