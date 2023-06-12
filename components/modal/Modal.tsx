import Figure from '@/components/figure'
import Button from '@/components/button'

import { XCircleIcon } from '@heroicons/react/24/solid'

interface ModalProps {
	data: {
		src: string
		name: string
	}
	onClick?: () => void | undefined
}

const Modal = ({ data: { src, name }, onClick }: ModalProps) => {
	return (
		<div className='modal'>
			<Button
				styles='dark icon circle'
				onClick={onClick}
			>
				<XCircleIcon />
				<span className='sr-only'>Close</span>
			</Button>
			<Figure caption={name}>
				<img
					className='img'
					src={src}
					alt={name}
					title={name}
					onClick={onClick}
				/>
			</Figure>
		</div>
	)
}

export default Modal
