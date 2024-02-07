import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from 'react'

export interface disclosureProps {
    title1: string,
    title2: string,
    content1: string,
    content2: string,
}

const Disclose: React.FC<disclosureProps> = ({ title1, title2, content1, content2 }) => {
    return (
        <div className="py-16 sm:w-96 w-11/12">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-gray/[0.50] shadow-2xl p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-dark/[0.40] px-4 py-2 text-left text-sm font-medium text-white/[0.80] hover:bg-blue-dark/[0.20]">
                                <span>{title1}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black/[0.85]">
                                {content1}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-dark/[0.40] px-4 py-2 text-left text-sm font-medium text-white/[0.80] hover:bg-blue-dark/[0.20] focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                <span>{title2}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black/[0.85] ">
                                {content2}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}


export default Disclose