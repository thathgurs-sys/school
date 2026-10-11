export interface GalleryImage {
  id: string;
  title: string;
  category: 'classroom' | 'play' | 'art' | 'daycare';
  categoryLabel: string;
  imageSrc: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Montessori Activity Hub',
    category: 'classroom',
    categoryLabel: 'Learning Rooms',
    imageSrc: '/src/assets/images/preschool_activity_zone_1791689514190.jpg',
    caption: 'Child-sized wooden shelves, Montessori sensory apparatus, and reading corner.'
  },
  {
    id: 'g2',
    title: 'Joyful Play & Problem Solving',
    category: 'play',
    categoryLabel: 'Play Zone',
    imageSrc: '/src/assets/images/hero_preschool_girl_1791689477807.jpg',
    caption: 'Hands-on wooden sorting and stacking towers building cognitive and motor finesse.'
  },
  {
    id: 'g3',
    title: 'Collaborative Block Play',
    category: 'classroom',
    categoryLabel: 'Learning Rooms',
    imageSrc: '/src/assets/images/about_kids_playing_1791689493141.jpg',
    caption: 'Learning teamwork, communication, and architectural imagination through wooden blocks.'
  },
  {
    id: 'g4',
    title: 'Vibrant Finger Paint Studio',
    category: 'art',
    categoryLabel: 'Art & Creativity',
    imageSrc: '/src/assets/images/kid_handprint_art_1791689503843.jpg',
    caption: 'Messy play is genius play! Safe, edible organic non-toxic finger paints.'
  }
];
