//////////////////////////////////////////////////////////////////////////////////
// Wedding configuration - customize these values in one place only
//////////////////////////////////////////////////////////////////////////////////

const weddingData = {
  groomName: 'Sumit',
  brideName: 'Nisha',
  weddingDate: '02 December 2026',

  scratchCard: {
  enabled: true,
  title: "Scratch to Reveal",
  subtitle: "Gently scratch the golden card to uncover our special day.",
  message: "We Can't Wait To Celebrate With You ❤️"
},
  venue: 'Indu Niwas, Dehri on sone, Bihar',
  address: 'Dehri on sone, Bihar',
  venueDescription: 'Where love begins, memories are made, and families come together.',
  whatsapp: '91 9708256946',
  googleMap: 'https://maps.google.com/?q=Royal+Palace+Patna',
  heroImage: 'images/madhuri.jpg.png',
  backgroundMusic: 'music/AUD-20260703-WA0000.mp3',
  video: '',
  youtubeVideo: 'https://youtu.be/sPEcx5UBh6M?si=bM3sh9oVfxUi2Mqh',
  location: {
    enabled: true,
    venue: 'Indu Niwas',
    address: 'Lala Colony, Dehri-on-Sone, Rohtas, Bihar',
    latitude: 24.9058364,
    longitude: 84.1714436,
  },
  rsvp: {
    enabled: true,
    title: 'RSVP',
    subtitle: 'We would be delighted to celebrate this special occasion with you. Kindly confirm your presence.',
    deadline: '25 November 2026',
    whatsapp: '919708256946',
    defaultMessage: 'Namaste! I am pleased to confirm my presence for your wedding celebration.',
    showEmailForm: true,
    showWhatsappButton: true,
  },
  events: [
    {
      title: 'Tilak',
      enabled: true,
      date: '30 November 2026',
      time: '07:00 PM',
      venue: 'Ekta Chowk, Dalmiyanagar, Bihar',
    },
    {
      title: 'Haldi',
      enabled: true,
      date: '01 December 2026',
      time: '08:00 AM',
      venue: 'Indu Niwas, Dehri on sone, Bihar',
    },
    {
      title: 'Mehendi',
      enabled: true,
      date: '01 December 2026',
      time: '4:00 PM',
      venue: null,
    },
    {
      title: 'Wedding',
      enabled: true,
      date: '02 December 2026',
      time: '10:00 PM',
      venue: 'Indu Niwas, Dehri on sone, Bihar',
    },
    {
      title: 'Reception',
      enabled: false,
      date: '17 Feb',
      time: '7:00 PM',
      venue: 'Banquet Hall',
    },
  ],
  gallerySection: {
    enabled: true,
    title: 'Wedding Gallery',
    subtitle: 'A glimpse of our beautiful memories.',
  },
  gallery: [
    {
      image: 'images/Ankit1.jpg',
      caption: 'Cherished Moments',
    },
    {
      image: 'images/Ankit2.jpg',
      caption: 'Family Blessings',
    },
    {
      image: 'images/Ankit3.png',
      caption: 'Sacred Traditions',
    },
    {
      image: 'images/Ankit4.png',
      caption: 'A Day to Remember',
    },
    {
      image: 'images/couple.jpg.png',
      caption: 'Forever Begins Here',
    },
    {
  image: 'images/Ankit6.jpg',
  caption: 'Together Forever',
},
  ],
  story: {
    title: 'Our Journey',
    subtitle: 'Two families, one beautiful beginning.',
    timeline: [
      {
        title: 'Families Connected',
        date: 'May 2026',
        description: 'With the blessings of our elders, both families came together and began a beautiful new journey.',
      image: 'images/story1.jpg'
      },
      {
        title: 'Roka Ceremony',
        date: '21 June 2026',
        description: 'A joyful occasion where our families officially celebrated and blessed our union.',
      image: 'images/story2.jpg'
      },
      {
        title: 'Wedding Celebration',
        date: '02 December 2026',
        description: 'With love, traditions and the blessings of our families, we begin a new chapter together.',
      image: 'images/story3.jpg'
      }
    ]
  }
};

