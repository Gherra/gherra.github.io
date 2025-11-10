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
        slug: 'moviefinder',
        title: 'MovieFinder',
        description: 'Modern Android app for discovering movies with swipe-based UI, personalized recommendations, and seamless TMDb API integration.',
        category: 'android',
        tags: ['Jetpack Compose', 'MVVM', 'Room', 'TMDb API', 'Kotlin', 'Retrofit'],
        featured: true,
        date: new Date('2024-11-01'),
        repoUrl: 'https://github.com/Gherra/MovieFinder',
        apkUrl: 'https://github.com/Gherra/MovieFinder/releases',
        highlights: [
            'Swipe-based movie discovery with intuitive Tinder-like interface',
            'Personalized recommendations using preference analysis',
            'Efficient pagination with Room database caching and TMDb API',
            'Bottom navigation with filter system for genres and ratings',
            'Modern Material Design 3 with light/dark theme support',
        ],
    },
    {
        slug: 'panorama-fastr-stitch',
        title: 'Panorama FastR-Stitch',
        description: 'High-performance panorama stitching using MATLAB with feature detection, RANSAC homography, and multi-band blending.',
        category: 'ml',
        tags: ['MATLAB', 'Computer Vision', 'RANSAC', 'Image Processing', 'Homography'],
        featured: true,
        date: new Date('2024-03-15'),
        repoUrl: 'https://github.com/Gherra/Panorama-FastR-Stitch',
        highlights: [
            'SIFT/ORB feature detection with robust keypoint matching',
            'RANSAC-based homography estimation for alignment accuracy',
            'Multi-band blending for seamless panorama transitions',
            'Handles rotation, translation, and scale variations',
            'Optimized for speed with efficient matrix operations',
        ],
    },
    {
        slug: 'meethalf',
        title: 'MeetHalf',
        description: 'Fair meetup location finder for groups that minimizes travel time inequality using multi-modal routing and smart POI suggestions.',
        category: 'web',
        tags: ['React', 'TypeScript', 'Maps API', 'Algorithm Design', 'Routing'],
        featured: true,
        date: new Date('2024-12-01'),
        repoUrl: 'https://github.com/Gherra/MeetHalf',
        // liveUrl: 'https://meethalf.vercel.app',
        highlights: [
            'Fairness-optimized algorithm minimizing maximum travel time',
            'Multi-modal routing supporting car, transit, and walking',
            'Interactive map with intelligent POI category filtering',
            'Real-time travel time calculations for all participants',
            'Responsive design with smooth UX for group coordination',
        ],
    },
];