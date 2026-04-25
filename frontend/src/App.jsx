import React from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Verify from './pages/Verify'
import VerifyEmail from './pages/VerifyEmail'
import Wishlist from './pages/Wishlist'
import Footer from './components/ui/Footer'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Consultation from './pages/Consultation'
import Product from './pages/Products'
import Project from './pages/Project'
import Service from './pages/Service'
import MattressSolutions from './pages/MattressSolutions'
import CurtainDesigning from './pages/CurtainDesigning'
import BlindsSolutions from './pages/BlindsSolutions'
import SofaUpholstery from './pages/SofaUpholstery'
import WallpaperServices from './pages/WallpaperServices'
import FlooringServices from './pages/FlooringServices'
import ProfileShutters from './pages/ProfileShutters'
import BedLinenCollection from './pages/BedLinenCollection'
import StretchCeiling from './pages/StretchCeiling'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import AdminSales from './pages/admin/AdminSales'
import AddProduct from './pages/admin/AddProduct'
import AdminProduct from './pages/admin/AdminProduct'
import AdminOrders from './pages/admin/AdminOrders'
import ShowUserOrders from './pages/admin/ShowUserOrders'
import AdminUsers from './pages/admin/AdminUsers'
import UserInfo from './pages/admin/UserInfo'
// import adminconsultation from './pages/admin/AdminConsultation'
import ProtectedRoute from './components/ui/ProtectedRoute'
import SingleProduct from './pages/SingleProduct'
import AddressForm from './pages/AddressForm'
import OrderSuccess from './pages/OrderSuccess'
import ChangePassword from './pages/ChangePassword'
import VerifyOtp from './pages/VerifyOtp'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import StyleGallery from './pages/StyleGallery'
import RootLayout from "./components/RootLayout";
import AdminContact from './pages/admin/AdminContact'
import { useMemo, useState } from 'react';
// import { AnimatePresence, motion } from 'motion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Bot, MessageSquare, Minimize2, X } from 'lucide-react';
import { getGeminiResponse } from './services/geminiService';
import AdminConsultation from './pages/admin/AdminConsultation'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const QUICK_ACTIONS = [
  'Suggest a living room palette',
  'Ideas for a small bedroom',
  'Modern kitchen materials',
  'Help style a cozy corner',
];