const openInviteButton = document.getElementById('openInviteButton');
const invitationContent = document.getElementById('invitationContent');
const heroSection = document.getElementById('heroSection');
const brideNameEl = document.getElementById('brideName');
const groomNameEl = document.getElementById('groomName');
const heroDateEl = document.getElementById('heroDate');
const heroVenueEl = document.getElementById('heroVenue');
const heroAddressEl = document.getElementById('heroAddress');
const heroPhotoEl = document.querySelector('.hero-photo');
const venueMapLink = document.getElementById('venueMapLink');
const venueNameEl = document.getElementById('venueName');
const venueDescriptionEl = document.getElementById('venueDescription');
const venueAddressTextValue = document.getElementById('venueAddressTextValue');
const venueSectionEl = document.querySelector('.venue-section');
const gallerySectionEl = document.querySelector('.gallery-section');
const galleryTitleEl = gallerySectionEl?.querySelector('h2');
let gallerySubtitleEl = null;
const galleryPreview = document.getElementById('galleryPreview');
const galleryGrid = document.getElementById('galleryGrid');
const eventDetailsGrid = document.getElementById('eventDetailsGrid');
const footerNamesEl = document.getElementById('footerNames');
const preVideoEl = document.getElementById('preWeddingVideo');
const videoFrame = document.querySelector('.video-frame');
const videoFallback = document.getElementById('videoFallback');
const mapEmbedContainer = document.getElementById('mapEmbedContainer');
const musicToggleButton = document.getElementById('musicToggleButton');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');
const rsvpForm = document.getElementById('rsvpForm');
const rsvpStatus = document.getElementById('rsvpStatus');
const rsvpSectionEl = document.querySelector('.rsvp-section');
const whatsappRsvpLink = document.getElementById('whatsappRsvpLink');
const rsvpTitleEl = document.getElementById('rsvpTitle');
const rsvpSubtitleEl = document.getElementById('rsvpSubtitle');
const rsvpDeadlineEl = document.getElementById('rsvpDeadline');
const weddingMusic = document.getElementById('weddingMusic');

let galleryItems = [];
let activeGalleryIndex = 0;
let lightboxPrevBtn = null;
let lightboxNextBtn = null;
let lightboxCounterEl = null;
let lightboxFallbackEl = null;

const setText = (element, text) => {
  if (element) element.textContent = text || '';
};

const setLinkHref = (element, href) => {
  if (!element) return;
  if (href) element.href = href;
  else element.removeAttribute('href');
};

const setBackgroundImage = (element, imageUrl) => {
  if (!element) return;
  if (imageUrl) {
    element.style.backgroundImage = `url('${imageUrl}')`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
  } else {
    element.style.backgroundImage = '';
  }
};

const loadImageAsset = (src, onSuccess, onError) => {
  if (!src) {
    onError?.();
    return;
  }

  const image = new Image();
  image.onload = () => onSuccess?.();
  image.onerror = () => onError?.();
  image.src = src;
};

const updateMusicButtonState = () => {
  if (!musicToggleButton || !weddingMusic) return;
  toggleMusicState(!weddingMusic.paused);
};

const getGallerySectionConfig = () => weddingData.gallerySection || { enabled: true, title: 'Gallery', subtitle: '' };
const normalizeGalleryItems = () => {
  const items = Array.isArray(weddingData.gallery) ? weddingData.gallery : [];
  return items.map((item, index) => {
    if (typeof item === 'string') {
      return {
        image: item,
        caption: `Wedding photo ${index + 1}`,
        alt: `Wedding photo ${index + 1}`,
      };
    }

    return {
      image: item?.image || '',
      caption: item?.caption || `Wedding photo ${index + 1}`,
      alt: item?.alt || item?.caption || `Wedding photo ${index + 1}`,
    };
  });
};

const ensureGallerySubtitle = () => {
  if (gallerySubtitleEl || !galleryTitleEl) return;
  gallerySubtitleEl = document.createElement('p');
  gallerySubtitleEl.className = 'gallery-subtitle';
  galleryTitleEl.insertAdjacentElement('afterend', gallerySubtitleEl);
};

const createGalleryPlaceholderCard = (caption) => {
  const card = document.createElement('article');
  card.className = 'gallery-card gallery-card--placeholder';
  card.setAttribute('aria-label', caption ? `${caption} unavailable` : 'Image unavailable');

  const fallback = document.createElement('div');
  fallback.className = 'gallery-card-fallback';

  const icon = document.createElement('div');
  icon.className = 'gallery-card-fallback-icon';
  icon.textContent = '🖼️';

  const text = document.createElement('p');
  text.className = 'gallery-card-fallback-text';
  text.textContent = caption ? `${caption} unavailable` : 'Image unavailable';

  fallback.appendChild(icon);
  fallback.appendChild(text);
  card.appendChild(fallback);

  return card;
};

const showGalleryImage = (index) => {
  if (typeof index !== 'number' || !galleryItems.length) return;
  activeGalleryIndex = Math.max(0, Math.min(index, galleryItems.length - 1));
  const item = galleryItems[activeGalleryIndex];
  if (!item) return;

  lightboxImage.src = item.image || '';
  lightboxImage.alt = item.alt || item.caption || `Gallery image ${activeGalleryIndex + 1}`;
  lightboxCaption.textContent = item.caption || '';
  if (lightboxCounterEl) lightboxCounterEl.textContent = `${activeGalleryIndex + 1} / ${galleryItems.length}`;

  lightboxFallbackEl?.classList.add('hidden');
  lightboxImage.classList.remove('hidden');
};

const openGalleryLightbox = (index) => {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  if (!galleryItems.length) return;
  if (typeof index !== 'number' || index < 0 || index >= galleryItems.length) index = 0;

  ensureLightboxControls();
  showGalleryImage(index);
  lightbox.classList.remove('hidden');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightboxClose?.focus();
};

const closeGalleryLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.add('hidden');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
};

const showNextGalleryImage = () => {
  if (galleryItems.length && activeGalleryIndex < galleryItems.length - 1) {
    showGalleryImage(activeGalleryIndex + 1);
  }
};

