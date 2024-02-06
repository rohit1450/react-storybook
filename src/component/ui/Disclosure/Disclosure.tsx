import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Disclose() {
    return (
        <div className="py-16 sm:w-96 w-11/12">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-gray/[0.50] shadow-2xl p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-dark/[0.40] px-4 py-2 text-left text-sm font-medium text-white/[0.80] hover:bg-blue-dark/[0.20]">
                                <span>What is your refund policy?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black/[0.85]">
                                If you're unhappy with your purchase for any reason, email us
                                within 90 days and we'll refund you in full, no questions asked.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-dark/[0.40] px-4 py-2 text-left text-sm font-medium text-white/[0.80] hover:bg-blue-dark/[0.20] focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                <span>Do you offer technical support?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black/[0.85] ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit lectus nec orci luctus, ac varius massa efficitur.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