const INITIAL_MESSAGES = [
  {
    id: 'welcome',
    role: 'assistant',
    text:
      'Hi, I am Studio Assistant. I can help with color palettes, furniture styling, room layout ideas, material choices, and interior inspiration.',
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // 👈 add this
    children: [
      {
        index: true,
        element: <><Navbar/><Home/></>
      },
      {
        path:'signup',
        element:<Signup/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'forgot-password',
        element:<><Navbar/><ForgotPassword/><Footer/></>
      },
      {
        path:'verify-otp',
        element:<><Navbar/><VerifyOtp/><Footer/></>
      },
      {
        path:'change-password',
        element:<><Navbar/><ChangePassword/><Footer/></>
      },
      {
        path:'verify',
        element:<Verify/>
      },
      {
        path:'verify/:token',
        element:<VerifyEmail/>
      },
      {
        path:'profile/:userId',
        element:<ProtectedRoute><Navbar/><Profile/><Footer/></ProtectedRoute>
      },
      {
        path:'product',
        element:<><Navbar/><Product/><Footer/></>
      },
      {
        path:'product/:id',
        element:<><Navbar/><SingleProduct/></>
      },
      {
        path:'style/:style',
        element:<><Navbar/><StyleGallery/><Footer/></>
      },
      {
        path:'cart',
        element:<ProtectedRoute><Navbar/><Cart/><Footer/></ProtectedRoute>
      },
      {
        path:'wishlist',
        element:<ProtectedRoute><Navbar/><Wishlist/><Footer/></ProtectedRoute>
      },
      {
        path:'address',
        element:<ProtectedRoute><Navbar/><AddressForm/><Footer/></ProtectedRoute>
      },
      {
        path:'order-success',
        element:<ProtectedRoute><Navbar/><OrderSuccess/><Footer/></ProtectedRoute>
      },
      {
        path:'service',
        element:<><Navbar/><Service/><Footer/></>
      },
      {
        path:'service/mattress-solutions',
        element:<><Navbar/><MattressSolutions/><Footer/></>
      },
      {
        path:'service/curtain-designing',
        element:<><Navbar/><CurtainDesigning/><Footer/></>
      },
      {
        path:'service/blinds-solutions',
        element:<><Navbar/><BlindsSolutions/><Footer/></>
      },
      {
        path:'service/sofa-upholstery',
        element:<><Navbar/><SofaUpholstery/><Footer/></>
      },
      {
        path:'service/wallpaper-services',
        element:<><Navbar/><WallpaperServices/><Footer/></>
      },
      {
        path:'service/flooring-solutions',
        element:<><Navbar/><FlooringServices/><Footer/></>
      },
      {
        path:'service/profile-shutters',
        element:<><Navbar/><ProfileShutters/><Footer/></>
      },
      {
        path:'service/bed-linen-collection',
        element:<><Navbar/><BedLinenCollection/><Footer/></>
      },
      {
        path:'service/stretch-ceiling',
        element:<><Navbar/><StretchCeiling/><Footer/></>
      },
      {
        path:'project',
        element:<><Navbar/><Project/><Footer/></>
      },
      {
        path:'aboutus',
        element:<><Navbar/><Aboutus/><Footer/></>
      },
      {
        path:'contactus',
        element:<><Navbar/><Contactus/><Footer/></>
      },
      {
        path:'consultation',
        element:<><Navbar/><Consultation/><Footer/></>
      },
      {
        path:'dashboard',
        element:<ProtectedRoute adminOnly={true}><Navbar/><Dashboard/></ProtectedRoute>,
        children:[
          { path:"sales", element: <AdminSales/> },
          { path:"add-product", element: <AddProduct/> },
          { path:"products", element: <AdminProduct/> },
          { path:"orders", element: <AdminOrders/> },
          { path:"users/orders/:userId", element: <ShowUserOrders/> },
          { path:"users", element: <AdminUsers/> },
          { path:"users/:id", element: <UserInfo/> },
          { path:"contact", element: <AdminContact/> },
          { path:"adminconsultation", element: <AdminConsultation/> },
          // { path:"inventory", element: <Inventory/> },
        ]
      }
    ]
  }
]);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  const unreadCount = useMemo(() => (isOpen ? 0 : 1), [isOpen]);

  const sendMessage = async (rawText) => {
    const text = rawText.trim();
    if (!text || isSending) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        role: 'user',
        text,
      },
    ]);
    setInput('');
    setIsSending(true);

    const responseText = await getGeminiResponse(text);

    setMessages((prev) => [
      ...prev,
      {
        id: `assistant-${Date.now() + 1}`,
        role: 'assistant',
        text: responseText,
      },
    ]);
    setIsSending(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendMessage(input);
  };

  const handleComposerKeyDown = async (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      await sendMessage(input);
    }
  };
  return (
    <>
     {/* <ToastContainer /> */}
    <RouterProvider router={router}/>
    <main className="min-h-screen">

      <div className="chat-widget">
        <AnimatePresence>
          {isOpen && (
            <motion.section
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="chat-window"
            >
              <div className="chat-window__header">
                <div className="flex items-center gap-3">
                  <div className="chat-window__avatar">
                    <Bot className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-stone-900">Studio Assistant</p>
                    <p className="text-xs text-stone-500">Interior styling guide</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Minimize chat"
                    className="icon-button"
                    onClick={() => setIsOpen(false)}
                  >
                    <Minimize2 className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    aria-label="Close chat"
                    className="icon-button"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="chat-window__intro">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-700">Design prompts</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action}
                      type="button"
                      className="quick-action"
                      onClick={() => void sendMessage(action)}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>

              <div className="chat-window__messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={message.role === 'user' ? 'message-row user' : 'message-row assistant'}
                  >
                    <div className={message.role === 'user' ? 'message-bubble user' : 'message-bubble assistant'}>
                      {message.text}
                    </div>
                  </div>
                ))}

                {isSending && (
                  <div className="message-row assistant">
                    <div className="message-bubble assistant">
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                    </div>
                  </div>
                )}
              </div>

              <form className="chat-window__composer" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="chat-input">
                  Type your message
                </label>

                <textarea
                  id="chat-input"
                  rows={1}
                  value={input}
                  placeholder="Ask anything"
                  className="chat-input"
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => void handleComposerKeyDown(event)}
                />

                <button type="submit" className="send-button" disabled={!input.trim() || isSending}>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.section>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          className="launcher-button"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="launcher-button__pulse" />
          <span className="launcher-button__icon">
            <MessageSquare className="h-5 w-5" />
          </span>
          <span className="launcher-button__text">
            {/* Ask our design assistant */}
            {/* <small>Ideas for every room</small> */}
          </span>
          {/* {unreadCount > 0 && <span className="launcher-button__badge">{unreadCount}</span>} */}
        </motion.button>
      </div>
    </main>
    </>
  )
}

export default App