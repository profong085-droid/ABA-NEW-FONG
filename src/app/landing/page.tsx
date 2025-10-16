'use client';

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 safe-area-inset-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                ABA Mobile
              </h1>
            </div>
            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  លក្ខណៈពិសេស
                </Link>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  សេវាកម្ម
                </Link>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  ទំនក់ទំនង
                </Link>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                ចូល
              </Link>
              <Link 
                href="/register"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-pink-500/20"
              >
                ចុះឈ្មោះ
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            ធនាគារ ABA Mobile
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            កម្មវិធីធនាគារទាន់សម័យដែលមានសុវត្ថិភាព និងងាយស្រួលប្រើប្រាស់សម្រាប់ការងារធនាគាររបស់អ្នក
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link 
              href="/login"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all shadow-xl hover:shadow-pink-500/30 transform hover:-translate-y-1"
            >
              ចាប់ផ្តើមឥឡូវ
            </Link>
            <Link 
              href="#features"
              className="bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-700 transition-all border border-gray-700"
            >
              ស្វែងយល់បន្ថែម
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-70"></div>
            <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-3 mx-auto">
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-sm mb-1">លក្ខណៈ {item}</h3>
                    <p className="text-gray-400 text-xs">ពិពណ៌នាអំពីលក្ខណៈពិសេស</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">លក្ខណៈពិសេសរបស់យើង</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              យើងផ្តល់ជូននូវលក្ខណៈពិសេសដែលនាំមកនូវបទពិសោធន៍ដ៏ល្អបំផុតសម្រាប់អតិថិជនរបស់យើង
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-900/50 rounded-3xl p-6 border border-gray-800 hover:border-pink-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">លក្ខណៈពិសេស {item}</h3>
                <p className="text-gray-400 mb-4">
                  ពិពណ៌នាអំពីលក្ខណៈពិសេសនៃសេវាកម្មរបស់យើងដែលនាំមកនូវបទពិសោធន៍ដ៏ល្អបំផុតសម្រាប់អតិថិជន
                </p>
                <Link href="#" className="text-pink-400 hover:text-pink-300 flex items-center gap-2 text-sm font-medium">
                  ស្វែងយល់បន្ថែម
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950/80 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                ABA Mobile
              </h3>
              <p className="text-gray-400 text-sm">
                កម្មវិធីធនាគារទាន់សម័យសម្រាប់តម្រូវការធនាគាររបស់អ្នក
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">សេវាកម្ម</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">គណនី</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">កាតឥណទាន</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">ឥណទាន</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">ការប្រាក់</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">ជំនួយ</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">មជ្ឈមណ្ឌលជំនួយ</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">គោលការណ៍ឯកជន</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">លក្ខខណ្ឌប្រើប្រាស់</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">ផ្ទៀងផ្ទាត់</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">ទំនក់ទំនង</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>ទូរសព្ទ: 012 345 678</li>
                <li>អ៊ីមែល: info@aba.com.kh</li>
                <li>អាសយដ្ឋាន: ភ្នំពេញ កម្ពុជា</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 ABA Mobile. រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ ធនាគារ ABA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}