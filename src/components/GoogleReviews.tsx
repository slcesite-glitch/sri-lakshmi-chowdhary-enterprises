import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, MessageSquare, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS, BUSINESS_NAP } from '../data/appliances';

export const GoogleReviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState(GOOGLE_REVIEWS);
  const [likedReviews, setLikedReviews] = useState<Record<number, boolean>>({});

  const handleHelpfulClick = (idx: number) => {
    setLikedReviews((prev) => {
      const isLiked = !prev[idx];
      const updated = { ...prev, [idx]: isLiked };
      setReviewsList((curr) =>
        curr.map((r, i) =>
          i === idx ? { ...r, helpfulCount: r.helpfulCount + (isLiked ? 1 : -1) } : r
        )
      );
      return updated;
    });
  };

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-2">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Real Hyderabad Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Synchronized Google Reviews
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Verified local feedback from homeowners, villa residents, and business proprietors across Hyderabad who bought and installed appliances with us.
            </p>
          </div>

          {/* Google Summary Box */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-2xs">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-slate-900 leading-none">
                {BUSINESS_NAP.googleRating}
              </span>
              <div className="flex items-center text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-[10px] text-slate-500 font-semibold mt-0.5">
                {BUSINESS_NAP.reviewsCount}+ ratings
              </span>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                </svg>
                Google Verified Profile
              </div>
              <a
                href={BUSINESS_NAP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 hover:underline mt-1"
              >
                <span>Write a Review</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Authentic Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${review.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-xs`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {review.author}
                    </h4>
                    <span className="text-[11px] text-slate-500">
                      {review.locality}
                    </span>
                  </div>
                </div>

                {/* Stars and relative time */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-amber-400" aria-label="5 stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {review.relativeTime}
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    <CheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                    Verified Buyer
                  </span>
                </div>

                {/* Appliance Mentioned */}
                <div className="text-xs font-bold text-blue-900 bg-blue-50/70 px-2.5 py-1 rounded-md mb-3 border border-blue-100">
                  Purchased: {review.productPurchased}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Footer action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px]">Posted on Google Maps</span>
                <button
                  onClick={() => handleHelpfulClick(idx)}
                  className={`inline-flex items-center gap-1 font-semibold transition-colors cursor-pointer ${
                    likedReviews[idx] ? 'text-blue-700' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  aria-label="Mark review as helpful"
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${likedReviews[idx] ? 'fill-blue-700' : ''}`} />
                  <span>Helpful ({review.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