const showPrevGalleryImage = () => {
  if (galleryItems.length && activeGalleryIndex > 0) {
    showGalleryImage(activeGalleryIndex - 1);
  }
};

const createGalleryCard = (item, index) => {
  if (!item || !item.image) {
    return createGalleryPlaceholderCard(item?.caption);
  }

  const card = document.createElement('article');
  card.className = 'gallery-card';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'gallery-card-button';
  button.setAttribute('aria-label', `Open photo ${index + 1}: ${item.caption}`);
  button.dataset.index = String(index);

  const visual = document.createElement('div');
  visual.className = 'gallery-card-visual';

  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.alt || item.caption || `Gallery photo ${index + 1}`;
  image.loading = index === 0 ? 'eager' : 'lazy';
  image.decoding = 'async';

  image.addEventListener('error', () => {
    const placeholder = createGalleryPlaceholderCard(item.caption);
    card.replaceWith(placeholder);
  });

  const overlay = document.createElement('div');
  overlay.className = 'gallery-card-overlay';
  overlay.textContent = item.caption;

  visual.appendChild(image);
  //visual.appendChild(overlay);

  const captionBar = document.createElement('div');
  captionBar.className = 'gallery-card-copy';
  const captionText = document.createElement('p');
  captionText.className = 'gallery-card-caption';
  captionText.textContent = item.caption;
  captionBar.appendChild(captionText);

  button.appendChild(visual);
  button.appendChild(captionBar);
  button.addEventListener('click', () => openGalleryLightbox(index));

  card.appendChild(button);
  return card;
};

const getGalleryPreviewImage = () => {
  const first = galleryItems[0];
  return first && first.image ? first.image : '';
};

const initializeCarouselTouch = () => {
  if (!lightbox) return;

  let startX = null;
  let startY = null;

  lightbox.addEventListener('touchstart', (event) => {
    if (!event.touches?.length) return;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  }, { passive: true });

  lightbox.addEventListener('touchend', (event) => {
    if (startX === null || startY === null) return;
    const endX = event.changedTouches?.[0]?.clientX;
    const endY = event.changedTouches?.[0]?.clientY;
    if (typeof endX !== 'number' || typeof endY !== 'number') return;
    const diffX = endX - startX;
    const diffY = endY - startY;
    const threshold = 50;

    startX = null;
    startY = null;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
      if (diffX < 0) showNextGalleryImage();
      else showPrevGalleryImage();
    }
  });
};

const ensureLightboxControls = () => {
  if (!lightbox) return;
  if (lightbox.querySelector('.lightbox-controls')) return;

  const controls = document.createElement('div');
  controls.className = 'lightbox-controls';

  lightboxPrevBtn = document.createElement('button');
  lightboxPrevBtn.type = 'button';
  lightboxPrevBtn.className = 'lightbox-nav-button lightbox-prev';
  lightboxPrevBtn.setAttribute('aria-label', 'Previous image');
  lightboxPrevBtn.textContent = '←';
  lightboxPrevBtn.addEventListener('click', showPrevGalleryImage);

  lightboxNextBtn = document.createElement('button');
  lightboxNextBtn.type = 'button';
  lightboxNextBtn.className = 'lightbox-nav-button lightbox-next';
  lightboxNextBtn.setAttribute('aria-label', 'Next image');
  lightboxNextBtn.textContent = '→';
  lightboxNextBtn.addEventListener('click', showNextGalleryImage);

  lightboxCounterEl = document.createElement('div');
  lightboxCounterEl.className = 'lightbox-counter';
  lightboxCounterEl.setAttribute('aria-live', 'polite');

  controls.appendChild(lightboxPrevBtn);
  controls.appendChild(lightboxCounterEl);
  controls.appendChild(lightboxNextBtn);
  lightbox.appendChild(controls);

  lightboxFallbackEl = document.createElement('div');
  lightboxFallbackEl.className = 'lightbox-fallback hidden';
  lightboxFallbackEl.innerHTML = '<div class="lightbox-fallback-inner"><span>🖼️</span><p>Image unavailable.</p></div>';
  lightbox.appendChild(lightboxFallbackEl);

  lightboxImage.addEventListener('load', () => {
    lightboxFallbackEl?.classList.add('hidden');
    lightboxImage.classList.remove('hidden');
  });

  lightboxImage.addEventListener('error', () => {
    lightboxImage.classList.add('hidden');
    lightboxFallbackEl?.classList.remove('hidden');
  });

  initializeCarouselTouch();
};

const updateGallerySection = () => {
  if (!gallerySectionEl) return;

  const galleryConfig = getGallerySectionConfig();
  if (galleryConfig.enabled === false) {
    gallerySectionEl.classList.add('hidden');
    return;
  }

  gallerySectionEl.classList.remove('hidden');
  if (galleryTitleEl) galleryTitleEl.textContent = galleryConfig.title || 'Gallery';
  ensureGallerySubtitle();
  if (gallerySubtitleEl) gallerySubtitleEl.textContent = galleryConfig.subtitle || '';
};

