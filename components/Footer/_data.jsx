import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export const links = [
  {
    title: 'About Us',
    links: [
      {
        label: 'Company Profile',
        href: '/about',
      },
      {
        label: 'History',
        href: '/about',
      },
      {
        label: 'Vision and Mission',
        href: '/about',
      },
      {
        label: 'Our Team',
        href: '/about',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        label: 'Creative Service',
        href: '/services/creative',
      },
      {
        label: 'Studio Service',
        href: '/services/studio',
      },
      {
        label: 'Zoom Service',
        href: '/services/zoom',
      },
    ],
  },
  {
    title: 'Projects',
    links: [
      {
        label: 'Our Recent Projects',
        href: '/portfolio',
      },
      {
        label: 'Creative Projects',
        href: '/projects/live',
      },
      {
        label: 'Studio Projects',
        href: '/projects/studio',
      },
      {
        label: 'Zoom Projects',
        href: '/projects/zoom',
      },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      {
        label: 'Email Us',
        href: '#',
      },
    ],
  },
]
export const socialLinks = [
  {
    label: 'Whatsapp',
    icon: <FaWhatsapp />,
    href: 'https://wa.me/message/U7HG5VRQIVVDJ1',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/easeyourneeds.creative/',
  },
  {
    label: 'Instagram',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/company/easeyourneeds/mycompany/?viewAsMember=true',
  },
]