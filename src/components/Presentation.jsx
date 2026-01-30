import React, { useEffect, useState, useRef } from 'react';

// Trois colonnes de médias, chacune défile indépendamment
const columns = [
  [
    { type: 'image', src: '/images/8W7A5104.jpg', alt: 'Dahira image 1' },
    { type: 'image', src: '/images/8W7A5110.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5304.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5305.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5310.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5329.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5400.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5406.jpg', alt: 'Dahira image 2' }
  ],
  [
    { type: 'image', src: '/images/8W7A5411.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5494.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5512.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5516.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5549.jpg', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/8W7A5571.jpg', alt: 'Dahira image 2' }
  ],
  [
    { type: 'image', src: '/images/1.jpeg', alt: 'Dahira image 3' },
    { type: 'image', src: '/images/de/20200928_112838_Original.jpg', alt: 'Dahira image 3' },
    { type: 'image', src: '/images/de/IMG_0263.PNG', alt: 'Dahira image 3' },
    { type: 'image', src: '/images/de/IMG_0997.JPG', alt: 'Dahira image 3' },
    { type: 'image', src: '/images/2.JPG', alt: 'Dahira image 2' },
    { type: 'image', src: '/images/3.JPG', alt: 'Dahira image 2' }
    
    
  ]
];

const Presentation = () => {
  const intervals = [3000, 5000, 4000]; // chaque colonne a son rythme
  const [indices, setIndices] = useState(columns.map(() => 0));
  const timersRef = useRef([]);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // démarrer un timer par colonne
    columns.forEach((col, i) => {
      startTimer(i);
    });
    return () => {
      // cleanup all timers
      timersRef.current.forEach((t) => t && clearInterval(t));
      timersRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTimer = (colIdx) => {
    stopTimer(colIdx);
    timersRef.current[colIdx] = setInterval(() => {
      setIndices((prev) => {
        const next = [...prev];
        next[colIdx] = (next[colIdx] + 1) % columns[colIdx].length;
        return next;
      });
    }, intervals[colIdx] || 4000);
  };

  const stopTimer = (colIdx) => {
    if (timersRef.current[colIdx]) {
      clearInterval(timersRef.current[colIdx]);
      timersRef.current[colIdx] = null;
    }
  };

  const openModal = (src, alt) => {
    setModalImage({ src, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Présentation</h2>
        <p className="text-gray-700 mb-6">
          Le dahira a été créé suite à la vision du <strong>Diewrigne Mandiaye Diognue</strong>, qui constata que dans la ville de Grenoble, les Sénégalais, notamment les Mourides, ne se rencontraient jamais et vivaient en solitude.<br /><br />
          Il organisa alors des rencontres chez lui avec quelques frères et sœurs mourides de la ville. Cela se fit notamment avec la participation de <strong>Serigne Mor Diogne</strong> et <strong>Médoune Mbodj</strong>.<br /><br />
          Ils prirent l'initiative d'organiser le Magal chez lui en <strong>1988</strong> et y fondèrent le dahira. Ils demandèrent l'autorisation auprès de <strong>Serigne Abdou Khadr Mbacké</strong>, qui leur ordonna le nom de <strong>Dahira Moutahalikhina Bi Cheikhil Khadim</strong>.<br /><br />
          Dans cette ville étudiante où la population se renouvelle presque chaque année en raison des réorientations, ce qui compliquait les choses, le dahira évolua.<br /><br />
          Au fil du temps, le nombre de participants augmenta, et le dahira prit forme officiellement sous le nom de <strong>"Dahira Moutahlikhina Touba Grenoble"</strong>, en l'honneur de Serigne Touba.<br /><br />
          Le dahira vise à rassembler la communauté mouride locale pour des activités religieuses, éducatives et sociales, renforçant ainsi les liens fraternels et la pratique des valeurs islamiques.<br /><br />
          Étant donné que la ville est étudiante, nous avons choisi d'investir dans les nouvelles technologies pour assurer une perpétuelle continuité à chaque génération.
        </p>
        <p className="text-gray-700 mb-12">Découvrez ci-dessous quelques images illustrant les activités et moments forts de notre dahira.


        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="bg-white rounded-lg overflow-hidden shadow">
              <div className="relative w-full h-64 sm:h-72">
                {col.map((m, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ${indices[colIdx] === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    aria-hidden={indices[colIdx] !== i}
                  >
                    {m.type === 'image' ? (
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img src={m.src} alt={m.alt} className="object-contain w-full h-full cursor-pointer" onClick={() => openModal(m.src, m.alt)} />
                    ) : (
                      <video src={m.src} className="object-cover w-full h-full" muted playsInline autoPlay loop />
                    )}
                  </div>
                ))}
              </div>

              <div className="p-3 flex items-center justify-between">
                <div className="flex gap-2">
                  {col.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndices((prev) => prev.map((v, idx) => (idx === colIdx ? i : v)))}
                      aria-label={`Voir média ${i + 1} colonne ${colIdx + 1}`}
                      className={`w-3 h-3 rounded-full ${indices[colIdx] === i ? 'bg-green-600' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500"> {colIdx + 1}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow">
            <video src="/images/7015665094538395720.mp4" className="w-full h-64 object-cover" controls muted playsInline />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow">
            <img src="/images/IMG_1037.jpg" alt="Photo ndigeul" className="w-full h-64 object-cover cursor-pointer" onClick={() => openModal('/images/IMG_1037.jpg', 'Photo ndigeul')} />
          </div>
        </div>

        {/* Modal pour agrandir l'image */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full p-4">
              <img src={modalImage.src} alt={modalImage.alt} className="max-w-full max-h-full object-contain" />
              <button
                className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Presentation;
