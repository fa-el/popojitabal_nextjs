import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useState } from "react";
import ActionAlert from "../../../components/alerts/ActionAlert";
import DefaultAlert from "../../../components/alerts/DefaultAlert";
import DescriptionAlert from "../../../components/alerts/DescriptionAlert";
import EmptyAlert from "../../../components/alerts/EmptyAlert";
import WithListAlert from "../../../components/alerts/WithListAlert";
import Layout from "../../../components/layouts/Layout";

export default function Alerts({}) {

  const [darkMode, setDarkMode] = useState(false);

  const alerts = [
    {
      title: 'Default Alert',
      alert: <DefaultAlert dark={darkMode}/>
    },
    {
      title: 'Empty Alert',
      alert: <EmptyAlert dark={darkMode}/>
    },
    {
      title: 'Alert with Description',
      alert: <DescriptionAlert dark={darkMode}/>
    },
    {
      title: 'Alert with list',
      alert: <WithListAlert dark={darkMode}/>
    },
    {
      title: 'Alert With Action',
      alert: <ActionAlert dark={darkMode}/>
    },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <Layout>
      
      <div className="pt-10 bg-gray-900 min-h-full sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col">
            <div className="lg:py-24">
              <h1 className="flex flex-row mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                {/* <CollectionIcon className="items-center my-auto" height={50} width={50}/> */}
                <div className="my-auto">Alerts</div>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                This is Alerts example.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex flex-row">
                <button className={`p-3 flex flex-row ${darkMode ? 'bg-indigo-700 text-white' : 'bg-indigo-300'} rounded-md`} onClick={toggleDarkMode}>
                  <span className="pr-3">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>{darkMode ? <MoonIcon className="h-6 w-6"/> : <SunIcon className="h-6 w-6"/>}
                </button>
              </div>
              {alerts.map((i, key) => <div key={key} className="bg-gray-800 rounded-md p-6">
                <h6 className="text-white font-bold pb-6">{i.title}</h6>
                {i.alert}
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}