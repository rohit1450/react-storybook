import { Tab } from '@headlessui/react';

interface Post {
    id: number;
    title: string;
    date: string;
    commentCount: number;
    shareCount: number;
}

export interface Categories {
    Recent: Post[];
    Popular: Post[];
    Trending: Post[];
}

export interface TabsProps {
    categories: Categories;
}

function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

const Tabs: React.FC<TabsProps> = ({ categories }) => {
    return (
        <div className="sm:w-96 w-11/12 px-4  ">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl p-1 gap-2">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium border border-blue-light text-blue-light leading-5',
                                    'ring-white/60',
                                    selected
                                        ? 'bg-blue-dark text-white shadow border border-black focus:ring-2'
                                        : 'text-gray-500  hover:text-blue'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white/60 ring-offset-2 ring-offset-blue-light focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {posts.map((post: Post) => (
                                    <li
                                        key={post.id}
                                        className="relative rounded-md p-3 hover:bg-gray-100"
                                    >
                                        <h3 className="text-sm font-medium leading-5">
                                            {post.title}
                                        </h3>

                                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-dark">
                                            <li>{post.date}</li>
                                            <li>&middot;</li>
                                            <li>{post.commentCount} comments</li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} shares</li>
                                        </ul>

                                        <a
                                            href="#"
                                            className={classNames(
                                                'absolute inset-0 rounded-md',
                                                'ring-blue focus:z-10 focus:outline-none'
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Tabs;
