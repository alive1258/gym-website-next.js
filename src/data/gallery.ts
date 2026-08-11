export interface GalleryPhoto {
  id: string;
  caption: string;
  image: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  { id: "1", caption: "Free Weights Floor", image: "/gym/gym-01.jpg" },
  { id: "2", caption: "Premium Strength Suite", image: "/gym/gym-02.jpg" },
  { id: "3", caption: "Functional Training Zone", image: "/gym/gym-03.png" },
  { id: "4", caption: "Powerlifting Platform", image: "/gym/gym-04.jpg" },
  { id: "5", caption: "Cardio & Machines", image: "/gym/gym-05.jpg" },
  { id: "6", caption: "Strength & Conditioning Studio", image: "/gym/gym-06.webp" },
];
