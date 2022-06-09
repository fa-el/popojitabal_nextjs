import ReactToPrint from "react-to-print";
import { useRef } from "react/cjs/react.production.min";
import Layout from "../../../components/layouts/Layout";
import DefaultPrint from "../../../components/print/DefaultPrint";


export default function prints() {

  const printRef = useRef({});
  const dataPrint = [
    {
      title: 'Default'
    }
  ];
  return (
    <Layout>
      <div className="pt-10 bg-gray-900 min-h-full sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col">
            <div className="lg:py-24">
              <h1 className="flex flex-row mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                {/* <CollectionIcon className="items-center my-auto" height={50} width={50}/> */}
                <div className="my-auto">Prints</div>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                This is Prints example.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {dataPrint.map((i, key) => <div key={key} className="bg-gray-800 rounded-md p-6">
                <h6 className="text-white font-bold pb-6">{i.title}</h6>
                <ReactToPrint
                  trigger={() => <a href={'#'} className="flex w-full text-base font-medium text-right text-indigo-700 hover:text-indigo-600">
                    <span className="mr-auto">Print</span><span aria-hidden="true"> &rarr;</span>
                  </a>}
                  content={() => printRef}
                />
              </div>)}
            </div>
            <DefaultPrint ref={printRef}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}