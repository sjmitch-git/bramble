import { FC } from 'react'

import ToastContextProvider from '@/providers/toast-provider'
import DrawerContextProvider from '@/providers/drawer-provider'
import SidebarContextProvider from '@/providers/sidebar-provider'

export type Children = {
	children?: React.ReactNode
}

const AppContextProvider: FC<Children> = ({ children }) => {
	return (
		<SidebarContextProvider>
			<ToastContextProvider>
				<DrawerContextProvider>{children}</DrawerContextProvider>
			</ToastContextProvider>
		</SidebarContextProvider>
	)
}

export default AppContextProvider
