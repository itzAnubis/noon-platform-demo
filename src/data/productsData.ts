export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  seller: string;
  rating: number;
  reviews: number;
  category: string;
}

export const categories = [
  'الكل',
  'حقائب',
  'مفروشات',
  'أطعمة',
  'خزفيات',
  'كروشيه',
  'عناية',
];

export const products: Product[] = [
  {
    id: 1,
    image: '/images/hand_bag.png',
    name: 'حقيبة يد مطرزة يدويّة',
    price: 450,
    seller: 'ليلى السيد',
    rating: 5,
    reviews: 42,
    category: 'حقائب',
  },
  {
    id: 2,
    image: '/images/table_cloth.png',
    name: 'مفرش طاولة مطرز بالخيوط الذهبية',
    price: 320,
    seller: 'فاطمة محمود',
    rating: 5,
    reviews: 28,
    category: 'مفروشات',
  },
  {
    id: 3,
    image: '/images/jam.png',
    name: 'مربّى طماطم بالأعشاب الطبيعية',
    price: 85,
    seller: 'أم علي',
    rating: 4,
    reviews: 156,
    category: 'أطعمة',
  },
  {
    id: 4,
    image: '/images/pot.png',
    name: 'إناء خزفي مصنوع يدويّاً',
    price: 280,
    seller: 'نور عبدالله',
    rating: 5,
    reviews: 35,
    category: 'خزفيات',
  },
  {
    id: 5,
    image: '/images/sofa_cloth.png',
    name: 'قطعة كروشيه مفرش أريكة',
    price: 195,
    seller: 'سارة إبراهيم',
    rating: 4,
    reviews: 51,
    category: 'كروشيه',
  },
  {
    id: 6,
    image: '/images/soap.png',
    name: 'مستحضرات العناية بالبشرة الطبيعية',
    price: 150,
    seller: 'منال عصام',
    rating: 5,
    reviews: 89,
    category: 'عناية',
  },
];
