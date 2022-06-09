import React from 'react';
import Layout from '../components/layouts/Layout'
import { ChevronRightIcon } from '@heroicons/react/solid'
import SimpleCard from '../components/cards/SimpleCard'
import { getInitials } from '../helpers/generals'
import { useEffect, useState } from 'react'
import { navMenu } from '../data/menus';

export default function Home() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getMenu();
  }, [menu]);

  const getMenu = () => {
    setMenu(navMenu);
  }
  return (
    <Layout>
      <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-indigo-400">My First Nextjs Apps</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Website that i used to store all my Nextjs component code. Please do not have high expectation about this website. Thanks for visits. 
                </p>
                <div className="mt-10 sm:mt-12 text-md font-medium text-white">What inside this website:</div>
                <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 lg:gap-1">
                  {menu.map((item, id) => {
                    console.log(item);
                    return (
                    <SimpleCard 
                      key={id.toString()}
                      bgColor={item.bgColor}
                      icon={item.icon ?? getInitials(item.name)} 
                      title={item.name} 
                      subtitle={''} 
                      onClick={() => window.location = item.href}
                    />
                  )})}
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
