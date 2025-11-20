(function (window) {
    const DEFAULT_STATE = 'GA';

    const zipOverrides = {
        '39901': { city: 'Atlanta', county: 'DeKalb County' },
        '31199': { city: 'Atlanta', county: 'Fulton County' },
        '31198': { city: 'Atlanta', county: 'Fulton County' },
        '31197': { city: 'Atlanta', county: 'Fulton County' },
        '31196': { city: 'Atlanta', county: 'Fulton County' },
        '31195': { city: 'Atlanta', county: 'Fulton County' },
        '31193': { city: 'Atlanta', county: 'Fulton County' },
        '31192': { city: 'Atlanta', county: 'Fulton County' },
        '31191': { city: 'Atlanta', county: 'Fulton County' },
        '31156': { city: 'Atlanta', county: 'Fulton County' },
        '31150': { city: 'Atlanta', county: 'Fulton County' },
        '31146': { city: 'Atlanta', county: 'Fulton County' },
        '31145': { city: 'Atlanta', county: 'Fulton County' },
        '31141': { city: 'Atlanta', county: 'Fulton County' },
        '31139': { city: 'Atlanta', county: 'Fulton County' },
        '31132': { city: 'Atlanta', county: 'Fulton County' },
        '31131': { city: 'Atlanta', county: 'Fulton County' },
        '31126': { city: 'Atlanta', county: 'Fulton County' },
        '31119': { city: 'Atlanta', county: 'Fulton County' },
        '31107': { city: 'Atlanta', county: 'Fulton County' },
        '31106': { city: 'Atlanta', county: 'Fulton County' },
        '30542': { city: 'Flowery Branch', county: 'Hall County' },
        '30519': { city: 'Buford', county: 'Gwinnett County' },
        '30518': { city: 'Buford', county: 'Gwinnett County' },
        '30515': { city: 'Buford', county: 'Gwinnett County' },
        '30399': { city: 'Atlanta', county: 'Fulton County' },
        '30398': { city: 'Atlanta', county: 'Fulton County' },
        '30396': { city: 'Atlanta', county: 'Fulton County' },
        '30394': { city: 'Atlanta', county: 'Fulton County' },
        '30392': { city: 'Atlanta', county: 'Fulton County' },
        '30390': { city: 'Atlanta', county: 'Fulton County' },
        '30389': { city: 'Atlanta', county: 'Fulton County' },
        '30388': { city: 'Atlanta', county: 'Fulton County' },
        '30387': { city: 'Atlanta', county: 'Fulton County' },
        '30386': { city: 'Atlanta', county: 'Fulton County' },
        '30385': { city: 'Atlanta', county: 'Fulton County' },
        '30384': { city: 'Atlanta', county: 'Fulton County' },
        '30380': { city: 'Atlanta', county: 'Fulton County' },
        '30379': { city: 'Atlanta', county: 'Fulton County' },
        '30378': { city: 'Atlanta', county: 'Fulton County' },
        '30377': { city: 'Atlanta', county: 'Fulton County' },
        '30376': { city: 'Atlanta', county: 'Fulton County' },
        '30375': { city: 'Atlanta', county: 'Fulton County' },
        '30374': { city: 'Atlanta', county: 'Fulton County' }
    };

    const zipGroupConfigs = [
        {
            label: 'Downtown Government & Civic Campus',
            city: 'Quick',
            county: 'Fulton County',
            summary: 'Courthouses, federal buildings, and historic landmarks that need discreet, security-cleared junk removal with minimal disruption.',
            responseTime: 'Priority dispatch with 2-hour arrival windows for government facilities.',
            heroImage: 'assets/images/breadcrumb/breadcrumb-1.jpg',
            topServices: [
                'Document cleanouts & shredding support',
                'Commercial junk removal',
                'Electronics recycling & e-waste',
                'Emergency storm debris removal'
            ],
            neighborhoods: ['State Capitol', 'Fairlie-Poplar', 'South Downtown'],
            serviceHighlights: [
                { title: 'Security-Cleared Crews', description: 'Badge-ready teams trained to work inside secure buildings and loading docks.' },
                { title: 'Flexible Scheduling', description: 'After-hours and weekend appointments to avoid interfering with the public.' },
                { title: 'Sustainable Disposal', description: 'Certified recycling partners for paper, electronics, and fixtures.' }
            ],
            lat: 33.7488,
            lng: -84.3877,
            zips: ['39901']
        },
        {
            label: 'Business Reply & Executive Offices',
            city: 'Quick',
            county: 'Fulton County',
            summary: 'High-rise offices, fulfillment centers, and executive suites that rely on recurring pickups for files, fixtures, and equipment.',
            responseTime: 'Same-day service with 90-minute ETA updates across central Quick.',
            heroImage: 'assets/images/resources/video-gallery-style2-bg.jpg',
            topServices: [
                'Office furniture removal',
                'Cubicle and workstation breakdowns',
                'File room cleanouts',
                'Electronics & battery recycling'
            ],
            neighborhoods: ['Midtown', 'Peachtree Center', 'Downtown Connector Corridor'],
            serviceHighlights: [
                { title: 'White-Glove Protection', description: 'Floor, wall, and elevator protection for premium office towers.' },
                { title: 'Recurring Routes', description: 'Weekly or monthly pickups for property managers and mail facilities.' },
                { title: 'Donation First', description: 'Reusable furniture diverted to local nonprofits whenever possible.' }
            ],
            lat: 33.7573,
            lng: -84.3877,
            zips: ['31199', '31198', '31197', '31196', '31195', '31193', '31192', '31191', '31156', '31150', '31146', '31145', '31141', '31139', '31132', '31131', '31126', '31119', '31107', '31106']
        },
        {
            label: 'Lake Lanier & Flowery Branch',
            city: 'Flowery Branch',
            county: 'Hall County',
            summary: 'Lakefront homes, marinas, and suburban neighborhoods that call for boat, dock, and bulky debris removal.',
            responseTime: 'Morning and afternoon arrival blocks with boat-ramp coordination.',
            heroImage: 'assets/images/resources/features-style2-2.jpg',
            topServices: [
                'Boat, dock, and trailer removal',
                'Construction debris hauling',
                'Estate cleanouts',
                'Appliance recycling'
            ],
            neighborhoods: ['Lake Lanier Islands', 'Flowery Branch', 'Mulberry Preserve'],
            serviceHighlights: [
                { title: 'Lakefront Access', description: 'Barge-friendly scheduling and shoreline-safe loading.' },
                { title: 'Storm Cleanup', description: 'Rapid response after high water, wind, or fallen trees.' },
                { title: 'HOA Approved', description: 'Partnered with neighborhood managers for curbside pickups.' }
            ],
            lat: 34.1804,
            lng: -83.9252,
            zips: ['30542']
        },
        {
            label: 'Buford & Mall of Georgia Corridor',
            city: 'Buford',
            county: 'Gwinnett County',
            summary: 'Busy retail corridors, logistics centers, and growing neighborhoods surrounding the Mall of Georgia.',
            responseTime: 'Same-day hauling with dedicated retail dock support.',
            heroImage: 'assets/images/slides/slide-v1-2.jpg',
            topServices: [
                'Retail fixture removal',
                'Warehouse cleanouts',
                'Residential junk removal',
                'Scrap metal recycling'
            ],
            neighborhoods: ['Mall of Georgia', 'Ivy Creek', 'Deaton Farm'],
            serviceHighlights: [
                { title: 'Retail Changeouts', description: 'Fast fixture, shelving, and display removal when stores remodel overnight.' },
                { title: 'Logistics Support', description: 'Trailer sweep-outs and pallet removal for fulfillment partners.' },
                { title: 'Neighborhood Friendly', description: 'Respectful crews for HOAs and gated communities.' }
            ],
            lat: 34.078,
            lng: -83.987,
            zips: ['30519', '30518']
        },
        {
            label: 'Suwanee & Sugar Hill Gateway',
            city: 'Suwanee',
            county: 'Gwinnett County',
            summary: 'Master-planned communities, parks, and small businesses that prefer eco-friendly disposal.',
            responseTime: 'Guaranteed next-day pickups with SMS arrival alerts.',
            heroImage: 'assets/images/resources/features-style2-1.jpg',
            topServices: [
                'Residential junk removal',
                'Garage & attic cleanouts',
                'Playset and hot tub removal',
                'Recycling-focused hauling'
            ],
            neighborhoods: ['Town Center Park', 'Suwanee Gateway', 'Ruby Forest'],
            serviceHighlights: [
                { title: 'Eco-Friendly Routing', description: 'Smart routing to minimize emissions and landfill trips.' },
                { title: 'Family-Safe Crews', description: 'Background-checked teams respectful of HOA guidelines.' },
                { title: 'Donation Partnerships', description: 'Working with Gwinnett charities for furniture and bikes.' }
            ],
            lat: 34.0514,
            lng: -84.0713,
            zips: ['30515']
        },
        {
            label: 'Downtown & Midtown Quick',
            city: 'Quick',
            county: 'Fulton County',
            summary: 'High-density mix of condos, tech offices, and hospitality spaces that rely on scheduled hauling windows.',
            responseTime: 'Two-hour service windows with live GPS tracking.',
            heroImage: 'assets/images/about/about-style1__image-2.avif',
            topServices: [
                'Condo & loft cleanouts',
                'Hospitality bulk item removal',
                'Construction debris hauling',
                'Electronics & appliance recycling'
            ],
            neighborhoods: ['Midtown', 'Old Fourth Ward', 'Inman Park'],
            serviceHighlights: [
                { title: 'Tight-Space Expertise', description: 'Elevator, alley, and loading-dock friendly crews.' },
                { title: 'Renovation Support', description: 'Rolling debris removal for builders and GC partners.' },
                { title: 'Responsible Recycling', description: '95% diversion goal via donation and recycling streams.' }
            ],
            lat: 33.7701,
            lng: -84.3896,
            zips: ['30399', '30398', '30396', '30394', '30392', '30390', '30389', '30388', '30387', '30386', '30385', '30384']
        },
        {
            label: 'Westside, South Atlanta & Airport Corridor',
            city: 'Quick',
            county: 'Fulton County',
            summary: 'Industrial campuses, creative lofts, and neighborhoods stretching toward Hartsfield-Jackson International Airport.',
            responseTime: 'Rapid-response crews staged near Westside and Airport exits.',
            heroImage: 'assets/images/parallax-background/service-style1.jpg',
            topServices: [
                'Warehouse & plant cleanouts',
                'Light demolition hauling',
                'Property management turnovers',
                'Storm debris removal'
            ],
            neighborhoods: ['West Midtown', 'Mechanicsville', 'College Park'],
            serviceHighlights: [
                { title: 'Industrial Muscle', description: 'Equipment and crews sized for pallets, machinery, and heavy debris.' },
                { title: 'Airport Compliance', description: 'Badged teams familiar with SIDA and airport vendor rules.' },
                { title: 'Community Focus', description: 'Support for BeltLine projects and neighborhood revitalization.' }
            ],
            lat: 33.7529,
            lng: -84.4291,
            zips: ['30380', '30379', '30378', '30377', '30376', '30375', '30374']
        }
    ];

    function buildZipData(groups) {
        const map = {};
        groups.forEach(group => {
            const { label, city, county, summary, responseTime, heroImage, topServices, neighborhoods, serviceHighlights, lat, lng, zips, state } = group;

            zips.forEach(zip => {
                const override = zipOverrides[zip] || {};
                const resolvedCity = override.city || city;
                const resolvedCounty = override.county || county;
                const resolvedState = override.state || state || DEFAULT_STATE;

                map[zip] = {
                    zip,
                    title: `${resolvedCity}, ${resolvedState} Junk Removal & Cleanup`,
                    areaName: label,
                    city: resolvedCity,
                    county: resolvedCounty,
                    state: resolvedState,
                    summary,
                    responseTime,
                    heroImage,
                    topServices,
                    neighborhoods,
                    serviceHighlights,
                    lat,
                    lng,
                    nearbyZips: zips.filter(z => z !== zip).slice(0, 4)
                };
            });
        });
        return map;
    }

    function buildFallback(zip) {
        return {
            zip,
            title: 'Greater Quick Metro Junk Removal & Cleanup',
            areaName: 'Greater Quick Metro',
            city: 'Quick',
            county: 'Metro Atlanta',
            state: DEFAULT_STATE,
            summary: 'On-demand residential, commercial, and construction debris removal anywhere in the greater Quick service map.',
            responseTime: 'Same-day or next-day appointments, 7 days a week.',
            heroImage: 'assets/images/breadcrumb/breadcrumb-1.jpg',
            topServices: [
                'Residential junk removal',
                'Commercial cleanouts',
                'Construction debris hauling',
                'Appliance & electronics recycling'
            ],
            neighborhoods: ['Quick Metro', 'Surrounding Suburbs'],
            serviceHighlights: [
                { title: 'Full-Service Lifting', description: 'You point, we haul. No prep work required.' },
                { title: 'Eco-Friendly', description: 'Donation and recycling partners across Metro Atlanta.' },
                { title: 'Transparent Pricing', description: 'Volume-based quotes with no surprise fees.' }
            ],
            lat: 33.7488,
            lng: -84.3877,
            nearbyZips: []
        };
    }

    const orderedZips = zipGroupConfigs.reduce((acc, group) => acc.concat(group.zips), []);
    const zipDataMap = buildZipData(zipGroupConfigs);

    window.ZipServiceData = {
        configs: zipGroupConfigs,
        orderedZips,
        map: zipDataMap,
        getZipRecord(zip) {
            return zipDataMap[zip] || buildFallback(zip);
        },
        buildFallback
    };
})(window);

