import * as Icons from 'lucide-react'

export default function Icon({name, ...props}) {
    const LucideIcon = Icons[name]
    if (!LucideIcon) return null
    const defaultProps = {
        size: 24,
        color: 'currentColor',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className: 'w-5 h-5'
    }
    return <LucideIcon {...defaultProps} {...props} />
}