const bindGallery = () => {
  if (!galleryGrid) return;

  updateGallerySection();
  galleryGrid.innerHTML = '';

  if (!gallerySectionEl || gallerySectionEl.classList.contains('hidden')) {
    return;
  }

  galleryItems = normalizeGalleryItems();
  if (!galleryItems.length) return;

  const fragment = document.createDocumentFragment();
  galleryItems.forEach((item, index) => fragment.appendChild(createGalleryCard(item, index)));
  galleryGrid.appendChild(fragment);

  if (galleryPreview) {
    const previewImage = getGalleryPreviewImage();
    if (previewImage) {
      loadImageAsset(previewImage, () => {
        setBackgroundImage(galleryPreview, previewImage);
        galleryPreview.classList.remove('placeholder');
        setText(galleryPreview.querySelector('span'), '');
      }, () => {
        galleryPreview.classList.add('placeholder');
        setText(galleryPreview.querySelector('span'), 'Photo preview unavailable');
      });
    } else {
      galleryPreview.classList.add('placeholder');
      setText(galleryPreview.querySelector('span'), 'Photo preview unavailable');
    }
  }
};

const toggleMusicState = (playing) => {
  if (!musicToggleButton) return;
  musicToggleButton.textContent = playing ? 'Music On' : 'Music Off';
  musicToggleButton.setAttribute('aria-pressed', String(playing));
};


const bindHeroImage = () => {
  if (!heroPhotoEl) return;

  if (!weddingData.heroImage) {
    heroPhotoEl.classList.add('empty');
    setText(heroPhotoEl.querySelector('.photo-label'), 'Photo unavailable');
    return;
  }

  loadImageAsset(
    weddingData.heroImage,
    () => {
      setBackgroundImage(heroPhotoEl, weddingData.heroImage);
      heroPhotoEl.classList.add('loaded');
      heroPhotoEl.classList.remove('empty');
    },
    () => {
      heroPhotoEl.classList.add('empty');
      heroPhotoEl.classList.remove('loaded');
      setText(heroPhotoEl.querySelector('.photo-label'), 'Photo unavailable');
    }
  );
};

const bindVideo = () => {

    const localVideo = document.getElementById('preWeddingVideo');
    const youtubeVideo = document.getElementById('preWeddingYoutube');

    if (!videoFallback) return;

    /* ==========================================
       NO VIDEO ELEMENT
    ========================================== */

    if (!localVideo && !youtubeVideo) {
        videoFallback.classList.remove('hidden');
        return;
    }


    /* ==========================================
       LOCAL VIDEO
    ========================================== */

    const localUrl = weddingData.video?.trim();

    if (localVideo && localUrl) {

        localVideo.src = localUrl;
        localVideo.load();

        localVideo.classList.remove('hidden');
        youtubeVideo?.classList.add('hidden');
        videoFallback.classList.add('hidden');

        setupLocalVideoAudioControl(localVideo);

        localVideo.addEventListener('error', () => {
            localVideo.classList.add('hidden');
            videoFallback.classList.remove('hidden');
        });

        return;
    }


    /* ==========================================
       YOUTUBE VIDEO
    ========================================== */

    const youtubeUrl = weddingData.youtubeVideo?.trim();

    if (youtubeVideo && youtubeUrl) {

        let videoId = '';

        try {

            const url = new URL(youtubeUrl);

            if (url.hostname.includes('youtu.be')) {
                videoId = url.pathname.substring(1);
            }

            else if (url.hostname.includes('youtube.com')) {

                videoId = url.searchParams.get('v') || '';

                if (!videoId && url.pathname.includes('/embed/')) {
                    videoId = url.pathname.split('/embed/')[1];
                }
            }

        } catch (error) {
            console.error('Invalid YouTube URL:', error);
        }


        if (videoId) {

            localVideo?.classList.add('hidden');

            youtubeVideo.src =
                `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0`;

            youtubeVideo.classList.remove('hidden');
            videoFallback.classList.add('hidden');

            setupYouTubeVideoAudioControl(youtubeVideo);

            return;
        }
    }


    /* ==========================================
       NOTHING → COMING SOON
    ========================================== */

    localVideo?.classList.add('hidden');

    youtubeVideo?.classList.add('hidden');

    videoFallback.classList.remove('hidden');
};

/* ==========================================
   PRE-WEDDING VIDEO ↔ OPENING MUSIC
========================================== */

let youtubePlayer = null;
let youtubeApiReady = false;


/* ==========================================
   OPENING MUSIC CONTROL
========================================== */

const pauseOpeningMusic = () => {

    if (!weddingMusic) return;

    if (!weddingMusic.paused) {
        weddingMusic.pause();
    }
};


const resumeOpeningMusic = () => {

    if (!weddingMusic) return;

    weddingMusic.play().catch(() => {
        // Browser may require user interaction
    });
};


/* ==========================================
   LOCAL VIDEO CONTROL
========================================== */

const setupLocalVideoAudioControl = (video) => {

    if (!video) return;

    video.addEventListener('play', () => {
        pauseOpeningMusic();
    });

    video.addEventListener('pause', () => {
        resumeOpeningMusic();
    });

    video.addEventListener('ended', () => {
        resumeOpeningMusic();
    });
};


