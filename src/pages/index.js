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

    </Layout>
  )
}
