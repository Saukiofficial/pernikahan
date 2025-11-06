import React, { useEffect, useState, useRef } from 'react';
import { useForm, Head } from '@inertiajs/react';
import { SendHorizonal, MessageCircle, Sparkles } from 'lucide-react';

// Komponen untuk satu bubble chat
function ChatBubble({ message, index }) {
    const isMine = false;

    return (
        <div
            className={`flex ${isMine ? 'justify-end' : 'justify-start'} mb-4 px-2 animate-fade-in`}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <div
                className={`relative rounded-2xl px-5 py-3 max-w-[85%] sm:max-w-md lg:max-w-lg shadow-sm transition-all duration-300 hover:shadow-md ${
                    isMine
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-100'
                }`}
            >
                {/* Decorative element */}
                <div className={`absolute -top-1 ${isMine ? 'right-4' : 'left-4'} w-2 h-2 rounded-full ${isMine ? 'bg-purple-400' : 'bg-gray-200'}`}></div>

                <div className="flex items-center gap-2 mb-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                        isMine ? 'bg-white/20' : 'bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600'
                    }`}>
                        {message.name.charAt(0).toUpperCase()}
                    </div>
                    <span className={`font-semibold text-sm ${isMine ? 'text-white' : 'text-gray-800'}`}>
                        {message.name}
                    </span>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed ${isMine ? 'text-white' : 'text-gray-700'}`}>
                    {message.message}
                </p>

                <div className={`text-xs mt-2 flex items-center gap-1 ${isMine ? 'text-white/70' : 'text-gray-400'}`}>
                    <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                    <span>
                        {new Date(message.created_at).toLocaleTimeString('id-ID', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
}

// Halaman utama RSVP (Chat)
export default function Rsvp({ initialMessages }) {
    const [messages, setMessages] = useState(initialMessages || []);
    const chatContainerRef = useRef(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        message: '',
    });

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();

        if (window.Echo) {
            console.log("Connecting to Echo channel 'chat'...");
            window.Echo.channel('chat')
                .listen('.NewMessageSent', (event) => {
                    console.log('Event received:', event);
                    setMessages(currentMessages => [...currentMessages, event.message]);
                });
        } else {
            console.error("Laravel Echo (window.Echo) not found. Pastikan bootstrap.js sudah diimpor di app.jsx.");
        }

        return () => {
            if (window.Echo) {
                console.log("Leaving Echo channel 'chat'...");
                window.Echo.leaveChannel('chat');
            }
        };
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('chat.store'), {
            onSuccess: () => {
                reset('message');
            },
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="RSVP & Wishes" />

            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.4s ease-out forwards;
                }

                /* Custom scrollbar */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
                }
            `}</style>

            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-4xl">
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">

                        {/* Header Section */}
                        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6 sm:p-8 lg:p-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 shadow-lg">
                                    <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                                </div>

                                <h2 className="font-tangerine text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                                    Buku Tamu & Ucapan
                                </h2>

                                <div className="flex items-center justify-center gap-2 text-white/90 text-sm sm:text-base">
                                    <Sparkles className="w-4 h-4" />
                                    <p>Kirimkan ucapan dan doa restu Anda</p>
                                    <Sparkles className="w-4 h-4" />
                                </div>

                                <div className="mt-4 flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span>{messages.length} pesan</span>
                                </div>
                            </div>
                        </div>

                        {/* Chat Container */}
                        <div
                            ref={chatContainerRef}
                            className="bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6 overflow-y-auto custom-scrollbar"
                            style={{ height: 'calc(100vh - 450px)', minHeight: '300px', maxHeight: '500px' }}
                        >
                            {messages.length > 0 ? (
                                <div className="space-y-1">
                                    {messages.map((msg, index) => (
                                        <ChatBubble
                                            key={msg.id}
                                            message={msg}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                    <MessageCircle className="w-16 h-16 sm:w-20 sm:h-20 mb-4 opacity-20" />
                                    <p className="text-sm sm:text-base">Belum ada pesan</p>
                                    <p className="text-xs sm:text-sm mt-1">Jadilah yang pertama mengirim ucapan!</p>
                                </div>
                            )}
                        </div>

                        {/* Form Input */}
                        <div className="bg-white border-t border-gray-100 p-4 sm:p-6">
                            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                {/* Input Nama */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Nama Anda"
                                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-400"
                                        required
                                        disabled={processing}
                                    />
                                    {errors.name && (
                                        <div className="text-red-500 text-xs sm:text-sm mt-1.5 ml-1 flex items-center gap-1">
                                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                                            {errors.name}
                                        </div>
                                    )}
                                </div>

                                {/* Input Pesan & Tombol Kirim */}
                                <div className="flex gap-2 sm:gap-3">
                                    <div className="flex-grow relative">
                                        <input
                                            type="text"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            placeholder="Tulis pesan Anda..."
                                            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-400"
                                            required
                                            disabled={processing}
                                        />
                                        {errors.message && (
                                            <div className="absolute -bottom-6 left-0 text-red-500 text-xs sm:text-sm flex items-center gap-1">
                                                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                                                {errors.message}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[60px] sm:min-w-[70px]"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <SendHorizonal className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                    {/* Footer Credit */}
                    <div className="text-center mt-6 text-xs sm:text-sm text-gray-500">
                        <p>Powered by modern KyySolutions</p>
                    </div>
                </div>
            </div>
        </>
    );
}
