export interface Project {
    slug: string;
    title: string;
    description: string;
    category: 'android' | 'ml' | 'web';
    tags: string[];
    featured: boolean;
    date: Date;
    image?: string;
    repoUrl?: string;
    apkUrl?: string;
    liveUrl?: string;
    highlights: string[];
}

export const projects: Project[] = [
    {
        slug: "meethalf",
        title: "MeetHalf",
        description: "Fair meetup location finder for groups that minimizes travel time inequality using multi-modal routing and smart POI suggestions.",
        category: "web",
        tags: ["React", "TypeScript", "Maps API", "Algorithm Design"],
        featured: true,
        date: new Date("2024-10-01"),
        image: "/images/cards/meethalf.svg",
        repoUrl: "https://github.com/Gherra/MeetHalf",
        highlights: [
            "Multi-modal routing (driving, transit, walking)",
            "Fairness algorithm minimizes average travel time",
            "Real-time travel time calculations using Google Directions API",
            "Interactive map with venue suggestions"
        ]
    },
    {
        slug: "moviefinder",
        title: "MovieFinder",
        description: "Modern Android app for discovering movies with swipe-based UI, personalized recommendations, and seamless TMDb API integration.",
        category: "android",
        tags: ["Jetpack Compose", "MVVM", "Room", "TMDb API"],
        featured: true,
        date: new Date("2024-11-01"),
        image: "/images/cards/moviefinder.svg",
        repoUrl: "https://github.com/Gherra/MovieFinder",
        apkUrl: "https://github.com/Gherra/MovieFinder/releases",
        highlights: [
            "Tinder-style swipe interface for movie discovery",
            "Personalized recommendations based on user preferences",
            "Room database caching with pagination",
            "Material Design 3 with full dark mode support"
        ]
    },
    {
        slug: "panorama-fastr-stitch",
        title: "Panorama FastR-Stitch",
        description: "High-performance panorama stitching using MATLAB with feature detection, RANSAC homography, and multi-band blending.",
        category: "ml",
        tags: ["MATLAB", "Computer Vision", "RANSAC", "Image Processing"],
        featured: true,
        date: new Date("2024-03-01"),
        image: "/images/cards/panorama.svg",
        repoUrl: "https://github.com/Gherra/Panorama-FastR-Stitch",
        highlights: [
            "Custom FAST corner detection implementation",
            "RANSAC homography estimation with 99.9% confidence",
            "Multi-band blending for seamless stitching",
            "Processes 2-20 images in under 2 seconds"
        ]
    },
];