/* ==========================================
   YOUTUBE API
========================================== */

const setupYouTubeVideoAudioControl = (iframe) => {

    if (!iframe) return;

    const initializePlayer = () => {

        if (!window.YT || !YT.Player) return;

        youtubePlayer = new YT.Player(iframe, {

            events: {

                onStateChange: (event) => {

                    /* PLAYING */
                    if (event.data === YT.PlayerState.PLAYING) {
                        pauseOpeningMusic();
                    }

                    /* PAUSED */
                    else if (event.data === YT.PlayerState.PAUSED) {
                        resumeOpeningMusic();
                    }

                    /* ENDED */
                    else if (event.data === YT.PlayerState.ENDED) {
                        resumeOpeningMusic();
                    }
                }
            }
        });
    };


    if (youtubeApiReady) {
        initializePlayer();
    } else {
        window.onYouTubeIframeAPIReady = () => {
            youtubeApiReady = true;
            initializePlayer();
        };
    }
};


/* ==========================================
   LOAD YOUTUBE IFRAME API
========================================== */

if (!document.querySelector(
    'script[src="https://www.youtube.com/iframe_api"]'
)) {

    const youtubeScript = document.createElement('script');

    youtubeScript.src =
        'https://www.youtube.com/iframe_api';

    document.head.appendChild(youtubeScript);
}

const bindMap = () => {
  const locationConfig = weddingData.location;
  if (!locationConfig) return;

  if (!venueSectionEl) return;

  // Toggle location section visibility
  if (locationConfig.enabled === false) {
    venueSectionEl.classList.add('hidden');
    return;
  }

  venueSectionEl.classList.remove('hidden');

  // Update venue card content
  if (venueNameEl) {
    venueNameEl.textContent = locationConfig.venue || '';
  }

  if (venueDescriptionEl) {
    venueDescriptionEl.textContent = weddingData.venueDescription || '';
  }

  if (venueAddressTextValue) {
    venueAddressTextValue.textContent = locationConfig.address || '';
  }

  // Generate Google Maps URL from coordinates
  const mapsUrl = typeof locationConfig.latitude === 'number' && typeof locationConfig.longitude === 'number'
    ? `https://www.google.com/maps?q=${locationConfig.latitude},${locationConfig.longitude}`
    : '';

  if (venueMapLink) {
    setLinkHref(venueMapLink, mapsUrl);
    venueMapLink.classList.toggle('disabled', !mapsUrl);
  }

  // Generate embedded map iframe using coordinates
  if (!mapEmbedContainer) return;

  if (mapsUrl && typeof locationConfig.latitude === 'number' && typeof locationConfig.longitude === 'number') {
    const mapEmbedUrl = `https://maps.google.com/maps?q=${locationConfig.latitude},${locationConfig.longitude}&hl=en&z=15&output=embed`;
    
    mapEmbedContainer.innerHTML = `
      <iframe
        title="Wedding Venue Location"
        src="${mapEmbedUrl}"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen=""
        style="width: 100%; height: 100%; border: 0; border-radius: 20px;"
      ></iframe>
    `;
    mapEmbedContainer.classList.remove('hidden');
  } else {
    mapEmbedContainer.classList.add('hidden');
  }
};

/* ==================================================
   Story Timeline V4
   Part 1 — Helpers
================================================== */

const getJourneyIcon = (item, index) => {

    if (item.icon) return item.icon;

    const title = (item.title || "").toLowerCase();

    if (title.includes("family")) return "🏠";

    if (title.includes("engagement")) return "💍";

    if (title.includes("ring")) return "💍";

    if (title.includes("roka")) return "💍";

    if (title.includes("wedding")) return "❤️";

    if (title.includes("marriage")) return "❤️";

    const fallback = ["🏠", "💍", "❤️"];

    return fallback[index % fallback.length];

};


const getJourneySide = (index) => {

    return index % 2 === 0 ? "left" : "right";

};

const createJourneyCard = (item, index) => {
    const side = index % 2 === 0 ? "left" : "right";
    const icon = getJourneyIcon(item, index);
    const image = item.image || "";

    if (side === "left") {

        return `

<article class="journey-item journey-left">

    <div class="journey-card">

        <div class="journey-card-text">

            <span class="journey-date">${item.date || ""}</span>

            <h3>${item.title || ""}</h3>

            <p>${item.description || ""}</p>

        </div>

        <div class="journey-card-image">

            <img
                src="${image}"
                alt="${item.title || ""}"
                loading="lazy">

        </div>

    </div>

    <div class="journey-center">

        <span class="journey-node">

            <img
                class="journey-floral"
                src="./images/story/journey-node-floral-v2.png"
                alt=""
            >

            <span class="journey-icon">${icon}</span>

        </span>

    </div>

</article>

`;

    }

    return `

<article class="journey-item journey-right">

    <div class="journey-center">

        <span class="journey-node">

            <img
                class="journey-floral"
                src="./images/story/journey-node-floral-v2.png"
                alt=""
            >

            <span class="journey-icon">${icon}</span>

        </span>

    </div>

    <div class="journey-card">

        <div class="journey-card-image">

            <img
                src="${image}"
                alt="${item.title || ""}"
                loading="lazy">

        </div>

        <div class="journey-card-text">

            <span class="journey-date">${item.date || ""}</span>

            <h3>${item.title || ""}</h3>

            <p>${item.description || ""}</p>

        </div>

    </div>

</article>

`;

};

