/**
 * Pandit Jay Mishra - Vedic Purohit & Jyotish Paramarshdata
 * Interactive Scripts: Services Filtering, Muhurat Table, Booking Form, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initServiceFiltering();
  initMuhuratSelector();
  initContactForm();
  initSmoothScrollLinks();
});

/* Mobile Menu Toggle */
function initMobileNavigation() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close mobile nav when clicking a link
    const items = navLinks.querySelectorAll('a');
    items.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* Service Category Filter Tabs */
function initServiceFiltering() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const serviceBoxes = document.querySelectorAll('.service-box');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      serviceBoxes.forEach(box => {
        const category = box.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          box.style.display = 'flex';
        } else {
          box.style.display = 'none';
        }
      });
    });
  });
}

/* Quick Select Service from Card */
window.selectServiceForBooking = function(serviceName) {
  const selectElem = document.getElementById('bookingService');
  const contactSection = document.getElementById('contact');

  if (selectElem) {
    selectElem.value = serviceName;
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

/* Auspicious Muhurat Table Data & Logic */
const muhuratData = {
  grihapravesh: {
    title: 'गृह प्रवेश हेतु शुभ तिथियां एवं नक्षत्र',
    desc: 'शुक्ल पक्ष, स्थिर लग्न एवं शुभ चौघड़िया अनुसार प्रमुख तिथियां:',
    dates: [
      { date: 'गुरुवार, 24 अक्टूबर 2026', tithi: 'शुक्ल पक्ष दशमी', nakshatra: 'रोहिणी नक्षत्र', time: 'प्रातः 06:28 से 10:45 तक' },
      { date: 'शुक्रवार, 06 नवंबर 2026', tithi: 'शुक्ल पक्ष त्रयोदशी', nakshatra: 'उत्तराफाल्गुनी', time: 'प्रातः 07:15 से 11:30 तक' },
      { date: 'सोमवार, 16 नवंबर 2026', tithi: 'शुक्ल पक्ष पंचमी', nakshatra: 'उत्तराषाढ़ा', time: 'प्रातः 06:50 से 09:40 तक' },
      { date: 'बुधवार, 02 दिसंबर 2026', tithi: 'शुक्ल पक्ष द्वादशी', nakshatra: 'रेवती नक्षत्र', time: 'प्रातः 08:10 से दोपहर 12:15 तक' }
    ]
  },
  vivah: {
    title: 'विवाह संस्कार हेतु शुभ लग्न एवं तिथियां',
    desc: 'त्रिबल शुद्धि, सूर्य-गुरु अनुकूलता एवं शुभ लग्न मुहूर्त:',
    dates: [
      { date: 'रविवार, 22 नवंबर 2026', tithi: 'शुक्ल पक्ष एकादशी', nakshatra: 'रोहिणी / मृगशिरा', time: 'शुभ लग्न: वृषभ लग्न' },
      { date: 'शुक्रवार, 27 नवंबर 2026', tithi: 'शुक्ल पक्ष पूर्णिमा', nakshatra: 'मघा नक्षत्र', time: 'गोधूलि वेला (सायं 05:35 से 07:15)' },
      { date: 'गुरुवार, 03 दिसंबर 2026', tithi: 'कृष्ण पक्ष पंचमी', nakshatra: 'उत्तराफाल्गुनी', time: 'शुभ लग्न: मिथुन लग्न' },
      { date: 'सोमवार, 14 दिसंबर 2026', tithi: 'शुक्ल पक्ष तृतीया', nakshatra: 'स्वाति नक्षत्र', time: 'शुभ लग्न: धनु लग्न' }
    ]
  },
  namkaran: {
    title: 'नामकरण संस्कार हेतु शुभ तिथियां',
    desc: 'शिशु के जन्म नक्षत्र एवं चंद्र शुद्धि अनुसार शुभ दिन:',
    dates: [
      { date: 'बुधवार, 21 अक्टूबर 2026', tithi: 'शुक्ल पक्ष सप्तमी', nakshatra: 'पुष्य नक्षत्र', time: 'प्रातः 08:30 से 11:00 तक' },
      { date: 'रविवार, 01 नवंबर 2026', tithi: 'शुक्ल पक्ष प्रतिपदा', nakshatra: 'अश्विनी नक्षत्र', time: 'प्रातः 09:15 से दोपहर 01:20 तक' },
      { date: 'गुरुवार, 12 नवंबर 2026', tithi: 'शुक्ल पक्ष एकादशी', nakshatra: 'पुनर्वसु नक्षत्र', time: 'प्रातः 07:45 से 10:30 तक' }
    ]
  },
  property: {
    title: 'भूमि, भवन एवं वाहन क्रय मुहूर्त',
    desc: 'स्थिर संज्ञक नक्षत्र एवं अमृत सिद्धि योग अनुसार शुभ समय:',
    dates: [
      { date: 'शुक्रवार, 23 अक्टूबर 2026', tithi: 'शुक्ल पक्ष नवमी', nakshatra: 'मृगशिरा नक्षत्र', time: 'प्रातः 10:00 से दोपहर 01:30 तक' },
      { date: 'सोमवार, 09 नवंबर 2026', tithi: 'शुक्ल पक्ष चतुर्दशी', nakshatra: 'हस्त नक्षत्र', time: 'प्रातः 09:00 से दोपहर 12:45 तक' },
      { date: 'गुरुवार, 19 नवंबर 2026', tithi: 'शुक्ल पक्ष षष्ठी', nakshatra: 'श्रवण नक्षत्र', time: 'पूर्वाह्न 11:15 से अपराह्न 03:00 तक' }
    ]
  },
  mundan: {
    title: 'मुंडन (चूड़ाकर्म) संस्कार मुहूर्त',
    desc: 'शुक्ल पक्ष एवं शुभ वार में बालक के मुंडन हेतु प्रमुख तिथियां:',
    dates: [
      { date: 'सोमवार, 26 अक्टूबर 2026', tithi: 'शुक्ल पक्ष द्वादशी', nakshatra: 'ज्येष्ठा नक्षत्र', time: 'प्रातः 08:00 से 11:30 तक' },
      { date: 'शुक्रवार, 13 नवंबर 2026', tithi: 'शुक्ल पक्ष त्रयोदशी', nakshatra: 'पुष्य नक्षत्र', time: 'प्रातः 07:30 से 10:45 तक' }
    ]
  },
  business: {
    title: 'नवीन व्यापार, प्रतिष्ठान एवं दुकान उद्घाटन मुहूर्त',
    desc: 'व्यापार वृद्धि एवं लक्ष्मी कृपा हेतु शुभ लग्न व चौघड़िया:',
    dates: [
      { date: 'बुधवार, 28 अक्टूबर 2026', tithi: 'शुक्ल पक्ष चतुर्दशी', nakshatra: 'अश्विनी (अमृत सिद्धि योग)', time: 'प्रातः 09:20 से दोपहर 12:15 तक' },
      { date: 'गुरुवार, 05 नवंबर 2026', tithi: 'कृष्ण पक्ष दशमी', nakshatra: 'चित्रा नक्षत्र', time: 'प्रातः 10:15 से दोपहर 01:45 तक' },
      { date: 'शुक्रवार, 20 नवंबर 2026', tithi: 'शुक्ल पक्ष सप्तमी', nakshatra: 'धनिष्ठा नक्षत्र', time: 'प्रातः 08:45 से 11:30 तक' }
    ]
  }
};

function initMuhuratSelector() {
  const selectElem = document.getElementById('muhuratTypeSelect');
  const showBtn = document.getElementById('showMuhuratBtn');
  const headingElem = document.getElementById('muhuratHeading');
  const subtextElem = document.getElementById('muhuratSubtext');
  const tableBody = document.getElementById('muhuratTableBody');

  function renderMuhurat() {
    const selectedKey = selectElem ? selectElem.value : 'grihapravesh';
    const data = muhuratData[selectedKey] || muhuratData.grihapravesh;

    if (headingElem) headingElem.textContent = data.title;
    if (subtextElem) subtextElem.textContent = data.desc;

    if (tableBody) {
      tableBody.innerHTML = '';
      data.dates.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${row.date}</strong></td>
          <td>${row.tithi}</td>
          <td>${row.nakshatra}</td>
          <td><span style="color: #b43403; font-weight: 600;">${row.time}</span></td>
        `;
        tableBody.appendChild(tr);
      });
    }
  }

  // Initial table render
  renderMuhurat();

  if (showBtn) {
    showBtn.addEventListener('click', (e) => {
      e.preventDefault();
      renderMuhurat();
    });
  }

  if (selectElem) {
    selectElem.addEventListener('change', renderMuhurat);
  }
}

/* Contact & Booking Form Handler */
function initContactForm() {
  const form = document.getElementById('contactBookingForm');
  const alertBox = document.getElementById('formSuccessAlert');
  const alertTitle = document.getElementById('successTitle');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value;
      const service = document.getElementById('bookingService').value;

      if (alertBox) {
        alertBox.style.display = 'block';
        if (alertTitle) {
          alertTitle.textContent = `धन्यवाद ${name} जी! आपका निवेदन प्राप्त हो गया है।`;
        }
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      form.reset();
    });
  }
}

/* Smooth Scrolling for in-page anchors */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
