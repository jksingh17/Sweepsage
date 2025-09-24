import React, { useEffect, useState } from "react";

interface SocialLink {
  platform: string;
  url: string;
  _id?: string;
}

interface Work {
  _id: string;
  creator: string;
  title: string;
  description?: string;
  photos?: string[];
  portfolioLinks?: SocialLink[];
  socialMedia?: SocialLink[];
  status?: string;
  createdAt?: string;
}

interface Creator {
  _id: string;
  name: string;
  email?: string;
  bio?: string;
  createdAt?: string;
  isApproved?: boolean;
  works?: Work[];
}

// Social media icon mapping
const socialIcons: Record<string, string> = {
  facebook: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
  twitter: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg",
  instagram: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
  linkedin: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
  youtube: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
  pinterest: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinterest.svg",
  tiktok: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg",
  behance: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg",
  dribbble: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dribbble.svg",
  github: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
  default: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/link.svg",
};

// Shimmer UI Component
const ShimmerCard = () => (
  <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="md:flex">
      <div className="md:w-2/3 p-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
          <div className="flex-1">
            <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse mb-2 w-3/4"></div>
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse w-1/2"></div>
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse w-5/6"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse w-4/6"></div>
        </div>
        
        <div className="mb-6">
          <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse mb-3 w-1/3"></div>
          <ul className="space-y-3">
            <li className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse"></li>
            <li className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse w-5/6"></li>
          </ul>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            ))}
          </div>
          <div className="w-32 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl animate-pulse"></div>
        </div>
      </div>
      
      <div className="md:w-1/3 bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex flex-col justify-center">
        <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md animate-pulse mb-4 w-1/2 mx-auto"></div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-square rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  </article>
);