/* ==================================================
   Story Timeline V4
   Part 3 — Timeline Renderer
================================================== */

const renderJourneyTimeline = (story) => {

    const container = document.getElementById("journeyTimeline");

    if (!container) return;

    if (!story || !Array.isArray(story.timeline)) {
        container.innerHTML = "";
        return;
    }

    container.innerHTML = story.timeline
        .map((item, index) => createJourneyCard(item, index))
        .join("");

};



function applyWeddingData() {
  setText(brideNameEl, weddingData.brideName);
  setText(groomNameEl, weddingData.groomName);
  setText(heroDateEl, weddingData.weddingDate);
  setText(heroVenueEl, weddingData.venue);
  setText(heroAddressEl, weddingData.address);
  setText(venueDescriptionEl, weddingData.venueDescription);
  setText(venueAddressTextValue, weddingData.address);
  setText(footerNamesEl, `${weddingData.brideName} & ${weddingData.groomName}`);

  bindHeroImage();
  bindVideo();
  bindGallery();
  bindMap();

  //initScratchCard();

  if (weddingMusic) {
    if (weddingData.backgroundMusic) {
      weddingMusic.src = weddingData.backgroundMusic;
      weddingMusic.load();
      if (musicToggleButton) {
        musicToggleButton.disabled = false;
      }
    } else {
      weddingMusic.removeAttribute('src');
      if (musicToggleButton) {
        musicToggleButton.textContent = 'No music';
        musicToggleButton.disabled = true;
      }
    }
  }

  if (whatsappRsvpLink) {
    const cleanNumber = (weddingData.rsvp?.whatsapp || weddingData.whatsapp || '').replace(/[^\d]/g, '');
    if (cleanNumber && weddingData.rsvp?.showWhatsappButton !== false) {
      const message = `Hello ${weddingData.brideName} & ${weddingData.groomName}, I would love to RSVP for your wedding.`;
      whatsappRsvpLink.href = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
      whatsappRsvpLink.classList.remove('disabled');
    } else {
      whatsappRsvpLink.removeAttribute('href');
      whatsappRsvpLink.classList.add('disabled');
    }
  }

  // Events will be rendered dynamically by renderEvents()
  if (!Array.isArray(weddingData.events)) {
    if (eventDetailsGrid) eventDetailsGrid.innerHTML = '';
  }

  // Initialize countdown after wedding data is applied
  // render story timeline if present
  if (weddingData.story && typeof renderJourneyTimeline === 'function') renderJourneyTimeline(weddingData.story);
  if (typeof renderEvents === 'function') renderEvents(weddingData.events);
  if (typeof initCountdown === 'function') initCountdown();
}

// Helper: choose icon image by event title
const getEventIcon = (title) => {
    if (!title) return '';

    const t = title.toLowerCase();

    if (t.includes('tilak')) {
        return './images/frame/Tilak-card-icon(1).png';
    }

    if (t.includes('haldi')) {
        return './images/frame/Haldi-card-icon(1).png';
    }

    if (t.includes('mehndi') || t.includes('mehendi')) {
        return './images/frame/Mehendi-card-icon(1).png';
    }

    if (t.includes('wedding')) {
        return './images/frame/Wedding-card-icon(1).png';
    }

    return '';
};

const isEventEnabled = (event) => Boolean(event && event.enabled === true);
const getEventVenue = (event) => event?.venue || weddingData.venue;

// Render events from weddingData.events into #eventDetailsGrid
const renderEvents = (events) => {
  const container = document.getElementById('eventDetailsGrid');
  const titleEl = document.getElementById('eventsTitle');
  const subtitleEl = document.getElementById('eventsSubtitle');
  if (!container) return;

  // Title/subtitle from weddingData if provided (no schema changes required)
  if (titleEl) titleEl.textContent = weddingData.eventsTitle || 'Wedding Celebrations';
  if (subtitleEl) subtitleEl.textContent = weddingData.eventsSubtitle || 'We look forward to celebrating these joyful moments with you.';

  container.innerHTML = '';
  if (!Array.isArray(events) || !events.length) return;

  const visibleEvents = events.filter(isEventEnabled);
  if (!visibleEvents.length) return;

  const fragment = document.createDocumentFragment();
  visibleEvents.forEach((ev) => {
    const card = document.createElement('article');
    card.className = 'event-card';

 const icon = document.createElement('img');
icon.className = 'event-icon-image';
icon.src = getEventIcon(ev.title || '');
icon.alt = '';

    const storycard = document.createElement('div');
storycard.className = 'story-card';

const content = document.createElement('div');
content.className = 'event-content';

    const h3 = document.createElement('h3');
    h3.textContent = ev.title || 'Event';

  const meta = document.createElement('div');
meta.className = 'meta';

const dateText = ev.date ? `📅 ${ev.date}` : '📅 Date TBA';
const timeText = ev.time ? `⏰ ${ev.time}` : '';
const venueText = getEventVenue(ev) ? `📍 ${getEventVenue(ev)}` : '';

meta.innerHTML = `
    <div>${dateText}</div>
    ${timeText ? `<div>${timeText}</div>` : ''}
    ${venueText ? `<div>${venueText}</div>` : ''}
`;

    content.appendChild(h3);
    content.appendChild(meta);

    card.appendChild(icon);
    card.appendChild(content);

    fragment.appendChild(card);
  });

  container.appendChild(fragment);

    // Wedding Celebrations bottom footer
  const footer = document.createElement('div');
  footer.className = 'events-footer';

  footer.innerHTML = `
    <div class="events-footer-divider">
      <img
        src="./images/frame/getting-married-divider.svg"
        alt=""
        aria-hidden="true"
      >
    </div>

    <p>GOOD PEOPLE&nbsp; • &nbsp;BEAUTIFUL MOMENTS&nbsp; • &nbsp;FOREVER MEMORIES</p>
  `;

  container.closest('.events-section').appendChild(footer);
};

