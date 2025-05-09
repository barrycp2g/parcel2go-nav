// src/components/NavigationSet.js
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

// If you prefer to host the logo locally, download it and import instead.
const LOGO_URL = 'https://www.parcel2go.com/Content/Images/logo.svg'

const navConfigs = {
  existingLoggedOut: {
    items: [
      { label: 'Business', href: '/business' },
      { label: 'Get a Quote', href: '/quick-quote' },
      {
        label: 'Services',
        href: '/services',
        submenuCols: [
          {
            header: 'Range of Couriers',
            items: [
              'All Couriers','Royal Mail','FedEx Express','Parcelforce','UPS','UPS Access Point',
              'TNT','Evri Drop-off','DPD','Yodel Direct','Evri Collection','CitySprint','InPost',
              'DHL','DHL Parcel','DX','Whistl','Relay (NEW)','Business Account'
            ]
          },
          {
            header: 'UK Parcel Delivery',
            items: [
              'All UK Delivery Services','Postage Costs','Large Parcels','Drop-Off Services',
              'Collection Services','eBay Quicksend','Pallet Delivery','Same-Day Delivery',
              'Letters & Small Parcels','Next-Day Delivery','Weekend Delivery','Small Parcels',
              'No Printer Couriers','3 Day Delivery','Heavy Parcels','2 to 3 Day',
              'Express Delivery','Recorded Delivery','Evri Postable'
            ]
          },
          {
            header: 'International Parcel Delivery',
            items: [
              'EU Shipping Info (NEW)','All International Delivery','Economy Delivery',
              'Express Delivery','Germany Delivery','Australia Delivery','Spain Delivery',
              'USA Delivery','Asia Delivery','Worldwide Delivery','Delivery Services'
            ]
          },
          {
            header: 'Delivery Tools',
            items: [
              'Parcel2Go Prepay','Postcode Finder','Parcel Volume Calculator',
              'Print Your Labels','Print a Commercial Invoice','Rearrange Your Collection',
              'Prohibited Items','Track a Parcel','Content Hub','Parcel Delivery Advice',
              'Mobile App','Ecommerce Shipping','Despatch Bay Alternative'
            ]
          }
        ]
      },
      { label: 'Track a Parcel', href: '/tracking' },
      {
        label: 'Smart Send',
        href: '/smartsend',
        submenuCols: [
          {
            items: [
              'What is SmartSend?','Go To SmartSend','Royal Mail OBA',
              'Bulk Send With Whistl','NOTHS Delivery'
            ]
          },
          {
            items: [
              'Shopify Delivery','EKM Delivery','eBay Delivery','Amazon Delivery',
              'TikTok Delivery','PrestaShop Delivery','Etsy Delivery','Wix Delivery',
              'Magento Delivery','ShopWired Delivery','SquareSpace Delivery',
              'OnBuy Delivery','WooCommerce Delivery','BigCommerce Delivery',
              'Bluepark Delivery'
            ]
          }
        ]
      },
      { label: 'Help', href: '/help' },
      { icon: 'cart', href: '/basket' },
      { label: 'Sign In', href: '/login', isButton: true }
    ]
  },

  existingLoggedIn: {
    items: [
      { label: 'Business', href: '/business' },
      { label: 'Get a Quote', href: '/quick-quote' },
      /* copy the same Services config from above */,
      /* copy the same 'Track a Parcel' */,
      /* copy the same Smart Send config */,
      { label: 'Help', href: '/help' },
      {
        label
