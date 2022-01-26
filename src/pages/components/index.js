import { CollectionIcon } from "@heroicons/react/outline";
import FloatIconCard from "../../components/cards/FloatIconCard";
import Layout from "../../components/layouts/Layout";
import { componentMenu } from "../../data/menus";

export default function Components({}){
  return (
    <Layout>
      <div className="pt-10 bg-gray-900 min-h-full sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-row">
            <div className="lg:py-24">
              <h1 className="flex flex-row mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                {/* <CollectionIcon className="items-center my-auto" height={50} width={50}/> */}
                <div className="my-auto">Components</div>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Website that i used to store all my Nextjs component code. Please do not have high expectation about this website. Thanks for visits. 
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-3">
            {componentMenu.map((i, key) => <FloatIconCard key={key} icon={i?.icon}>
              <div className="flex-1 px-8 pb-8">
                <div className="text-xl font-bold">{i.label}</div>
              </div>
              <div className="flex p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={i.href} className="flex w-full text-base font-medium text-right text-indigo-700 hover:text-indigo-600">
                  <span className="mr-auto">See detail</span><span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </FloatIconCard>)}
          </div>
        </div>
      </div>
    </Layout>
  )
}