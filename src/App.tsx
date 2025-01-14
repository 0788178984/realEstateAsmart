import React from 'react';
import { BookOpen, Search, TrendingUp, BookMarked, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ReadVerse</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Discover Your Next
            <span className="text-indigo-600"> Great Read</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Explore thousands of books, join reading challenges, and connect with fellow readers.
          </p>
        </div>
      </div>

      {/* Featured Books */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((book) => (
            <div key={book} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img
                src={`https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80`}
                alt="Book cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">The Art of Reading</h3>
                <p className="text-sm text-gray-500">By John Smith</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-indigo-600 font-medium">$24.99</span>
                  <button className="text-white bg-indigo-600 px-3 py-1 rounded-full text-sm hover:bg-indigo-700">
                    Add to List
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <BookMarked className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Track Your Reading</h3>
              <p className="mt-2 text-sm text-gray-500">
                Keep track of books you've read and want to read
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <TrendingUp className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Reading Challenges</h3>
              <p className="mt-2 text-sm text-gray-500">
                Set reading goals and track your progress
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <User className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Community</h3>
              <p className="mt-2 text-sm text-gray-500">
                Connect with readers who share your interests
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-lg font-semibold text-gray-900">ReadVerse</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 ReadVerse. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;