/* Countdown module - uses weddingData.weddingDate and updates every second */
let _countdownIntervalId = null;
const _prevCountdown = { days: null, hours: null, minutes: null, seconds: null };

const parseWeddingDate = (dateString) => {
  if (!dateString) return null;

  // Try native parser first (handles ISO and many browser-supported formats)
  let d = new Date(dateString);
  if (!isNaN(d.getTime())) return d;

  // Normalize whitespace
  const s = String(dateString).trim();

  // Try explicit 'DD Month YYYY' (e.g., '02 December 2026' or '2 Dec 2026')
  const monthMap = {
    jan: 0, january: 0,
    feb: 1, february: 1,
    mar: 2, march: 2,
    apr: 3, april: 3,
    may: 4,
    jun: 5, june: 5,
    jul: 6, july: 6,
    aug: 7, august: 7,
    sep: 8, sept: 8, september: 8,
    oct: 9, october: 9,
    nov: 10, november: 10,
    dec: 11, december: 11,
  };

  // Match '02 December 2026' or '2 Dec 2026' optionally with time
  const dm = s.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})(?:[ T]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (dm) {
    const day = parseInt(dm[1], 10);
    const mon = dm[2].toLowerCase();
    const year = parseInt(dm[3], 10);
    const hour = parseInt(dm[4] || '0', 10);
    const minute = parseInt(dm[5] || '0', 10);
    const second = parseInt(dm[6] || '0', 10);
    const m = monthMap[mon.slice(0, 3)] ?? monthMap[mon];
    if (typeof m === 'number') return new Date(year, m, day, hour, minute, second);
  }

  // Match common numeric formats: DD/MM/YYYY or MM/DD/YYYY or YYYY-MM-DD
  const nums = s.match(/^(\d{1,4})[\/\-](\d{1,2})[\/\-](\d{1,4})(?:[ T]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (nums) {
    const a = parseInt(nums[1], 10);
    const b = parseInt(nums[2], 10);
    const c = parseInt(nums[3], 10);
    const hour = parseInt(nums[4] || '0', 10);
    const minute = parseInt(nums[5] || '0', 10);
    const second = parseInt(nums[6] || '0', 10);
    // If first part is 4 digits, assume ISO YYYY-MM-DD
    if (nums[1].length === 4) {
      return new Date(a, b - 1, c, hour, minute, second);
    }
    // If last part is 4 digits, assume DD/MM/YYYY
    if (nums[3].length === 4) {
      return new Date(c, b - 1, a, hour, minute, second);
    }
  }

  // Last resort: try adding a time and parsing again
  d = new Date(`${s} 00:00:00`);
  if (!isNaN(d.getTime())) return d;

  return null;
};

const formatNumber = (n) => String(n).padStart(2, '0');

const updateCountdownDisplay = (parts) => {
  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMinutes = document.getElementById('cd-minutes');
  const elSeconds = document.getElementById('cd-seconds');

  if (!elDays || !elHours || !elMinutes || !elSeconds) return;

  if (_prevCountdown.days !== parts.days) { elDays.textContent = parts.days; _prevCountdown.days = parts.days; }
  if (_prevCountdown.hours !== parts.hours) { elHours.textContent = parts.hours; _prevCountdown.hours = parts.hours; }
  if (_prevCountdown.minutes !== parts.minutes) { elMinutes.textContent = parts.minutes; _prevCountdown.minutes = parts.minutes; }
  if (_prevCountdown.seconds !== parts.seconds) { elSeconds.textContent = parts.seconds; _prevCountdown.seconds = parts.seconds; }
};

const showWeddingDayMessage = () => {
  const grid = document.getElementById('countdownGrid');
  const msg = document.getElementById('countdownMessage');
  if (grid) grid.classList.add('hidden');
  if (msg) {
    msg.classList.remove('hidden');
    msg.textContent = '🎉 Today is Our Wedding Day! 🎉';
  }
};

const initCountdown = () => {
  const target = parseWeddingDate(weddingData.weddingDate);
  const grid = document.getElementById('countdownGrid');
  const msg = document.getElementById('countdownMessage');
  if (!target || !grid || !msg) return;

  // clear previous interval if re-initializing
  if (_countdownIntervalId) {
    clearInterval(_countdownIntervalId);
    _countdownIntervalId = null;
  }

  const tick = () => {
    const now = new Date();
    let diff = Math.floor((target.getTime() - now.getTime()) / 1000); // seconds
    if (diff <= 0) {
      // show message and stop
      showWeddingDayMessage();
      if (_countdownIntervalId) { clearInterval(_countdownIntervalId); _countdownIntervalId = null; }
      return;
    }

    const days = Math.floor(diff / 86400);
    diff -= days * 86400;
    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff - minutes * 60;

    const parts = {
      days: String(days),
      hours: formatNumber(hours),
      minutes: formatNumber(minutes),
      seconds: formatNumber(seconds),
    };

    // ensure grid visible and message hidden
    grid.classList.remove('hidden');
    msg.classList.add('hidden');

    updateCountdownDisplay(parts);
  };

  // run immediately then every second
  tick();
  _countdownIntervalId = setInterval(tick, 1000);
  return _countdownIntervalId;
};

document.addEventListener('DOMContentLoaded', () => {
  applyWeddingData();
  updateMusicButtonState();

  if (heroSection) {
    heroSection.classList.add('hero-loaded');
  }
});

if (openInviteButton) {
  openInviteButton.addEventListener('click', () => {
    if (invitationContent) invitationContent.classList.remove('hidden');
    if (heroSection) heroSection.scrollIntoView({ behavior: 'smooth' });
    openInviteButton.textContent = 'Invitation Opened';
    openInviteButton.disabled = true;

    if (weddingMusic && weddingMusic.paused) {
      weddingMusic.play().catch(() => {
        // Audio playback may be blocked until user interacts further.
      });
      updateMusicButtonState();
    }
  });
}

if (musicToggleButton && weddingMusic) {
  musicToggleButton.addEventListener('click', () => {
    if (weddingMusic.paused) {
      weddingMusic.play().catch(() => {
        // Playback may require additional interaction.
      });
    } else {
      weddingMusic.pause();
    }
    updateMusicButtonState();
  });
}

if (lightboxClose && lightbox) {
  lightboxClose.addEventListener('click', closeGalleryLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeGalleryLightbox();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (!lightbox || lightbox.classList.contains('hidden')) return;
    if (event.key === 'Escape') {
      closeGalleryLightbox();
      return;
    }
    if (event.key === 'ArrowRight') {
      showNextGalleryImage();
      return;
    }
    if (event.key === 'ArrowLeft') {
      showPrevGalleryImage();
      return;
    }
  });
}

if (rsvpForm) {
  rsvpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.guestName?.value || '').trim();
    const mobile = (form.guestMobile?.value || '').trim();
    const guests = parseInt(form.guestCount?.value || '1', 10);
    const attendance = form.guestAttendance?.value || '';
    const message = (form.guestMessage?.value || '').trim();

    if (rsvpStatus) {
      rsvpStatus.textContent = '';
      rsvpStatus.className = 'status';
    }

    // Validation
    if (!name) {
      if (rsvpStatus) {
        rsvpStatus.textContent = '❌ Please enter your full name.';
        rsvpStatus.className = 'status status--error';
      }
      return;
    }

    if (!mobile) {
      if (rsvpStatus) {
        rsvpStatus.textContent = '❌ Please enter your mobile number.';
        rsvpStatus.className = 'status status--error';
      }
      return;
    }

    if (!/^\d+$/.test(mobile)) {
      if (rsvpStatus) {
        rsvpStatus.textContent = '❌ Mobile number must contain only digits.';
        rsvpStatus.className = 'status status--error';
      }
      return;
    }

    if (guests < 1) {
      if (rsvpStatus) {
        rsvpStatus.textContent = '❌ Number of guests must be at least 1.';
        rsvpStatus.className = 'status status--error';
      }
      return;
    }

    if (!attendance) {
      if (rsvpStatus) {
        rsvpStatus.textContent = '❌ Please select your attendance status.';
        rsvpStatus.className = 'status status--error';
      }
      return;
    }

    // Success
    if (rsvpStatus) {
      rsvpStatus.textContent = `✓ Thank you, ${name}! Your RSVP has been received.`;
      rsvpStatus.className = 'status status--success';
    }
    form.reset();
  });
}
function initScratchCard() {
  const canvas = document.getElementById("scratchCanvas");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const card = canvas.parentElement;

const width = canvas.offsetWidth;
const height = canvas.offsetHeight;

  canvas.width = width;
  canvas.height = height;

  // Golden scratch layer
  ctx.fillStyle = "#d4af37";
  ctx.fillRect(0, 0, width, height);

  // Text on top
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 30px Cinzel";
  ctx.textAlign = "center";
  ctx.fillText("Scratch Here", width / 2, height / 2);
}
