type Icons = string[]

type IconList = {
	namespace: string
	icons: Icons
}[]

const iconList: IconList = [
	{
		namespace: 'languages',
		icons: [
			'javascript',
			'typescript',
			'html',
			'css',
			'sass',
			'nodejs',
			'java',
		]
	},
	{
		namespace: 'frameworks',
		icons: [
			'react',
			'vue',
			'next',
		]
	},
	{
		namespace: 'tools',
		icons: [
			'macos',
			'visual-studio-code',
			'vim',
			'git',
			'vite',
		]
	},
	{
		namespace: 'interested',
		icons: [
			'python',
			'threejs',
		]
	}
]
