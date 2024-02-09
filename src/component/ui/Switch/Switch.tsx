import { Switch } from '@headlessui/react'
export interface ToggleProps {
    enabled: boolean;
    onToggle: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ enabled, onToggle }) => {

    return (
        <div className="py-16">
            <Switch
                checked={enabled}
                onChange={onToggle}
                className={`${enabled ? 'bg-blue-dark/[0.70]' : 'bg-gray-dark'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-white transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white`}
            >
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    )
}
export default Toggle