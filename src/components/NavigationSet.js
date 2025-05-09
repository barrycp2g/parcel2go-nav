import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const LOGO = '/logo.svg'

const NAVS = {
  // … (keep your existingLoggedOut, existingLoggedIn, newLoggedOut, newLoggedIn configs from last time)
}

export default function NavigationSet({ title, variant }) {
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState(false)
  const cfg = NAVS[variant]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      {/* Toggle */}
      <button
        onClick={() => setMobile(!mobile)}
        className="px-3 py-1 border rounded text-sm"
      >
        {mobile ? 'Switch to Desktop' : 'Switch to Mobile'}
      </button>

      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={LOGO} alt="Parcel2Go" className="h-8" />
          </a>

          {/* Desktop */}
          {!mobile && (
            <ul className="flex space-x-8 font-medium text-sm">
              {cfg.items.map((item, i) => (
                <li key={i} className="relative group">
                  {/* Link or button */}
                  {item.isButton ? (
                    <a
                      href={item.href}
                      className="px-4 py-1 bg-blue-600 text-white rounded"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a href={item.href} className="hover:text-blue-600">
                      {item.icon === 'cart' ? '🛒' : item.label}
                    </a>
                  )}

                  {/* Dropdown */}
                  {item.submenuCols && (
                    <div className="absolute left-0 top-full hidden group-hover:block w-screen max-w-5xl bg-white shadow-lg border mt-2 p-6 z-10">
                      <div className="grid grid-cols-4 gap-6">
                        {item.submenuCols.map((col, xi) => (
                          <div key={xi}>
                            {col.header && (
                              <h5 className="font-semibold mb-2">{col.header}</h5>
                            )}
                            <ul className="space-y-1 text-sm">
                              {col.items.map((link, yi) => (
                                <li key={yi}>
                                  <a href="#" className="block hover:text-blue-600">
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* Mobile hamburger */}
          {mobile && (
            <button onClick={() => setOpen(!open)} className="text-2xl">
              {open ? <X /> : <Menu />}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {mobile && open && (
          <div className="px-4 pb-4 bg-white border-t">
            {cfg.items.map((item, i) => (
              <div key={i} className="mb-3">
                <a
                  href={item.href}
                  className="block font-medium py-2 text-base hover:text-blue-600"
                >
                  {item.icon === 'cart' ? '🛒' : item.label}
                </a>
                {item.submenuCols && (
                  <div className="pl-4">
                    {item.submenuCols.map((col, xi) => (
                      <div key={xi} className="mb-4">
                        {col.header && (
                          <div className="font-semibold mb-1">{col.header}</div>
                        )}
                        {col.items.map((link, yi) => (
                          <a
                            key={yi}
                            href="#"
                            className="block text-sm py-1 hover:text-blue-600"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  )
}
