import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from 'react'

export interface disclosureProps {
    title1: string,
    title2: string,
    content1: string,
    content2: string,
    bgColor: string,
    btnTextColor: string,
    panelTextColor: string,
}

const Disclose: React.FC<disclosureProps> = ({ title1, title2, content1, content2, bgColor, btnTextColor, panelTextColor }) => {
    return (
        <div className="py-16 sm:w-96 w-11/12">
            <div className="mx-auto w-full max-w-md rounded-2xl shadow-2xl p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex w-full justify-between rounded-lg bg-${bgColor} px-4 py-2 text-left text-sm font-medium`} style={{ backgroundColor: `${bgColor}`, color: `${btnTextColor}` }}>
                                <span>{title1}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className={`px-4 pb-2 pt-4 text-sm text-${panelTextColor}`}>
                                {content1}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex w-full justify-between rounded-lg bg-${bgColor} px-4 py-2 text-left text-sm font-medium`} style={{ backgroundColor: `${bgColor}`, color: `${btnTextColor}` }}>
                                <span>{title2}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className={`px-4 pb-2 pt-4 text-sm text-${panelTextColor}`}>
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