import React from 'react'

export default function Footer() {
  return (
    <div class="bg-primary text-white py-4">
    <div class="container mx-auto flex justify-between">
      <div class="flex flex-col">
        <div class="font-bold">Company</div>
        <a href="#" class="hover:text-gray-300">About Us</a>
        <a href="#" class="hover:text-gray-300">Team</a>
        <a href="#" class="hover:text-gray-300">Contact Us</a>
      </div>
      <div class="flex flex-col">
        <div class="font-bold">Resources</div>
        <a href="#" class="hover:text-gray-300">FAQ</a>
        <a href="#" class="hover:text-gray-300">Create Event Website</a>
        <a href="#" class="hover:text-gray-300">List With Us</a>
      </div>
    </div>
  </div>
  
  )
}
