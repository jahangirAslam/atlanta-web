(function (window) {
    const DEFAULT_STATE = 'GA';

    const orderedCityNames = [
        'Gwinnett County', 'Cassville', 'Flowery Branch', 'Gainesville', 'Sargent',
        'Cartersville', 'Newnan', 'Sharpsburg', 'Cumming', 'Porterdale', 'Dacula',
        'Covington', 'Emerson', 'Buford', 'Peachtree City', 'Lebanon', 'Loganville',
        'Canton', 'Hampton', 'Winston', 'Dallas', 'Holly Springs', 'Mcdonough',
        'Palmetto', 'Suwanee', 'Lovejoy', 'Grayson', 'Acworth', 'Tyrone', 'Hiram',
        'Woodstock', 'Fayetteville', 'Conyers', 'Inman', 'Kennesaw', 'Snellville',
        'Lawrenceville', 'North Metro', 'Fairburn', 'Douglasville', 'Stockbridge',
        'Jonesboro', 'Duluth', 'Powder Springs', 'Alpharetta', 'Union City', 'Roswell',
        'Riverdale', 'Rex', 'Lithonia', 'Lilburn', 'Lithia Springs', 'Red Oak', 'Morrow',
        'Norcross', 'Redan', 'Austell', 'Ellenwood', 'Clarkdale', 'Forest Park',
        'Marietta', 'Stone Mountain', 'Conley', 'Pine Lake', 'Mableton', 'Tucker',
        'Smyrna', 'Clarkston', 'Scottdale', 'Avondale Estates', 'Decatur',
        'Candler Park', 'Cabbagetown', 'Inman Park', 'Old Fourth Ward', 'East Quick',
        'Pittsburgh', 'Atlantic Station', 'Midtown Quick', 'Downtown Quick',
        'Little Five Points'
    ];

    const featuredCityConfigs = [
        {
            name: 'Quick',
            slug: 'quick',
            county: 'Fulton County',
            state: DEFAULT_STATE,
            headline: 'Quick, GA Junk Removal & Hauling Pros',
            tagline: 'From Midtown high-rises to Westside workshops, we haul it all.',
            summary: 'Our Quick crews handle residential loft cleanouts, corporate office turnovers, BeltLine retail buildouts, and construction debris across the city core.',
            heroImage: 'assets/images/about/about-style1__image-2.avif',
            responseTime: 'Two-hour arrival windows with live GPS updates.',
            neighborhoods: ['Midtown', 'Old Fourth Ward', 'Inman Park', 'West Midtown'],
            serviceFocus: [
                'Condo & loft cleanouts',
                'Office furniture removal',
                'Construction debris hauling',
                'Hospitality bulk item removal'
            ],
            serviceHighlights: [
                { title: 'Tight-Space Experts', description: 'Elevator, alley, and loading-dock friendly crews that keep HOAs happy.' },
                { title: 'Eco-Forward', description: '95% landfill diversion via local donation and recycling partners.' },
                { title: 'Contractor Ready', description: 'Rolling pickups that keep renovation timelines on track.' }
            ],
            typicalClients: ['Property managers', 'Renovation crews', 'Hospitality teams'],
            popularZips: ['30308', '30309', '30318', '30314'],
            lat: 33.7701,
            lng: -84.3896
        },
        {
            name: 'Alpharetta',
            county: 'Fulton County',
            state: DEFAULT_STATE,
            headline: 'Alpharetta Junk Removal & Tech Corridor Cleanouts',
            tagline: 'White-glove hauling for North Fulton homes and offices.',
            summary: 'We serve Avalon, Windward Parkway, and every neighborhood in between with careful, insured junk removal crews.',
            heroImage: 'assets/images/slides/slide-v1-3.jpg',
            responseTime: 'Same-day or next-morning appointments.',
            neighborhoods: ['Avalon', 'Downtown Alpharetta', 'Windward'],
            serviceFocus: [
                'Residential junk removal',
                'Office & data center cleanouts',
                'Playset & hot tub removal'
            ],
            serviceHighlights: [
                { title: 'HOA Approved', description: 'Uniformed crews familiar with gated and golf communities.' },
                { title: 'Device Recycling', description: 'Secure handling for electronics and battery disposal.' },
                { title: 'Floor Protection', description: 'Runners and padding keep hardwoods and staircases safe.' }
            ],
            typicalClients: ['Homeowners', 'Tech offices', 'Retail tenants'],
            popularZips: ['30004', '30005'],
            lat: 34.0754,
            lng: -84.2941
        },
        {
            name: 'Buford',
            county: 'Gwinnett County',
            state: DEFAULT_STATE,
            headline: 'Buford & Mall of Georgia Corridor Junk Removal',
            tagline: 'Retail, logistics, and neighborhood hauling built for growth.',
            summary: 'Dedicated retail dock teams, fast warehouse cleanouts, and friendly neighborhood crews across Buford and the Mall of Georgia area.',
            heroImage: 'assets/images/slides/slide-v1-2.jpg',
            responseTime: 'Same-day hauling with retail dock coordination.',
            neighborhoods: ['Mall of Georgia', 'Ivy Creek', 'Deaton Farm'],
            serviceFocus: [
                'Retail fixture removal',
                'Warehouse cleanouts',
                'Residential junk removal'
            ],
            serviceHighlights: [
                { title: 'Retail Changeouts', description: 'Overnight fixture swaps without disrupting shoppers.' },
                { title: 'Logistics Support', description: 'Trailer sweep-outs and pallet removal for fulfillment centers.' },
                { title: 'Neighborhood Friendly', description: 'Respectful crews for HOAs and master-planned communities.' }
            ],
            typicalClients: ['Retailers', 'Logistics managers', 'Homeowners'],
            popularZips: ['30518', '30519'],
            lat: 34.078,
            lng: -83.987
        },
        {
            name: 'Flowery Branch',
            county: 'Hall County',
            state: DEFAULT_STATE,
            headline: 'Flowery Branch & Lake Lanier Junk Removal',
            tagline: 'Lakefront cleanup specialists for docks, marinas, and homes.',
            summary: 'Boat, dock, and bulky debris removal for lake properties plus fast neighborhood hauling across Flowery Branch.',
            heroImage: 'assets/images/resources/features-style2-2.jpg',
            responseTime: 'Morning and afternoon lake-friendly arrival blocks.',
            neighborhoods: ['Lake Lanier Islands', 'Mulberry Preserve'],
            serviceFocus: [
                'Boat & dock removal',
                'Storm debris cleanup',
                'Estate & garage cleanouts'
            ],
            serviceHighlights: [
                { title: 'Lake Access Ready', description: 'Barge-friendly scheduling and shoreline-safe loading.' },
                { title: 'HOA Partners', description: 'Approved crews for neighborhood common areas.' },
                { title: 'Eco Disposal', description: 'Metal, wood, and fiberglass recycling streams.' }
            ],
            typicalClients: ['Lake homeowners', 'HOAs', 'Marina managers'],
            popularZips: ['30542'],
            lat: 34.1804,
            lng: -83.9252
        },
        {
            name: 'Decatur',
            county: 'DeKalb County',
            state: DEFAULT_STATE,
            headline: 'Decatur Junk Removal & Historic District Cleanouts',
            tagline: 'Friendly neighborhood crews for bungalows, condos, and campuses.',
            summary: 'We cover Oakhurst, downtown Decatur, and nearby neighborhoods with careful, courteous junk removal.',
            heroImage: 'assets/images/resources/features-style2-1.jpg',
            responseTime: 'Guaranteed next-day with courtesy ETA texts.',
            neighborhoods: ['Oakhurst', 'Downtown Decatur', 'Winnona Park'],
            serviceFocus: [
                'Residential junk removal',
                'Dorm & campus cleanouts',
                'Appliance recycling'
            ],
            serviceHighlights: [
                { title: 'Historic Home Care', description: 'Floor and doorway protection for tight hallways.' },
                { title: 'Campus Friendly', description: 'Coordinated pickups for Agnes Scott and Emory housing.' },
                { title: 'Donation First', description: 'Furniture and books routed to local nonprofits.' }
            ],
            typicalClients: ['Homeowners', 'Campus facilities', 'Property managers'],
            popularZips: ['30030', '30033'],
            lat: 33.7748,
            lng: -84.2963
        },
        {
            name: 'Marietta',
            county: 'Cobb County',
            state: DEFAULT_STATE,
            headline: 'Marietta Square & Cobb County Junk Removal',
            tagline: 'Full-service hauling for neighborhoods, offices, and job sites.',
            summary: 'From Sope Creek estates to Cobb industrial corridors, we clear clutter fast.',
            heroImage: 'assets/images/parallax-background/service-style1.jpg',
            responseTime: 'Same-day or scheduled recurring pickups.',
            neighborhoods: ['Marietta Square', 'East Cobb', 'Sope Creek'],
            serviceFocus: [
                'Residential cleanouts',
                'Office & warehouse hauling',
                'Construction debris removal'
            ],
            serviceHighlights: [
                { title: 'Contractor Coordination', description: 'Rolling dumpsters-on-demand without the permits.' },
                { title: 'Estate Specialists', description: 'Compassionate crews for estate and downsizing projects.' },
                { title: 'Cobb Compliance', description: 'Knowledge of county disposal guidelines keeps jobs simple.' }
            ],
            typicalClients: ['Builders', 'Families', 'Office managers'],
            popularZips: ['30060', '30062', '30067'],
            lat: 33.9526,
            lng: -84.5499
        },
        {
            name: 'Suwanee',
            county: 'Gwinnett County',
            state: DEFAULT_STATE,
            headline: 'Suwanee & Sugar Hill Junk Removal',
            tagline: 'Eco-minded hauling for parks, neighborhoods, and small businesses.',
            summary: 'Family-friendly crews serving Town Center, Suwanee Gateway, and every HOA in between.',
            heroImage: 'assets/images/resources/features-style2-1.jpg',
            responseTime: 'Guaranteed next-day pickups with SMS arrival alerts.',
            neighborhoods: ['Town Center Park', 'Suwanee Gateway', 'Ruby Forest'],
            serviceFocus: [
                'Garage & attic cleanouts',
                'Playset & hot tub removal',
                'Small business junk removal'
            ],
            serviceHighlights: [
                { title: 'Eco-Friendly Routing', description: 'Smart routing to minimize emissions and landfill trips.' },
                { title: 'Family-Safe Crews', description: 'Background-checked teams respectful of HOA guidelines.' },
                { title: 'Donation Partnerships', description: 'Working with Gwinnett charities for reusable items.' }
            ],
            typicalClients: ['HOAs', 'Families', 'Local shops'],
            popularZips: ['30024', '30515'],
            lat: 34.0514,
            lng: -84.0713
        },
        {
            name: 'Roswell',
            county: 'Fulton County',
            state: DEFAULT_STATE,
            headline: 'Roswell Junk Removal & Historic Corridor Support',
            tagline: 'Riverfront estates, Canton Street shops, and business parks covered.',
            summary: 'We haul for historic homes, creative studios, and industrial campuses across Roswell.',
            heroImage: 'assets/images/resources/video-gallery-style2-bg.jpg',
            responseTime: 'Same-day options with tight scheduling.',
            neighborhoods: ['Historic Roswell', 'East Roswell', 'Holcomb Bridge'],
            serviceFocus: [
                'Estate & downsizing projects',
                'Retail & restaurant cleanouts',
                'Warehouse & flex space hauling'
            ],
            serviceHighlights: [
                { title: 'Historic Sensitivity', description: 'Protective gear keeps original floors pristine.' },
                { title: 'Restaurant Ready', description: 'Grease trap, appliance, and seating removal.' },
                { title: 'Business Park Partner', description: 'After-hours hauling for minimal disruption.' }
            ],
            typicalClients: ['Homeowners', 'Restaurateurs', 'Business parks'],
            popularZips: ['30075', '30076'],
            lat: 34.0232,
            lng: -84.3616
        },
        {
            name: 'Cumming',
            county: 'Forsyth County',
            state: DEFAULT_STATE,
            headline: 'Cumming & North Forsyth Junk Removal',
            tagline: 'From lake homes to farmland, we clear every property type.',
            summary: 'Trusted hauling for Vickery, Sawnee Mountain, and expanding Forsyth neighborhoods.',
            heroImage: 'assets/images/resources/features-style2-2.jpg',
            responseTime: 'Next-day with flexible weekend slots.',
            neighborhoods: ['Vickery', 'Downtown Cumming', 'Sawnee Mountain'],
            serviceFocus: [
                'Barn & shed cleanouts',
                'Construction debris hauling',
                'Residential junk removal'
            ],
            serviceHighlights: [
                { title: 'Heavy-Duty Equipment', description: 'Loaders and trailers sized for acreage cleanups.' },
                { title: 'Rural Friendly', description: 'Teams comfortable on gravel roads and long driveways.' },
                { title: 'Donation Network', description: 'Furniture and supplies routed to Forsyth charities.' }
            ],
            typicalClients: ['Builders', 'Acreage owners', 'HOAs'],
            popularZips: ['30040', '30041'],
            lat: 34.2073,
            lng: -84.1402
        }
    ];

    function slugify(value) {
        return (value || '')
            .toString()
            .trim()
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    function buildFallback(name) {
        const slug = slugify(name || 'service-area');
        return {
            slug,
            name: name || 'Your City',
            county: 'Metro Atlanta',
            state: DEFAULT_STATE,
            headline: `${name || 'Metro Atlanta'} Junk Removal & Hauling`,
            tagline: `Local crews ready to haul junk anywhere in ${name || 'your community'}.`,
            summary: `Full-service residential, commercial, and construction junk removal across ${name || 'the metro area'}.`,
            heroImage: 'assets/images/breadcrumb/breadcrumb-1.jpg',
            responseTime: 'Same-day or next-day appointments, seven days a week.',
            neighborhoods: ['Historic Downtown', 'Surrounding Neighborhoods'],
            serviceFocus: [
                'Residential junk removal',
                'Commercial cleanouts',
                'Eco-friendly recycling'
            ],
            serviceHighlights: [
                { title: 'Local Teams', description: 'Crew members that know the HOA rules and back roads.' },
                { title: 'Heavy Lifting Included', description: 'You point to what goes, we haul it out.' },
                { title: 'Donation First', description: 'We keep reusable items in circulation whenever possible.' }
            ],
            typicalClients: ['Homeowners', 'Property managers', 'Contractors'],
            popularZips: [],
            lat: 33.7488,
            lng: -84.388,
            fallback: true
        };
    }

    const cityMap = {};

    featuredCityConfigs.forEach(config => {
        const slug = config.slug || slugify(config.name);
        cityMap[slug] = {
            slug,
            ...config
        };
    });

    function resolveCity(param) {
        if (!param) {
            return cityMap.quick;
        }
        const slug = slugify(param);
        if (cityMap[slug]) {
            return cityMap[slug];
        }
        const matchedName = orderedCityNames.find(name => slugify(name) === slug);
        return buildFallback(matchedName || param);
    }

    window.CityServiceData = {
        orderedCities: orderedCityNames,
        map: cityMap,
        slugify,
        getCityRecord(param) {
            return resolveCity(param);
        },
        buildFallback
    };
})(window);

