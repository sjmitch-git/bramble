import { FC } from 'react'

import ToastContextProvider from '@/providers/toast-provider'
import DrawerContextProvider from '@/providers/drawer-provider'

export type Children = {
	children?: React.ReactNode
}

const AppContextProvider: FC<Children> = ({ children }) => {
	return (
		<ToastContextProvider>
			<DrawerContextProvider>{children}</DrawerContextProvider>
		</ToastContextProvider>
	)
}

export default AppContextProvider
