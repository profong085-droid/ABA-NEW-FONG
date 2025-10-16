'use client';

import Link from "next/link";

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "ផ្តល់ជូនថ្មីសម្រាប់អតិថិជនថ្មី",
      date: "15 តុលា 2025",
      excerpt: "យើងខ្ញុំមានផ្តល់ជូនពិសេសសម្រាប់អតិថិជនថ្មីដែលចុះឈ្មោះប្រើប្រាស់កម្មវិធីរបស់យើង...",
      category: "ផ្តល់ជូន"
    },
    {
      id: 2,
      title: "កែលម្អប្រព័ន្ធថ្មី",
      date: "10 តុលា 2025",
      excerpt: "យើងខ្ញុំបានធ្វើកែលម្អប្រព័ន្ធថ្មីដើម្បីបង្កើនបទពិសោធន៍របស់អតិថិជន...",
      category: "បច្ចុប្បន្នភាព"
    },
    {
      id: 3,
      title: "ថ្ងៃបុណ្យធនាគារ ABA",
      date: "5 តុលា 2025",
      excerpt: "សូមរីករាយជាមួយយើងខ្ញុំនៅថ្ងៃបុណ្យធនាគារ ABA ដែលនឹងមានសកម្មភាពពិសេស...",
      category: "ព្រឹត្តិការណ៍"
    }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 safe-area-inset-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                ABA Mobile
              </Link>
            </div>
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              ត្រលប់ទៅដើម
            </Link>
          </div>
        </div>
      </header>

      {/* Announcements Content */}
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-3">ប្រកាសសាធារណៈ</h1>
            <p className="text-gray-400">ព័ត៌មាន និងប្រកាសថ្មីៗពីធនាគារ ABA</p>
          </div>
          
          <div className="space-y-6">
            {announcements.map((announcement) => (
              <div 
                key={announcement.id} 
                className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-pink-500/30 transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-medium">
                    {announcement.category}
                  </span>
                  <span className="text-gray-500 text-sm">{announcement.date}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3">{announcement.title}</h2>
                <p className="text-gray-400 mb-4">{announcement.excerpt}</p>
                
                <Link 
                  href={`/announcements/${announcement.id}`} 
                  className="inline-flex items-center text-pink-400 hover:text-pink-300 text-sm font-medium"
                >
                  អានបន្ថែម
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-all border border-gray-700">
              មើលប្រកាសចាស់ៗ
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}