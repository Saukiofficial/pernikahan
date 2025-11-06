import React, { useState, useEffect } from 'react';
import { Copy, Check, Gift, Heart, MapPin, CreditCard } from 'lucide-react';

const RekeningItem = ({ bank, noRek, nama, icon: Icon, gradient }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = noRek.replace(/-/g, '');
    try {
      const input = document.createElement('textarea');
      input.value = textToCopy;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Gagal menyalin:', err);
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(err => {
         console.error('Gagal menyalin (fallback):', err);
      });
    }
  };

  return (
    <div className="group relative bg-white bg-opacity-60 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white border-opacity-50 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-slate-800">{bank}</h4>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-slate-500 uppercase tracking-wide">Atas Nama</p>
          <p className="text-slate-700 font-medium">{nama}</p>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 mb-4">
          <p className="text-sm text-slate-500 mb-1">Nomor Rekening</p>
          <p className="text-2xl font-bold text-slate-900 tracking-wider">{noRek}</p>
        </div>

        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            copied
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
              : `bg-gradient-to-r ${gradient} text-white hover:shadow-xl hover:scale-105`
          }`}
        >
          {copied ? (
            <>
              <Check size={18} />
              <span>Berhasil Disalin!</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span>Salin Nomor Rekening</span>
            </>
          )}
        </button>
      </div>

      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white to-transparent opacity-20 rounded-full blur-3xl"></div>
    </div>
  );
};

const PhysicalGiftCard = () => {
  return (
    <div className="group relative bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200 border-opacity-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-rose-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-500 shadow-lg">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-slate-800">Kirim Hadiah Fisik</h4>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          Bagi yang ingin mengirimkan hadiah, silakan kirim ke alamat berikut:
        </p>

        <div className="bg-white bg-opacity-70 rounded-2xl p-4 space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-slate-800">Abbas & Nabila</p>
              <p className="text-slate-700 leading-relaxed">
                Jl. Moris Rt 05 Rw 03, Kemulan Turen Malang, Jawa Timur<br />
                Malang, Jawa Timur 65175
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-200 to-transparent opacity-30 rounded-full blur-2xl"></div>
    </div>
  );
};

export default function GiftSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-purple-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="text-center mb-16">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-amber-400 to-purple-400 blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <Heart className="w-8 h-8 text-rose-500 animate-pulse" fill="currentColor" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>
            <h1 className="relative font-serif text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-700 via-amber-600 to-purple-700 bg-clip-text text-transparent mb-2">
              Wedding Gift
            </h1>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white border-opacity-50">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-800">Doa restu Anda</span> adalah hadiah terindah bagi kami.
                Namun, jika Anda berkenan memberikan tanda kasih, Anda dapat melakukannya melalui:
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <CreditCard className="w-6 h-6 text-slate-600" />
            <h3 className="text-2xl font-bold text-slate-800">Transfer Bank</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <RekeningItem
              bank="Bank Central Asia"
              noRek="6295032808"
              nama="Nabila Anggun Kinanti"
              icon={CreditCard}
              gradient="from-blue-500 to-blue-600"
            />

            <RekeningItem
              bank="SeaBank"
              noRek="901498114014"
              nama="Abd. Basith"
              icon={CreditCard}
              gradient="from-cyan-500 to-blue-500"
            />
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Gift className="w-6 h-6 text-slate-600" />
            <h3 className="text-2xl font-bold text-slate-800">Hadiah Fisik</h3>
          </div>

          <PhysicalGiftCard />
        </div>

        <div className="text-center">
          <div className="inline-block bg-white bg-opacity-60 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-lg border border-white border-opacity-50">
            <p className="text-slate-600 italic">
              "Kebahagiaan yang Anda berikan adalah hadiah terbesar kami"
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12 gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-400 via-amber-400 to-purple-400 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
