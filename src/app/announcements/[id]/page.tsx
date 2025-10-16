'use client';

import Link from "next/link";

export default function AnnouncementDetailPage({ params }: { params: { id: string } }) {
  // In a real app, this would be fetched from an API
  const announcement = {
    id: params.id,
    title: "ផ្តល់ជូនថ្មីសម្រាប់អតិថិជនថ្មី",
    date: "15 តុលា 2025",
    author: "ក្រុមការងារ ABA",
    category: "ផ្តល់ជូន",
    content: `
      <p>សូមស្វាគមន៍ដល់អតិថិជនថ្មីទាំងអស់ដែលចុះឈ្មោះប្រើប្រាស់កម្មវិធី ABA Mobile របស់យើងខ្ញុំ!</p>
      
      <p>យើងខ្ញុំមានផ្តល់ជូនពិសេសសម្រាប់អតិថិជនថ្មីដែលចុះឈ្មោះប្រើប្រាស់កម្មវិធីរបស់យើង ដោយមានលក្ខខណ្ឌដូចខាងក្រោម:</p>
      
      <ul>
        <li>ផ្តល់ជូន 2,000 រៀល សម្រាប់ការបញ្ចូលប្រាក់ដំបូង</li>
        <li>ឥណទានឥតការប្រាក់ 100,000 រៀល សម្រាប់ 30 ថ្ងៃដំបូង</li>
        <li>មិនគិតថ្លៃសេវាកម្មសម្រាប់ 3 ខែដំបូង</li>
      </ul>
      
      <p>ផ្តល់ជូននេះមានសុពលភាពត្រឹមត្រូវដល់ថ្ងៃទី 30 វិច្ឆិកា 2025 ហើយអាចប្រើប្រាស់បានតែសម្រាប់អតិថិជនថ្មីប៉ុណ្ណោះ។</p>
      
      <p>សូមទាក់ទងមជ្ឈមណ្ឌលសេវាកម្មរបស់យើង ឬទាក់ទងតាមរយៈលេខទូរសព្ទ 012 345 678 សម្រាប់ព័ត៌មានបន្ថែម។</p>
    `
  };
  
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
              href="/announcements" 
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              ត្រលប់ទៅប្រកាស
            </Link>
          </div>
        </div>
      </header>

      {/* Announcement Detail */}
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <article className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-medium">
                {announcement.category}
              </span>
              <span className="text-gray-500 text-sm">{announcement.date}</span>
              <span className="text-gray-500 text-sm">ដោយ {announcement.author}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">{announcement.title}</h1>
            
            <div 
              className="prose prose-invert max-w-none text-gray-300 space-y-4"
              dangerouslySetInnerHTML={{ __html: announcement.content }}
            />
          </article>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/announcements" 
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-all border border-gray-700 text-center"
            >
              ត្រលប់ទៅប្រកាស
            </Link>
            <Link 
              href="/login" 
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all text-center"
            >
              ចូលដើម្បីទទួលបានផ្តល់ជូន
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}