export default function CreatorsPage() {
  const [creators, setCreators] = useState<Creator[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Creator | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchCreators = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "http://localhost:5000/api/public/approved-creators"
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (mounted) setCreators(data);
      } catch (error:unknown) {
        console.error(error);
        if (mounted) setError((error as Error).message || "Failed to fetch");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchCreators();
    return () => {
      mounted = false;
    };
  }, []);

  function aggregateSocialLinks(creator: Creator) {
    const map = new Map<string, string>();
    creator.works?.forEach((w) => {
      w.socialMedia?.forEach((s) => {
        if (s && s.platform && s.url && !map.has(s.url)) map.set(s.platform + s.url, s.url);
      });
    });
    return Array.from(map.keys()).map((k) => {
      for (const w of creator.works || []) {
        const found = w.socialMedia?.find((s) => (s.platform + s.url) === k);
        if (found) return found;
      }
      return { platform: "link", url: k } as SocialLink;
    });
  }

  function getAllPhotos(creator: Creator): string[] {
    const photos: string[] = [];
    creator.works?.forEach(work => {
      if (work.photos && work.photos.length > 0) {
        photos.push(...work.photos);
      }
    });
    return photos;
  }

  function renderAvatar(name?: string) {
    const initials = (name || "?")
      .split(" ")
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
    return (
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
        {initials}
      </div>
    );
  }

  const SocialIcon = ({ platform, url }: { platform: string, url: string }) => {
    const normalizedPlatform = platform.toLowerCase();
    const iconUrl = socialIcons[normalizedPlatform] || socialIcons.default;
    
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <img 
          src={iconUrl} 
          alt={platform} 
          className="w-5 h-5"
        />
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl md:w-5/6 mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Creative Talent Hub</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing creators and their exceptional work from around the world
          </p>
        </header>

        {loading && (
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <ShimmerCard key={item} />
            ))}
          </div>
        )}
        
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 mb-6 text-center">
            {error}
          </div>
        )}

        {!loading && !error && creators && creators.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-500 text-xl">No approved creators found.</p>
          </div>
        )}

        <div className="space-y-8">
          {creators?.map((creator) => {
            const allPhotos = getAllPhotos(creator);
            return (
              <article
                key={creator._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-6 mb-6">
                      {renderAvatar(creator.name)}
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">{creator.name}</h2>
                        <p className="text-gray-500">{creator.email}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {creator.bio || "A passionate creator dedicated to producing exceptional work that inspires and captivates audiences."}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Featured Work</h3>
                      <ul className="space-y-3">
                        {(creator.works || []).slice(0, 3).map((w) => (
                          <li key={w._id} className="text-gray-700">
                            <span className="font-medium text-indigo-600">{w.title}</span> - {w.description || "An impressive creative project."}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        {aggregateSocialLinks(creator).slice(0, 4).map((s) => (
                          <SocialIcon key={s.url} platform={s.platform} url={s.url} />
                        ))}
                      </div>

                      <button
                        onClick={() => setSelected(creator)}
                        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      >
                        View Portfolio
                      </button>
                    </div>
                  </div>

                  <div className="md:w-1/3 bg-gradient-to-br from-white to-gray-100 p-6 flex flex-col justify-center">
                    <h4 className="font-semibold text-gray-700 mb-4 text-center">Work Samples</h4>
                    {allPhotos.length > 0 ? (
                      <div className="grid grid-cols-2 gap-4">
                        {allPhotos.slice(0, 4).map((photo, index) => (
                          <div 
                            key={index}
                            className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                          >
                            <img 
                              src={photo} 
                              alt={`Work sample ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        No work samples available
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal for expanded profile */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
              <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-800">{selected.name}&apos;s Portfolio</h2>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl p-2"
                  aria-label="Close profile"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                {/* Creator Header Section */}
                <div className="flex flex-col items-center text-center mb-8">
                  {renderAvatar(selected.name)}
                  <h3 className="text-2xl font-bold mt-4 text-gray-800">{selected.name}</h3>
                  <p className="text-gray-600">{selected.email}</p>
                  <p className="mt-4 text-gray-700 max-w-2xl">{selected.bio || "A talented creator with a passion for excellence."}</p>
                  
                  <div className="mt-6 flex gap-3">
                    {aggregateSocialLinks(selected).map((s) => (
                      <SocialIcon key={s.url} platform={s.platform} url={s.url} />
                    ))}
                  </div>
                </div>

                {/* Works Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-2">Creative Works</h3>
                  
                  {selected.works && selected.works.length > 0 ? (
                    <div className="space-y-6">
                      {selected.works.map((w) => (
                        <div key={w._id} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                          <div className="flex flex-col md:flex-row gap-6">
                            {w.photos && w.photos.length > 0 && (
                              <div className="md:w-1/3">
                                <div className="rounded-xl overflow-hidden shadow-md">
                                  <img
                                    src={w.photos[0]}
                                    alt={w.title}
                                    className="w-full h-48 object-cover"
                                  />
                                </div>
                              </div>
                            )}
                            
                            <div className={`${w.photos && w.photos.length > 0 ? 'md:w-2/3' : 'w-full'}`}>
                              <h4 className="text-xl font-bold text-gray-800 mb-2">{w.title}</h4>
                              <p className="text-gray-600 mb-4">{w.description || "A creative project with attention to detail."}</p>
                              
                              <div className="flex flex-wrap gap-2">
                                {(w.portfolioLinks || []).map((p) => (
                                  <a
                                    key={p.url}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors flex items-center gap-1"
                                  >
                                    <span>🔗</span> {p.platform}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Additional photos if available */}
                          {w.photos && w.photos.length > 1 && (
                            <div className="mt-4 grid grid-cols-3 gap-2">
                              {w.photos.slice(1, 4).map((photo, index) => (
                                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                                  <img
                                    src={photo}
                                    alt={`${w.title} - ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                              {w.photos.length > 4 && (
                                <div className="aspect-square rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                                  +{w.photos.length - 3}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-xl">
                      No works available for this creator
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 border-t flex justify-center">
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium"
                >
                  Close Portfolio
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}