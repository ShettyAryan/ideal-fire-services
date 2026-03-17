export type Category =
  | 'All'
  | 'Commercial'
  | 'Residential'
  | 'Industrial'
  | 'Healthcare'
  | 'Hospitality'

export interface Project {
  id: number
  title: string
  client: string
  location: string
  year: string
  duration: string
  category: Exclude<Category, 'All'>
  services: string[]
  img: string
  gallery?: string[]
  featured?: boolean
  size: 'large' | 'medium' | 'small'
  value: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lodha World One Tower",
    client: "Lodha Group",
    location: "Worli, Mumbai",
    year: "2023",
    duration: "18 months",
    category: "Residential",
    services: ["Hydrant System", "Sprinklers", "Fire Alarm"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkmaeCdDmgZGSXZXr3_hGKCS3HEwXvLySKGoKYE81vkiPxGiJkNmMlU0hiAl_4u5ZmKi14ODgQnfC-lYGHPbipDvOshH4uD5f3p1-GqkPeFLGbP-nM6BZICnk5qir-lqhj_0W9A2eKjmEC2o3dcpJNohmwfzEvnhzAfla-Y5Od6nsDKY5JRQXc_M-2ERNYonVdYjPhkjF4TDW7WH2S8kwqcgZ68A9pshhTwueWxvix7t4a285fVKKpcPAeK5X1XO27IXxDK8yuxWo",
    gallery: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1766152386307-60a0b2a79a50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    size: "large",
    value: "₹2.4 Cr",
  },
  {
    id: 2,
    title: "HDFC Bank Corporate HQ",
    client: "HDFC Bank Ltd.",
    location: "Lower Parel, Mumbai",
    year: "2022",
    duration: "14 months",
    category: "Commercial",
    services: ["Gas Suppression", "Fire Alarm", "AMC"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgaLz89TgFsyX0CxDj8pZ0QlLj9rSgY2n3ltAKZegDKxD3yuPwRtLHwpjH2E7U8_eSvULq7_tOZ2cUbJY7gbIp2hBs86Zx40XT4f2vDTyfj-4Lynz4xXqTHxu1YZcdOgA-XUIMBp5-iVDmXW-ZSdPtLFJfSb9Hmb_ka3_mUhLI8sYOUGeT3idjj64RPuRwCVRTfa5OW_C4sEx7EJ5YneJ7N-CXzhv74WexEkuMAxEnwezVOpA8_08wAZR7IZqL34Qxt7oN9ygbIt4",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    ],
    size: "medium",
    value: "₹85 L",
  },
  {
    id: 3,
    title: "Tata Power Distribution Facility",
    client: "Tata Power Co.",
    location: "Andheri East, Mumbai",
    year: "2023",
    duration: "10 months",
    category: "Industrial",
    services: ["Hydrant System", "Sprinklers", "Suppression"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcrxeTXDYoBUvpVqgt2PtPu4gpz6emq0OUCRCtUt4Sd8nBNYmj11u33xDsKkqDac6Vy7zJmjwImb3do1K5ICTVvA_zc9J__iQazwe11s2HjxNu2_82HzXF8shanThp9gUQZDjFjhphcjXJ02kUWIhvbOC5BU4IM_ZEBBE8JplI3hOQrY5rX5Y4wIR_Wpj3Mkl_rE714mw1wQcFLsrdBCCe2s7Uj-S4M7yGgB9care8_GL-hdmd2bVn6FrvdaPrS3SZQ1U8snZ605s",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    ],
    size: "medium",
    value: "₹1.1 Cr",
  },
  {
    id: 4,
    title: "Kokilaben Dhirubhai Ambani Hospital",
    client: "KDAH Mumbai",
    location: "Andheri West, Mumbai",
    year: "2021",
    duration: "16 months",
    category: "Healthcare",
    services: ["Full System", "Alarm", "Training", "AMC"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKbb3JaimJUeMyee1zd0XXybr5lk5_HU3nyeuk0jDF3Y1C2GJVv1FHA_xppqrWrXr7ZcNPTSIBXy1eMgpZ9LRxMXGrFHwvp-qLi45O2Yb9iQ2_8IWPJiNNFRb3XAKXQYw2W3jQHbFVUERcMCoSA3samQExx75ot9mNiKfVhXwPFlHz9I1EUE47uHHWNtyjfYslyxTDrTwMdn3YK1MB2UFtn34daanQNKkWAvVsaga9bO1gTZRaXZa6zCBvJKpISy0DbjbuijghHiw",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    size: "large",
    value: "₹3.2 Cr",
  },
  {
    id: 5,
    title: "Godrej BKC Commercial Complex",
    client: "Godrej Properties",
    location: "BKC, Mumbai",
    year: "2022",
    duration: "12 months",
    category: "Commercial",
    services: ["Hydrant", "Sprinklers", "Detection"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA-iT24GVHhhI0o21QoM8Hq6fbXQ4a8o5k13KZiQB5NPjoIlE94Zs8llXUu0x9y1c6oyeOgrZ2KbNe2aTPyDgUra41o5a9lCZ0svtwOvCQLdIxWkzLD8zeUlVD6L_d-mF180PitJoGAAmDSArSw7vlBZx_EZkvlYRO-vav80RFRQO0rnRz5keHaVRm52VP_hY14IKTEMCD7xsE3Q3y2pe6O6ODhKZCygU-MtxG-KcPf1BETktFC4NqdTvs2ZfeRRvxiUfnxRB7li8",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    ],
    size: "small",
    value: "₹62 L",
  },
  {
    id: 6,
    title: "The Leela Mumbai – Full Retrofit",
    client: "Leela Hotels",
    location: "Andheri East, Mumbai",
    year: "2020",
    duration: "9 months",
    category: "Hospitality",
    services: ["Full System Retrofit", "AMC"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe_HwUWEdb3oWeGVIF5W5arSWfQeZfTpg0jD1p3-NHN_YmDb0JllAAsTQOpkPG4zDlu8d-1rLItZvWsnhbwcbEsj78O8OdZ3WGPDdBjFlbBLQyFjrW-E2e3NfkMM0w7H-280r6MY1OHO3-CWKOxJ5kPgPAx1BGIv4fKGgTPyCdMSt-c9umV8Z0a_DsLkB2Dznm9exDnHTlH7YzaKMdUn9UE7c-lu81ot9fbXrYMCG5iXzn1-2mxyzLHLen5xapBOVq3XzFAyVrnXg",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    ],
    size: "medium",
    value: "₹1.8 Cr",
  },
  {
    id: 7,
    title: "Reliance Industries Warehouse",
    client: "Reliance Industries Ltd.",
    location: "Bhiwandi, Thane",
    year: "2023",
    duration: "8 months",
    category: "Industrial",
    services: ["Industrial Hydrant", "High-Temp Detectors"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3CC7YEvHKQJUPe_L8Te2NZOgUdY8uuYbWrZ8Rhd_8Scl6dFI31aI-wWRHRPAlaSUr32fFmLvQF2wU0UsgC2O9jp0lbqzr75y2TjY3KrhVmPw8Fo7O7OC9iyAM9BPTmPGEQCMiuPgZtndmFYGUkZT8GFeLFjHFB5h3nU-2ej70yhtNNtp7fqSE6rMupQ47JOQoMi2fK6Awr6t1vGTZvL_SSF05dRTQmPxY2LDTZDfxqDzdKPkvOoNeA-qxXA3HR4gNld8WqB8cQ6E",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    ],
    size: "small",
    value: "₹45 L",
  },
  {
    id: 8,
    title: "Mahindra Lifespaces — Alcove",
    client: "Mahindra Lifespaces",
    location: "Dahisar, Mumbai",
    year: "2022",
    duration: "11 months",
    category: "Residential",
    services: ["Sprinklers", "Alarm", "Compliance"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzB28Fogwl4AhhZEQ9B9rZnsn_OicbE7uIR7YB5HR70DvgivtFJw6Ced6E8_1B_z4wTVhZEPJfB13jaENJclQodqVKmtzEOJJDG4HEouajN2slzYZ4CmTsEtD3HGKRmdGYgZlO7zomQbtbM7pXyaEmbM9PBEZ2rcJeOUv0bFmG9HLm5N1Cl879e6CU6SUZzq9U2n75R9q3tfWRKenbrkPEmO0qQmN1jCRMVTziyHARhr6BKoTS2-4EmVj1GXkjlmCiQod_wUz8hBU",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    ],
    size: "small",
    value: "₹38 L",
  },
  {
    id: 9,
    title: "Mumbai Port Trust — Dock 7",
    client: "Mumbai Port Authority",
    location: "Mazgaon, Mumbai",
    year: "2019",
    duration: "15 months",
    category: "Industrial",
    services: ["Marine Hydrant", "Foam Suppression", "CO2"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjP-0GI_WDRXuVk6_2fndRckpcHJOD2-LTcaxhxSG9UvOI2DQFWhYbu9l53CMy0mYtfoWbTY0D6k1prhMQtf28KiZ9eaakTFO5lBHbncVLdza8O9MJ6sqHeXxpURal8NRTkvJS2AutkFP2DEPQkHk5UiGMtGRlOgzLe7vlUkFngX96NI1D92mJd1DRuOhPzIq43giS_mC4McfrrjeMNII25bAY7dOE6Y6DAFPtL-wzuCx2hZyuaDtZB4vF4xRS84I1FlKAjpIimFk",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    size: "medium",
    value: "₹5.6 Cr",
  },
];

export const categories: Category[] = ['All', 'Commercial', 'Residential', 'Industrial', 'Healthcare', 'Hospitality']

export const categoryColors: Record<Category, string> = {
  All: 'bg-slate-900 text-white',
  Commercial: 'bg-blue-100 text-blue-800',
  Residential: 'bg-emerald-100 text-emerald-800',
  Industrial: 'bg-orange-100 text-orange-800',
  Healthcare: 'bg-violet-100 text-violet-800',
  Hospitality: 'bg-amber-100 text-amber-800',
}

