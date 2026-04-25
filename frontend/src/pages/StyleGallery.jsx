import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import modern from '../assets/modern.jpeg'
import traditional from '../assets/traditional.jpeg'
import minimal from '../assets/minimal.jpeg'
import luxury from '../assets/luxury.jpeg'

const modernImages = Object.values(
  import.meta.glob('../assets/Modern/*.{jpg,jpeg,png}', { eager: true, import: 'default' })
)

const minimalImages = Object.values(
  import.meta.glob('../assets/Minimal/*.{jpg,jpeg,png}', { eager: true, import: 'default' })
)

const traditionalImages = Object.values(
  import.meta.glob('../assets/Traditional/*.{jpg,jpeg,png}', { eager: true, import: 'default' })
)

const luxuryImages = Object.values(
  import.meta.glob('../assets/Luxury/*.{jpg,jpeg,png}', { eager: true, import: 'default' })
)

const STYLE_DATA = {
  modern: {
    title: 'Modern Interiors',
    description:
      'Contemporary, minimal spaces with sculptural furniture, refined textures, and bold design details.',
    hero: modern,
    photos: modernImages,
  },
  minimal: {
    title: 'Minimal Interiors',
    description:
      'Quiet, clutter-free rooms with clean lines, muted tones, and intentional styling.',
    hero: minimal,
    photos: minimalImages,
  },
  traditional: {
    title: 'Traditional Interiors',
    description:
      'Timeless character, warm finishes, and beautifully layered spaces for lasting comfort.',
    hero: traditional,
    photos: traditionalImages,
  },
  luxury: {
    title: 'Luxury Interiors',
    description:
      'Opulent, statement-driven interiors with rich materials, polished details, and elevated lighting.',
    hero: luxury,
    photos: luxuryImages,
  },
}

const StyleGallery = () => {
  const { style } = useParams()
  const navigate = useNavigate()
  const styleKey = style?.toLowerCase()
  const currentStyle = STYLE_DATA[styleKey]

  if (!currentStyle) {
    return (
      <section className='min-h-screen bg-slate-50 px-4 py-16'>
        <div className='mx-auto max-w-3xl rounded-4xl border border-slate-200 bg-white p-10 text-center shadow-sm'>
          <p className='text-sm uppercase tracking-[0.2em] text-blue-600'>Style not found</p>
          <h1 className='mt-4 text-3xl font-semibold text-slate-900'>Unable to find that interior style</h1>
          <p className='mt-3 text-slate-600'>Choose one of the featured style collections from the homepage.</p>
          <div className='mt-8 flex justify-center gap-3'>
            <button
              onClick={() => navigate(-1)}
              className='rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50'>
              Go back
            </button>
            <Link
              to='/'
              className='rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700'>
              View styles
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='min-h-screen bg-slate-50 px-4 py-16'>
      <div className='mx-auto max-w-7xl space-y-10'>
        <div className='rounded-4xl border border-slate-200 bg-white p-8 shadow-sm'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
            <div className='space-y-4'>
              <p className='text-sm uppercase tracking-[0.22em] text-blue-600'>Interior style</p>
              <h1 className='text-4xl font-semibold text-slate-900'>{currentStyle.title}</h1>
              <p className='max-w-2xl text-slate-600'>{currentStyle.description}</p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <button
                onClick={() => navigate(-1)}
                className='rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50'>
                Back to styles
              </button>
              <Link
                to='/product'
                className='rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700'>
                Shop furniture
              </Link>
            </div>
          </div>
        </div>

        <div className='grid gap-6 lg:grid-cols-[1.5fr_1fr]'>
          <div className='rounded-4xl overflow-hidden shadow-xl'>
            <img
              src={currentStyle.hero}
              alt={currentStyle.title}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='grid gap-6'>
            {currentStyle.photos.slice(0, 4).map((photo, index) => (
              <div key={index} className='overflow-hidden rounded-[28px] shadow-sm'>
                <img src={photo} alt={`${currentStyle.title} ${index + 1}`} className='h-44 w-full object-cover transition duration-500 hover:scale-105' />
              </div>
            ))}
          </div>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {currentStyle.photos.map((photo, index) => (
            <div key={index} className='overflow-hidden rounded-4xl bg-white shadow-sm transition hover:shadow-xl'>
              <img
                src={photo}
                alt={`${currentStyle.title} ${index + 1}`}
                className='h-72 w-full object-cover transition duration-500 hover:scale-105'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StyleGallery
